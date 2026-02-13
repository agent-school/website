# Agent School Design System — Component Library

> Complete reference for all UI components in the print-inspired design system (v3)

**Last Updated:** 2026-02-12  
**File:** `static/design-system-test.html`  
**Total Lines:** 2,308

---

## 🎨 Design Tokens

### Color System
- **Sage (Primary 60%)** — #E8F0E3 (100) → #8FB570 (500)
  - Main brand color
  - Agent-related elements
  - Primary interactions
  
- **Orange (Secondary 30%)** — #FFEDD5 (100) → #F97316 (500)
  - Accent moments
  - User-related elements
  - Secondary CTAs

- **Monochrome (10%)** — #FAFAFA → #2A2A2A
  - Structure and text
  - #E0E0E0, #D4D4D4 for hairline borders

### Typography
- **Libre Bodoni** (serif) — Headlines, numbers, brand moments
- **Inter** (sans, 300-600) — UI elements, body text
- **JetBrains Mono** (mono, 400) — Code blocks, data labels

### Signature Elements
- **Hollow Circles** — ○ in sage and orange variations (12px, 20px, 32px)
- **Hairline Grid Structure** — 1px borders creating magazine-like layouts
- **Asymmetrical Layouts** — 2/3 + 1/3 splits, staggered columns
- **No Dark Mode** — Light mode only for initial launch
- **Flat Design** — No rounded corners (except step pills)

---

## 📐 Layout Components

### 1. **Navigation (Pop-Down)**
**Location:** Top of page  
**Interaction:** Pops down from top-right on click

```html
<button class="btn-primary" onclick="toggleNav()">MENU</button>
<div id="navMenu">...</div>
<div id="navOverlay" onclick="toggleNav()"></div>
```

**Features:**
- Half-screen width overlay
- Large serif links with alternating sage/orange hovers
- Quick Links section with Lucide icons
- Smooth cubic-bezier transition

---

### 2. **Asymmetrical Grids**
**Pattern:** Editorial magazine layouts

```html
<!-- 2/3 + 1/3 Split -->
<div class="asymmetric-grid">
  <div>2/3 content</div>
  <div>1/3 sidebar</div>
</div>

<!-- 1/3 + 2/3 Reversed -->
<div class="asymmetric-grid-3">
  <div>1/3 sidebar</div>
  <div>2/3 content</div>
</div>

<!-- Hairline Grid (1px gaps) -->
<div class="grid md:grid-cols-3 gap-1 bg-hairline p-1">
  <div class="border border-hairline bg-white p-6">Card 1</div>
  <div class="border border-hairline bg-white p-6">Card 2</div>
  <div class="border border-hairline bg-white p-6">Card 3</div>
</div>
```

---

## 🧩 UI Primitives

### 3. **Buttons**
**Weight:** Font-weight 400 (light), 1px borders

```html
<!-- Primary (Sage hover) -->
<button class="btn-primary">GET STARTED</button>

<!-- Secondary (Orange hover) -->
<button class="btn-secondary">LEARN MORE</button>

<!-- With Hollow Circle Accent -->
<button class="btn-primary inline-flex items-center gap-2">
  <span>BOOK DEMO</span>
  <span class="hollow-circle-orange"></span>
</button>
```

---

### 4. **Hollow Circle Variations**
**Signature Brand Element**

```html
<!-- Sage Variations -->
<span class="hollow-circle"></span>          <!-- 12px -->
<span class="hollow-circle-lg"></span>       <!-- 20px -->
<span class="hollow-circle-xl"></span>       <!-- 32px -->
<span class="filled-circle"></span>          <!-- 12px filled -->

<!-- Orange Variations -->
<span class="hollow-circle-orange"></span>   <!-- 12px -->
<span class="filled-circle-orange"></span>   <!-- 12px filled -->
```

**Usage Pattern:**
- Alternating sage/orange throughout page
- Before list items
- In button CTAs
- As section accents

---

### 5. **Stats Band**
**Numbers:** 2/3 size (text-6xl/7xl, not 8xl/9xl)

```html
<div class="grid md:grid-cols-4 gap-8">
  <div class="text-center">
    <div class="flex items-center justify-center gap-2 mb-3">
      <span class="hollow-circle"></span>
      <p class="font-mono text-xs uppercase">ACCURACY</p>
    </div>
    <p class="headline-serif text-6xl text-charcoal-900">99%</p>
  </div>
</div>
```

---

### 6. **Code Block Component**
**Features:** Line numbers, syntax highlighting, hairline separators

