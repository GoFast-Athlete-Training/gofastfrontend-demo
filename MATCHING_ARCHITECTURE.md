# GoFast Matching Architecture

## Overview
The GoFast app now focuses on runner matching functionality while keeping training features as a separate UX. The matching flow is designed to be simple, no-login required, and focused on connecting runners with similar paces and goals.

## Landing Flow
```
GoFastLanding (HTML) → React App → Dashboard → Matching Flow
```

## Core Matching Flow

### 1. Landing Page (`GoFastLanding/index.html`)
- **Headline**: "Find Your Match"
- **Subtext**: "Meet runners who move at your pace"
- **CTA**: "Get Started" → Routes to React app
- **Features**: Find Your Pace, Build Your Crew, Reach Your Goals

### 2. Dashboard (`/dashboard`)
- **Primary Focus**: Matching section with 3 action cards
- **Get Started** → `/onboarding`
- **Find Matches** → `/find`
- **My Crew** → `/crew`
- **Training Features**: Preserved as separate UX below matching section

### 3. Onboarding (`/onboarding`)
**3-Step Process:**
- **Step 1**: Pace, distance preference, city/zip
- **Step 2**: Time preference (Morning/Afternoon/Evening) + goal race (5K/10K/Half/Marathon)
- **Step 3**: Summary screen → "Find Your Match" CTA
- **Data Storage**: localStorage (no login required)
- **Progress**: Visual progress bar

### 4. Find Matches (`/find`)
- **MatchCards Grid**: Displays mock runner profiles
- **Card Content**: Avatar, name, city, pace, distance, goal race, time preference, availability chips, bio
- **Actions**: 
  - "Invite to Run" → Opens modal with date/time/location/message
  - "Message" → Placeholder alert (mock chat)
- **States**: Loading, no matches, grid view

### 5. Crew (`/crew`)
- **Your RunCrew**: Shows accepted matches
- **Member Info**: Name, pace, next run planned, runs completed together
- **Status**: Confirmed/Pending/Declined indicators
- **Actions**: Message, View Profile
- **Stats**: Crew size, total runs, confirmed runs

### 6. Profile (`/profile`)
- **Editable Preferences**: All matching criteria
- **Fields**: Pace, distance, city, zip, time preference, goal race, availability
- **Real-time Preview**: Current preferences summary
- **Actions**: Save, Reset, Update Profile
- **Persistence**: localStorage

## Technical Architecture

### File Structure
```
src/Pages/Matching/
├── Onboarding.jsx      # 3-step preference collection
├── FindMatches.jsx     # MatchCards grid with invite modal
├── Crew.jsx           # Accepted matches management
└── Profile.jsx        # Editable preferences

src/App.jsx            # Updated routing
src/Pages/GoFastDashboard.jsx  # Added matching section
```

### Data Flow
```
User Input → localStorage → Mock Data → UI Components
```

### State Management
- **Local Storage**: User preferences, no backend required
- **Mock Data**: Realistic runner profiles for testing
- **Component State**: Form data, modal states, loading states

### Routing
```javascript
// Matching Flow Routes
/onboarding → Onboarding.jsx
/find → FindMatches.jsx  
/crew → Crew.jsx
/profile → Profile.jsx (updated from Setup/Profile)
/matching-profile → Profile.jsx (explicit route)
```

## Key Features

### ✅ No Login Required
- All data stored in localStorage
- Immediate access to matching functionality
- No authentication barriers

### ✅ Progressive Onboarding
- 3-step guided setup
- Visual progress indication
- Data validation at each step

### ✅ Rich MatchCards
- Comprehensive runner profiles
- Availability indicators
- Direct action buttons (Invite/Message)

### ✅ Invite System
- Modal-based run invitation
- Date/time/location selection
- Optional personal message

### ✅ Crew Management
- Track accepted matches
- Run history and statistics
- Status management

### ✅ Profile Management
- Editable preferences
- Real-time preview
- Persistent storage

## Integration Points

### Dashboard Integration
- Matching section prominently displayed
- Training features preserved below
- Clear navigation between flows

### Landing Page Integration
- HTML landing directs to React app
- Consistent branding and messaging
- Single CTA focus

## Future Enhancements

### Potential Additions
- Real backend integration
- User authentication
- Push notifications
- Chat functionality
- GPS-based matching
- Race event integration

### Scalability Considerations
- Component-based architecture
- Modular state management
- API-ready data structures
- Responsive design patterns

## User Experience Flow

```
1. User visits HTML landing
2. Clicks "Get Started" → React app
3. Sees dashboard with matching focus
4. Clicks "Get Started" → Onboarding
5. Completes 3-step setup
6. Redirected to Find Matches
7. Browses MatchCards
8. Invites runners or sends messages
9. Manages crew in Crew page
10. Updates preferences in Profile
```

This architecture provides a focused, user-friendly matching experience while maintaining the existing training functionality as a separate, complementary feature set.
