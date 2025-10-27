# Activity Tracking Architecture

## Two Forks

### 1. General Activity Tracking
**Purpose**: Basic activity logging and overview
- "Hey I did a run, how many miles, cool story"
- Simple logging of runs, miles, basic metrics
- General progress tracking
- Social sharing ("I ran 5 miles today!")
- Overall activity overview

**Features**:
- Log run distance/time
- Basic pace tracking
- Weekly/monthly totals
- Simple progress visualization
- Social activity feed

### 2. Training Activity Tracking
**Purpose**: Structured training program adherence
- "This run was part of my 16-week plan and did I meet my heart rate targets?"
- Matches actual runs to planned training runs
- Tracks adherence to training plan
- Performance vs. plan analysis
- Training-specific metrics

**Features**:
- Match runs to planned workouts
- Heart rate zone analysis
- Pace target adherence
- Training load tracking
- Plan completion percentage
- Recovery metrics

## Current State Issues
- Daily Workout Recap (janked)
- Match Activity (janked) 
- Today's Workout (needs work)
- Garmin integration scattered (should be in Settings)

## Proposed Architecture
- **AthleteActivity**: General activity tracking fork
- **Training**: Training-specific activity tracking fork (has its own dashboard - don't mess with it)
- **Settings**: Device integration (Garmin, etc.)

## Implementation Plan
- **AthleteWeekStats.jsx**: Dashboard for general activity tracking
  - Week overview: Total miles, best mile split
  - Runs scroller: Auto-hydrated from Garmin/Strava
  - Auto-loading from connected devices
- **Link RunCrew**: Connect RunCrew dashboard to AthleteActivityStats.jsx
- **Training Dashboard**: Keep separate, don't modify existing training dashboard
