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

**Schema Models** (Items vs Totals pattern):
- `Company` → Main container
- `CompanyFounder` → Junction (founderId → Founder → Athlete)
- `CompanyEmployee` → Email-based employees (NO athleteId)
- `CompanyRoadmapItem` → Product/GTM roadmap items
- `CompanyFinancialSpend` → **Individual items** (transactions we ingest)
- `CompanyFinancialProjection` → **Total values** (budgets we ingest as totals)
- `CompanyCrmContact` → BD/clubs contacts
- `Task` → Unified tasks (companyId OR founderId)

**Frontend Pages** (Models = Pages, 3-layer pattern):
- `CompanyAdminNav.jsx` (/) → Main hub
- `ProductRoadmap.jsx` (HydratedPage) → From CompanyRoadmapItem
- `CompanyTasks.jsx` (HydratedPage) → From Task where companyId
  - `CompanyTaskCreate.jsx` (CreatePage)
  - `CompanyTaskDetail.jsx` (ViewDetail)
- `FinancialSpends.jsx` (HydratedPage) → From CompanyFinancialSpend (items)
  - `FinancialSpendCreate.jsx` (CreatePage) → Ingest individual transaction
  - `FinancialSpendDetail.jsx` (ViewDetail)
- `FinancialProjections.jsx` (HydratedPage) → From CompanyFinancialProjection (totals)
  - `FinancialProjectionCreate.jsx` (CreatePage) → Ingest total values
  - `FinancialProjectionDetail.jsx` (ViewDetail)
- `CompanyCrmList.jsx` (HydratedPage) → From CompanyCrmContact
  - `CompanyCrmCreate.jsx` (CreatePage)
  - `CompanyCrmDetail.jsx` (ViewDetail)

**Hydration Routes**:
- GET /api/company/:companyId/hydrate → Hydrates CompanyAdminNav
- GET /api/company/:companyId/roadmap → Hydrates ProductRoadmap
- GET /api/company/:companyId/tasks → Hydrates CompanyTasks
- GET /api/company/:companyId/financial/spends → Hydrates FinancialSpends (items)
- GET /api/company/:companyId/financial/projections → Hydrates FinancialProjections (totals)
- GET /api/company-crm?companyId=X → Hydrates CompanyCrmList

**Key Architecture Pattern**: 
- **Items Model** (Spend) → Ingest individual transactions, calculate totals
- **Totals Model** (Projection) → Ingest total values directly

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

**Note**: Older repos (`gofastfrontend-mvp1`, `gofastfrontend-demo`) use React 18 + Vite 5, which still works. New repos should use React 19 + Vite 7 for latest features.

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

#### `src/main.jsx` (React Entry Point - ALL Apps)
**Location**: `/[project-root]/src/main.jsx`

**STANDARD PATTERN**: Simple entry point - just renders App

```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

#### `src/App.jsx` (Main routing component - ALL Apps)
**Location**: `/[project-root]/src/App.jsx`

**KEY PATTERN**: Route `/` ALWAYS points to the main hub page (Home/Welcome/AdminNav)

**STANDARD PATTERN**: BrowserRouter goes in App.jsx, not main.jsx

```javascript
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
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
- ✅ **main.jsx** is simple - just renders `<App />`
- ✅ **App.jsx** has BrowserRouter + Routes + Layout
- ✅ Route `/` → Always main hub (Home/Welcome/[AppName]Nav)
- ✅ All other routes → Feature pages
- ✅ Hub page provides navigation cards to other features

**Standard Pattern**: BrowserRouter in App.jsx, main.jsx is just the render entry point

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

**Standard (lowercase)**:
```
src/
├── api/              # API calls (axiosConfig.js, etc.)
├── components/        # Reusable components (lowercase - STANDARD)
│   └── ui/           # shadcn/ui components (button, card, etc.)
├── pages/            # Page components (lowercase - STANDARD)
├── utils/            # Utility functions
├── App.jsx           # Main app component with routing
├── main.jsx          # Entry point
├── firebase.js       # Firebase config (REQUIRED for production apps)
└── index.css         # Global styles + Tailwind imports
```

