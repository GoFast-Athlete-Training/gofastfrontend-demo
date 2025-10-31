# Frontend Builds for GoFast

## Overview
Standardized patterns for scaffolding GoFast frontend applications.

**Architecture Process**: See `gofastbackendv2-fall2025/architecturebuildprocess.md` for how architecture docs guide the build process. Architecture docs are **source of truth**, not proposals.

### App Types (3 Categories)
1. **User-Facing Demo** - No backend, static/mock data, prototyping only
2. **User-Facing Real** - Production apps with backend integration, authentication, real data
3. **Admin-Facing Real** - Admin dashboards with backend integration, hydration, data management

### Build Patterns (2 Technical Patterns)
- **Pattern 1: Production Apps** (with auth, Firebase, backend)
- **Pattern 2: Demo/Scaffold** (no auth, no Firebase, optional backend)

**Note**: App Type and Build Pattern are independent - you can have User-Facing Real apps using Demo/Scaffold pattern if they don't need auth.

---

## Schema-First Architecture

**CRITICAL**: Architecture = **Schema Architecture** (data models, relationships) - NOT page architecture. **Schema comes FIRST**, then backend routes, then frontend pages follow.

**Process Flow**: Schema Architecture → Prisma Schema → Backend Routes → Frontend Pages

See `gofastbackendv2-fall2025/architecturebuildprocess.md` for the complete schema-first approach.

---

## Models = Pages Architecture

**Key Concept**: Backend models drive frontend pages. If you upsert/hydrate a model, it typically needs a page.

**Remember**: Schema comes FIRST - define models in Prisma schema, then pages follow from those models.

### Architecture Decision Process
**Work with Adam to determine pages** based on:
1. **Backend Models** - What models exist in Prisma schema?
2. **Upsert Capabilities** - What models can be upserted via admin dashboard?
3. **Hydration Routes** - What data can be hydrated from backend?
4. **User Needs** - What does the user need to view/manage?

### Page-to-Model Mapping
- **Each model that needs management = a page**
- **Upsertable models** → Admin pages (e.g., `/admin/upsert/founder`)
- **Hydratable models** → List/Detail pages (e.g., `/athletes`, `/founders`)
- **Related models** → Nested pages (e.g., `/founder/tasks`, `/company/members`)

### Example: Company Outlook
**Source of Truth**: `gofastbackendv2-fall2025/COMPANY_OUTLOOK_ARCHITECTURE.md`

```
Backend Models:
- Company → CompanyAdminNav (main hub)
- CompanyRoadmapItem → ProductRoadmap (HydratedPage)
- Task (companyId) → CompanyTasks (HydratedPage) → CompanyTaskDetail (ViewDetail)
- CompanyCrmContact → CompanyCrmList (HydratedPage) → CompanyCrmDetail (ViewDetail)

Hydration:
- GET /api/company/:companyId/hydrate → Hydrates CompanyAdminNav
- GET /api/company/:companyId/roadmap → Hydrates ProductRoadmap
- GET /api/company/:companyId/tasks → Hydrates CompanyTasks
- GET /api/company-crm?companyId=X → Hydrates CompanyCrmList

Upsert:
- POST /api/admin/upsert?model=company → Creates Company record
```

**Note**: Always reference architecture docs (like `COMPANY_OUTLOOK_ARCHITECTURE.md`) as source of truth, not proposals.

**When Scaffolding**: 
1. **Work with Adam** to determine which models need pages
2. Review backend `schema.prisma` to see available models
3. Check hydration routes (`/api/admin/hydrate?entity=...`)
4. Check upsert routes (`/api/admin/upsert?model=...`)
5. Map each model → page in frontend
6. Design main hub navigation based on available pages

**Example Discussion**:
- Adam: "We have Company, CompanyMembers, ProductRoadmap models"
- AI: "So we need `/company`, `/company/members`, `/company/product-roadmap` pages?"
- Adam: "Yes, and the hub should show cards for each"
- AI: "Got it - CompanyAdminNav with 3 cards → 3 routes"

