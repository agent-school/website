# 🗺️ Agent School Website - Complete Sitemap

**Domain:** https://agentschool.io  
**Architecture:** Single-page application (SPA) with separate demo pages  
**Framework:** Next.js 16 (App Router)

---

## 📄 Primary Pages

### 1. Homepage `/` 
**URL:** `https://agentschool.io`  
**Type:** Single-page app with anchor sections  
**Status:** ✅ Production

This is the MAIN page - a long-scroll single-page app with 6 major sections:

#### Sections (accessible via navbar):

1. **Hero** (Top)
   - URL: `/` or `/#hero`
   - Headline: "Turn Human Knowledge Into AI That Never Forgets"
   - CTA: "Book a Call" → https://cal.com/jackagentschool/15min

2. **Features** 
   - URL: `/#features`
   - 3 feature cards:
     - Teach Once, Automate Forever (Skill Builder)
     - 99% Reliability, Guaranteed (Certification)
     - Perfect Transparency (Script Viewer)
   - Interactive hover cards with animations

3. **How It Works** (Journey)
   - URL: `/#journey`
   - Timeline visualization of the agent creation process
   - 4 steps: Demonstrate → Certify → Deploy → Scale

4. **Compare** (Differentiation)
   - URL: `/#differentiation`
   - Comparison table: Agent School vs Traditional Automation
   - Feature-by-feature breakdown

5. **Use Cases** 
   - URL: `/#use-cases`
   - **Interactive demos** (3 tabbed + 2 additional):
     - Hotel Operations (Hotel PMS)
     - Sales Automation (CRM)
     - Operations (Notion Task Database)
     - Instagram DM Categorization
     - Granola Meeting Notes
   - Each demo is fully interactive with AI agent interface

6. **CTA** (Call to Action)
   - Final section with booking call
   - Contact: hello@agentschool.io

**Components:**
- Navbar (sticky top navigation)
- Footer (company info, social links)

---

## 🎮 Demo Pages (Separate Routes)

These are **standalone pages** featuring individual interactive demos:

### 1. Hotel PMS Demo
**URL:** `/demos/hotel-pms`  
**File:** `src/app/demos/hotel-pms/page.tsx`  
**Status:** ✅ Live

**Features:**
- Reservations dashboard
- Room availability tracking
- Guest management
- Agent Interface for queries like:
  - "How many arrivals today?"
  - "Show room 305"
  - "Which rooms need cleaning?"

### 2. CRM Demo
**URL:** `/demos/crm`  
**File:** `src/app/demos/crm/page.tsx`  
**Status:** ✅ Live

**Features:**
- Sales pipeline Kanban board
- Deal tracking
- Contact management
- Agent Interface for queries like:
  - "Show high priority deals"
  - "Filter deals closing this week"
  - "Update Sarah's deal stage"

### 3. Granola Meeting Notes Demo
**URL:** `/demos/granola`  
**File:** `src/app/demos/granola/page.tsx`  
**Status:** ✅ Live

**Features:**
- Meeting transcript viewer
- Action item extraction
- AI-powered summarization
- Agent Interface for queries like:
  - "What were the key decisions?"
  - "List all action items"
  - "Who is responsible for the API integration?"

---

## 🧪 Test Pages (Development Only)

These pages are for **testing and debugging** - not linked from production:

### 1. Test Demos
**URL:** `/test-demos`  
**File:** `src/app/test-demos/page.tsx`  
**Status:** 🔨 Dev only

**Purpose:** Standalone test page for all demos (created during bug fix)

### 2. Test Notion
**URL:** `/test-notion`  
**File:** `src/app/test-notion/page.tsx`  
**Status:** 🔨 Dev only

**Purpose:** Isolated testing for Notion demo component

---

## 🧭 Navigation Structure

### Top Navigation (Navbar)
```
┌─────────────────────────────────────────────────────┐
│ [Logo] Agent School                                  │
│                                                      │
│ Features | How It Works | Compare | Use Cases       │
│                                     [Book a Call] →  │
└─────────────────────────────────────────────────────┘
```

All nav items are **anchor links** to sections on the homepage:
- Features → `/#features`
- How It Works → `/#journey`
- Compare → `/#differentiation`
- Use Cases → `/#use-cases`
- Book a Call → https://cal.com/jackagentschool/15min (external)

### Footer
- Company: Agent School
- Email: hello@agentschool.io
- LinkedIn: https://linkedin.com/company/agentschool
- Copyright © 2026

---

## 📊 Page Type Breakdown

| Type | Count | Examples |
|------|-------|----------|
| Main SPA | 1 | Homepage with 6 sections |
| Demo Pages | 3 | Hotel PMS, CRM, Granola |
| Test Pages | 2 | Test Demos, Test Notion |
| **Total** | **6** | **Accessible routes** |

---

## 🎯 Primary User Flow

```
1. Land on Homepage (/)
   ↓
2. Scroll through sections:
   - Hero → Features → Journey → Compare → Use Cases → CTA
   ↓
3. Interact with demos in Use Cases section
   - Hotel Operations tab
   - Sales Automation tab
   - Operations tab
   - Instagram demo
   - Granola demo
   ↓
4. Click "Book a Call" CTA
   ↓
5. External: cal.com booking page
```

---

## 🔗 All Accessible URLs

