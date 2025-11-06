# GoFast Athlete Activity UX

**Last Updated**: January 2025  
**Purpose**: UX architecture for athlete activity tracking via Garmin/Strava integrations

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

## What We Get From Garmin

### Summary Data (Phase 1 - Webhook: `/api/garmin/activity`)

**Core Activity Data**:
- `activityId`: Garmin's unique activity ID (join key)
- `activityType`: Type of activity (running, cycling, swimming, etc.)
- `activityName`: User-defined name ("Morning Run", "Evening Bike Ride")
- `startTimeLocal`: When activity started (ISO timestamp)
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
- `userId`: Garmin user GUID (for athlete lookup)

**Additional Summary Data** (stored in `summaryData` JSON):
- `activityCategory`: Parent activity type
- `activityDescription`: User notes/description
- `eventType`: Type of event
- `activityLevel`: Activity intensity level
- `weather`: Weather conditions (tempAvg, tempMin, tempMax)

---

### Detail Data (Phase 2 - Webhook: `/api/garmin/details`)

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

---

## Implementation Status

### Backend ✅
- ✅ `AthleteActivity` model in schema
- ✅ Garmin webhook handler (`/api/garmin/activity`)
- ✅ Activity fetch routes (`/api/athlete/:athleteId/activities`)
- ✅ Field mapper service (`GarminFieldMapper`)
- ✅ Athlete lookup service (`findAthleteByGarminUserId`)

### Frontend 🚧
- 🚧 Activity feed component (Use Case 1)
- 🚧 Training integration (Use Case 2 - existing training dashboard)
- 🚧 Miles aggregator on Athlete Home (Use Case 3)
- 🚧 RunCrew leaderboard miles integration (Use Case 3)

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