### Cursor Prompt Sequence (For Each Page)

When scaffolding individual pages, **Cursor should ask Adam a series of prompts** to understand the architecture:

1. **"What type of page is this?"**
   - List page (shows multiple items)
   - Detail page (shows single item)
   - Form page (create/edit)
   - Dashboard/Hub page
   - Settings/Config page

2. **"How do you foresee it being used?"**
   - User workflow: What actions will users take?
   - Data flow: How does data get here? (hydration, API calls, localStorage)
   - Navigation: How do users get to/from this page?
   - Real-time updates: Does data need to refresh?
   - Permissions: Who can access this page?

3. **"What storage concerns do you have?"**
   - Local state vs. global state
   - localStorage caching (for hydration data)
   - Session storage (for temporary data)
   - Backend persistence (what gets saved to DB)
   - Data refresh strategy (when to re-hydrate)
   - Offline considerations (if any)

**Purpose**: These prompts help Cursor architect the page correctly before building, ensuring proper state management, data flow, and user experience.

---

## App Type Guidelines

### 1. User-Facing Demo (No Backend)
- **Purpose**: Prototyping, UI mockups, testing without data
- **Backend**: ❌ None
- **Auth**: ❌ None
- **Data**: Mock/static data only
- **Pattern**: Demo/Scaffold
- **Example**: UI prototype, design review, feature mockup

### 2. User-Facing Real (Production with Backend)
- **Purpose**: Real user applications with backend integration
- **Backend**: ✅ Full integration (`https://gofastbackendv2-fall2025.onrender.com`)
- **Auth**: ✅ Firebase (for Pattern 1) or None (for Pattern 2)
- **Data**: Real hydrated data from backend
- **Pattern**: Production Apps (with auth) OR Demo/Scaffold (no auth, but has backend)
- **Example**: Founder Outlook (user-facing, but may not need auth initially)

### 3. Admin-Facing Real (Admin Dashboards)
- **Purpose**: Admin tools for data management and hydration
- **Backend**: ✅ Full integration with admin routes
- **Auth**: ✅ Hardcoded or Firebase (depends on Pattern)
- **Data**: Real data, hydration routes, upsert capabilities
- **Pattern**: Production Apps (typically)
- **Example**: User Dashboard (`gofast-user-dashboard`)

---

## Pattern 1: Production Apps (Real Applications)

### When to Use
- **User-facing applications** (MVP1, Founder Outlook, Company Outlook)
- **Admin dashboards** (User Dashboard)
- **Apps that need authentication** and user data

### Stack
- **React** (18+)
- **Vite** (build tool)
- **React Router** (routing)
- **Firebase** (authentication)
- **Tailwind CSS** (styling)
- **Lucide React** (icons)

### Required Files

#### `package.json`
```json
{
  "name": "gofast-[app-name]",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "firebase": "^12.3.0",
    "lucide-react": "^0.548.0",
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "react-router-dom": "^7.9.3",
    "axios": "^1.12.2"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^5.0.4",
    "autoprefixer": "^10.4.21",
    "postcss": "^8.5.6",
    "tailwindcss": "^3.4.18",
    "vite": "^7.1.7"
  }
}
```

#### `vite.config.js`
```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
```

#### `src/firebase.js` (Required)
```javascript
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCjpoH763y2GH4VDc181IUBaZHqE_ryZ1c",
  authDomain: "gofast-a5f94.firebaseapp.com",
  projectId: "gofast-a5f94",
  storageBucket: "gofast-a5f94.firebasestorage.app",
  messagingSenderId: "500941094498",
  appId: "1:500941094498:web:4008d94b89a9e3a4889b3b",
  measurementId: "G-CQ0GJCJLXX"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
```

#### `src/main.jsx`
```javascript
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
```

#### `src/App.jsx` (Main routing component)
**Location**: `/[project-root]/src/App.jsx`

**KEY PATTERN**: Route `/` ALWAYS points to the main hub page (Home/Welcome/AdminNav)

