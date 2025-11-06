# GoFast AthleteActivity Architecture

**Last Updated**: November 2025  
**Purpose**: Architecture documentation for athlete activity tracking via Garmin/Strava integrations

---

## Premise

Allow users on our platform to connect with **Garmin** and/or **Strava** (and other integrations later) to track their progress.

**Core Approach**: **Feed-based activity tracking** that can be linked to training and other features.

Activities flow from connected devices → stored in `AthleteActivity` table → displayed in various contexts (feed, training, aggregators).

---

## Use Cases

### 1. General Athlete Activity Feed
**Purpose**: Athletes want to see their activity status or have a link back after a run

**User Story**: "Hey I did a run, how many miles, cool story"

**Features**:
- Activity feed showing recent runs/workouts
- Basic metrics: distance, pace, duration, calories
- Post-run reflection/journaling
- AI analysis (via Python) - deeper insights than simple Strava
- Social sharing ("I ran 5 miles today!")

**UX Flow**:
1. User completes run with Garmin device
2. Garmin webhook syncs activity to GoFast
3. Activity appears in feed
4. User can:
   - View activity details
   - Reflect on the run (journal entry)
   - Get AI analysis (pace zones, effort level, recommendations)
   - Share to RunCrew or social

**Component**: `AthleteActivityFeed.jsx` or `SeeActivities.jsx`
- Week overview: Total miles, best mile split
- Runs scroller: Auto-hydrated from Garmin/Strava
- Auto-loading from connected devices

---

### 2. Training Integration
**Purpose**: Connect activities to structured training plans

**User Story**: "This run was part of my 16-week plan and did I meet my heart rate targets?"

**Features**:
- Match actual runs to planned training runs
- Calculate: What was supposed to happen vs. what they did
- Heart rate zone analysis
- Pace target adherence
- Training load tracking
- Plan completion percentage
- Recovery metrics

**UX Flow**:
1. User has active training plan
2. Activity syncs from Garmin
3. System matches activity to planned workout (by date/time)
4. Display comparison:
   - Planned: 5 miles @ 8:00 pace, HR Zone 2
   - Actual: 5.2 miles @ 7:55 pace, HR Zone 3
   - Analysis: "Slightly faster than planned, HR drifted into Zone 3"