**Note**: Older repos use `src/Pages/` and `src/Components/` (capital letters). New repos should use lowercase for consistency.

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
- **shadcn/ui** (button, card via radix-ui)
- **NO Firebase** ❌
- **NO Authentication** ❌

### Required Files

#### `package.json`
```json
{
  "name": "gofast-[demo-name]",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.28.0",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.1",
    "lucide-react": "^0.472.0",
    "tailwind-merge": "^2.5.2",
    "@radix-ui/react-slot": "^1.1.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.3",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.15",
    "vite": "^5.4.10"
  }
}
```

**Key Differences from Pattern 1:**
- ❌ No `firebase` dependency
- ❌ No `axios` (unless testing API calls)
- ✅ shadcn/ui dependencies (class-variance-authority, clsx, tailwind-merge, @radix-ui/react-slot)
- ✅ Minimal, optimized dependencies

#### `vite.config.js`
```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
```

#### `src/main.jsx` (React Entry Point)
```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

#### `src/App.jsx` (Main routing component)
```javascript
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
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
- ✅ **main.jsx** is simple - just renders `<App />`
- ✅ **App.jsx** has BrowserRouter + Routes + Layout
- ✅ Route `/` → Always main hub (Home/Welcome/[AppName]Nav)
- ✅ All other routes → Feature pages
- ✅ Hub page provides navigation cards to other features

**Standard Pattern**: BrowserRouter in App.jsx, main.jsx is just the render entry point

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

**Key Convention**: All pages go in: **`src/pages/`** (lowercase)

**Note**: Older repos (`gofastfrontend-demo`, `gofastfrontend-mvp1`) use `src/Pages/` (capital P) - this is **legacy**. New repos should use lowercase `src/pages/` for consistency.

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

### Page Header Component (Standardized Top-of-Page Pattern)

**REQUIRED**: All pages should use the standardized `PageHeader` component for consistent top-of-page structure.

**Location**: `src/components/PageHeader.jsx`

**Component Structure**:
```javascript
import PageHeader from '../components/PageHeader';

export default function MyPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <PageHeader
        title="Page Title"
        subtitle="Optional subtitle text"
        backTo="/previous-page"
        backLabel="Back to Previous"
        actions={<button>Optional Action</button>}
      />
      
      {/* Page content below */}
    </div>
  );
}
```

**Props**:
- `title` (required): Main page title (h1, 4xl font-bold)
- `subtitle` (optional): Description text below title (text-lg, gray-600)
- `backTo` (optional): Route path for back navigation link
- `backLabel` (optional): Text for back link (default: "Back")
- `actions` (optional): React elements for action buttons (right side of header)

**Standard Pattern**:
1. ✅ **Back Link**: Always include if not on main hub (`/`)
2. ✅ **Title**: Large, bold, descriptive page title
3. ✅ **Subtitle**: Brief description of page purpose (optional but recommended)
4. ✅ **Actions**: Optional action buttons on right side (Save, Export, etc.)

**Example Implementation**:
```javascript
// src/components/PageHeader.jsx
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function PageHeader({ 
  title, 
  subtitle, 
  backTo, 
  backLabel = 'Back',
  actions
}) {
  return (
    <div className="mb-8">
      {backTo && (
        <Link
          to={backTo}
          className="text-sm text-gray-600 hover:text-gray-900 mb-6 inline-flex items-center gap-1"
        >
          <ArrowLeft className="h-4 w-4" />
          {backLabel}
        </Link>
      )}
      
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-2">{title}</h1>
          {subtitle && <p className="text-gray-600 text-lg">{subtitle}</p>}
        </div>
        
        {actions && <div className="flex items-center gap-3">{actions}</div>}
      </div>
    </div>
  );
}
```