```javascript
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

// Import pages
import CompanyAdminNav from './pages/CompanyAdminNav'; // Main hub (required)
import ProductRoadmap from './pages/ProductRoadmap';
import CompanyTasks from './pages/CompanyTasks';

function App() {
  return (
    <Router>
      <Routes>
        {/* KEY: "/" always routes to main hub page */}
        <Route path="/" element={<CompanyAdminNav />} />
        {/* Feature routes */}
        <Route path="/product-roadmap" element={<ProductRoadmap />} />
        <Route path="/company-tasks" element={<CompanyTasks />} />
      </Routes>
    </Router>
  );
}

export default App;
```

**Important**: 
- ✅ Route `/` → Always main hub (Home/Welcome/[AppName]Nav)
- ✅ All other routes → Feature pages
- ✅ Hub page provides navigation cards to other features

#### `tailwind.config.js`
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

#### `postcss.config.js`
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

#### `index.html` (Root of project)
**Location**: `/[project-root]/index.html`

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/x-icon" href="/logo.jpg" />
    <link rel="apple-touch-icon" href="/logo.jpg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>GoFast [App Name]</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

**Favicon Setup:**
- ✅ Copy `logo.jpg` from `gofastfrontend-demo/public/` or `gofastfrontend-demo/src/assets/gofastlogo.jpg`
- ✅ Place in your `public/` folder as `logo.jpg`
- ✅ Reference in `index.html` as `href="/logo.jpg"`
- ✅ Use as both favicon and apple-touch-icon

### Folder Structure
```
src/
├── api/              # API calls (axiosConfig.js, etc.)
├── components/        # Reusable components
│   └── ui/           # shadcn/ui components (button, card, etc.)
├── pages/            # Page components
├── utils/            # Utility functions
├── App.jsx           # Main app component with routing
├── main.jsx          # Entry point
├── firebase.js       # Firebase config (REQUIRED for production apps)
└── index.css         # Global styles + Tailwind imports
```

### Authentication Pattern
**DO NOT USE AuthContext** - Use Firebase directly:
```javascript
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from './firebase';

// Login
await signInWithEmailAndPassword(auth, email, password);

// Logout
await signOut(auth);

// Check auth state (use onAuthStateChanged if needed)
import { onAuthStateChanged } from 'firebase/auth';
```

### Examples
- ✅ `gofastfrontend-mvp1` - Production app with Firebase auth
- ✅ `gofast-user-dashboard` - Admin dashboard (hardcoded auth, no Firebase)

---

## Pattern 2: Demo/Scaffold (Testing & Prototyping)

### When to Use
- **Prototypes** and demos
- **Single-user testing** (no multi-user auth needed)
- **UI mockups** and design exploration
- **Feature testing** before full integration

### Stack
- **React** (18+)
- **Vite** (build tool)
- **React Router** (routing)
- **Tailwind CSS** (styling)
- **Lucide React** (icons)
- **NO Firebase** ❌
- **NO Authentication** ❌

### Required Files

#### `package.json`
```json
{
  "name": "gofast-[demo-name]",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "lucide-react": "^0.548.0",
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "react-router-dom": "^7.9.3"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^5.0.4",
    "autoprefixer": "^10.4.21",
    "postcss": "^8.5.6",
    "tailwindcss": "^3.4.18",
    "vite": "^7.1.7"
  }
}
```

**Key Differences:**
- ❌ No `firebase` dependency
- ❌ No `axios` (unless testing API calls)
- ✅ Minimal dependencies

#### `vite.config.js` (Same as Pattern 1)

#### `src/main.jsx` (Same as Pattern 1)

#### `src/App.jsx` (Same as Pattern 1)

#### `tailwind.config.js` (Same as Pattern 1)

#### `postcss.config.js` (Same as Pattern 1)

### Folder Structure (Simplified)
```
src/
├── components/        # Reusable components
│   └── ui/           # shadcn/ui components
├── pages/            # Page components
├── App.jsx           # Main app component
├── main.jsx          # Entry point
└── index.css         # Global styles
```

