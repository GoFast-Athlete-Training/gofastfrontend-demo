# RunClub Data Schema Design

## The Problem
We're building UI with **mock data** without thinking through the **real schema** that would make it work. We're setting ourselves up for failure by not designing the data architecture first.

## Critical Schema Questions

### 1. Club Data Schema
**Questions:**
- How do we store club info? (name, description, location, rules)
- Who can edit club details? (admin only?)
- How do we handle club images/logos?
- What's the club verification process?
- How do we handle club categories? (competitive, social, chill)
- What's the club status? (active, inactive, pending approval)

**Proposed Schema:**
```javascript
Club {
  id: string (UUID)
  name: string
  description: string
  location: {
    city: string
    state: string
    coordinates?: { lat: number, lng: number }
  }
  image: string (URL)
  rules: string[]
  category: 'competitive' | 'social' | 'chill' | 'all-paces'
  status: 'active' | 'inactive' | 'pending'
  established: Date
  createdBy: string (admin user ID)
  createdAt: Date
  updatedAt: Date
}
```

### 2. Member Management Schema
**Questions:**
- How do we track who's in which club?
- What's the join/leave flow?
- How do we handle member roles? (admin, member, pending)
- What happens when someone leaves?
- How do we handle member permissions?
- What's the approval process for new members?

**Proposed Schema:**
```javascript
ClubMembership {
  id: string (UUID)
  clubId: string
  userId: string
  role: 'admin' | 'member' | 'pending'
  joinedAt: Date
  status: 'active' | 'inactive' | 'banned'
  permissions: string[]
}

User {
  id: string (UUID)
  name: string
  email: string
  profileImage?: string
  runningProfile: {
    pace: string
    experience: 'beginner' | 'intermediate' | 'advanced'
    preferredDistance: string
  }
}
```

### 3. Events/Runs Schema
**Questions:**
- How do we create real events? (not mock data)
- Who can create events? (admin only? members?)
- How do we handle RSVPs?
- How do we track attendance?
- What's the event lifecycle? (created → open → closed → completed)
- How do we handle recurring events?
- What's the event capacity/limits?

**Proposed Schema:**
```javascript
Event {
  id: string (UUID)
  clubId: string
  createdBy: string (user ID)
  title: string
  description: string
  date: Date
  time: string
  location: {
    name: string
    address: string
    coordinates?: { lat: number, lng: number }
  }
  distance: string
  pace: string
  capacity?: number
  status: 'draft' | 'open' | 'closed' | 'completed' | 'cancelled'
  recurring?: {
    frequency: 'weekly' | 'monthly' | 'custom'
    endDate?: Date
  }
  createdAt: Date
  updatedAt: Date
}

EventRSVP {
  id: string (UUID)
  eventId: string
  userId: string
  status: 'going' | 'maybe' | 'not-going'
  rsvpAt: Date
  attended?: boolean
  notes?: string
}
```

### 4. Real-time Updates Schema
**Questions:**
- How do we show "next run" dynamically?
- How do we update member counts?
- How do we handle event changes?
- How do we notify members of updates?
- What's the caching strategy?

**Proposed Schema:**
```javascript
ClubStats {
  clubId: string
  memberCount: number
  nextEvent?: {
    eventId: string
    title: string
    date: Date
    rsvpCount: number
  }
  lastUpdated: Date
}

Notification {
  id: string (UUID)
  userId: string
  type: 'event_created' | 'event_updated' | 'member_joined' | 'event_reminder'
  title: string
  message: string
  data: object
  read: boolean
  createdAt: Date
}
```

## Current Problems with Mock Data

### ClubDetail.jsx Issues:
- `nextRun: 'Thursday, 6:30 PM'` - **Static string, not a real event**
- `members: 120` - **No way to track real members**
- `upcomingRuns` - **Mock array, not connected to anything**
- `isJoined` - **No persistence, no real state**

### FindRunningClubs.jsx Issues:
- `runningClubs` array - **Hardcoded, no real data source**
- `members: 85` - **Fake counts**
- `nextRun: 'Tomorrow, 7:00 AM'` - **Static strings**

## API Endpoints Needed

### Club Management:
- `GET /api/clubs` - List all clubs
- `GET /api/clubs/:id` - Get club details
- `POST /api/clubs` - Create club (admin only)
- `PUT /api/clubs/:id` - Update club (admin only)
- `DELETE /api/clubs/:id` - Delete club (admin only)

### Member Management:
- `GET /api/clubs/:id/members` - Get club members
- `POST /api/clubs/:id/join` - Join club
- `DELETE /api/clubs/:id/leave` - Leave club
- `PUT /api/clubs/:id/members/:userId` - Update member role

### Event Management:
- `GET /api/clubs/:id/events` - Get club events
- `POST /api/clubs/:id/events` - Create event
- `GET /api/events/:id` - Get event details
- `POST /api/events/:id/rsvp` - RSVP to event
- `PUT /api/events/:id/rsvp` - Update RSVP

## Implementation Strategy

### Phase 1: Schema Design
- [ ] Finalize data schemas
- [ ] Design API endpoints
- [ ] Plan database structure
- [ ] Define validation rules

### Phase 2: Backend Implementation
- [ ] Create database models
- [ ] Implement API endpoints
- [ ] Add authentication/authorization
- [ ] Set up real-time updates

### Phase 3: Frontend Integration
- [ ] Replace mock data with real API calls
- [ ] Implement real join/leave flows
- [ ] Add real event management
- [ ] Handle real-time updates

## Questions to Resolve

### Data Consistency:
- How do we handle concurrent updates?
- What's our conflict resolution strategy?
- How do we maintain data integrity?

### Performance:
- How do we handle large member lists?
- What's our pagination strategy?
- How do we optimize real-time updates?

### Security:
- How do we prevent spam joins?
- What's our rate limiting strategy?
- How do we handle malicious content?

### Scalability:
- How do we handle multiple clubs?
- What's our sharding strategy?
- How do we handle geographic distribution?

## Next Steps
1. **Design the real schemas** (not mock data)
2. **Plan the API architecture**
3. **Build the backend first** (data layer)
4. **Then update the frontend** (UI layer)
5. **Test with real data flows**

## The Bottom Line
We need to **stop building fake UI** and **start designing real data architecture**. The current approach is a house of cards that will collapse when we try to make it work with real data.
