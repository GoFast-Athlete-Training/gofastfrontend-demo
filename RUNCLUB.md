# RunClub Platform Architecture

## Vision Overview
The RunClub platform is a **forked experience** from the main GoFast app, designed specifically for **club administrators** to manage their running clubs. This is a **separate repo** with its own frontend but **shared backend** infrastructure.

## Key Principles
- **No auto-hydration** from web sources
- **Manual club setup** by administrators
- **Separate frontend repo** for club management
- **Shared backend** for data consistency
- **Breadcrumb navigation** for clear user flow

## Current Flow Issues
After joining a club via `/find-your-club` → `/club-detail/:id`, users hit a **dead end**. We need:

1. **Join confirmation** page
2. **Club onboarding** flow
3. **Member dashboard** for club activities
4. **Clear breadcrumbs** throughout

## Proposed Club Onboarding Flow

### Phase 1: Join Flow
```
Find Your Club → Club Detail → Join Confirmation → Club Onboarding
```

**Pages needed:**
- `ClubJoinConfirmation.jsx` - "Welcome to [Club Name]!"
- `ClubOnboarding.jsx` - Set up your club profile
- `ClubMemberDashboard.jsx` - Your club home

### Phase 2: Club Management (Separate Repo)
```
Club Admin Login → Club Setup → Member Management → Event Creation
```

**Admin pages needed:**
- `ClubAdminDashboard.jsx` - Overview of club
- `ClubSettings.jsx` - Club details, rules, etc.
- `MemberManagement.jsx` - Approve/manage members
- `EventManagement.jsx` - Create/manage runs

## Breadcrumb Navigation

### Member Flow (Main App)
```
AthleteHome → Find Your Club → Club Detail → Join Confirmation → Club Onboarding → Club Member Dashboard
```

### Admin Flow (Separate Repo)
```
Club Admin Login → Club Dashboard → Settings/Members/Events
```

## Technical Architecture

### Main App (gofastfrontend-demo)
- **Member-facing** club features
- **Join/leave** club functionality
- **Member dashboard** for club activities
- **Event participation**

### Club Admin App (separate repo)
- **Domain:** `club.growyourrunclub.com`
- **Admin dashboard** for club management
- **Member approval** workflow
- **Event creation** and management
- **Club settings** and customization

### Shared Backend
- **Club data** (name, description, rules, etc.)
- **Member management** (join/leave, roles, etc.)
- **Event system** (create, join, track attendance)
- **Communication** (announcements, chat, etc.)

## Data Flow

### Club Creation
1. Admin creates club in **Club Admin App**
2. Club gets **unique ID** and **join code**
3. Club appears in **main app** discovery

### Member Joining
1. User finds club in **main app**
2. User joins via **club detail** page
3. **Backend** creates membership record
4. User gets **club onboarding** flow
5. User lands on **member dashboard**

### Event Management
1. Admin creates event in **Club Admin App**
2. Event appears in **main app** for members
3. Members can **RSVP/join** events
4. **Backend** tracks attendance and updates

## Implementation Priority

### MVP1: Basic Join Flow
- [ ] `ClubJoinConfirmation.jsx`
- [ ] `ClubOnboarding.jsx` 
- [ ] `ClubMemberDashboard.jsx`
- [ ] Update `ClubDetail.jsx` with join button
- [ ] Breadcrumb navigation

### MVP2: Club Admin App
- [ ] Separate repo setup
- [ ] `ClubAdminDashboard.jsx`
- [ ] `ClubSettings.jsx`
- [ ] `MemberManagement.jsx`
- [ ] Admin authentication

### MVP3: Event System
- [ ] Event creation (admin)
- [ ] Event discovery (members)
- [ ] RSVP system
- [ ] Attendance tracking

## Current Status
- ✅ Club discovery (`/find-your-club`)
- ✅ Club detail (`/club-detail/:id`)
- ❌ Join confirmation (missing)
- ❌ Club onboarding (missing)
- ❌ Member dashboard (missing)
- ❌ Admin app (separate repo)

## Next Steps
1. **Build join confirmation** page
2. **Create club onboarding** flow
3. **Design member dashboard**
4. **Plan separate admin repo** architecture
5. **Define API endpoints** for club management

## Notes
- **No auto-syncing** from external sources
- **Manual club setup** ensures quality control
- **Separate repos** allow independent development
- **Shared backend** maintains data consistency
- **Breadcrumbs** provide clear navigation context