**No:**
- ❌ `firebase.js`
- ❌ `api/` folder (unless testing)
- ❌ `context/` folder
- ❌ Auth-related components

### Examples
- ✅ `gofastfounderoutlook` - Scaffold app (no Firebase, no auth)
- ✅ `gofastfrontend-demo` - Demo/prototype repo (has firebase.js but not used for auth)

---

## Quick Reference: App Types & Patterns

| App | App Type | Pattern | Auth? | Firebase? | Backend? |
|-----|----------|---------|-------|-----------|----------|
| MVP1 Frontend | User-Facing Real | Production | ✅ | ✅ | ✅ |
| User Dashboard | Admin-Facing Real | Production | ✅ (hardcoded) | ❌ | ✅ |
| Founder Outlook | User-Facing Real | Scaffold | ❌ | ❌ | ✅ (hydration) |
| Company Outlook | User-Facing Real | Scaffold | ❌ | ❌ | ✅ (hydration) |
| Demo/Prototype | User-Facing Demo | Scaffold | ❌ | ❌ | ❌ |
| UI Mockup | User-Facing Demo | Scaffold | ❌ | ❌ | ❌ |

---

## Page Types & File Locations

### Core Files (Required)

#### Root Level
- **`index.html`** → `/[project-root]/index.html`
  - Entry point HTML
  - Links to `/src/main.jsx`

#### Source Root
- **`src/main.jsx`** → `/[project-root]/src/main.jsx`
  - React entry point
  - Renders `<App />`

- **`src/App.jsx`** → `/[project-root]/src/App.jsx`
  - Main app component
  - Sets up React Router
  - Defines all routes

- **`src/index.css`** → `/[project-root]/src/index.css`
  - Global styles
  - Tailwind imports: `@tailwind base; @tailwind components; @tailwind utilities;`

### Page Components

All pages go in: **`src/pages/`**

#### Main Hub Page (Required)
Every app needs a **Home/Welcome/AdminDashboard** page - the main navigation hub.

**Location**: `src/pages/[AppName]Nav.jsx` or `src/pages/Home.jsx` or `src/pages/Welcome.jsx`

**Pattern**: Card-based navigation hub where users select what they want to do.

**Example Structure**:
```javascript
// src/pages/CompanyAdminNav.jsx
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';

const CompanyAdminNav = () => {
  const navigate = useNavigate();

  const navOptions = [
    {
      title: 'Product Roadmap',
      description: 'Manage company product roadmap',
      icon: <RoadmapIcon />,
      path: '/product-roadmap',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'Company Tasks',
      description: 'View company-wide tasks',
      icon: <TasksIcon />,
      path: '/company-tasks',
      color: 'bg-green-100 text-green-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-8">Company Admin Hub</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {navOptions.map((option) => (
          <Card 
            key={option.path}
            onClick={() => navigate(option.path)}
            className="cursor-pointer hover:shadow-lg"
          >
            <CardHeader>
              <div className={`w-16 h-16 rounded-lg ${option.color} mb-4`}>
                {option.icon}
              </div>
              <CardTitle>{option.title}</CardTitle>
              <CardDescription>{option.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">Open {option.title}</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CompanyAdminNav;
```

**Route in App.jsx**:
```javascript
<Route path="/" element={<CompanyAdminNav />} />
```

#### Page Structure Pattern (User Preference)

**Adam's Preferred Structure** - Three-layer approach to avoid cramming all models into base view:

1. **HydratedPage** (Base List View)
   - Location: `src/pages/[FeatureName].jsx`
   - Purpose: Base page that hydrates and displays list of items
   - Examples: `CompanyTasks.jsx`, `CompanyCrmList.jsx`, `ProductRoadmap.jsx`
   - Pattern: Hydrates data, shows list/table, links to detail pages
   - Storage: localStorage caching on load