**Why This Pattern?**:
- ✅ Consistent top-of-page structure across all pages
- ✅ Standardized back navigation
- ✅ Clear visual hierarchy (title → subtitle → content)
- ✅ Space for action buttons when needed
- ✅ Responsive layout (stacks on mobile)

**When to Use**:
- ✅ **All feature pages** (not main hub pages)
- ✅ **Detail pages** (view/edit individual items)
- ✅ **Form pages** (create/edit forms)
- ✅ **Dashboard pages** (analytics, overview pages)

**When NOT to Use**:
- ❌ Main hub page (`/`) - hub pages have their own header style
- ❌ Auth/login pages - special layout

### UI Components (shadcn/ui)
Standard component library used across all apps:
- `components/ui/button.jsx`
- `components/ui/card.jsx`
- `components/ui/input.jsx`
- `components/ui/table.jsx`
- `components/PageHeader.jsx` ⭐ **Standardized page header**

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

### Hydration Hooks Pattern

**CRITICAL**: Hydration hooks MUST call backend APIs, not use mock data.

**Standard Pattern**:
```javascript
// ❌ DON'T: Mock data in hooks
const mockData = { ... };
const data = mockData; // NO!

// ✅ DO: Call backend API
import { apiRequest } from '../lib/api.js';
const url = parentApi.hydrate(parentId);
const data = await apiRequest(url);
```

**Hook Structure**:
1. **Check localStorage cache first** (for fast initial render)
2. **Call backend API** (to get fresh data)
3. **Cache response to localStorage** (for future loads)
4. **Handle errors gracefully** (fallback to cache if API fails)

**Example Hook**:
```javascript
// src/hooks/useHydrateParent.js
import { useState, useEffect } from 'react';
import { parentApi, apiRequest } from '../lib/api.js';

export const useHydrateParent = (parentId) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hydrate = async () => {
      const cacheKey = `bgr_parent_${parentId}_data`;
      
      // 1. Check cache for fast render
      const cached = localStorage.getItem(cacheKey);
      if (cached) {
        setData(JSON.parse(cached));
      }

      try {
        // 2. Call backend API
        const url = parentApi.hydrate(parentId);
        const data = await apiRequest(url);
        
        // 3. Set state and cache
        setData(data);
        localStorage.setItem(cacheKey, JSON.stringify(data));
      } catch (err) {
        // 4. Handle errors (use cache if available)
        console.error('Hydration error:', err);
        if (!cached) throw err;
      } finally {
        setLoading(false);
      }
    };

    hydrate();
  }, [parentId]);

  return { data, loading };
};
```

**Key Points**:
- ✅ Use `lib/api.js` helpers (`apiRequest`, entity-specific API functions)
- ✅ Entity-specific routes (not generic `/api/hydrate?type=X`)
- ✅ localStorage cache key pattern: `{entity}_{id}_data`
- ✅ Always hydrate on page load (cache is just for fast initial render)
- ✅ Error handling with cache fallback

**File Location**: `src/hooks/useHydrate[Entity].js`

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

**Important Build Notes**:
- ✅ **Pattern 2** (Demo/Scaffold): Use React 18 + Vite 5 (`gofastfounderoutlook`, `gofastcompanyoutlook` are correct)
- ✅ **Pattern 1** (Production): Can use React 19 + Vite 7 OR React 18 + Vite 5 (both work)
- ✅ **vite.config.js**: Simple config with just `plugins: [react()]` - no path aliases
- ⚠️ **Legacy repos**: `gofastfrontend-demo` and `gofastfrontend-mvp1` use React 18 + Vite 5 (still working)
- ✅ **Latest repo**: `gofast-user-dashboard` uses React 19 + Vite 7 (recommended for new repos)

**Working Examples**: 
- Production: `gofastfrontend-mvp1` (React 18), `gofast-user-dashboard` (React 19)
- Scaffold: `gofastfounderoutlook`, `gofastcompanyoutlook` (React 18)

