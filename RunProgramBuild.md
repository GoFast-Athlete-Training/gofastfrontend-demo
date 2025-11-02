# Run Program Build Documentation

## Overview

This document describes the architecture and build process for the **Boys Gotta Run (BGR)** run program portal - a multi-site coaching program management system similar to Demosphere, designed for run club registration and program management.

## Premise

Create a portal that handles:
- **Registration** - Parent/athlete onboarding
- **Program Management** - Multi-site coach program with Head Coach oversight
- **Parent Experience** - "Coach's Corner" view showing what workouts their kids are doing each week
- **Coach Experience** - Workout management, roster/attendance, and tailored workout creation

**Concept**: Multi-site coach program led by a Head Coach (primary admin on coach repo). Parents see workouts their kids are doing each week. Coaches see workouts and create tailored workouts.

---

## Repository Structure

### Repo 1: `gofast-bgr-parent` (Parent/Athlete Experience)

**Purpose**: Lightweight onboarding and "Coach's Corner" view for parents (what their kids are doing each week).

**Pattern**: Pattern 2 (Demo/Scaffold) - No Firebase, no auth, React 18 + Vite 5

**Deployment**: `parent.gofast.com`

**Default Route**: `/dashboard`

### Repo 2: `gofast-bgr-coach` (Coach/Head Coach Experience)

**Purpose**: Coach & Head Coach management portal. Head Coach sees everything; normal coach sees their site only.

**Pattern**: Pattern 2 (Demo/Scaffold) - No Firebase, simple email auth (demo), React 18 + Vite 5

**Deployment**: `coach.gofast.com`

**Default Route**: `/dashboard`

---

## Architecture: Schema-First Approach

**Source of Truth**: GoFast Backend (`https://gofastbackendv2-fall2025.onrender.com` or `https://api.gofast.com/api/bgr/*`)

**Key Principle**: Schema Architecture → Prisma Schema → Backend Routes → Frontend Pages

Both repos hydrate from the GoFast Backend, which remains the single source of truth for:
- Users / Roles
- Programs / Sites
- Lessons / Workouts
- Attendance / Feedback

---

## Repo 1: gofast-bgr-parent

### Structure

```
gofast-bgr-parent/
├── src/
│   ├── pages/
│   │   ├── Home.jsx                # Landing, choose site/program
│   │   ├── Register.jsx            # Parent signup / payment
│   │   ├── Success.jsx             # Confirmation page
│   │   ├── Dashboard.jsx           # Main parent view after login
│   │   ├── Lesson.jsx              # This week's lesson/workout
│   │   └── Feedback.jsx            # View coach feedback (24h delay)
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── LessonBanner.jsx
│   │   ├── RSVPCard.jsx
│   │   ├── SurveyForm.jsx
│   │   └── FeedbackCard.jsx
│   ├── hooks/
│   │   └── useHydrateParent.js     # Pulls parent+athlete data from GoFast API
│   ├── data/                       # Placeholder JSON for demo
│   │   └── lessons.json
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
│   └── logo.jpg                    # GoFast logo
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

### Routes

| Route | Purpose |
|-------|---------|
| `/` | Welcome + choose site ("Welcome to Boys Gotta Run") |
| `/register` | Form for parent + child info + payment |
| `/success` | Thank-you + "Go to Dashboard" |
| `/dashboard` | Current week banner, RSVP, survey |
| `/lesson/:id` | Workout detail page |
| `/feedback` | Coach notes once posted |

### Key Features

1. **Home Page** (`/`)
   - Welcome message
   - Site/program selection
   - Navigation to registration

2. **Registration** (`/register`)
   - Parent information form
   - Child/athlete information
   - Payment integration (demo mode)
   - Redirects to `/success`

3. **Dashboard** (`/dashboard`)
   - Current week workout banner
   - RSVP functionality
   - Survey forms
   - Quick navigation to lessons

4. **Lesson View** (`/lesson/:id`)
   - Detailed workout information
   - Exercise breakdown
   - Duration, difficulty
   - Links back to dashboard

5. **Feedback** (`/feedback`)
   - Coach notes (24h delay)
   - Performance feedback
   - Ratings/scores

---

## Repo 2: gofast-bgr-coach

### Structure

```
gofast-bgr-coach/
├── src/
│   ├── pages/
│   │   ├── Login.jsx               # Simple email auth (demo)
│   │   ├── Dashboard.jsx           # "Coach's Corner" main view
│   │   ├── Roster.jsx              # List of athletes / attendance
│   │   ├── Workout.jsx             # This week's workout reference
│   │   ├── Report.jsx              # Submit weekly feedback
│   │   └── HeadCoach.jsx           # Head Coach HQ (overview + comms)
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Sidebar.jsx
│   │   ├── LessonCard.jsx
│   │   ├── AttendanceTable.jsx
│   │   ├── ReportForm.jsx
│   │   └── BroadcastForm.jsx
│   ├── hooks/
│   │   └── useHydrateCoach.js      # Pulls roster/lesson data from GoFast API
│   ├── data/
│   │   └── workouts.json
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
│   └── logo.jpg                    # GoFast logo
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