2. **CreatePage** (Wizard/Form for Creation)
   - Location: `src/pages/[FeatureName]Create.jsx` or `src/pages/[FeatureName]/Create.jsx`
   - Purpose: Wizard or form to create new items
   - Examples: `CompanyTaskCreate.jsx`, `CompanyCrmCreate.jsx`, `RoadmapItemCreate.jsx`
   - Pattern: Multi-step wizard or single form, populates data as needed
   - Navigation: Redirects to HydratedPage or DetailPage after creation

3. **ViewDetail** (Detail/Edit View)
   - Location: `src/pages/[FeatureName]Detail.jsx` or `src/pages/[FeatureName]/[ItemId].jsx`
   - Purpose: View and edit individual item details
   - Examples: `CompanyTaskDetail.jsx`, `CompanyCrmDetail.jsx`, `RoadmapItemDetail.jsx`
   - Pattern: Detailed view with edit capabilities, history, notes
   - Benefits: **Separates detail view from base list** - cleaner architecture

**Example Flow:**
```
CompanyTasks.jsx (HydratedPage)
  → Shows list of tasks
  → "Create Task" button → CompanyTaskCreate.jsx (CreatePage)
  → Click task row → CompanyTaskDetail.jsx (ViewDetail)
```

**Why This Pattern?**
- ✅ Avoids cramming all models into base view
- ✅ Clear separation of concerns
- ✅ Easier to maintain and extend
- ✅ Better UX (focused pages)

### File Organization Summary

```
[project-root]/
├── index.html                    # ✅ Root HTML (references /logo.jpg)
├── package.json                  # ✅ Dependencies
├── vite.config.js               # ✅ Vite config
├── tailwind.config.js           # ✅ Tailwind config
├── postcss.config.js            # ✅ PostCSS config
├── public/                       # ✅ Static assets (served at root)
│   └── logo.jpg                 # ✅ GoFast logo (from demo repo)
├── src/
│   ├── main.jsx                 # ✅ React entry
│   ├── App.jsx                  # ✅ Router setup
│   ├── index.css                # ✅ Global styles
│   ├── pages/                   # ✅ All pages here
│   │   ├── Home.jsx            # Main hub (or Welcome.jsx, AdminNav.jsx)
│   │   ├── FeaturePage.jsx     # Feature pages
│   │   └── [Feature]/           # Feature subfolders
│   ├── components/              # ✅ Reusable components
│   │   └── ui/                  # shadcn/ui components
│   └── [firebase.js]            # Only if Pattern 1 (Production)
```

---

## Common Patterns Across All Apps

### UI Components (shadcn/ui)
Standard component library used across all apps:
- `components/ui/button.jsx`
- `components/ui/card.jsx`
- `components/ui/input.jsx`
- `components/ui/table.jsx`

### Styling
- **Tailwind CSS** for all styling
- **Lucide React** for icons (consistent icon set)
- **Orange/Red gradient** for GoFast brand colors

### Routing
- **React Router v7+** for all routing
- Standard patterns:
  - `/` - Home/Welcome/AdminNav (main hub - card-based navigation)
  - `/[feature]` - Feature pages (e.g., `/product-roadmap`, `/company-tasks`)
  - `/[feature]/:id` - Detail pages (e.g., `/athlete/:athleteId`, `/task/:taskId`)

**Main Hub Pattern (REQUIRED):**
- ✅ **Route `/` in App.jsx ALWAYS points to main hub page**
- ✅ Hub shows cards/buttons to navigate to features
- ✅ Each card links to a feature route
- ✅ This is the entry point - users land here first
- ✅ Hub is the central navigation point for the entire app

**Example Flow:**
```
User visits app → "/" route → CompanyAdminNav.jsx (hub)
                     ↓
User clicks "Product Roadmap" card → "/product-roadmap" route
                     ↓
User clicks "Company Tasks" card → "/company-tasks" route
```

### Backend Integration
- **Backend URL**: `https://gofastbackendv2-fall2025.onrender.com`
- Use `fetch` or `axios` for API calls
- Store hydrated data in `localStorage` for caching

---

## CRM Frontend Build Pattern