**Component**: Training dashboard (existing, don't modify)
- Uses same `AthleteActivity` data
- Filters by training context
- Shows adherence metrics

---

### 3. Miles Aggregator
**Purpose**: Display total miles across multiple contexts

**User Story**: "How many miles did I run this week/month?"

**Features**:
- Total miles on Athlete Home dashboard
- Weekly/monthly totals
- RunCrew leaderboard integration
- Personal records and milestones

**UX Flow**:
1. Activities sync from Garmin/Strava
2. System aggregates miles by time period
3. Display in:
   - Athlete Home: "This week: 25.3 miles"
   - RunCrew Leaderboard: "Total miles this month: 102.5"
   - Personal Stats: "All-time: 1,234 miles"

**Components**:
- `AthleteHome.jsx`: Weekly/monthly totals card
- `RunCrewLeaderboard.jsx`: Miles aggregation for crew
- `PersonalStats.jsx`: All-time totals

---

## Garmin Integration Flow

### OAuth Connection Flow (garmin_user_id → athleteId)

**Route**: `GET /api/garmin/callback` (garminCodeCatchRoute.js)

**Flow**:
```
1. User authorizes → Garmin redirects to /api/garmin/callback?code=XXX&state=athleteId
2. Exchange code for tokens → exchangeCodeForTokens(code, codeVerifier)
3. Save tokens → saveGarminTokens(athleteId, tokens)
   ├─ Step 1: Save access_token, refresh_token, scope to athlete record
   ├─ Step 2: Fetch user info from Garmin API
   │   └─ GET https://apis.garmin.com/wellness-api/rest/user/id
   │   └─ Extract: userData.userId (Garmin's UUID)
   │   └─ Save to: athlete.garmin_user_id = userData.userId ✅
   └─ Step 3: Fallback - If no userId, fetch profile
       └─ GET https://apis.garmin.com/wellness-api/rest/user/id
       └─ Extract: profileData.userId
       └─ Save to: athlete.garmin_user_id = profileData.userId ✅
4. Result: athlete.garmin_user_id is now set (UUID format: "94d7c995-d7d1-4c2c-856f-5ef41913a6bb")
```

**Key Files**:
- `routes/Garmin/garminCodeCatchRoute.js` - OAuth callback handler
- `routes/Garmin/garminTokenSaveRoute.js` - Token and user ID saving logic
- `services/garminUtils.js` - `fetchGarminUserInfo()` and `fetchGarminProfile()`

**Database Field**: `athlete.garmin_user_id` (String, unique, indexed)

---

### Webhook Flow (Garmin → GoFast Activity Creation)

**Route**: `POST /api/garmin/activity` (garminActivityRoute.js)

**Flow**:
```
1. Garmin sends webhook → POST /api/garmin/activity
   Payload: { activities: [{ userId: "94d7c995-...", activityId: "123", ... }] }

2. Extract userId from webhook payload
   └─ Try: garminActivity.userId || garminActivity.user_id || garminActivity.userIdString || garminActivity.garminUserId

3. Lookup athlete by garmin_user_id
   └─ findAthleteByGarminUserId(userId) ✅
   └─ Service: services/garminFindAthleteService.js
   └─ Query: prisma.athlete.findFirst({ where: { garmin_user_id: userId } })

4. Map activity data
   └─ GarminFieldMapper.mapActivitySummary(garminActivity, athlete.id)

5. Upsert to athlete_activities table
   └─ prisma.athleteActivity.upsert({ where: { sourceActivityId }, create/update })
```

**Key Service**: `services/garminFindAthleteService.js`
- **Function**: `findAthleteByGarminUserId(garminUserId)`
- **Purpose**: Find athlete record by Garmin's userId (UUID)
- **Query**: `prisma.athlete.findFirst({ where: { garmin_user_id: garminUserId } })`
- **Used in**:
  - `garminActivityRoute.js` - Activity webhooks (2 places)
  - `garminPermissionsRoute.js` - Permission webhooks (4 places)
  - `garminDeregistrationRoute.js` - Deregistration webhooks (2 places)

**Critical Link**: `garmin_user_id` (from OAuth) must match `userId` (from webhook payload)

---

## What We Get From Garmin

### Summary Data (Phase 1 - Webhook: `/api/garmin/activity`)

**Core Activity Data**:
- `activityId`: Garmin's unique activity ID (join key)
- `activityType`: Type of activity (running, cycling, swimming, etc.) - **Standardized category**
- `activityName`: User-defined name ("Morning Run", "Evening Bike Ride", "3 x 2 at 5k Pace") - **User's personalized title**
- `startTimeLocal`: When activity started (ISO timestamp)

**Activity Naming (Garmin & Strava)**:
Garmin and Strava (potentially as well - we need to check docs) have a capability for users to name their activities. This is important for users on GoFast to recognize the runs they did. For example, they might be like "2 x 5 at 5k pace" (activityName) and activityType is "running".

**MVP1 Filtering & Display**:
- **Filter**: Only show activities where `activityType` is "running" (case-insensitive, normalized)
- **Display Format**: Show both `activityName` and `activityType`
  - Example: "3 x 2 at 5k Pace" (activityName) + "Run" (activityType)
  - If `activityName` is null or contains "Sample", fall back to formatted `activityType`
- **Hydration**: Both fields are hydrated, but only running activities are included in MVP1
- `durationInSeconds`: Total duration in seconds
- `distanceInMeters`: Distance in meters (convert to miles: meters / 1609.34)
- `averageSpeed`: Average speed in m/s (convert to pace: 26.8224 / averageSpeed = min/mile)
- `calories`: Calories burned

**Performance Metrics**:
- `averageHeartRate`: Average heart rate (bpm)
- `maxHeartRate`: Maximum heart rate (bpm)
- `elevationGain`: Total elevation gain in meters
- `steps`: Step count (if applicable)

**Location Data**:
- `startLatitude`: GPS start latitude
- `startLongitude`: GPS start longitude
- `endLatitude`: GPS end latitude
- `endLongitude`: GPS end longitude
- `summaryPolyline`: Encoded route polyline (for map display)

**Device Information**:
- `deviceMetaData.deviceName`: Device name ("Forerunner 255", "Edge 1040")
- `userId`: Garmin user GUID (for athlete lookup) ⚠️ **Critical for webhook matching**

**Additional Summary Data** (stored in `summaryData` JSON):
- `activityCategory`: Parent activity type
- `activityDescription`: User notes/description
- `eventType`: Type of event
- `activityLevel`: Activity intensity level
- `weather`: Weather conditions (tempAvg, tempMin, tempMax)

---

### Detail Data (Phase 2 - Webhook: `/api/garmin/activity-details`)

**Advanced Metrics** (stored in `detailData` JSON):
- `lapSummaries`: Lap-by-lap breakdown
- `splitSummaries`: Split times (mile/km splits)
- `cadence`: Average and max cadence (steps per minute)
- `power`: Average and max power (watts)
- `trainingEffect`:
  - `aerobic`: Aerobic training effect (0-5)
  - `anaerobic`: Anaerobic training effect (0-5)
  - `label`: Training effect label
- `timeInHeartRateZones`: Time spent in each HR zone
- `samples`: Raw data samples (optional streams)

---

## Data Flow

```
Garmin Device → Garmin Connect
  ↓
Garmin Webhook → POST /api/garmin/activity
  ↓
Extract userId from payload
  ↓
findAthleteByGarminUserId(userId) → Find athlete by garmin_user_id
  ↓
GarminFieldMapper.mapActivitySummary()
  ↓
AthleteActivity.upsert({ athleteId, sourceActivityId, ... })
  ↓
Stored in athlete_activities table (linked via athleteId)
  ↓
Available for:
  - Activity Feed (Use Case 1)
  - Training Integration (Use Case 2)
  - Miles Aggregator (Use Case 3)
```

**Database Table**: `athlete_activities` (Prisma model: `AthleteActivity`)

---

## API Routes Reference

### Activity Routes (Fetch Activities)

**Location**: `routes/Athlete/athleteActivitiesRoute.js`

**Endpoints**:
- `GET /api/athlete/activities` - Fetch ALL activities (all athletes)
  - Query params: `limit`, `offset`, `sortBy`, `sortOrder`
  - Returns: All activities with athlete relation
- `GET /api/athlete/:athleteId/activities` - Fetch activities by specific athleteId
  - Query params: `limit`, `offset`, `sortBy`, `sortOrder`
  - Returns: Activities for specific athlete + athlete info

**Response Format**:
```javascript
{
  success: true,
  athleteId: "athlete123", // Only for /:athleteId/activities
  athlete: { id, firstName, lastName, email }, // Only for /:athleteId/activities
  activities: [
    {
      id: "activity123",
      athleteId: "athlete123",
      sourceActivityId: "garmin_activity_456",
      source: "garmin",
      activityType: "running",
      activityName: "Morning Run",
      startTime: "2025-01-15T06:30:00Z",
      duration: 3600,
      distance: 5000,
      averageSpeed: 3.5,
      calories: 450,
      averageHeartRate: 165,
      maxHeartRate: 180,
      elevationGain: 245,
      steps: 6500,
      // ... other fields
    }
  ],
  count: 10,
  totalCount: 25,
  limit: 100,
  offset: 0
}
```

### Garmin Integration Routes

**Location**: `routes/Garmin/`

#### OAuth & Connection Routes
- `GET /api/garmin/auth-url` - Generate OAuth URL (garminUrlGenRoute.js)
- `GET /api/garmin/callback` - OAuth callback handler (garminCodeCatchRoute.js)
  - **Saves `garmin_user_id` to athlete record** ✅
- `GET /api/garmin/exchange` - Token exchange (garminCodeCatchRoute.js)
- `GET /api/garmin/user` - Get Garmin user profile (garminUserProfileRoute.js)

#### Status & Permissions Routes
- `GET /api/garmin/status?athleteId=xxx` - Get connection status and scopes (garminPermissionsRoute.js)
- `PATCH /api/garmin/scopes` - Update scopes (garminPermissionsRoute.js)
- `GET /api/garmin/permissions/check` - Check permissions (garminPermissionsRoute.js)
- `POST /api/garmin/disconnect` - Disconnect Garmin (programmatic deregistration) (garminPermissionsRoute.js)

#### Webhook Routes (Garmin → GoFast)
- `GET /api/garmin/ping` - Health check for Garmin (garminActivityRoute.js)
- `POST /api/garmin/activity` - Activity summary webhook (garminActivityRoute.js)
  - Receives: `{ activities: [...] }` array
  - **Uses `findAthleteByGarminUserId()` to lookup athlete** ✅
  - Maps and stores to `AthleteActivity` table
- `POST /api/garmin/activities` - Manually updated activities webhook (garminActivityRoute.js)
  - Same as `/activity` but for manually updated activities
- `POST /api/garmin/activity-details` - Activity details webhook (garminActivityDetailsRoute.js)
  - Receives: Detailed activity data (laps, splits, HR zones)
  - Updates existing activity's `detailData` field
- `POST /api/garmin/permissions` - Permission change webhook (garminPermissionsRoute.js)
- `PUT /api/garmin/permissions` - Permission change webhook (alternative) (garminPermissionsRoute.js)
- `POST /api/garmin/webhook` - Generic webhook handler (garminPermissionsRoute.js)
- `POST /api/garmin/deregistration` - User deregistration webhook (garminDeregistrationRoute.js)
- `PUT /api/garmin/deregistration` - User deregistration webhook (alternative) (garminDeregistrationRoute.js)

#### Manual Sync Routes (TODO - Not Implemented)
- `GET /api/garmin/activities?userId=xxx&accessToken=xxx` - Fetch activities from Garmin API (TODO)
- `POST /api/garmin/activity/sync` - Manual activity sync (TODO)

**Note**: Manual sync routes exist but are not implemented (return TODO responses).

---

## Implementation Status

### Backend ✅
- ✅ `AthleteActivity` model in schema
- ✅ Garmin OAuth flow saves `garmin_user_id` to athlete record
- ✅ `findAthleteByGarminUserId()` service for webhook lookup
- ✅ Garmin webhook handler (`/api/garmin/activity`)
- ✅ Activity fetch routes (`/api/athlete/:athleteId/activities`)
- ✅ Field mapper service (`GarminFieldMapper`)
- ✅ Activity details webhook (`/api/garmin/activity-details`)

### Frontend 🚧
- 🚧 Activity feed component (Use Case 1)
- 🚧 Training integration (Use Case 2 - existing training dashboard)
- 🚧 Miles aggregator on Athlete Home (Use Case 3)
- 🚧 RunCrew leaderboard miles integration (Use Case 3)

---

## Critical Integration Points

### 1. OAuth → Database (garmin_user_id saved)
**Route**: `GET /api/garmin/callback`
**File**: `routes/Garmin/garminCodeCatchRoute.js` → `routes/Garmin/garminTokenSaveRoute.js`
**Result**: `athlete.garmin_user_id = "94d7c995-d7d1-4c2c-856f-5ef41913a6bb"` ✅

### 2. Webhook → Athlete Lookup (garmin_user_id → athleteId)
**Route**: `POST /api/garmin/activity`
**File**: `routes/Garmin/garminActivityRoute.js`
**Service**: `services/garminFindAthleteService.js` → `findAthleteByGarminUserId(userId)`
**Query**: `prisma.athlete.findFirst({ where: { garmin_user_id: userId } })` ✅

### 3. Activity Creation
**Service**: `services/GarminFieldMapper.js` → `mapActivitySummary(garminActivity, athlete.id)`
**Database**: `prisma.athleteActivity.upsert({ where: { sourceActivityId }, ... })` ✅

---

## Troubleshooting

### "No athlete found for Garmin user ID" Error

**Symptoms**: Webhook receives activity but can't find matching athlete

**Possible Causes**:
1. `garmin_user_id` not saved during OAuth
   - Check: `SELECT id, email, garmin_user_id FROM athlete WHERE id = 'xxx'`
   - Fix: Re-run OAuth flow
2. Webhook `userId` field name mismatch
   - Check: Webhook payload structure (log `Object.keys(garminActivity)`)
   - Fix: Update field extraction in `garminActivityRoute.js`
3. UUID format mismatch
   - Check: `garmin_user_id` format vs webhook `userId` format
   - Fix: Normalize UUID format in lookup

**Debug Steps**:
1. Verify `garmin_user_id` exists: `SELECT garmin_user_id FROM athlete WHERE id = 'xxx'`
2. Check webhook payload: Log full `garminActivity` object
3. Test lookup service: `findAthleteByGarminUserId("94d7c995-...")`
4. Compare UUIDs: OAuth saved UUID vs webhook received UUID

---

## Next Steps

1. **Build Activity Feed** (`AthleteActivityFeed.jsx`)
   - Display recent activities
   - Post-run reflection/journaling
   - AI analysis integration (Python backend)

2. **Enhance Training Integration**
   - Match activities to planned workouts
   - Display planned vs. actual comparison
   - Adherence metrics

3. **Build Miles Aggregator**
   - Weekly/monthly totals on Athlete Home
   - RunCrew leaderboard integration
   - Personal records tracking

---

## Related Documentation

- **`GOFAST_ARCHITECTURE.md`**: Activity Tracking Architecture section
- **`gofastfrontend-demo/src/Pages/Training/SeeActivities.jsx`**: Demo UI pattern
- **`services/GarminFieldMapper.js`**: Field mapping implementation
- **`routes/Garmin/garminActivityRoute.js`**: Webhook handler
- **`services/garminFindAthleteService.js`**: Athlete lookup service