```html
<div class="code-block">
  <div class="code-line">
    <span class="line-number">1</span>
    <span class="code-content">
      <span class="code-keyword">function</span>
      <span class="code-string">"checkIn"</span>
      <span class="code-comment">// Orange strings, sage keywords</span>
    </span>
  </div>
</div>
```

**Syntax Colors:**
- Keywords → Sage green (#8FB570)
- Strings → Orange (#FB923C)
- Comments → Gray italic (#9A9A9A)

---

## 🎭 Interactive Components

### 7. **Methodology Phases (Interactive Pills)**
**Pattern:** 3 clickable phases that switch content

```html
<div class="flex items-center gap-4">
  <button class="phase-pill active" onclick="showPhase(1, this)">
    <span class="filled-circle"></span>
    <span>PHASE 01 — CARTOGRAPHY</span>
  </button>
  <!-- Additional pills... -->
</div>

<div id="phase-1" class="phase-content">
  <!-- Phase 1 content with alternating sage/orange icons -->
</div>
```

**Behavior:**
- Active pill has filled circle + bold text
- Inactive pills have hollow circle + gray text
- Content switches via JavaScript

---

### 8. **Chat Interface (Agent vs User)**
**Pattern:** Sage for agent, orange for user

```html
<!-- Agent Message (Sage) -->
<div class="flex items-start gap-3 mb-4">
  <div class="w-8 h-8 rounded-full bg-sage-300 flex items-center justify-center">
    <i data-lucide="cpu" class="w-4 h-4 text-sage-500"></i>
  </div>
  <div class="flex-1">
    <div class="bg-sage-100 border border-sage-300 p-4">
      <p class="text-sm text-charcoal-900">Agent response</p>
    </div>
    <p class="text-xs text-charcoal-500 mt-1">12:34 PM</p>
  </div>
</div>

<!-- User Message (Orange) -->
<div class="flex items-start gap-3 mb-4 flex-row-reverse">
  <div class="w-8 h-8 rounded-full bg-orange-300 flex items-center justify-center">
    <i data-lucide="user" class="w-4 h-4 text-orange-500"></i>
  </div>
  <div class="flex-1">
    <div class="bg-orange-100 border border-orange-300 p-4 text-right">
      <p class="text-sm text-charcoal-900">User query</p>
    </div>
    <p class="text-xs text-charcoal-500 mt-1 text-right">12:35 PM</p>
  </div>
</div>
```

---

### 9. **Integration Circles**
**Pattern:** 10 platform icons with alternating sage/orange hovers

```html
<div class="integration-circle">
  <i data-lucide="database" class="w-6 h-6 text-charcoal-700"></i>
</div>

<div class="integration-circle orange">
  <i data-lucide="mail" class="w-6 h-6 text-charcoal-700"></i>
</div>
```

**Hover Behavior:**
- Lift animation (translateY -4px)
- Border color changes to sage or orange
- Icon color intensifies

---

### 10. **FAQ Accordion**
**Pattern:** Expandable Q&A with chevron rotation

```html
<div class="faq-item border border-hairline bg-white">
  <button class="faq-question w-full text-left p-6 flex items-center justify-between" 
          onclick="toggleFaq(this)">
    <span class="text-base font-medium text-charcoal-900">Question?</span>
    <i data-lucide="chevron-down" class="w-5 h-5 text-charcoal-500 transition-transform"></i>
  </button>
  <div class="faq-answer hidden px-6 pb-6">
    <p class="text-sm text-charcoal-700 leading-relaxed">Answer content</p>
  </div>
</div>
```

**JavaScript:**
```js
function toggleFaq(button) {
  const answer = button.parentElement.querySelector('.faq-answer');
  const icon = button.querySelector('i');
  answer.classList.toggle('hidden');
  icon.style.transform = answer.classList.contains('hidden') 
    ? 'rotate(0deg)' 
    : 'rotate(180deg)';
}
```

---

### 11. **ROI Calculator (Interactive)**
**Pattern:** Real-time calculation widget

```html
<input type="number" id="tasksPerMonth" value="400" oninput="calculateROI()" />
<p class="headline-serif text-6xl text-orange-500">
  <span id="hoursSaved">100</span><span class="text-3xl">h</span>
</p>
```

**Calculations:**
- Automation rate: 95%
- Hours saved = (tasks × minutes × rate) / 60
- Cost saved = hours × hourly cost
- ROI = annual savings / (subscription cost × 12)
- Payback period in months

---

### 12. **Use Case Tabs (Before/After)**
**Pattern:** Tabbed interface showing transformation

```html
<button class="use-case-tab active" data-case="hotel" onclick="switchUseCase('hotel', this)">
  <i data-lucide="hotel" class="w-4 h-4"></i>
  <span>Hotel Operations</span>
</button>

<div id="use-case-hotel" class="use-case-content">
  <!-- Before/After asymmetrical grid -->
  <div class="grid md:grid-cols-2 gap-1 bg-hairline p-1">
    <div class="border border-hairline bg-white p-8">BEFORE</div>
    <div class="border-2 border-sage-400 bg-sage-100 p-8">AFTER</div>
  </div>
</div>
```

**Tab States:**
- Active: sage-100 background, sage-500 border, font-weight 500
- Hover: sage-300 border
- Default: white background, hairline border

---

## 📑 Section Components

### 13. **Social Proof / Testimonials**
**Layout:** Asymmetrical 2/3 featured + 1/3 stats

**Structure:**
- Featured testimonial (large serif quote)
- Side stats cards (3 metrics)
- 3-column grid of additional testimonials
- Alternating sage/orange circle accents

---

### 14. **Pricing Tiers**
**Layout:** 3-column grid with middle tier highlighted

**Features:**
- Orange-300 border on "Most Popular" tier
- Filled circle checkmarks (sage for tier 1/3, orange for tier 2)
- 2/3 size numbers (text-6xl) for pricing
- Uppercase labels with JetBrains Mono

---

### 15. **Final CTA Section**
**Layout:** Centered with trust indicators

**Elements:**
- XL hollow circle (32px) at top
- Large serif headline (text-6xl/7xl)
- Two CTA buttons (primary sage, secondary)
- Trust badges with icons (SOC 2, GDPR, SLA)

---

## 🎨 Component Patterns

### Alternating Color Rhythm
Throughout the page, sage and orange alternate to create visual rhythm without overwhelming:

```
Section 1: Sage accent
Section 2: Orange accent
Section 3: Sage accent
Section 4: Orange accent
...
```

### Hairline Grid Structure
Use 1px gaps with hairline background color to create magazine-like editorial layouts:

```html
<div class="grid md:grid-cols-3 gap-1 bg-hairline p-1">
  <div class="border border-hairline bg-white p-6">Card</div>
</div>
```

### Hollow Circle Placement
- Before section headers
- In stat metrics
- Before list items
- In button CTAs
- As feature bullets

---

## 🛠️ JavaScript Functions

### Navigation
```js
toggleNav() // Show/hide navigation overlay
```

### Methodology
```js
showPhase(phaseNum, button) // Switch active phase
```

### FAQ
```js
toggleFaq(button) // Expand/collapse answer
```

### ROI Calculator
```js
calculateROI() // Update all calculated fields
```

### Use Cases
```js
switchUseCase(caseId, button) // Switch active tab
```

---

## 📦 External Dependencies

### Fonts (Google Fonts)
- Libre Bodoni (serif, 400/700 + italic)
- Inter (sans, 300/400/500/600)
- JetBrains Mono (mono, 400)

### Icons (Lucide via Unpkg CDN)
```html
<script src="https://unpkg.com/lucide@latest"></script>
<script>lucide.createIcons();</script>
```

### CSS Framework (Tailwind via CDN)
```html
<script src="https://cdn.tailwindcss.com"></script>
```

---

## 🎯 Component Usage Checklist

When creating a new section, ensure:

- [ ] Proper sage/orange alternation maintained
- [ ] Hollow circles used consistently (○)
- [ ] 1px hairline borders for grid structures
- [ ] Typography hierarchy correct (serif for headlines, sans for body)
- [ ] Numbers are 2/3 size (text-6xl/7xl, not 8xl/9xl)
- [ ] Buttons use light styling (1px border, font-weight 400)
- [ ] Lucide icons initialized after DOM content
- [ ] Asymmetrical layouts where appropriate
- [ ] Interactive elements have JavaScript handlers

---

## 📝 Notes for React Migration

When migrating to Next.js/React:

1. **Convert inline styles** → Tailwind classes or CSS modules
2. **Extract JavaScript** → React state + event handlers
3. **Create reusable components:**
   - `<HollowCircle variant="sage" size="md" />`
   - `<PhaseToggle phases={...} />`
   - `<UseCaseTabs cases={...} />`
   - `<FAQAccordion items={...} />`
   - `<ROICalculator />`
4. **Add animations:** Use Framer Motion for micro-interactions
5. **Optimize icons:** Use `lucide-react` package instead of CDN
6. **Type safety:** Add TypeScript interfaces for all props

---

**Total Components:** 21 major + 15+ variations  
**Total Sections:** 17 (Hero → Footer + 6 page templates)  
**Interactive Elements:** 5 (Nav, Phases, FAQ, ROI, Use Cases)  
**Color Applications:** ~450 instances of sage/orange alternation

---

## 📄 Page Templates (New)

### 16. **Blog Landing Page**
**Pattern:** Featured article + recent posts sidebar + article grid

```html
<!-- Featured Article (2/3) + Recent Posts (1/3) -->
<div class="asymmetric-grid">
  <div class="border-2 border-sage-400 bg-sage-100 p-10">
    <h2>Featured Article</h2>
    <!-- Content -->
  </div>
  <div class="border border-hairline bg-white p-8">
    <p>Recent Posts</p>
    <!-- Sidebar -->
  </div>
</div>

<!-- Article Grid (2 columns) -->
<div class="grid md:grid-cols-2 gap-1 bg-hairline p-1">
  <div class="border border-hairline bg-white p-8">Article 1</div>
  <div class="border border-hairline bg-white p-8">Article 2</div>
</div>
```

### 17. **Blog Post Template**
**Pattern:** Long-form article layout with typography hierarchy

**Elements:**
- Back navigation link
- Article header (headline, author, date, reading time)
- Body content with headings, paragraphs, lists
- Pull quotes (sage-100 background, serif italic)
- Code examples (off-white-2 background, mono font)
- Final CTA box

### 18. **Competitor Comparison Page**
**Pattern:** Feature comparison table with Agent School highlighted

**Table Structure:**
```html
<table class="w-full bg-white">
  <thead>
    <tr>
      <th>FEATURE</th>
      <th class="bg-sage-100 border-x-2 border-sage-400">Agent School</th>
      <th>Traditional RPA</th>
      <th>Low-Code Platforms</th>
      <th>Pure AI Agents</th>
    </tr>
  </thead>
  <tbody>
    <!-- Each row compares a feature -->
    <tr>
      <td>Training Time</td>
      <td class="bg-sage-100">14 days</td>
      <td>4-8 weeks</td>
      <td>6-12 weeks</td>
      <td>2-4 weeks</td>
    </tr>
  </tbody>
</table>
```

**Features Compared:**
- Training time
- Reliability (with check/x icons)
- Execution speed
- Self-healing capability
- Monthly cost per agent
- Maintenance burden

### 19. **Terms of Service Page**
**Pattern:** Legal document layout with numbered sections

**Structure:**
- Page header (legal overline, large title, last updated date)
- Numbered sections with hollow circle icons (alternating sage/orange)
- Mix of paragraphs, lists, and info boxes
- Highlighted sections with colored backgrounds
- Contact information at bottom

**Sections:**
1. Acceptance of Terms
2. Service Description
3. User Responsibilities
4. Payment Terms
5. Intellectual Property
6. Service Level Agreement

### 20. **Privacy Policy Page**
**Pattern:** Legal document with data protection details

**Structure:**
- Similar to Terms of Service layout
- Sections with hollow circle icons
- Grid layouts for feature breakdowns (2-column)
- Security measures in sage-100 info boxes
- GDPR rights in 2x2 grid
- Contact information

**Sections:**
1. Information We Collect
2. How We Use Your Information
3. Data Security
4. Data Retention
5. Your Rights (GDPR)

### 21. **Security & Compliance Page**
**Pattern:** Trust-building page with certifications and details

**Structure:**
- Certifications grid (3 columns: SOC 2, GDPR, ISO 27001)
- Asymmetrical layout (2/3 features + 1/3 stats)
- Infrastructure security features with icons
- Compliance details in 2-column grid
- Final CTA

**Key Elements:**
- Circular certification badges (16px icons in bordered circles)
- Feature list with Lucide icons (alternating sage/orange)
- Stats sidebar (99.9% uptime, 24/7 monitoring, <4h response)
- Compliance details (audits, data protection)

---

## 📊 Updated Statistics

**File Growth:**
- **Before this session:** 1,391 lines
- **After initial expansion:** 2,446 lines (+1,055 lines)
- **After page templates:** 3,282 lines (+836 more lines)
- **Total growth:** +1,891 lines (+136% increase)

**Component Breakdown:**
- **15 section components** (hero, stats, features, testimonials, FAQ, etc.)
- **6 page templates** (blog landing, blog post, comparison, terms, privacy, security)
- **21 major components** total
- **15+ variations** (buttons, circles, cards, grids)
- **5 interactive elements** (nav, phases, FAQ, ROI, use cases)

**Design Applications:**
- ~450 instances of sage/orange alternation
- 60% sage (primary brand)
- 30% orange (secondary accent)
- 10% monochrome (structure/text)

---

*This design system is ready for production implementation in Next.js.*