**Based on**: `ignitestrategescrm-frontend` architecture pattern

### Core Principles

1. **Modular Hydration Architecture**
   - Each entity type has its own hydration route based on its primary identifier
   - Entity → Primary Key → Route → Service → Query
   - Example: `CompanyCrmContact → companyId → /api/company-crm?companyId=X`

2. **Entity-Specific Routes**
   - ❌ DON'T: Generic `/api/hydrate?type=contacts&companyId=X`
   - ✅ DO: Entity-specific `/api/company-crm?companyId=X`

3. **localStorage Caching**
   - Cache hydrated data on page load
   - Key pattern: `company_${companyId}_crm_contacts`
   - Always hydrate when landing on CRM pages

### CRM Architecture Pattern

```javascript
// Contact Hydration Rules
GET /api/company-crm?companyId={companyId}           // All company CRM contacts
GET /api/company-crm/:contactId                        // Single contact detail
GET /api/company-crm?companyId=X&pipeline=prospects    // Filtered by pipeline
```

### Frontend Implementation

```javascript
// ContactManageHome.jsx pattern
const loadContacts = async () => {
  const companyId = getCompanyId(); // From localStorage or route
  
  // 1. Hydrate contacts
  const response = await api.get(`/company-crm?companyId=${companyId}`);
  const contacts = response.data?.contacts || [];
  
  // 2. Cache to localStorage
  localStorage.setItem(`company_${companyId}_crm_contacts`, JSON.stringify(contacts));
  
  // 3. Use cached data
  setContacts(contacts);
};

// On page load
useEffect(() => {
  loadContacts();
}, [companyId]);
```

### CRM Page Structure (Following 3-Layer Pattern)

1. **CRM Hub** (`CompanyCrmHub.jsx`)
   - Main navigation hub
   - Stats: Total contacts, by pipeline, by status
   - Quick actions: Create contact, Import, Filter

2. **Contact List** (`CompanyCrmList.jsx`) - **HydratedPage**
   - List view with filters (pipeline, status, search)
   - Hydrated from `/api/company-crm?companyId=X`
   - Click row → CompanyCrmDetail
   - "Create Contact" button → CompanyCrmCreate

3. **Contact Create** (`CompanyCrmCreate.jsx`) - **CreatePage**
   - Wizard/form to create new contact
   - Pipeline assignment, status, notes
   - Redirects to CompanyCrmDetail or CompanyCrmList after creation

4. **Contact Detail** (`CompanyCrmDetail.jsx`) - **ViewDetail**
   - Single contact view/edit
   - Hydrated from `/api/company-crm/:contactId`
   - History, notes, pipeline updates
   - Edit capabilities inline or via form

### Key Files Structure

```
src/
├── pages/
│   ├── CompanyCrmHub.jsx          # Main CRM hub (route: /company-crm)
│   ├── CompanyCrmList.jsx         # HydratedPage - Contact list (route: /company-crm/list)
│   ├── CompanyCrmCreate.jsx       # CreatePage - Create contact (route: /company-crm/create)
│   └── CompanyCrmDetail.jsx       # ViewDetail - Contact detail (route: /company-crm/:contactId)
├── lib/
│   └── company.js                 # getCompanyId() helper
└── components/
    └── ContactPipelineFilter.jsx  # Pipeline filter component
```

### Integration Checklist

- [ ] Entity-specific hydration routes (not generic)
- [ ] localStorage caching on page load
- [ ] Primary key-based queries (companyId for Company CRM)
- [ ] Modular architecture (separate routes per entity)
- [ ] CRM hub with stats and navigation
- [ ] Contact list with filters
- [ ] Contact detail page
- [ ] Create/edit forms

---

## Anti-Patterns (Don't Do This)

### ❌ AuthContext
**DON'T CREATE**: `src/context/AuthContext.jsx` with listeners/useEffect
- It causes app failures
- Use Firebase directly if auth needed
- Use localStorage checks if simple auth needed

