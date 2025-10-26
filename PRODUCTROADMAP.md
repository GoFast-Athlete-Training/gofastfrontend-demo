# GoFast Product Roadmap

## MVP4 Priorities (Current Focus)

### Phase 1: RunCrew (Q1 2025) - **STARTING HERE** 🎯
**Priority:** HIGHEST - Proof of Concept

**Why First:**
- Simplest onboarding and value proposition
- Activity tracking + aggregation is straightforward
- Leaderboard creates immediate engagement
- Builds trust through shared activity data
- Minimal overhead, maximum engagement

**Core Features:**
- [ ] Join/Create Run Crew
- [ ] Activity tracking integration (Strava/Garmin)
- [ ] Weekly/Monthly leaderboards
- [ ] Activity aggregation and stats
- [ ] Crew chat/messaging
- [ ] Achievement badges

**Success Metrics:**
- 10 active Run Crews
- 50+ users tracking activities
- 70% weekly engagement rate

---

### Phase 2: Groups/Clubs (Q2 2025)
**Priority:** HIGH - Community Building

**Why Second:**
- Builds on RunCrew engagement
- Natural evolution: from crew to club
- Adds event functionality
- Members join activities together
- **Needs separate repo for event management**

**Core Features:**
- [ ] Public running clubs
- [ ] Event creation and RSVP
- [ ] Club activity feeds
- [ ] Member roles (admin/moderator)
- [ ] Group challenges
- [ ] Event calendar integration

**Technical Requirements:**
- **Separate repo for events service**
- Event management API
- Calendar system
- RSVP/payment integration

**Success Metrics:**
- 5 active clubs
- 20+ events created monthly
- 50% event attendance rate

---

### Phase 3: Event UX (Q3 2025)
**Priority:** MEDIUM - Revenue Opportunity

**Why Third:**
- Race directors can advertise events
- Revenue stream through listing fees
- Separate marketplace for events
- Builds on club event functionality

**Core Features:**
- [ ] Race/event listing marketplace
- [ ] Event discovery and filtering
- [ ] Registration integration
- [ ] Event promotion tools
- [ ] Results tracking
- [ ] Reviews and ratings

**Technical Requirements:**
- **Separate repo for event marketplace**
- Payment processing
- Registration management
- Event provider dashboard

**Success Metrics:**
- 50 listed events
- 200+ event registrations
- $5K+ in event fees

---

### Phase 4: Shopping (Q4 2025)
**Priority:** LOW - Monetization

**Why Fourth:**
- Integrate Amazon Affiliate API
- Points redemption → product purchases
- Low maintenance revenue stream
- Users already earning points

**Core Features:**
- [ ] Amazon product catalog integration
- [ ] Points-to-product conversion
- [ ] Product recommendations
- [ ] Purchase tracking
- [ ] Affiliate revenue

**Technical Requirements:**
- Amazon Product Advertising API
- Points conversion algorithm
- Product recommendation engine
- Purchase tracking

**Success Metrics:**
- $1K+ monthly affiliate revenue
- 20% points redemption rate
- 50+ products purchased

---

### Phase 5: Matching (2026)
**Priority:** LOWEST - Advanced Feature

**Why Last:**
- Build trust first through activity tracking
- Highest complexity and liability
- Requires established community
- "Hey, if you want to find people, here's an option"
- Safety and moderation critical

**Core Features:**
- [ ] Match preferences setup
- [ ] Profile verification
- [ ] Swipe-based matching
- [ ] In-app messaging
- [ ] Safety features (reporting, blocking)
- [ ] Match recommendations

**Technical Requirements:**
- Advanced matching algorithm
- Safety and moderation tools
- Background checks (optional)
- In-app communication system

**Success Metrics:**
- 100+ matches made
- <5% safety incident rate
- 40% successful meetups

---

## Development Philosophy

1. **Start Simple**: RunCrew proves the concept with minimal complexity
2. **Build Trust**: Activity tracking → Community → Matching
3. **Monetize Smartly**: Events + Shopping = sustainable revenue
4. **Safety First**: Matching comes last when trust is established
5. **Modular Architecture**: Separate repos for event marketplace

## Key Decisions

- **3 Separate Repos Needed:**
  1. Main app (RunCrew, Matching, Shopping)
  2. Event marketplace
  3. Event management service

- **Trust Building Journey:**
  Activity → Community → Events → Shopping → Matching

- **Revenue Path:**
  Events → Shopping → Premium Features

---

## Next Steps

1. ✅ **Document matching flow** (MATCHING.md)
2. 🚧 **Build RunCrew MVP** (current focus)
3. ⏳ Design event marketplace architecture
4. ⏳ Research Amazon Affiliate integration
5. ⏳ Plan matching safety features

---

*Last Updated: MVP4 Planning Session*