### Production Routes ✅
```
/                           # Homepage (main SPA)
/#features                  # Features section
/#journey                   # How It Works section
/#differentiation           # Compare section
/#use-cases                 # Interactive demos section
/demos/hotel-pms           # Hotel PMS standalone demo
/demos/crm                 # CRM standalone demo
/demos/granola             # Granola standalone demo
```

### Development/Test Routes 🔨
```
/test-demos                # All demos test page
/test-notion               # Notion demo test page
```

### External Links 🔗
```
https://cal.com/jackagentschool/15min  # Booking calendar
https://linkedin.com/company/agentschool  # LinkedIn
mailto:hello@agentschool.io  # Contact email
```

---

## 📱 Responsive Behavior

All pages support:
- ✅ Desktop (1920px+)
- ✅ Tablet (768px - 1919px)
- ✅ Mobile (320px - 767px)

Navigation collapses to hamburger menu on mobile.

---

## 🎨 Design System

- **Colors:** Teal-orange gradient (Cyber Citrus palette)
- **Fonts:** 
  - Display: Fraunces (serif)
  - Body: DM Sans (sans-serif)
  - Code: JetBrains Mono
- **Dark Mode:** Auto-detect system preference
- **Animations:** Framer Motion (scroll reveals, hover effects)

---

## 🚀 Key Features Per Page

### Homepage `/`
- ✅ Interactive scroll animations
- ✅ 5 embedded interactive demos
- ✅ Gradient backgrounds
- ✅ Timeline visualization
- ✅ Comparison tables
- ✅ Call-to-action buttons

### Demo Pages `/demos/*`
- ✅ Full-screen demo UI
- ✅ Agent Interface sidebar
- ✅ Suggested queries
- ✅ Real-time mock data updates
- ✅ Natural language processing
- ✅ Response streaming

---

## 📂 File Structure

```
src/app/
├── page.tsx                    # Homepage (/)
├── layout.tsx                  # Root layout (wraps all pages)
├── sitemap.ts                  # SEO sitemap generator
├── demos/
│   ├── hotel-pms/page.tsx     # /demos/hotel-pms
│   ├── crm/page.tsx           # /demos/crm
│   └── granola/page.tsx       # /demos/granola
├── test-demos/page.tsx        # /test-demos (dev only)
└── test-notion/page.tsx       # /test-notion (dev only)
```

---

## 🔍 SEO & Discoverability

### Sitemap.xml
**URL:** `https://agentschool.io/sitemap.xml`  
**Generated by:** `src/app/sitemap.ts`

**Included URLs:**
- Homepage (priority 1.0)
- All section anchors (priority 0.8)

**Note:** Demo pages are NOT in sitemap (internal testing only)

### Meta Tags
All pages include:
- Title: "Agent School - Turn Human Knowledge Into AI"
- Description: "Teach AI agents your workflows. Certify them. Deploy with confidence."
- Open Graph images for social sharing
- Twitter card metadata

---

## 🎯 Answer to Your Question

### "Is this multiple page?"

**Answer:** **It's BOTH!**

1. **Main Site:** Single-page app (SPA)
   - One long-scrolling page with 6 sections
   - All accessible via anchor links (`/#section`)
   - Navbar links scroll smoothly to sections
   - Demos are embedded in the "Use Cases" section

2. **Separate Demo Pages:** 3 standalone pages
   - `/demos/hotel-pms`
   - `/demos/crm`
   - `/demos/granola`
   - Same demos as homepage, but in full-screen format
   - Useful for deep-linking to specific demos

### What You Can Access:

**Primary experience:**
- Visit `/` (homepage)
- Scroll through all sections
- Interact with 5 demos in the Use Cases section

**Alternative experience:**
- Visit `/demos/hotel-pms` to see just the Hotel PMS demo
- Visit `/demos/crm` to see just the CRM demo
- Visit `/demos/granola` to see just the Granola demo

**Recommended:** Start at `/` and scroll through the full experience!

---

## 🧪 Testing the Site

### Local Development:
```bash
npm run dev
# Visit http://localhost:3000
```

### Test Each Route:
```bash
# Homepage sections
http://localhost:3000
http://localhost:3000/#features
http://localhost:3000/#journey
http://localhost:3000/#differentiation
http://localhost:3000/#use-cases

# Demo pages
http://localhost:3000/demos/hotel-pms
http://localhost:3000/demos/crm
http://localhost:3000/demos/granola

# Test pages
http://localhost:3000/test-demos
http://localhost:3000/test-notion
```

---

## 📊 Traffic Distribution (Expected)

| Page/Section | Expected Traffic | Purpose |
|-------------|------------------|---------|
| Homepage (/) | 90% | Main landing page |
| #use-cases | 60% | Interactive demos (key conversion driver) |
| /demos/* | 8% | Deep links, specific demos |
| /test-* | 2% | Internal testing only |

---

## 🎯 Conversion Funnel

```
Landing (/) 
  ↓ (100%)
Scroll to Features
  ↓ (80%)
View Use Cases demos
  ↓ (50%)
Interact with demos
  ↓ (20%)
Click "Book a Call"
  ↓ (10%)
Complete booking
```

**Key conversion point:** Use Cases section with interactive demos  
**Primary CTA:** Book a call → https://cal.com/jackagentschool/15min

---

**Last Updated:** February 10, 2026  
**Maintained By:** Agent School Development Team  
**Production URL:** https://agentschool.io
