# Profile Matrix

## Profile Architecture

### Universal Profile (`ProfileSetupUniversal.jsx`)
**Purpose**: Core identity - needed for ALL users

**Fields**:
- First Name
- Last Name
- Age
- City
- State
- Profile Photo

**Used By**: Everyone, all features

---

### Feature-Specific Profiles (Separate "Joining" Profiles)

#### 1. **Training Profile** (`ProfileTrainingSetup.jsx`)
**Purpose**: If you're joining Training module

**Additional Fields**:
- Current Pace (5K)
- Weekly Mileage
- Training Goal (event)
- Training Start Date
- Target Race

**Triggers**: When user clicks "Start Training Plan" or adds a race

---

#### 2. **Match Profile** (`MatchProfileSetup.jsx`)
**Purpose**: If you're joining Matching feature

**Additional Fields**:
- Preferred Running Distance (1-3mi, 3-5mi, 5-8mi, etc.)
- Time Preference (Morning/Afternoon/Evening)
- Pace Range
- Bio/Personal Message
- Running Goals (Stay consistent, Find crew, PR, etc.)
- Social Handle (optional)

**Triggers**: When user clicks "Find Matches" or "Connect with Runners"

---

#### 3. **Crew Profile** (`CrewProfileSetup.jsx`)
**Purpose**: If you're joining/starting a Run Crew

**Additional Fields**:
- Preferred Nickname (F3 names, etc.)
- Crew Role (want to be captain, just member?)
- Availability
- Pace Range
- Preferred Meetup Location

**Triggers**: When user clicks "Join a Crew" or "Start a Crew"

---

#### 4. **Event Profile** (`EventProfileSetup.jsx`)
**Purpose**: If you're registering for an event/race

**Additional Fields**:
- Estimated Finish Time
- Goal Time
- Race Category
- Emergency Contact
- T-Shirt Size

**Triggers**: When user clicks "Register for Race" or adds event to calendar

---

## UniversalAthlete Profile (`AthleteProfile.jsx`)

**Purpose**: The hydrated/dashboard view that aggregates ALL profile data

**Displays**:
- Universal Profile (name, age, location, photo)
- Active Training Plans (from Training Profile)
- Matches/Connections (from Match Profile)
- Crew Memberships (from Crew Profile)
- Upcoming Events (from Event Profile)
- Activity History
- Points/Badges
- Social Stats

**Access**: User dashboard, profile page, settings

---

## Flow Diagram

```
User Signs Up
    ↓
ProfileSetupUniversal (MANDATORY)
    ↓
User Picks a Feature
    ↓
┌─────────────────────┬──────────────────┬──────────────────┬──────────────────┐
│ Join Training       │ Find Matches     │ Join/Start Crew  │ Register Event   │
│     ↓               │     ↓            │     ↓            │     ↓            │
│ Training Setup      │ Match Setup      │ Crew Setup       │ Event Setup      │
│  (pace, mileage)    │ (prefs, bio)     │ (nickname, etc)  │ (goals, info)    │
└─────────────────────┴──────────────────┴──────────────────┴──────────────────┘
                            ↓
                    UniversalAthlete Profile
                    (Dashboard View)
```

---

## Implementation Notes

1. **Progressive Profile Loading**: Users only fill out what they need for features they use
2. **No Duplicate Data**: Each field only asked once
3. **Edit at Any Time**: Users can update any profile section from settings
4. **Privacy**: Users control what's visible in matching/search features

---

## File Structure

```
src/Pages/Athlete/
├── ProfileSetupUniversal.jsx    # Core identity
├── AthleteProfile.jsx            # Dashboard view
└── Setup/
    ├── ProfileTrainingSetup.jsx
    ├── ProfileCrewSetup.jsx
    ├── ProfileMatchSetup.jsx
    └── ProfileEventSetup.jsx
```
