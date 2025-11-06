# RunCrew Architecture

## Overview

RunCrew is a group coordination system for runners. Members join with a code, coordinate runs, message each other, and compete on leaderboards.

## Core Features

### 1. **Group Wall Messaging**

- **Backend:** `Message` model (groupId, authorId, author, content)
- **API:** `GET /api/messages/:groupId`, `POST /api/messages`
- **Real-time:** Socket.io rooms (`group-{groupId}`)
- **Events:** `message:send`, `message:new`, `join:group`, `leave:group`
- **Topics:** General, Tips, Social, Training, Goals, Food, Recovery

### 2. **Run Events**
- **Model:** `RunCrewEvent` (needs to be added to schema)
- **API:** 
  - `POST /api/runcrew/:crewId/events` - Create event
  - `GET /api/runcrew/:crewId/events` - List events
  - `GET /api/runcrew/events/:eventId` - Get event details
- **Fields:** title, date, time, location, address, distance, pace, description, stravaRouteId
- **Admin:** Inline creation in RunCrewCentralAdmin

### 3. **RSVP System**
- **Model:** `RunCrewEventRSVP` (needs to be added)
- **API:** `POST /api/runcrew/events/:eventId/rsvp`
- **Statuses:** going, maybe, not-going
- **Returns:** Updated attendee counts

### 4. **Leaderboard**
- **Model:** `RunCrewLeaderboard` (already exists)
- **Metrics:** totalMiles, totalRuns, bestPace, totalCalories, totalElevation
- **Periods:** week, month, allTime
- **API:** Derived from AthleteActivity data aggregated by crew

## Strava Route Integration (Future)

### Implementation Plan
- **Event Creation:** `stravaRouteId` field links to Strava activity
- **API:** Pull route polyline from Strava API when `stravaRouteId` is set
- **Route Selection:** Modal showing user's past Strava activities with routes
- **Display:** Map preview in event details using route polyline

### Data Flow
1. User selects "Link Strava Route" in event form
2. Frontend calls `GET /api/strava/activities` (filter by location/date)
3. User selects activity → store `strava_activity_id` in event
4. On event display → fetch route polyline from Strava
5. Render map with route overlay

## Database Schema

### Existing Models
- `RunCrew` - Crew container
- `RunCrewMembership` - Junction table
- `RunCrewPost` - Forum posts (legacy, may use Message instead)
- `RunCrewLeaderboard` - Aggregated stats
- `Message` - Group wall messages

### Models to Add
```prisma
model RunCrewEvent {
  id           String   @id @default(cuid())
  runCrewId    String
  organizerId  String   // Athlete ID
  
  title        String
  date         DateTime
  time         String   // "6:00 AM"
  location     String
  address      String?
  distance     String?  // "5-8 miles"
  pace         String?  // "8:00-9:00 min/mile"
  description  String?
  stravaRouteId Int?    // Strava activity ID
  
  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt
  
  runCrew      RunCrew  @relation(...)
  organizer    Athlete  @relation(...)
  rsvps        RunCrewEventRSVP[]
  
  @@map("run_crew_events")
}

model RunCrewEventRSVP {
  id        String   @id @default(cuid())
  eventId   String
  athleteId String
  status    String   // "going", "maybe", "not-going"
  
  createdAt DateTime @default(now())
  
  event      RunCrewEvent @relation(...)
  athlete    Athlete      @relation(...)
  
  @@unique([eventId, athleteId])
  @@map("run_crew_event_rsvps")
}
```

## API Endpoints

### Messaging (Implemented)
- `GET /api/messages/:groupId` - Get messages
- `POST /api/messages` - Create message (REST fallback)
- Socket.io: `message:send`, `message:new`

### Events (To Implement)
- `POST /api/runcrew/:crewId/events` - Create event
- `GET /api/runcrew/:crewId/events` - List upcoming events
- `GET /api/runcrew/events/:eventId` - Get event details
- `POST /api/runcrew/events/:eventId/rsvp` - RSVP to event
- `GET /api/runcrew/events/:eventId/rsvps` - Get RSVP list

### Leaderboard (Exists via RunCrewLeaderboard)
- Aggregate from `AthleteActivity` by `runCrewId`
- Calculate periods: week, month, allTime

## Frontend Components

### Pages
- `RunCrewCentral.jsx` - Member view (main feed)
- `RunCrewCentralAdmin.jsx` - Admin view (with event creation)
- `RunCrewRunDetail.jsx` - Event details + RSVP
- `RunCrewSettings.jsx` - Crew settings (admin only)

### Features
- Real-time messaging via Socket.io client
- Inline event creation (admin)
- RSVP buttons (going/maybe/not-going)
- Leaderboard with tabs (miles/pace/calories)
- Topic-based message filtering

## Technical Stack

- **Backend:** Express + Prisma + Socket.io
- **Database:** PostgreSQL (existing connection)
- **Real-time:** Socket.io rooms per group
- **Frontend:** React + Socket.io-client
- **Maps:** (Future) Strava route polyline rendering