### Routes

| Route | Purpose |
|-------|---------|
| `/` | Login screen ("Welcome Coach") |
| `/dashboard` | Weekly banner + quick stats |
| `/roster` | Athlete list + attendance |
| `/workout` | Lesson plan of the week |
| `/report` | Feedback form (1-10 rating + notes) |
| `/headcoach` | HQ view: all sites, broadcast, overall stats |

### Key Features

1. **Login** (`/`)
   - Simple email authentication (demo mode)
   - Role detection (Coach vs Head Coach)
   - Redirects to dashboard

2. **Dashboard** (`/dashboard`)
   - Weekly workout banner
   - Quick stats (attendance, athletes, feedback)
   - Navigation to all features

3. **Roster** (`/roster`)
   - Athlete list by site
   - Attendance marking
   - Filter/search capabilities
   - Export functionality

4. **Workout** (`/workout`)
   - Current week's lesson plan
   - Workout details and structure
   - Customization options (for coaches)

5. **Report** (`/report`)
   - Weekly feedback form
   - 1-10 rating system
   - Notes/observations
   - Submission workflow

6. **Head Coach** (`/headcoach`) - Head Coach Only
   - Overview of all sites
   - Broadcast messaging to all coaches
   - Overall program stats
   - Cross-site analytics

---

## Shared Assumptions

### Backend Integration

- **API Base URL**: `https://api.gofast.com/api/bgr/*` (or `https://gofastbackendv2-fall2025.onrender.com/api/bgr/*`)
- **Authentication**: Shared token (JWT or magic-link) issued by backend
- **Environment Variables**:
  ```
  VITE_API_BASE=https://api.gofast.com/api
  VITE_PROJECT_KEY=bgr
  ```

### Styling & UI

- **Framework**: Tailwind CSS (via GoFast Front-End Package)
- **Icons**: Lucide React
- **Components**: shadcn/ui patterns (button, card, input, table)
- **Brand**: Orange/Red gradient for GoFast brand colors

### Deployment

- **Platform**: Vercel (each repo on separate subdomain)
- **Parent App**: `parent.gofast.com`
- **Coach App**: `coach.gofast.com`

### Demo Mode Features

Since these are **demo-only** builds (Pattern 2):

- ✅ Mock/placeholder JSON data in `data/` folders
- ✅ Simple localStorage-based auth (no Firebase)
- ✅ Demo payment flows (no real processing)
- ✅ Static workout/lesson data for prototyping
- ✅ Hydration hooks ready but using mock data initially

---

## Build Pattern Details

### Pattern 2: Demo/Scaffold

**Stack**:
- React 18.3.1
- Vite 5.4.10
- React Router DOM 6.28.0
- Tailwind CSS 3.4.15
- Lucide React 0.472.0
- **NO Firebase** ❌
- **NO Authentication Library** ❌ (simple demo auth only)

**Key Files** (Standard Pattern):

