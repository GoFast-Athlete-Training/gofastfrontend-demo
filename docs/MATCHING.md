# GoFast Matching Folder Analysis - Page by Page

## Current Files in Matching/ (20 files remaining)

### ACTUAL MATCHING PAGES (Keep in Matching/)
- **MatchingHome.jsx** - Universal entry point, shows mock runners
- **PreAthleteProfile.jsx** - Welcome/onboarding page  
- **ProfileBuild.jsx** - Match-specific profile setup (with image upload)
- **FindMatches.jsx** - Full hydration (all runners)
- **MatchProfile.jsx** - Individual profile view
- **MatchProfileSuccess.jsx** - Success after profile creation
- **RequestSent.jsx** - After sending match request
- **RequestReceived.jsx** - Incoming match requests
- **MatchPicks.jsx** - Match selection interface
- **ReviewProposedMeetup.jsx** - Review meetup proposals
- **YourePaired.jsx** - Success after pairing

### UNIVERSAL ATHLETE PAGES (Move to new Athlete/ folder)
- **AthleteHome.jsx** - Main athlete dashboard (requests, stats, navigation)
- **Profile.jsx** - Universal athlete profile management (running preferences)
- **Onboarding.jsx** - General athlete onboarding flow
- **PreOnboarding.jsx** - Pre-onboarding

### CREW/CLUB PAGES (Move to new Crew/ folder)
- **Crew.jsx** - My crew members (accepted matches)
- **FindRunningCrews.jsx** - Browse running clubs
- **RunningCrewDetail.jsx** - Individual club details
- **GroupChat.jsx** - Club/crew chat functionality

### DEPRECATED/HALLUCINATION PAGES (Delete)
- **LetsGetAfterIt.jsx** - Random points/motivation page (hallucination)

## Folder Structure Needed

```
src/Pages/
├── Matching/           # Match-specific UX
├── Athlete/           # Universal athlete stuff
├── Crew/              # Club/crew functionality  
├── Shopping/          # Already moved
├── Points/            # Already moved
├── Settings/          # Already moved
└── RunCrew/           # Already exists
```

## Key Distinction
- **Profile.jsx** = Universal athlete profile (running prefs, settings)
- **ProfileBuild.jsx** = Match-specific setup (photos, matching criteria)
- **AthleteHome.jsx** = Main dashboard (not matching-specific)

## Next Steps
1. Create Athlete/ and Crew/ folders
2. Move universal athlete pages to Athlete/
3. Move crew/club pages to Crew/
4. Delete LetsGetAfterIt.jsx
5. Update App.jsx routes
