# Navigation Inconsistency Audit

## Current Navigation Chaos

### Pages that navigate to `/dashboard`:
- GoFastPlatform.jsx (2 instances)
- TodaysWorkout.jsx
- MyRaces.jsx
- WeekView.jsx
- WeeklyReview.jsx
- TrainingHub.jsx
- TrainingAnalysis.jsx
- SeeActivities.jsx
- Reflection.jsx
- GarminConnected.jsx
- DailyWorkoutRecap.jsx
- Settings.jsx
- RaceStrategy.jsx
- RaceMorning.jsx
- RaceHub.jsx
- RaceFeedback.jsx

### Pages that navigate to `/athlete-home`:
- TrainingExplainer.jsx
- ProfileSetupUniversal.jsx
- GoCrushIt.jsx
- CrewDashboard.jsx
- RunCrewSuccess.jsx
- PointsExplainer.jsx
- OrderConfirmation.jsx
- LinkRunningApp.jsx

### Pages that navigate to `/matching-home`:
- ReviewProposedMeetup.jsx
- MatchPicks.jsx
- RequestSent.jsx
- FindMatches.jsx
- RequestReceived.jsx

### Pages that navigate to `/crew-dashboard`:
- RunCrewSuccess.jsx
- RunCrewJoin.jsx

## The Problem
- **Training pages** → `/dashboard` (but we're renaming this to `/training-dashboard`)
- **Social pages** → `/athlete-home` 
- **Matching pages** → `/matching-home`
- **Crew pages** → `/crew-dashboard`

## Proposed Solution
**Standardize navigation based on context:**

### Main Entry Points:
- `/athlete-home` = Social hub (crew, matches, activity)
- `/training-dashboard` = Training hub (workouts, plans, analytics)
- `/matching-home` = Matching hub (find partners)
- `/crew-dashboard` = Crew hub (crew management)

### Navigation Rules:
1. **Social features** → `/athlete-home`
2. **Training features** → `/training-dashboard` 
3. **Matching features** → `/matching-home`
4. **Crew features** → `/crew-dashboard`
5. **Success pages** → Context-appropriate hub
6. **Settings** → `/athlete-home` (since it's user profile related)

## Files That Need Updates:
- All training pages: `/dashboard` → `/training-dashboard`
- GoFastPlatform.jsx: `/dashboard` → `/athlete-home`
- Settings.jsx: `/dashboard` → `/athlete-home`
- Race pages: `/dashboard` → `/training-dashboard`

## Button Text Standardization:
- "Back to Home" → "Back to Athlete Central"
- "Back to Dashboard" → "Back to Training" (for training pages)
- "Back to Dashboard" → "Back to Athlete Central" (for social pages)