1. **`package.json`** - Pattern 2 dependencies (no Firebase)
2. **`index.html`** - Root HTML with `/logo.jpg` favicon
3. **`vite.config.js`** - Simple Vite config
4. **`tailwind.config.js`** - Standard Tailwind config
5. **`postcss.config.js`** - PostCSS config
6. **`src/main.jsx`** - React entry point (renders `<App />`)
7. **`src/App.jsx`** - Router setup (route `/` → main hub)
8. **`src/index.css`** - Global styles + Tailwind imports
9. **`public/logo.jpg`** - GoFast logo (from demo repo)

---

## Hydration Architecture

### Parent App Hydration

**Hook**: `useHydrateParent.js`

**Hydrates**:
- Parent profile data
- Athlete(s) data
- Current week workout
- RSVP status
- Survey responses
- Coach feedback (if available)

**API Routes** (from backend):
```
GET /api/bgr/parent/:parentId/hydrate
GET /api/bgr/parent/:parentId/athletes
GET /api/bgr/lesson/:lessonId
GET /api/bgr/feedback?athleteId=:athleteId
```

**localStorage Caching**:
- `bgr_parent_${parentId}_data`
- `bgr_athletes_${parentId}`
- `bgr_lesson_current`

### Coach App Hydration

**Hook**: `useHydrateCoach.js`

**Hydrates**:
- Coach profile data
- Site assignment (or all sites for Head Coach)
- Athlete roster
- Current week workout
- Attendance records
- Feedback submissions

**API Routes** (from backend):
```
GET /api/bgr/coach/:coachId/hydrate
GET /api/bgr/coach/:coachId/roster?siteId=:siteId
GET /api/bgr/workout/current?siteId=:siteId
GET /api/bgr/attendance?siteId=:siteId&week=:week
```

**localStorage Caching**:
- `bgr_coach_${coachId}_data`
- `bgr_roster_${siteId}`
- `bgr_workout_current_${siteId}`

---

## Hand-off Summary

| Repo | Purpose | Default Route | Deployed At |
|------|---------|---------------|-------------|
| `gofast-bgr-parent` | Parent experience + "Coach's Corner" view | `/dashboard` | `parent.gofast.com` |
| `gofast-bgr-coach` | Coach / Head Coach management portal | `/dashboard` | `coach.gofast.com` |

**Backend Source of Truth**: `https://api.gofast.com/api/bgr/*` (or GoFast Backend v2)

---

## Development Checklist

### Parent App (`gofast-bgr-parent`)

- [ ] Scaffold Pattern 2 structure
- [ ] Create all page components
- [ ] Create all UI components
- [ ] Set up routing (App.jsx)
- [ ] Create hydration hook (useHydrateParent.js)
- [ ] Add mock data (lessons.json)
- [ ] Implement demo registration flow
- [ ] Build dashboard with RSVP/survey
- [ ] Create lesson detail pages
- [ ] Build feedback view
- [ ] Add GoFast logo
- [ ] Test all routes

### Coach App (`gofast-bgr-coach`)

- [ ] Scaffold Pattern 2 structure
- [ ] Create all page components
- [ ] Create all UI components
- [ ] Set up routing (App.jsx)
- [ ] Create hydration hook (useHydrateCoach.js)
- [ ] Add mock data (workouts.json)
- [ ] Implement demo login flow
- [ ] Build dashboard with stats
- [ ] Create roster/attendance management
- [ ] Build workout view
- [ ] Create feedback submission form
- [ ] Build Head Coach HQ page
- [ ] Add GoFast logo
- [ ] Test all routes

---

## Notes

- Both repos are **demo-only** builds using Pattern 2 (Demo/Scaffold)
- No Firebase authentication - simple localStorage-based auth for demo
- Mock data used for prototyping - will be replaced with real backend hydration
- Follow GoFast Frontend Build Standards (see `FRONTEND_BUILDS_FOR_GOFAST.md`)
- Maintain consistency with other GoFast frontend apps (gofastfounderoutlook, gofastcompanyoutlook)

---

**Last Updated**: January 2025  
**Pattern**: Pattern 2 (Demo/Scaffold)  
**Status**: 🔨 In Development