### ❌ Firebase Without Using It
**DON'T**: Include Firebase in dependencies if not using it
- Demo/scaffold apps don't need Firebase
- Only add if actually implementing auth

### ❌ Complex Auth Wrappers
**DON'T**: Build custom auth systems when Firebase exists
- Use Firebase auth directly
- Keep it simple

---

## New App Scaffolding Checklist

### Step 0: Architecture Discussion (Work with Adam)
Before scaffolding, discuss:
- [ ] **App Type**: User-Facing Demo, User-Facing Real, or Admin-Facing Real?
- [ ] **Backend Models**: What Prisma models exist? (Check `gofastbackendv2-fall2025/prisma/schema.prisma`)
- [ ] **Hydration Routes**: What can be hydrated? (Check `/api/admin/hydrate?entity=...`)
- [ ] **Upsert Routes**: What models can be upserted? (Check `config/modelConfig.js`)
- [ ] **Pages Needed**: Based on models → determine pages (models = pages)
- [ ] **User Workflow**: What does the user need to do? (view, create, edit, delete)
- [ ] **Main Hub**: What should the entry point show? (navigation cards based on available features)

**Key Question**: "What models do we hydrate/upsert? Each model needs a page."

### Step 0.5: Per-Page Architecture (Cursor Prompts)
For **each individual page**, Cursor should ask Adam:

1. **"What type of page is this?"**
   - List, Detail, Form, Dashboard, Settings, etc.

2. **"How do you foresee it being used?"**
   - User workflow, data flow, navigation, permissions

3. **"What storage concerns do you have?"**
   - State management, localStorage, backend persistence, refresh strategy

**Purpose**: Ensure proper architecture before building each page.

### Production App
- [ ] `index.html` in root (links to `/src/main.jsx`, references `/logo.jpg`)
- [ ] `public/logo.jpg` (copy from `gofastfrontend-demo/public/logo.jpg` or `src/assets/gofastlogo.jpg`)
- [ ] `package.json` with Firebase dependency
- [ ] `src/main.jsx` (renders `<App />`)
- [ ] `src/App.jsx` with React Router setup (`/` → main hub)
- [ ] `src/firebase.js` with config
- [ ] `src/pages/[AppName]Nav.jsx` or `Home.jsx` (main hub page)
- [ ] Tailwind config files
- [ ] UI components folder structure (`components/ui/`)
- [ ] Authentication flow (Firebase direct, no AuthContext)

### Demo/Scaffold App
- [ ] `index.html` in root (links to `/src/main.jsx`, references `/logo.jpg`)
- [ ] `public/logo.jpg` (copy from `gofastfrontend-demo/public/logo.jpg` or `src/assets/gofastlogo.jpg`)
- [ ] `package.json` WITHOUT Firebase
- [ ] `src/main.jsx` (renders `<App />`)
- [ ] `src/App.jsx` with React Router setup (`/` → main hub)
- [ ] No `firebase.js` file
- [ ] `src/pages/[AppName]Nav.jsx` or `Home.jsx` (main hub page)
- [ ] Tailwind config files
- [ ] UI components folder structure (`components/ui/`)
- [ ] Simple routing (no protected routes)

### Main Hub Page Requirements
Every app **MUST** have:
- [ ] Main hub page in `src/pages/` (Home.jsx, Welcome.jsx, or [AppName]Nav.jsx)
- [ ] **Route `/` in App.jsx ALWAYS points to main hub** ⭐ KEY PATTERN
- [ ] Card-based navigation (users select features from cards)
- [ ] Each card navigates to feature route
- [ ] Clean, organized layout
- [ ] Hub is the entry point - users always land here first

---

## Backend API Base URL
All apps connect to:
```
https://gofastbackendv2-fall2025.onrender.com
```

**Local Development:**
```
http://localhost:3001
```

---

**Last Updated**: January 2025  
**Pattern Status**: ✅ Standardized and documented  
**Working Examples**: 
- Production: `gofastfrontend-mvp1`, `gofast-user-dashboard`
- Scaffold: `gofastfounderoutlook`

