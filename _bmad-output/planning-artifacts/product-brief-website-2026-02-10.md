---
stepsCompleted: [1, 2, 3, 4, 5, 6]
inputDocuments:
  - "(master) AS 3: Website (Notion page ID: 2ff8a2eef32080338e72fa7564b12454)"
  - "Business Proposal Draft (Notion page ID: 2e78a2eef32080a4bdb3d72d3486b0e4)"
  - "docs/index.md"
  - "Session history and Party Mode feedback (Mary, John, Sally)"
date: 2026-02-10
completed_date: 2026-02-12
author: Jack (with Party Mode feedback from Mary/Business Analyst, John/Product Manager, Sally/UX Designer)
---

# Product Brief: Agent School Website Redesign

## Executive Summary

### Purpose

The Agent School Website serves as a **dual-purpose strategic asset**:

1. **Conversion Vehicle:** Drive demo bookings from companies with undocumented legacy software automation needs
2. **Discovery Engine:** Validate which industry workflows resonate most to identify beachhead market

This Product Brief defines the vision, user personas, success metrics, and MVP scope for a 6-week website redesign that transforms the site from an academic presentation into a futuristic, conversion-optimized platform.

### The Core Problem

Companies are trapped in "automation hell" with legacy software systems (ERP, PMS, CRM) that:
- Lack APIs or documentation
- Require 2-10+ hours daily of manual data entry and system-juggling
- Break existing automation tools (RPA, Zapier, AI agents) when UIs update
- Cannot be replaced (too expensive, too risky, too embedded in operations)

### The Solution

Agent School teaches AI agents to automate workflows on ANY legacy software through:
1. **Natural Teaching Interface:** Show agent workflow once → Agent learns (no scripting required)
2. **Certification System:** Agent gets tested rigorously before deployment (reliability guarantee)
3. **Self-Healing Architecture:** Agent adapts when systems change (no maintenance costs)

### Key Differentiators

1. **Certification:** Strategic advantage in development (vs. 80% black-box AI that "mostly works")
2. **Self-Healing:** Adapts to UI changes automatically (vs. RPA breaking constantly)
3. **Works on Undocumented Systems:** Competitive moat (everyone else avoids this hard problem)
4. **10x Cheaper Economics:** One-time teaching cost vs. ongoing prompting/maintenance

### MVP Strategy (6 Weeks)

**Must-Have Features:**
- Generic homepage (emotionally relatable across industries)
- Interactive workflow selector (2-3 examples: ERP, Property Management, optional CRM)
- Teaching + Certification demos (PRIMARY "aha moments")
- Social proof (Georgia Tech, MIT, Geometry Solutions testimonial)
- Demo booking CTA + analytics infrastructure

**Out of Scope:**
- Industry-specific landing pages (Phase 2, after discovering beachhead)
- ROI calculator (defer until customer data validates assumptions)
- Case studies (need 3-5 customers first)
- Technical documentation (unknown if CTO persona exists in ICP)

### Success Criteria

**North Star Metric:** Demo Booking Rate (2% → 5-10% over 12 months)

**MVP Gate (Proceed to Phase 2):**
- 500-1,000 visitors in first 4 weeks
- 2%+ demo booking rate (10-20 bookings)
- 50%+ demo show rate
- 30%+ workflow selector engagement
- One workflow emerges as clear winner (40%+ of clicks)

---

## Core Vision

### Problem Statement

**Companies with legacy software face an impossible choice:**

- **Option A: Live with manual hell forever** (2-10 hours daily of data entry, system juggling, error-prone processes)
- **Option B: Try existing automation tools** (RPA breaks when systems update, Zapier/Composite doesn't work without APIs, AI agents are unreliable black boxes)
- **Option C: Replace legacy systems** (millions in cost, 2-5 years implementation, catastrophic risk)

**Result:** Companies remain trapped in workflows that are **automatable in theory but unautomatable in practice** because existing tools can't handle:
- Undocumented systems (no API, no documentation)
- Frequent UI changes (buttons move, dropdowns added, workflows shift)
- Need for reliability (mission-critical operations can't tolerate 80% accuracy)

### Problem Impact

**Operational Impact:**
- **2-10 hours per employee per day** on manual data entry and reconciliation
- **10-30% error rates** from manual processes (booking errors, inventory discrepancies, billing mistakes)
- **2-5 people per location** stuck doing work that should be automated (night auditors, data entry clerks, ops managers)

**Strategic Impact:**
- **$50K-500K annual cost per workflow** depending on company size
- **Institutional knowledge trapped in human heads** (when employee leaves, workflow breaks)
- **Innovation blocked** (operations teams too busy fighting fires to improve processes)
- **Competitive disadvantage** (faster competitors with modern systems win on efficiency)

**Emotional Impact:**
- Directors of Operations burned by 3-5 failed automation attempts
- Employees working 2 AM shifts to finish manual reconciliation
- Leadership frustrated by paying for "automation tools" that don't automate
- IT teams maintaining brittle RPA scripts that break weekly

**Real-World Examples (Emotional Storytelling):**

**Maria (Hotel Director of Ops) at 2:47 AM:**
- Cross-referencing reservations between Opera PMS, channel manager, accounting system
- Finding discrepancies manually (room sold on Booking.com, not in Opera)
- Emailing night auditor to fix before check-in chaos tomorrow
- Tried Zapier, RPA consultant, Composite → All failed within 2 months

**James (Hotel Front Desk) at 3:15 PM:**
- Check-in line wrapping around lobby (15 guests waiting)
- Switching between Opera PMS, payment processor, guest messaging system, keycard encoder
- Guest #7 frustrated because "modern hotels shouldn't take this long"
- Manager asking "Why can't we automate this?" → No good answer

**Sandra (Housekeeping Manager) at 6:30 AM:**
- Opera PMS says Room 302 is checkout-ready → But guest extended stay
- Channel manager shows different status → Text from front desk contradicts both
- Walks to front desk to ask (10 min wasted) → Guest still sleeping
- Happens 5-10 times per day across 50 rooms

### Why Existing Solutions Fail

**RPA (Robotic Process Automation):**
- ❌ **Breaks constantly:** UI change = script breaks (buttons moved, dropdowns added)
- ❌ **Maintenance nightmare:** 20-40% of implementation cost is ongoing maintenance
- ❌ **Requires perfect documentation:** Can't handle undocumented edge cases
- ❌ **Not self-healing:** Human must fix when workflow changes
- **Example:** "We paid $80K for RPA. First 3 months were great. Then Opera updated their UI and everything broke. Consultant wanted another $20K to fix it."

**Zapier / Composite / Make:**
- ❌ **Requires APIs:** 90% of legacy software has no modern API
- ❌ **Limited to simple workflows:** Complex multi-step processes don't work
- ❌ **No visual understanding:** Can't interact with actual application UIs
- ❌ **Not for legacy systems:** Built for modern SaaS, not 1998 desktop software
- **Example:** "Zapier works for Slack + Gmail. Useless for our Opera PMS from 2004."

**Existing AI Agents:**
- ❌ **80% reliability isn't enough:** Mission-critical workflows need 99%+ accuracy
- ❌ **Black box uncertainty:** "It mostly works" doesn't inspire confidence
- ❌ **No certification:** How do you know it won't make costly mistakes?
- ❌ **Still breaks on UI changes:** Not truly self-healing
- **Example:** "AI agent worked great in demo. Production? Made 3 booking errors in first week. Can't risk guest experience."

**System Replacement:**
- ❌ **$2-10M cost** for mid-sized companies
- ❌ **2-5 years implementation** timeline
- ❌ **30-50% failure rate** (projects over budget, behind schedule, or abandoned)
- ❌ **Massive disruption:** Training, data migration, workflow changes
- **Example:** "Board approved Opera → Cloudbeds migration. 18 months in, $4M spent, not even halfway done. Wish we'd just automated Opera."

**Why Alternatives Don't Exist:**
- **Problem is HARD:** Undocumented legacy software + reliability requirements + self-healing = unsolved problem
- **Everyone avoids it:** AI companies target modern SaaS (easier market)
- **No moat in obvious approaches:** RPA/Zapier are commodities (low switching costs)
- **Requires novel approach:** Can't solve with existing automation architectures

### Proposed Solution

**Agent School teaches AI agents to automate workflows on ANY legacy software - without APIs, documentation, or system replacement.**

**How It Works (3-Step Process):**

**1. Teach (2-3 minutes):**
- Employee performs workflow once while agent watches (screen recording)
- Agent observes: mouse clicks, keyboard inputs, data patterns, decision logic
- No scripting, no coding - just natural demonstration
- **Example:** "Sarah processes a purchase order in her 1998 ERP system. Agent watches and learns."

**2. Certify (Automated Testing):**
- Agent generates 50+ test scenarios (edge cases, variance, error conditions)
- Agent practices in sandbox environment (yesterday's data, not production)
- Pass/fail indicators validate reliability before deployment
- **Example:** "Agent tested on purchase orders from $1-$1M, 10 suppliers, rush orders, wrong formats. 100% pass rate."

**3. Deploy (Self-Healing Automation):**
- Agent runs workflow automatically (daily, hourly, or triggered)
- Self-heals when systems change (button moved, new dropdown added)
- No ongoing maintenance (agent adapts without human intervention)
- **Example:** "ERP vendor updated UI last month. Agent adapted automatically. RPA would've broken."

**Key Innovation: Certification System**
- **What makes Agent School different:** Certification isn't just "testing" - it's a strategic advantage in development
- **Reliability Guarantee:** Agent proves it can handle edge cases before touching production
- **Trust Building:** "100% pass rate on 50 test scenarios" beats "AI that mostly works"
- **Honest Framing:** Certification is valuable NOW (strategic advantage) but not yet a "proven competitive moat" (still validating with customers)

### Key Differentiators

**1. Certification System (Strategic Advantage)**
- **What It Is:** Rigorous testing framework that validates agent reliability before deployment
- **Why It Matters:** Builds trust with risk-averse operations teams (vs. black-box AI)
- **Current Status:** Strategic advantage in development; validating with early pilots
- **Competitive Moat:** To be validated - depends on adoption and whether competitors can replicate
- **Messaging:** "Agent gets certified on 50+ test scenarios before touching real data"

**2. Self-Healing Architecture (Proven Differentiator)**
- **What It Is:** Agent automatically adapts when legacy system UIs change
- **Why It Matters:** Eliminates 20-40% ongoing maintenance costs of RPA
- **Economic Value:** One-time teaching cost vs. perpetual maintenance contracts
- **Competitive Advantage:** Novel approach (most automation tools break on UI changes)
- **Messaging:** "RPA breaks when systems update. Agent School self-heals."

**3. Works on Undocumented Legacy Software (Competitive Moat)**
- **What It Is:** Agent learns from demonstration (no API, docs, or scripting required)
- **Why It Matters:** Solves problem everyone else avoids (addressable market: legacy systems that CAN'T be automated today)
- **Barrier to Entry:** Requires computer vision + natural language understanding + workflow intelligence
- **Market Positioning:** "If Zapier won't work and RPA keeps breaking, we're the only option"
- **Messaging:** "Teach AI agents to automate ANY legacy software - no APIs required"

**4. "Teach Once, Automate Forever" Economics (Business Model Advantage)**
- **What It Is:** One-time teaching cost (2-3 min) vs. ongoing prompting/maintenance
- **Cost Structure:**
  - Agent School: $X setup (one-time) + $Y/month subscription
  - RPA: $X setup + 20-40% annual maintenance
  - AI Agents: $X/month + ongoing prompt engineering
- **10x Cheaper Claim:** Based on eliminating maintenance costs + human time saved
- **Validation Needed:** Confirm with customer data (what's actual TCO vs. alternatives?)
- **Messaging:** "10x cheaper than alternatives - because agents never need retraining"

### Validation Status (Hypotheses Under Test)

**Customer Discovery Status:**
🔍 **Still Discovering** - Website will function as validation engine

**Hypothesis 1: Beachhead Market**
- **Current Hypothesis:** Hotels (5-50 property chains) are ideal first vertical
- **Alternative Hypothesis:** Could be finance, operations, sales, manufacturing
- **Validation Method:** Website workflow selector tracks which industry clicks most
- **Still Unknown:** Is hotels the best beachhead, or just the first vertical we're testing?

**Hypothesis 2: Target Workflow**
- **Current Hypothesis:** Three workflows under validation:
  1. Night Audit (hotel ops) - Cross-system reconciliation
  2. Check-in/Check-out (hotel ops) - Multi-system data entry
  3. Housekeeping Management (hotel ops) - Status synchronization
- **Alternative Hypotheses:** Could be procurement (ERP), lead data entry (CRM), invoice processing (finance)
- **Validation Method:** Website workflow selector shows engagement by workflow type
- **Still Unknown:** Which workflow pain is most acute? Which converts best?

**Hypothesis 3: Organizational Buyer**
- **Current Hypothesis:** Director of Operations (Maria) may be BOTH champion AND economic buyer
- **Alternative Hypotheses:**
  - Larger chains (30+ properties): Separate CFO (David) or CTO (Alex) may control budget
  - Smaller chains (5-10 properties): Single decision-maker (Maria = champion = buyer)
- **Validation Method:** Customer discovery interviews ask "Who controls automation budget?"
- **Still Unknown:** Org structure varies by company size; need more discovery

**Hypothesis 4: Website Optimization Strategy**
- **Current Hypothesis:** 80% of website optimized for Maria (emotional, pain-focused), 20% for David/Alex (ROI, technical supporting paths)
- **Party Mode Validation:** John, Mary, Sally agreed in collaborative sessions
- **Validation Method:** A/B test emotional vs. ROI-driven hero messaging
- **Still Unknown:** Does emotional storytelling convert better than business case?

**Hypothesis 5: MVP Feature Prioritization**
- **Current Hypothesis:** Teaching + Certification demos are PRIMARY "aha moments" (not ROI calculator)
- **Rationale:** Differentiation lives in HOW agents learn (teaching) + WHY they're reliable (certification)
- **Alternative Hypothesis:** ROI/cost savings might be more important than we think
- **Validation Method:** Track demo engagement vs. exit rates after demos
- **Still Unknown:** Do prospects need to "see it work" before caring about savings?

**Website as Discovery Engine:**
- **Purpose:** Website isn't just conversion vehicle - it's validation tool
- **Key Metrics to Validate Hypotheses:**
  - Workflow selector clicks → Identifies beachhead workflow
  - Traffic source/industry → Identifies beachhead market
  - Demo engagement → Validates primary value prop
  - Booking conversion → Validates messaging resonance
- **Decision Gates:** After 4-6 weeks, use data to decide Phase 2 industry-specific pages

---

## Target Users & Personas

### Overview

**Primary Persona (80% optimization focus):**
- **Maria Rodriguez** - Frustrated Automation Seeker (Director of Operations, 35-50 years old)

**Secondary Personas (20% supporting paths):**
- **David Chen** - Budget-Conscious Decider (VP Operations/CFO, 45-60 years old)
- **Alex Kumar** - Skeptical CTO (IT Director, 35-50 years old)

**Influencer Persona:**
- **Sarah Martinez** - Burnt-Out Employee (Night Audit Manager, 28-40 years old)

**Organizational Discovery Questions (Still Validating):**
- Does a 28-property hotel chain have a separate CFO role? Or does Director of Ops control budget?
- Does a 50-property chain have a CTO/IT Director? Or is IT outsourced?
- Is Maria both champion AND buyer? Or does she need approval from David/Alex?
- How do decision-making dynamics change with company size (5 vs. 30 vs. 100 properties)?

### Persona 1: Maria Rodriguez — Frustrated Automation Seeker (PRIMARY)

**Demographics:**
- **Role:** Director of Operations / VP Operations
- **Company Size:** 5-50 property hotel chain (or equivalent in other industries)
- **Age:** 35-50 years old
- **Education:** Bachelor's in Hospitality/Business, MBA (optional)
- **Tech Savvy:** Moderate (uses software daily, not a programmer)

**Background & Context:**
- **Career:** Climbed from front desk → manager → director over 10-15 years
- **Institutional Knowledge:** Knows EXACTLY how workflows should be automated (she does them manually)
- **Burned by Automation:** Tried 3-5 tools (Zapier, RPA consultant, Composite) - all failed within 2-6 months
- **Budget Authority:** **Unknown if she controls budget** (to be validated in customer discovery)
  - **Hypothesis 1:** In smaller chains (5-20 properties), Maria IS the economic buyer
  - **Hypothesis 2:** In larger chains (30+ properties), Maria is champion but needs CFO/CEO approval
- **Reporting Structure:** Reports to CEO, CFO, or Owner (varies by company size)

**Pain Points:**
1. **Manual Hell (Daily Reality):**
   - Spending 2 AM cross-referencing Opera PMS, channel manager, accounting system
   - 2-5 employees per property doing work that "should be automated"
   - 10-30% error rates from manual processes (booking mistakes, billing errors)

2. **Automation Graveyard (Emotional Scar Tissue):**
   - **Zapier:** "Worked for 2 weeks. Then our Opera PMS updated and everything broke."
   - **RPA Consultant:** "$80K spent. Great for 3 months. Then UI changed, needed $20K more to fix."
   - **Composite/Make:** "Doesn't work with legacy software. Need APIs we don't have."
   - **In-house Development:** "IT team said it would take 18 months and $500K. Project canceled."

3. **System Replacement Not an Option:**
   - **Too Expensive:** $2-10M for mid-sized chain
   - **Too Risky:** 18-36 months disruption, 30-50% failure rate
   - **Too Embedded:** Training, data migration, workflow changes = catastrophic risk
   - **Board Won't Approve:** "We tried. CFO laughed. 'Automate what we have' was the mandate."

4. **Leadership Pressure:**
   - CEO asks "Why can't we automate this?" at every ops review
   - Competitors with modern systems are faster, cheaper, more efficient
   - Team morale suffering (burnt-out employees, high turnover)

5. **Institutional Knowledge Trapped:**
   - When night auditor quits, workflow knowledge leaves with them
   - New hires take 3-6 months to learn "tribal knowledge"
   - No documentation (because workflows change constantly)

**Goals & Motivations:**
- **Primary Goal:** Automate 1-3 workflows to free up 10-20 hours per week of manual work
- **Success Criteria:** Automation that ACTUALLY WORKS for 6+ months (not just demo)
- **Emotional Need:** "FINALLY" moment - a tool that doesn't break like everything else
- **Career Impact:** Prove she can solve automation problem (promotion, bonus, respect from CEO)
- **Team Impact:** Give employees their lives back (no more 2 AM reconciliation shifts)

**Objections & Concerns:**
1. **Skepticism from Past Failures:**
   - "Tried 3 tools. All failed. Why is this different?"
   - "Looks great in demo. What happens in production?"
   - "How do I know it won't break when Opera updates?"

2. **Risk Aversion:**
   - "Mission-critical workflows - can't tolerate errors"
   - "What if agent makes booking mistake? Guest experience is our brand."
   - "How do I explain to CEO if this fails too?"

3. **Budget Concerns:**
   - "Already spent $80K on RPA that failed. How do I justify more spend?"
   - **Unknown:** Does Maria control budget, or need CFO approval?

4. **Implementation Feasibility:**
   - "How long does setup take? We're short-staffed already."
   - "Do I need to hire consultants or IT team?"
   - "What if employee who teaches agent quits?"

5. **Technical Uncertainty:**
   - "Our Opera PMS is from 2004. Will this work?"
   - "Do we need to install software? IT team is outsourced."
   - "What about security? Guest data can't leave our systems."

**Message Resonance (What Maria Needs to Hear):**

**Emotional:**
- ✅ "We've tried every automation tool. Agent School is the first one that actually works on legacy systems."
- ✅ "RPA breaks when systems update. Agent School self-heals."
- ✅ "Teach once in 2-3 minutes. Agent automates forever."

**Trust-Building:**
- ✅ "Agent gets certified on 50+ test scenarios before touching real data."
- ✅ "Built by team from Georgia Tech. Backed by MIT research."
- ✅ "Geometry Solutions (early pilot): 'First tool that didn't break after 2 months.'"

**Risk Mitigation:**
- ✅ "Sandbox testing on yesterday's data before production."
- ✅ "Agent explains what it learned - you validate before deployment."
- ✅ "Self-healing means no maintenance costs (unlike RPA)."

**Practical:**
- ✅ "No APIs required. Works on your existing Opera PMS."
- ✅ "2-3 minute teaching process. No coding, no scripting."
- ✅ "10x cheaper than alternatives (one-time teaching vs. perpetual maintenance)."

**Decision Support (if Budget Approval Needed):**
- ⚠️ **Unknown:** Does Maria need ROI calculator, or can she approve directly?
- ⚠️ **Phase 2 Feature:** ROI calculator if data shows CFO approval required

**Channels & Discovery:**
- **How Maria Finds Agent School:**
  - LinkedIn (targeted ads to Directors of Ops in hotel/ops industries)
  - Google search: "hotel automation opera pms", "legacy software automation", "RPA alternative"
  - Referral from peers (hospitality industry groups, conferences)
  - Georgia Tech alumni network (if applicable)
- **First Touch:** Website homepage (generic emotional story resonates)
- **Engagement:** Clicks "Property Management" workflow selector → Sees hotel-specific demo
- **Conversion:** Books demo after watching teaching + certification demos

---

### Persona 2: David Chen — Budget-Conscious Decider (SECONDARY)

**Demographics:**
- **Role:** VP Operations, CFO, or Finance Director
- **Company Size:** 30-100+ property hotel chain (or equivalent mid-large enterprise)
- **Age:** 45-60 years old
- **Education:** MBA, Finance/Accounting background
- **Tech Savvy:** Low-moderate (uses financial software, not technical)

**Background & Context:**
- **Career:** 15-25 years in finance/operations leadership
- **Budget Authority:** **Controls automation budget** (Maria needs his approval)
- **Risk Profile:** Conservative (burned by failed IT projects, reluctant to approve "unproven" tech)
- **Decision Criteria:** ROI, risk mitigation, cost vs. benefit, vendor stability

**Org Structure Hypothesis (To Be Validated):**
- **Smaller Chains (5-20 properties):** David role may NOT exist (Maria is buyer)
- **Mid Chains (30-50 properties):** David is CFO, approves Maria's automation requests
- **Large Chains (100+ properties):** David + Alex (CTO) both involved in purchasing decisions

**Pain Points:**
1. **Budget Fatigue:**
   - Approved $80K for RPA → Failed within 6 months
   - Approved $50K for Composite → Didn't work on legacy systems
   - CEO pressuring "Why do we keep wasting money on automation?"

2. **Financial Pressure:**
   - Manual processes costing $50K-500K annually (labor, errors, inefficiency)
   - Competitors automating faster (cost disadvantage)
   - Board asking "Why aren't we more efficient?"

3. **Risk Aversion:**
   - Can't afford another failed automation project (credibility hit)
   - System replacement too expensive ($2-10M) and risky (30-50% failure rate)
   - Need proven solution, not "bleeding edge" tech

4. **ROI Validation:**
   - "How much does this cost vs. what we save?"
   - "What's the payback period?"
   - "What if it fails - can we get money back?"

**Goals & Motivations:**
- **Primary Goal:** Reduce operational costs by 10-20% through automation
- **Success Criteria:** Positive ROI within 12 months, no catastrophic failures
- **Emotional Need:** Prove to CEO/Board that automation investment pays off
- **Career Impact:** Financial wins get board approval for other initiatives

**Objections & Concerns:**
1. **ROI Uncertainty:**
   - "What's the total cost? Setup + subscription + maintenance?"
   - "How do I calculate savings? Labor hours? Error reduction?"
   - "What's payback period vs. RPA, vs. in-house development?"

2. **Vendor Risk:**
   - "Is Agent School venture-backed? What if they go out of business?"
   - "How long have they been around? Who else uses this?"
   - "What's the contract terms? Can we cancel if it doesn't work?"

3. **Implementation Costs:**
   - "Hidden costs? Consulting, training, IT resources?"
   - "How long until ROI positive?"
   - "What if it takes 6 months to see results?"

4. **Comparison to Alternatives:**
   - "Why not just fix our RPA scripts?"
   - "Why not hire 2 more employees instead?"
   - "Why not wait for AI agents to mature in 2-3 years?"

**Message Resonance (What David Needs to Hear):**

**Financial:**
- ✅ "10x cheaper than RPA (no ongoing maintenance costs)"
- ✅ "One-time teaching cost vs. perpetual prompt engineering"
- ✅ "Payback period: 3-6 months (labor savings + error reduction)"
- ⚠️ **Phase 2-3 Feature:** ROI calculator (need customer data to validate assumptions)

**Risk Mitigation:**
- ✅ "Sandbox testing before production (validate before risking operations)"
- ✅ "Self-healing = no maintenance costs (unlike RPA's 20-40% annual maintenance)"
- ✅ "Geometry Solutions pilot: 6+ months, no breakage"

**Vendor Credibility:**
- ✅ "Built by Georgia Tech team. Backed by MIT research."
- ✅ "Early pilot customers: Geometry Solutions (satisfied, can provide reference)"
- ⚠️ **Phase 3 Feature:** Customer logos, case studies (need 3-5 paying customers)

**Decision Support:**
- ⚠️ **Phase 2-3 Feature:** Detailed pricing page, TCO comparison, ROI calculator
- ⚠️ **Phase 3 Feature:** Technical documentation (if Alex persona is involved)

**Channels & Discovery:**
- **How David Finds Agent School:**
  - Maria forwards website link: "We should try this - cheaper than RPA"
  - LinkedIn (CFO/VP Ops network, industry finance groups)
  - Google search: "automation ROI calculator", "RPA alternative cost"
- **First Touch:** Forwarded link from Maria (secondary path)
- **Engagement:** Looks for pricing, ROI validation, vendor credibility
- **Conversion:** Approves Maria's request after seeing cost comparison

---

### Persona 3: Alex Kumar — Skeptical CTO (SECONDARY)

**Demographics:**
- **Role:** CTO, IT Director, Head of Technology
- **Company Size:** 50-100+ property hotel chain (or equivalent large enterprise)
- **Age:** 35-50 years old
- **Education:** Computer Science, Engineering, technical background
- **Tech Savvy:** High (understands architecture, security, APIs)

**Background & Context:**
- **Career:** 10-20 years in software engineering, IT leadership
- **Gatekeeper Role:** Must approve any software that touches production systems
- **Risk Profile:** Highly skeptical of "AI magic" (wants to understand HOW it works)
- **Decision Criteria:** Security, reliability, architecture, vendor technical competence

**Org Structure Hypothesis (To Be Validated):**
- **Smaller Chains (5-20 properties):** Alex role likely DOESN'T exist (IT outsourced)
- **Mid Chains (30-50 properties):** Alex may exist, but limited influence (ops-led purchasing)
- **Large Chains (100+ properties):** Alex is gatekeeper, must approve all software purchases

**Pain Points:**
1. **Responsible for Failed RPA:**
   - IT team spent 6 months implementing RPA scripts
   - Scripts broke every time Opera PMS updated (UI changes)
   - Blamed for "recommending brittle solution"

2. **Security & Compliance:**
   - Guest data security (PCI, GDPR, PII protection)
   - Can't allow unknown third-party access to production systems
   - Need architecture documentation, security audit, compliance certifications

3. **Technical Feasibility:**
   - "How does agent actually work? Computer vision? API scraping?"
   - "What happens when agent encounters unexpected UI state?"
   - "How do I troubleshoot if agent fails? Logs? Monitoring?"

4. **Vendor Technical Competence:**
   - "Who built this? Are they engineers or marketing?"
   - "Is this real AI or just screen scraping with GPT wrapper?"
   - "What's the tech stack? Can I review architecture docs?"

**Goals & Motivations:**
- **Primary Goal:** Protect production systems from unreliable automation
- **Success Criteria:** Automation that doesn't require IT team to fix constantly
- **Emotional Need:** Vindication that "RPA failure wasn't my fault - problem is hard"
- **Career Impact:** Enable innovation without creating technical debt

**Objections & Concerns:**
1. **Black Box AI Skepticism:**
   - "How does agent decision-making work? Can I audit?"
   - "What if agent hallucinates data? How do I catch errors?"
   - "80% reliability isn't enough - need 99%+ for production"

2. **Security & Access:**
   - "Does agent run on our servers or yours? Data privacy?"
   - "What permissions does agent need? Can it access everything?"
   - "How do I revoke access if needed?"

3. **Integration & Architecture:**
   - "Does agent integrate with our systems? APIs? Screen scraping?"
   - "What if agent conflicts with other automation tools?"
   - "How do I monitor agent activity? Logs? Dashboards?"

4. **Support & Troubleshooting:**
   - "What happens when agent fails? Do I need to fix it?"
   - "What's your support SLA? Can I escalate to engineers?"
   - "How do I re-train agent if workflow changes?"

**Message Resonance (What Alex Needs to Hear):**

**Technical Credibility:**
- ✅ "Built by Georgia Tech team (engineers, not marketers)"
- ✅ "MIT research backing (academic rigor)"
- ⚠️ **Phase 3 Feature:** Architecture documentation, technical whitepaper

**Reliability:**
- ✅ "Certification system: Agent tested on 50+ scenarios before production"
- ✅ "Sandbox validation: Testing on yesterday's data (not live)"
- ✅ "Self-healing: Agent adapts to UI changes (vs. RPA breaking)"

**Security & Compliance:**
- ⚠️ **Phase 3 Feature:** Security documentation, compliance certifications (SOC 2, GDPR)
- ⚠️ **Phase 3 Feature:** Architecture diagrams, data flow documentation

**Differentiation:**
- ✅ "Not screen scraping - computer vision + natural language understanding"
- ✅ "Not GPT wrapper - proprietary agent architecture"
- ⚠️ **Phase 3 Feature:** Technical blog posts, engineering deep-dives

**Channels & Discovery:**
- **How Alex Finds Agent School:**
  - Maria asks "Can you review this tool?" (gatekeeper role)
  - LinkedIn (CTO network, AI/ML industry groups)
  - Google search: "AI agent architecture", "RPA alternative self-healing"
- **First Touch:** Forwarded link from Maria or David (tertiary path)
- **Engagement:** Looks for technical documentation, architecture details, security info
- **Conversion:** Approves Maria/David's request after technical validation

**Website Optimization Note:**
- **Unknown if Alex persona exists in ICP** (5-50 property chains may not have CTO)
- **Phase 2-3 Decision:** If large enterprise buyers emerge, build technical docs
- **MVP Strategy:** No technical documentation (focus on Maria optimization)

---

### Persona 4: Sarah Martinez — Burnt-Out Employee (INFLUENCER)

**Demographics:**
- **Role:** Night Audit Manager, Operations Coordinator, Front Desk Manager
- **Company Size:** Any (individual property or chain)
- **Age:** 28-40 years old
- **Education:** High school or associate's degree, hospitality training
- **Tech Savvy:** Moderate (uses Opera PMS, Excel, email daily)

**Background & Context:**
- **Career:** 5-10 years in hotel operations, promoted from front desk to supervisor
- **Daily Reality:** Doing the manual workflows that Maria wants to automate
- **Institutional Knowledge:** Sarah KNOWS how workflows should work (she does them)
- **Decision Authority:** None (Sarah doesn't buy software, but influences Maria's decision)

**Pain Points:**
1. **Exhaustion:**
   - Working 2 AM shifts to finish night audit reconciliation
   - Cross-referencing Opera PMS, channel manager, accounting system manually
   - 10-30 errors per month (booking mistakes, billing errors) despite best efforts

2. **System Juggling:**
   - Switching between 5+ systems constantly (Opera PMS, payment processor, keycard encoder, guest messaging, channel manager)
   - No automation - every task is manual
   - Workflows change constantly (no documentation)

3. **High Turnover:**
   - Coworkers quit because "this job is brutal"
   - Training new hires takes 3-6 months (tribal knowledge, no docs)
   - When someone quits, workflow knowledge leaves with them

4. **Recognition:**
   - Maria says "We should automate this" but nothing happens
   - Tried Zapier/RPA → Failed within months → Back to manual work
   - Feels like "automation tools don't care about us - built for engineers, not workers"

**Goals & Motivations:**
- **Primary Goal:** Get time back (no more 2 AM reconciliation, no more system juggling)
- **Success Criteria:** Automation that ACTUALLY WORKS (not another failed tool)
- **Emotional Need:** Feel heard (someone understands how hard this work is)
- **Career Impact:** Free up time to focus on guest experience (not data entry)

**Role in Buying Decision:**
- **Not Economic Buyer:** Sarah doesn't control budget
- **Influencer:** Maria asks Sarah "What do you think of this tool?"
- **Validator:** Sarah's feedback influences Maria's decision
- **First User:** Sarah will train the first agent (if Maria buys)

**Message Resonance (What Sarah Needs to Hear):**

**Empathy:**
- ✅ "2 AM cross-referencing systems should not be your job"
- ✅ "System juggling is automation hell - we're here to fix it"
- ✅ "Built for people like you - not engineers"

**Ease of Use:**
- ✅ "Teaching an agent is easier than training a new employee"
- ✅ "2-3 minutes to show agent your workflow - that's it"
- ✅ "No coding, no scripting - just demonstrate like you'd train a coworker"

**Trust:**
- ✅ "Agent explains what it learned - you validate before it runs"
- ✅ "If agent makes mistake, you catch it in sandbox (not production)"
- ✅ "You're in control - agent is your assistant, not your replacement"

**Channels & Discovery:**
- **How Sarah Finds Agent School:**
  - Maria asks "Can you watch this demo and tell me what you think?"
  - Sarah watches teaching demo: "OMG, this is how I'd explain it to a coworker"
  - Sarah tells Maria: "This is the first tool that makes sense to me"
- **First Touch:** Maria shares website link (influencer path)
- **Engagement:** Watches teaching demo, validates that process matches her workflow
- **Conversion:** Tells Maria "We should try this"

**Website Optimization Note:**
- **Sarah is NOT primary target** (doesn't buy)
- **Sarah validates Maria's decision** (influencer)
- **Teaching demo must resonate with Sarah** (she'll be the one training agents)

---

### User Journey Map

**Stage 1: Discovery (Awareness)**

**Primary Path (Maria):**
1. **Pain Point Trigger:** RPA consultant email: "$20K to fix broken scripts"
2. **Google Search:** "legacy software automation alternative to RPA"
3. **Lands on Website:** Homepage hero: "Teach AI Agents to Automate Any Legacy Software"
4. **Emotional Hook:** "Finally - someone who understands our problem"

**Secondary Path (David):**
1. **Forwarded Link:** Maria emails David: "Can we try this? Cheaper than RPA."
2. **Lands on Website:** Looks for pricing, ROI validation
3. **Skepticism:** "Another automation tool? Show me the numbers."

**Tertiary Path (Alex):**
1. **Gatekeeper Request:** Maria asks "Can you review this tool for security?"
2. **Lands on Website:** Looks for technical documentation
3. **Skepticism:** "How does this actually work? Architecture details?"

**Stage 2: Evaluation (Consideration)**

**Maria's Evaluation Journey:**
1. **Workflow Selector:** Clicks "Property Management" → Sees hotel-specific demo
2. **Teaching Demo:** "OMG, this is SO much easier than scripting"
3. **Certification Demo:** "This is why it's reliable - testing before production"
4. **Self-Healing Explanation:** "This is why RPA broke and this won't"
5. **Social Proof:** "Georgia Tech, MIT, Geometry Solutions - credible team"
6. **Decision Point:** "I should book a demo"

**David's Evaluation Journey:**
1. **Looks for Pricing:** (Not on MVP website - Phase 2-3 feature)
2. **Looks for ROI:** (ROI calculator not on MVP - Phase 2-3 feature)
3. **Asks Maria:** "How much does this cost vs. RPA?"
4. **Decision Point:** "If it's cheaper and Maria believes it, approve"

**Alex's Evaluation Journey:**
1. **Looks for Technical Docs:** (Not on MVP website - Phase 3 feature)
2. **Looks for Architecture Details:** (Not on MVP website - Phase 3 feature)
3. **Asks Maria:** "What's the security model? Data access?"
4. **Decision Point:** "If Maria can get answers from sales call, approve"

**Stage 3: Conversion (Decision)**

**Maria's Decision Triggers:**
1. **Emotional Resonance:** "This is the FINALLY moment I've been waiting for"
2. **Trust Signals:** Georgia Tech, MIT, Geometry Solutions, certification system
3. **Risk Mitigation:** Sandbox testing, self-healing, no maintenance costs
4. **CTA:** Clicks "Book a Demo" → Cal.com booking flow
5. **Books Demo:** Confirms 15-min call with Agent School team

**David's Decision Triggers:**
1. **Maria's Recommendation:** "This is different from RPA - worth trying"
2. **Budget Check:** "If setup cost <$50K, approve"
3. **Risk Assessment:** "Sandbox testing sounds low-risk"
4. **Approval:** "Go ahead, book the demo"

**Alex's Decision Triggers:**
1. **Maria's Request:** "Can you join the demo to ask technical questions?"
2. **Technical Validation:** Sales call answers architecture, security questions
3. **Risk Assessment:** "If agent runs on our servers, acceptable risk"
4. **Approval:** "Proceed with pilot"

**Stage 4: Post-Conversion (Demo Call → Pilot → Customer)**

1. **Demo Call (15 min):**
   - Maria describes workflow pain
   - Agent School explains how teaching/certification works
   - Maria asks: "Can you demo with our Opera PMS?"
   - Decision: Book follow-up technical demo

2. **Technical Demo (30 min):**
   - Agent School screen-shares: Teaching agent on Maria's Opera PMS
   - Maria + Sarah watch, validate process matches their workflow
   - David asks about pricing, ROI, contract terms
   - Alex asks about security, data access, architecture
   - Decision: Start pilot

3. **Pilot (2-4 weeks):**
   - Sarah teaches agent 1-2 workflows
   - Agent gets certified in sandbox
   - Maria reviews certification results
   - Agent deployed to production (monitored closely)
   - Decision: Expand to more workflows or cancel

4. **Customer (6+ months):**
   - Agent runs 3-5 workflows reliably
   - Maria sees 10-20 hours/week time savings
   - David sees ROI positive within 6 months
   - Alex confirms no security incidents
   - Maria becomes case study, referral source

---

### Website Optimization Strategy

**80% Optimization Focus: Maria (Emotional, Pain-Driven)**

**Hero Section:**
- Emotional hook: "2 AM cross-referencing systems should not be your reality"
- Generic but relatable: Pain story applies to hotels, finance, ops, any industry
- Primary CTA: "Book a Demo" (repeated 3+ times on page)

**Workflow Selector:**
- Discovery engine: Track which workflow Maria clicks (hotels vs. finance vs. sales)
- Personalization: After click, show demo specific to chosen workflow
- Validation: Which workflow resonates most → Informs Phase 2 industry pages

**Teaching + Certification Demos:**
- PRIMARY "aha moments": Show HOW agents learn (teaching) + WHY they're reliable (certification)
- Emotional resonance: "This is easier than training a coworker"
- Trust building: "Certified on 50+ test scenarios before production"

**Self-Healing Explanation:**
- Risk mitigation: "RPA breaks when systems update. Agent School self-heals."
- Economic value: "No ongoing maintenance costs"

**Social Proof:**
- Trust signals: Georgia Tech, MIT, Geometry Solutions
- Testimonial: Pain point validation (not just "it works")

**20% Supporting Paths: David (ROI) + Alex (Technical)**

**For David (CFO/Budget Owner):**
- ⚠️ **Phase 2-3 Features:** Pricing page, ROI calculator, TCO comparison
- MVP Workaround: Sales call provides pricing, ROI after demo booking
- Supporting CTA: "See Cost Comparison" → Books demo

**For Alex (CTO/IT Director):**
- ⚠️ **Phase 3 Features:** Technical documentation, architecture diagrams, security docs
- MVP Workaround: Sales call provides technical details after demo booking
- Supporting CTA: "Technical Overview" → Books demo

**Validation Strategy:**
- A/B test emotional (Maria) vs. ROI (David) hero messaging
- Track conversion by persona type (if identifiable via form data)
- Phase 2 decision: If David/Alex paths show high engagement, build supporting pages

---

### Validation Questions for Customer Discovery

**Questions to Ask in Demo Calls (Validate Hypotheses):**

**Hypothesis 1: Beachhead Market (Hotels vs. Other Industries)**
- "What industry are you in? Hotel operations, finance, manufacturing, other?"
- "How did you find us? Google search, LinkedIn, referral?"
- "What keywords did you search? What pain were you looking to solve?"
- **Validation:** Do hotels dominate traffic/bookings, or is there a different pattern?

**Hypothesis 2: Target Workflow (Night Audit vs. Check-in vs. Other)**
- "Which workflow clicked on website? ERP, Property Management, Sales/CRM?"
- "Which workflow causes most pain? Night audit, check-in, housekeeping, other?"
- "If you could automate one thing tomorrow, what would it be?"
- **Validation:** Does one workflow dominate, or are pain points diverse?

**Hypothesis 3: Organizational Buyer (Maria = Buyer vs. Maria = Champion)**
- "What's your role? Director of Ops, VP Ops, CFO, CTO, other?"
- "Do you control the automation budget, or need approval?"
- "If approval needed, who decides? CFO, CEO, CTO, committee?"
- "How many properties in your chain? Org structure: centralized or decentralized?"
- **Validation:** Does Maria buy directly (smaller chains) or need approval (larger chains)?

**Hypothesis 4: Persona Existence (Does David/Alex Exist in ICP?)**
- "Does your company have a CFO role? Or does Director of Ops control budget?"
- "Does your company have a CTO/IT Director? Or is IT outsourced?"
- "Who would need to approve this purchase besides you?"
- **Validation:** Do 5-50 property chains have separate CFO/CTO roles, or is Maria sole buyer?

**Hypothesis 5: MVP Feature Prioritization (Teaching/Cert vs. ROI)**
- "What part of the website was most compelling? Teaching demo, certification, self-healing?"
- "Did you look for pricing or ROI information? Was it important?"
- "What convinced you to book this demo? Emotional story, trust signals, cost savings?"
- **Validation:** Is emotional storytelling (Maria) converting better than ROI (David)?

**Hypothesis 6: Competitive Alternatives (RPA vs. In-house vs. Nothing)**
- "What automation tools have you tried? Zapier, RPA, Composite, in-house?"
- "Why did they fail? UI changes, no API, too expensive, unreliable?"
- "What would you do if Agent School didn't exist? Keep manual, try RPA again, hire more people?"
- **Validation:** Is RPA failure the dominant pain, or are there other patterns?

**Hypothesis 7: Website as Discovery Engine (Traffic Sources)**
- "How did you hear about us? Google, LinkedIn, referral, other?"
- "What made you click? Headline, workflow selector, social proof?"
- "Did you share website with anyone? Coworker, boss, IT team?"
- **Validation:** Which channels drive highest-quality leads?

---

## Success Metrics

### North Star Metric

**Demo Booking Rate: 2% → 5-10% over 12 months**

**Definition:**
- **Metric:** (Demo Bookings / Website Visitors) × 100
- **Current Baseline:** ~2% (industry average for B2B SaaS demo requests)
- **MVP Target (6 weeks post-launch):** 2%+ maintained (500-1,000 visitors → 10-20 bookings)
- **Phase 2 Target (3 months):** 3-4% (industry-specific landing pages improve conversion)
- **Phase 3 Target (6 months):** 4-5% (case studies, ROI calculator, video testimonials)
- **Phase 4 Target (12 months):** 5-10% (optimized funnel, proven social proof, strong brand)

**Why This Metric?**
- **Leading Indicator:** Predicts future revenue (demos → pilots → customers)
- **User Value Proxy:** High booking rate = message resonates, solution addresses pain
- **Business Objective:** Primary goal is CONVERSION (not just traffic)
- **Actionable:** Trackable in real-time, A/B testable, improvable through iteration

**Supporting Metrics:**
- Demo Show Rate (50%+ target)
- Demo → Pilot Conversion (30%+ target)
- Pilot → Customer Conversion (50%+ target)

---

### User Success Metrics (5-Point Conversion Funnel)

**1. Website Engagement (Top of Funnel)**

**Metric 1.1: Bounce Rate**
- **Definition:** % of visitors who leave after viewing only one page
- **Current Baseline:** Unknown (no existing traffic data)
- **MVP Target:** <60% (industry average: 70-80% for B2B SaaS)
- **Measurement:** Google Analytics bounce rate
- **Why It Matters:** Low bounce = message resonates, content engages

**Metric 1.2: Scroll Depth**
- **Definition:** % of visitors who scroll past fold to see core demos
- **MVP Target:** 70%+ scroll to teaching/certification demos
- **Measurement:** Google Analytics scroll tracking
- **Why It Matters:** Visitors must see demos to understand differentiation

**Metric 1.3: Time on Site**
- **Definition:** Average time spent on homepage
- **MVP Target:** 2-3 minutes average (enough to watch 1-2 demos)
- **Measurement:** Google Analytics average session duration
- **Why It Matters:** Higher time = deeper engagement, understanding value prop

**2. Workflow Selector Engagement (Discovery Engine)**

**Metric 2.1: Workflow Click Rate**
- **Definition:** % of visitors who click on a workflow option (ERP, Property Management, CRM)
- **MVP Target:** 30%+ engagement (discovery validation)
- **Measurement:** Google Analytics event tracking (workflow selector clicks)
- **Why It Matters:** Validates which workflows resonate most (beachhead discovery)

**Metric 2.2: Workflow Distribution**
- **Definition:** % breakdown of which workflow gets most clicks
- **MVP Target:** One workflow emerges as winner (40%+ of clicks)
- **Measurement:** Google Analytics event tracking (by workflow type)
- **Why It Matters:** Informs Phase 2 industry-specific landing page priorities

**3. Demo Engagement (Middle of Funnel)**

**Metric 3.1: Teaching Demo Play Rate**
- **Definition:** % of visitors who play teaching demo video/animation
- **MVP Target:** 50%+ play rate
- **Measurement:** Video analytics (YouTube, Vimeo, or custom player)
- **Why It Matters:** Teaching demo is PRIMARY "aha moment" (differentiation)

**Metric 3.2: Certification Demo Play Rate**
- **Definition:** % of visitors who play certification demo video/animation
- **MVP Target:** 50%+ play rate
- **Measurement:** Video analytics
- **Why It Matters:** Certification demo builds TRUST (reliability proof)

**Metric 3.3: Demo Completion Rate**
- **Definition:** % of viewers who watch demo to completion (not just play)
- **MVP Target:** 60%+ completion rate
- **Measurement:** Video analytics (% watched to 90%+)
- **Why It Matters:** Completion = message resonates, not just curiosity click

**4. Conversion (Bottom of Funnel)**

**Metric 4.1: Demo Booking Rate (NORTH STAR)**
- **Definition:** % of visitors who book demo via Cal.com
- **MVP Target:** 2%+ conversion
- **Measurement:** (Cal.com bookings / Google Analytics visitors) × 100
- **Why It Matters:** Primary business objective (conversion vehicle)

**Metric 4.2: CTA Click Rate**
- **Definition:** % of visitors who click "Book a Demo" button (any instance)
- **MVP Target:** 5-10% click rate (intent signal, even if don't complete booking)
- **Measurement:** Google Analytics event tracking (CTA button clicks)
- **Why It Matters:** High click + low booking = booking flow friction (fix Cal.com UX)

**5. Post-Booking Quality (Lead Quality)**

**Metric 5.1: Demo Show Rate**
- **Definition:** % of booked demos where prospect actually shows up
- **MVP Target:** 50%+ show rate (industry average: 30-50%)
- **Measurement:** Cal.com attendance tracking
- **Why It Matters:** High show rate = qualified leads (not tire-kickers)

**Metric 5.2: ICP Match Rate**
- **Definition:** % of demo attendees who match Ideal Customer Profile (Maria persona)
- **MVP Target:** 30%+ ICP match (ops managers, legacy software pain)
- **Measurement:** Manual qualification during demo calls
- **Why It Matters:** High ICP match = targeting working (not random traffic)

**Metric 5.3: Demo → Pilot Conversion**
- **Definition:** % of demos that convert to pilot engagement
- **MVP Target:** 30%+ conversion (industry average: 20-30%)
- **Measurement:** CRM tracking (demo → pilot stage)
- **Why It Matters:** Validates product-market fit (solution addresses pain)

**Metric 5.4: Pilot → Customer Conversion**
- **Definition:** % of pilots that convert to paying customers
- **Phase 2-3 Target:** 50%+ conversion (pilots are pre-qualified)
- **Measurement:** CRM tracking (pilot → customer stage)
- **Why It Matters:** Validates product delivers value (not just demo)

---

### Business Objectives (By Phase)

**Phase 1: MVP Launch (Weeks 1-6)**

**Objective 1: Validate Conversion Funnel**
- 500-1,000 visitors in first 4 weeks post-launch
- 2%+ demo booking rate maintained (10-20 bookings)
- 50%+ demo show rate (5-10 qualified demos)
- 30%+ ICP match (3-5 qualified leads matching Maria persona)

**Objective 2: Identify Beachhead Workflow**
- 30%+ workflow selector engagement
- One workflow emerges as winner (40%+ of clicks)
- Clear signal which industry/workflow to prioritize for Phase 2

**Objective 3: Validate Messaging Effectiveness**
- 70%+ scroll depth (visitors see teaching/certification demos)
- 50%+ demo play rate (teaching + certification)
- Social proof impact measured (track if Georgia Tech/MIT/Geometry Solutions increases conversion)

**Phase 2: Industry Expansion (Weeks 7-12)**

**Objective 1: Scale Lead Generation**
- 1,500-2,000 visitors per month
- 3-4% demo booking rate (30-50 bookings/month)
- 60%+ demo show rate (18-30 qualified demos/month)

**Objective 2: Build Industry-Specific Conversion Paths**
- Launch 2-3 industry-specific landing pages (based on Phase 1 workflow winner)
- A/B test variants (hero messaging, CTA placement, workflow demos)
- 30%+ ICP match maintained (qualified leads from target industries)

**Objective 3: Optimize Discovery Engine**
- SEO optimization (rank for industry-specific keywords)
- Paid acquisition experiments (LinkedIn, Google Ads for target industries)
- Referral program initiation (incentivize Maria to refer peers)

**Phase 3: Trust-Building (Weeks 13-18)**

**Objective 1: Add Customer Proof**
- Launch 3-5 customer case studies (after pilots convert to customers)
- Add ROI calculator (validated with customer savings data)
- Expand social proof (customer logos, review sites)

**Objective 2: Improve Conversion Funnel**
- 2,000-3,000 visitors per month
- 4-5% demo booking rate (60-80 bookings/month)
- 30%+ demo → pilot conversion (validated product-market fit)

**Objective 3: Enable Self-Service Discovery**
- Video testimonials (customer success stories)
- Technical documentation (if Alex persona emerges as pattern)
- FAQ/knowledge base (reduce sales call burden)

**Phase 4: Scale (Weeks 19-24)**

**Objective 1: Scale Lead Generation**
- 5,000+ visitors per month
- 5-10% demo booking rate (100+ bookings/month)
- 40%+ ICP match (qualified lead flow sustains sales capacity)

**Objective 2: Expand Market Reach**
- 5-10 industry-specific landing pages (based on demand signals)
- Content marketing (blog, SEO-driven content)
- Partnership pages (legacy software vendors)

**Objective 3: Optimize Unit Economics**
- Cost per qualified lead <$200
- Demo → customer conversion funnel predictable (CAC/LTV validated)
- Product-market fit proven (customers renewing, referring, expanding)

---

### Key Performance Indicators (10 KPIs)

**KPI 1: Demo Booking Rate (North Star)**
- **Formula:** (Demo Bookings / Website Visitors) × 100
- **MVP Target:** 2%+
- **Phase 2 Target:** 3-4%
- **Phase 3 Target:** 4-5%
- **Phase 4 Target:** 5-10%
- **Measurement:** Google Analytics + Cal.com integration

**KPI 2: Demo Show Rate**
- **Formula:** (Demos Attended / Demos Booked) × 100
- **MVP Target:** 50%+
- **Phase 2 Target:** 60%+
- **Phase 3 Target:** 65%+
- **Measurement:** Cal.com attendance tracking

**KPI 3: ICP Match Rate**
- **Formula:** (ICP-Matched Demos / Total Demos) × 100
- **MVP Target:** 30%+
- **Phase 2 Target:** 40%+
- **Phase 3 Target:** 50%+
- **Measurement:** Manual qualification during demo calls

**KPI 4: Workflow Selector Engagement**
- **Formula:** (Workflow Clicks / Website Visitors) × 100
- **MVP Target:** 30%+
- **Phase 2 Target:** 40%+
- **Measurement:** Google Analytics event tracking

**KPI 5: Demo Play Rate (Teaching + Certification)**
- **Formula:** (Demo Video Plays / Website Visitors) × 100
- **MVP Target:** 50%+
- **Phase 2 Target:** 60%+
- **Measurement:** Video analytics

**KPI 6: Scroll Depth (Past Fold to Demos)**
- **Formula:** (Visitors Scrolling 50%+ / Total Visitors) × 100
- **MVP Target:** 70%+
- **Phase 2 Target:** 75%+
- **Measurement:** Google Analytics scroll tracking

**KPI 7: Bounce Rate**
- **Formula:** (Single-Page Sessions / Total Sessions) × 100
- **MVP Target:** <60%
- **Phase 2 Target:** <55%
- **Measurement:** Google Analytics

**KPI 8: Demo → Pilot Conversion**
- **Formula:** (Pilots Started / Demos Attended) × 100
- **MVP Target:** 30%+
- **Phase 2 Target:** 35%+
- **Phase 3 Target:** 40%+
- **Measurement:** CRM tracking

**KPI 9: Pilot → Customer Conversion**
- **Formula:** (Paying Customers / Pilots Started) × 100
- **Phase 2 Target:** 50%+
- **Phase 3 Target:** 60%+
- **Measurement:** CRM tracking

**KPI 10: Cost Per Qualified Lead (Phase 4)**
- **Formula:** (Total Marketing Spend / Qualified Leads)
- **Phase 4 Target:** <$200 per qualified lead
- **Measurement:** Marketing spend tracking + CRM lead qualification

---

### Engagement Analytics (Heatmaps, Session Recordings)

**Tool: Hotjar or Microsoft Clarity**

**Heatmap Tracking:**
1. **Click Heatmaps:** Where visitors click (CTA buttons, workflow selector, demo videos)
2. **Scroll Heatmaps:** How far visitors scroll (identify drop-off points)
3. **Move Heatmaps:** Where visitors hover (attention signals)

**Session Recordings:**
1. **Bounce Sessions:** Why visitors leave immediately (hero message unclear? Page load slow?)
2. **High-Engagement Sessions:** What converts visitors (which demos watched? CTA path?)
3. **Frustration Detection:** Rage clicks, error messages, confusing UX

**Insights to Extract:**
- **Hero Optimization:** Does emotional story resonate, or do visitors scroll immediately?
- **Workflow Selector:** Which workflow gets most attention (hover, click)?
- **Demo Engagement:** Do visitors watch full demos, or drop off mid-video?
- **CTA Placement:** Where should "Book a Demo" button appear for max conversion?
- **Mobile vs. Desktop:** How does engagement differ by device?

---

### A/B Testing Roadmap (6 Experiments Over 6 Months)

**Experiment 1 (MVP Week 3): Hero Messaging Variant**
- **Hypothesis:** Emotional storytelling (Maria) converts better than ROI-driven (David)
- **Variant A (Control):** "Teach AI Agents to Automate Any Legacy Software" (generic emotional)
- **Variant B (Test):** "10x Cheaper Automation for Legacy Systems - No APIs Required" (ROI-focused)
- **Success Metric:** Demo booking rate (A vs. B)
- **Expected Outcome:** Variant A wins (80% Maria optimization hypothesis)
- **Timeline:** 2 weeks, 500 visitors minimum per variant

**Experiment 2 (Phase 1 Week 5): CTA Placement**
- **Hypothesis:** Multiple CTAs throughout page increase conversion vs. single CTA at bottom
- **Variant A (Control):** "Book a Demo" button appears 3x (hero, after demos, footer)
- **Variant B (Test):** Single CTA at bottom of page (after all content)
- **Success Metric:** CTA click rate + demo booking rate
- **Expected Outcome:** Variant A wins (multiple CTAs capture intent at different stages)
- **Timeline:** 2 weeks, 500 visitors minimum per variant

**Experiment 3 (Phase 2 Week 2): Industry-Specific Landing Page**
- **Hypothesis:** Hotel-specific page converts better than generic page (for hotel traffic)
- **Variant A (Control):** Generic homepage (all industries)
- **Variant B (Test):** `/hotels` landing page (hotel-specific messaging, Opera PMS examples)
- **Success Metric:** Demo booking rate (hotel traffic only)
- **Expected Outcome:** Variant B wins (personalization increases relevance)
- **Timeline:** 3 weeks, 300 hotel visitors minimum per variant

**Experiment 4 (Phase 2 Week 6): Social Proof Prominence**
- **Hypothesis:** Prominent social proof (above fold) increases trust and conversion
- **Variant A (Control):** Social proof section mid-page (after demos)
- **Variant B (Test):** Social proof in hero (Georgia Tech/MIT logos, Geometry Solutions testimonial)
- **Success Metric:** Demo booking rate
- **Expected Outcome:** Variant B wins (trust signals early in journey)
- **Timeline:** 2 weeks, 500 visitors minimum per variant

**Experiment 5 (Phase 3 Week 2): ROI Calculator Impact**
- **Hypothesis:** ROI calculator increases demo booking rate (supports David persona)
- **Variant A (Control):** No ROI calculator (existing page)
- **Variant B (Test):** ROI calculator section (after demos, before social proof)
- **Success Metric:** Demo booking rate + ROI calculator engagement
- **Expected Outcome:** Variant B wins IF David persona is prominent; neutral if Maria dominates
- **Timeline:** 3 weeks, 500 visitors minimum per variant

**Experiment 6 (Phase 4 Week 2): Video Testimonial vs. Text Testimonial**
- **Hypothesis:** Video testimonials from customers convert better than text quotes
- **Variant A (Control):** Text testimonial (Geometry Solutions quote + logo)
- **Variant B (Test):** Video testimonial (customer on camera, 30-60 sec)
- **Success Metric:** Demo booking rate + testimonial engagement (video play rate)
- **Expected Outcome:** Variant B wins (video builds stronger emotional connection)
- **Timeline:** 3 weeks, 500 visitors minimum per variant

**A/B Testing Methodology:**
- **Tool:** Google Optimize, VWO, or Optimizely
- **Confidence Level:** 95% statistical significance required
- **Sample Size:** Minimum 500 visitors per variant (adjust for low traffic)
- **Duration:** Run until statistical significance OR 3 weeks max (prevent decision paralysis)
- **Winner Selection:** Highest demo booking rate wins (North Star metric)

---

### Analytics Stack (Tools & Implementation)

**Tool 1: Google Analytics 4 (GA4)**
- **Purpose:** Traffic analysis, conversion tracking, funnel visualization
- **Events to Track:**
  - Page views (homepage, industry pages)
  - CTA button clicks ("Book a Demo")
  - Workflow selector clicks (ERP, Property Management, CRM)
  - Demo video plays (teaching, certification)
  - Scroll depth (25%, 50%, 75%, 100%)
  - Cal.com booking completions
- **Custom Dimensions:**
  - Traffic source (Google, LinkedIn, referral, direct)
  - Device type (desktop, mobile, tablet)
  - Geographic location (validate if hotels concentrated in specific regions)
- **Goals:**
  - Goal 1: Demo booking (primary conversion)
  - Goal 2: Workflow selector engagement (discovery validation)
  - Goal 3: Demo video plays (engagement)

**Tool 2: Heatmap & Session Recording (Hotjar or Microsoft Clarity)**
- **Purpose:** Qualitative insights, UX optimization
- **Heatmap Tracking:**
  - Click heatmaps (CTA buttons, workflow selector, nav links)
  - Scroll heatmaps (identify drop-off points)
  - Move heatmaps (attention signals)
- **Session Recordings:**
  - Record 10% of sessions (privacy-respecting, GDPR-compliant)
  - Filter recordings: bounces, high engagement, demo bookings
  - Identify frustration signals (rage clicks, error messages)
- **Feedback Polls:**
  - Exit intent poll: "What prevented you from booking a demo?"
  - Post-demo poll: "What convinced you to book?"

**Tool 3: A/B Testing Platform (Google Optimize, VWO, or Optimizely)**
- **Purpose:** Experimentation, conversion rate optimization
- **Experiments:** Hero messaging, CTA placement, social proof, ROI calculator (see A/B Testing Roadmap)
- **Segmentation:** Test by traffic source, device type, geographic location
- **Statistical Rigor:** 95% confidence level, minimum 500 visitors per variant

**Tool 4: Cal.com Integration**
- **Purpose:** Demo booking flow, lead capture
- **Events to Track:**
  - Booking started (Cal.com page loaded)
  - Booking completed (confirmation page)
  - Booking canceled (no-show tracking)
  - Booking rescheduled (engagement signal)
- **Lead Data Capture:**
  - Name, email, company, role, phone (optional)
  - Custom questions: "What workflow pain are you trying to solve?" (qualitative data)
  - Source tracking: UTM parameters passed from website → Cal.com

**Tool 5: CRM (HubSpot, Pipedrive, or Custom)**
- **Purpose:** Lead qualification, pipeline tracking, customer journey
- **Pipeline Stages:**
  - Stage 1: Demo booked (from Cal.com)
  - Stage 2: Demo attended (qualified vs. no-show)
  - Stage 3: ICP match (Maria persona vs. not qualified)
  - Stage 4: Pilot started
  - Stage 5: Paying customer
- **Lead Scoring:**
  - +10 points: ICP match (Director of Ops, legacy software pain)
  - +5 points: Demo attended
  - +5 points: Workflow selector engagement (clicked workflow)
  - +3 points: Demo video watched (teaching/certification)
  - -5 points: No-show (flags low-intent lead)
- **Attribution:**
  - First touch: Where lead first discovered Agent School (Google, LinkedIn, referral)
  - Last touch: What convinced lead to book demo (workflow demo, social proof, ROI)

**Tool 6: Event Tracking (Google Tag Manager)**
- **Purpose:** Centralized event management, custom event tracking
- **Events to Implement:**
  - `workflow_selector_click` → Tracks which workflow (ERP, Property Management, CRM)
  - `cta_button_click` → Tracks CTA clicks (hero, mid-page, footer)
  - `demo_video_play` → Tracks which demo played (teaching, certification)
  - `demo_video_complete` → Tracks demo watched to 90%+ (completion)
  - `scroll_depth_50` → Tracks visitors scrolling past fold
  - `cal_booking_complete` → Tracks successful demo bookings
- **Implementation:**
  - Use Google Tag Manager (GTM) to manage all event tracking
  - Avoid hardcoding GA events in codebase (use GTM for flexibility)

**Analytics Implementation Checklist (MVP Week 1-2):**
- ✅ Install Google Analytics 4 on all pages
- ✅ Set up Google Tag Manager for event tracking
- ✅ Implement Hotjar or Microsoft Clarity heatmap tracking
- ✅ Configure Cal.com → GA4 integration (booking events)
- ✅ Set up A/B testing platform (Google Optimize or VWO)
- ✅ Create CRM pipeline stages (HubSpot or Pipedrive)
- ✅ Test all events (workflow selector, CTA buttons, demo videos, bookings)
- ✅ Set up custom dashboards (demo booking rate, workflow engagement, conversion funnel)

---

## MVP Scope & Delivery Plan

### Core Features (6-Week Launch)

**1. Hero Section - Generic but Relatable**
- **Headline:** "Teach AI Agents to Automate Any Legacy Software"
- **Subheadline:** "Your team teaches once. Agents automate forever. No APIs required."
- **Emotional Hook:** Generic pain story (2 AM data entry, system juggling, manual hell across ANY industry)
- **Primary CTA:** "Book a Demo"

**2. Interactive Workflow Selector (Discovery Engine)**
- **User chooses their pain point:**
  - [📊 ERP Automation] "Inventory management, purchase orders, manual data entry"
  - [🏨 Property Management] "Reservations, check-ins, cross-system reconciliation"
  - [💼 Sales/CRM] "Lead data entry, pipeline updates, follow-ups" (optional 3rd)
- **After selection:** Visitor sees personalized demo for that workflow
- **Tracking:** Which workflow gets most clicks (validates beachhead hypothesis)

**3. Teaching Interface Demo (PRIMARY "AHA MOMENT")**
- **Interactive or video walkthrough showing:**
  - User performs task once (screen recording with agent watching)
  - Agent explains back what it learned (confirms understanding)
  - User corrects/refines (iterative teaching)
- **Focus:** Natural knowledge transfer differentiator (not scripting)
- **Example:** "Watch how Sarah teaches an agent to process purchase orders in her 1998 ERP system"

**4. Certification System Demo (PRIMARY "AHA MOMENT")**
- **Interactive or video walkthrough showing:**
  - Agent undergoes testing (edge cases, variance generation)
  - Sandbox validation (testing on yesterday's data before production)
  - Pass/fail indicators (reliability proof vs. black-box AI)
- **Focus:** Builds TRUST - proof it won't break like other tools
- **Example:** "Agent gets certified on 50 test scenarios before touching real data"

**5. Self-Healing Explanation**
- **Visual or animation showing:**
  - Legacy system UI changes (button moved, dropdown added)
  - Agent automatically adapts (no human intervention)
  - Comparison: RPA breaks vs. Agent School self-heals
- **Focus:** Economic value - no ongoing maintenance costs

**6. How It Works (3-Step Process)**
- **Teach:** Show agent your workflow once (2-3 min screen recording)
- **Certify:** Agent gets tested rigorously before deployment
- **Deploy:** Agent runs forever, self-heals when systems change

**7. Why Agent School is Different**
- **Certification System:** Reliability guarantee (not 80% black-box AI)
- **Self-Healing:** Doesn't break when systems update (vs. RPA)
- **Undocumented Legacy Software:** Works without APIs or documentation
- **10x Cheaper:** One-time teaching cost vs. ongoing prompting/maintenance

**8. Social Proof Section**
- **Built By:** Team from Georgia Tech
- **Research From:** MIT (link to research if available, or "backed by MIT research")
- **Early Validation Testimonial:**
  - Logo: Geometry Solutions
  - Quote: Pain point validation (e.g., "We've tried every automation tool. Agent School is the first one that actually works on our legacy ERP.")
- **Visual:** Georgia Tech logo, MIT logo, Geometry Solutions logo

**9. Demo Booking CTA (Throughout Page)**
- Primary CTA: "Book a Demo" button (repeats 3+ times on page)
- Links to: Cal.com booking flow
- Secondary CTA (optional): "See Live Demo"

**10. Analytics + A/B Testing Infrastructure**
- Google Analytics: Traffic, conversion, funnel tracking
- Heatmap tool: Hotjar or Microsoft Clarity
- Event tracking: Workflow selector clicks, demo video plays, scroll depth
- A/B testing capability: Hero messaging variants, CTA placement

---

### Out of Scope for MVP (6-Week Launch)

❌ **Separate Industry-Specific Pages** (Hotels, Finance, Ops, etc.) → Phase 2  
❌ **ROI Calculator** (deferred, not MVP-critical)  
❌ **Case Studies** (no customers yet beyond Geometry Solutions testimonial)  
❌ **Technical Documentation Pages** (architecture, security, API docs) → Phase 2-3  
❌ **Video Testimonials** (static text sufficient for MVP)  
❌ **Live Chat Widget**  
❌ **Multi-Language Support**  
❌ **Mobile-Optimized Interactive Demos** (desktop-first MVP, mobile-responsive static)  
❌ **Blog/Content Marketing** (focus on conversion, not SEO content)  
❌ **Customer Portal/Login** (marketing site only)

**Rationale for Deferrals:**
- **Industry Pages:** 6 weeks insufficient for multiple high-quality pages; generic homepage discovers WHICH industries to prioritize
- **ROI Calculator:** Requires customer data to validate assumptions; conversion data from MVP will inform calculator inputs
- **Case Studies:** Need 3-5 customers first; Geometry Solutions testimonial provides initial social proof
- **Technical Docs:** Unknown if Alex persona (CTO) exists in ICP; defer until enterprise buyers emerge as pattern

---

### Phased Delivery Plan

**Phase 1: MVP Launch (Weeks 1-6) - Foundation**

**Objective:** Validate conversion funnel and identify beachhead workflow

**Features:**
- Generic homepage with 2-3 workflow examples (ERP, Property Management, CRM)
- Teaching + Certification demos (core differentiation)
- Social proof (Georgia Tech, MIT, Geometry Solutions)
- Demo booking CTA + analytics infrastructure

**Timeline Breakdown:**
- **Week 1-2:** Design + Content
  - Finalize homepage design (Cyber Citrus aesthetic)
  - Write copy (generic emotional story, how it works, differentiation)
  - Script teaching + certification demo videos/animations
  - Design workflow selector interaction

- **Week 3-4:** Core Development
  - Build homepage (hero, workflow selector, demos, social proof, CTA)
  - Integrate Cal.com booking
  - Build teaching + certification demo (interactive or video)
  - Implement analytics (GA, Hotjar, event tracking)

- **Week 5:** Polish + Testing
  - QA interactive elements (workflow selector, demos)
  - Test booking flow end-to-end
  - Mobile responsiveness (basic, not fully optimized)
  - Content final pass (typos, messaging clarity)

- **Week 6:** Pre-Launch + Launch
  - Deploy to production
  - Final smoke tests
  - Soft launch (Geometry Solutions, Georgia Tech network, personal network)
  - Monitor analytics, fix critical bugs
  - Official launch announcement (LinkedIn, email)

**Success Criteria:**
- 500-1,000 visitors in first 4 weeks
- 2%+ demo booking rate (10-20 bookings)
- 50%+ demo show rate
- 30%+ workflow selector engagement

---

**Phase 2: Industry Expansion (Weeks 7-12) - Validation**

**Objective:** Build industry-specific landing pages based on Phase 1 engagement data

**Features:**
- Separate landing pages for top-performing industries:
  - `/hotels` - Hotel-specific messaging, property management workflow
  - `/finance` - Finance-specific messaging, ERP/accounting workflow
  - `/sales` - Sales-specific messaging, CRM workflow
- SEO optimization (target industry-specific keywords)
- A/B test variants based on Phase 1 data (hero messaging, CTA placement)

**Trigger to Proceed:**
- ✅ Phase 1 success criteria met
- ✅ Clear workflow winner identified (40%+ of clicks)
- ✅ Industry pattern emerges from traffic/booking data

**Success Criteria:**
- 1,500-2,000 visitors per month
- 3-4% demo booking rate (30-50 bookings/month)
- 60%+ demo show rate
- 30%+ ICP match (qualified leads)

---

**Phase 3: Trust-Building (Weeks 13-18) - Credibility**

**Objective:** Add customer proof and advanced conversion tools

**Features:**
- First 3-5 customer case studies (after pilots convert to paying customers)
- ROI calculator (once we have customer data to validate savings assumptions)
- Technical documentation (if enterprise buyers with CTOs emerge as pattern)
- Video testimonials (customer success stories)
- Expanded social proof (customer logos, review sites)

**Trigger to Proceed:**
- ✅ 3-5 pilot customers converted to paying customers
- ✅ Case study data collected (workflows automated, time saved, ROI achieved)
- ✅ Conversion funnel stabilized (understand typical buyer journey)

**Success Criteria:**
- 2,000-3,000 visitors per month
- 4-5% demo booking rate (60-80 bookings/month)
- 30%+ demo → pilot conversion
- 50%+ pilot → customer conversion

---

**Phase 4: Scale (Weeks 19-24) - Growth**

**Objective:** Scale lead generation and expand market reach

**Features:**
- Expand to 5-10 industry-specific landing pages (based on demand signals)
- Content marketing (blog, SEO-driven content)
- Advanced features:
  - Live demo environment (visitors can try teaching an agent)
  - Sandbox access (limited trial before purchase)
  - Free tier or freemium model (if applicable)
- Partnership/integration pages (legacy software vendors)

**Trigger to Proceed:**
- ✅ Proven demo → customer conversion funnel (predictable CAC/LTV)
- ✅ Product-market fit validated (customers renewing, referring, expanding)
- ✅ Operational capacity to handle increased lead volume

**Success Criteria:**
- 5,000+ visitors per month
- 5-10% demo booking rate (100+ bookings/month)
- 40%+ ICP match
- Cost per qualified lead <$200

---

### MVP Success Criteria (Decision Gate: Proceed to Phase 2?)

**User Engagement Metrics:**
- ✅ **Workflow Selector Engagement:** 30%+ of visitors click on a workflow
- ✅ **Demo Engagement:** 50%+ of visitors watch teaching/certification demos
- ✅ **Scroll Depth:** 70%+ scroll past fold to see core demos

**Conversion Metrics:**
- ✅ **Demo Booking Rate:** 2%+ conversion (10-20 bookings from 500-1,000 visitors)
- ✅ **Show Rate:** 50%+ of bookings show up for demo calls
- ✅ **ICP Match:** 30%+ of demos are qualified leads (ops managers, legacy software pain)

**Discovery Validation:**
- ✅ **Workflow Winner:** One workflow demo gets 40%+ of clicks (validates beachhead)
- ✅ **Geographic/Industry Pattern:** Identify where traffic comes from (hotels? finance? other?)

**Social Proof Validation:**
- ✅ **Testimonial Impact:** Track if Geometry Solutions testimonial increases conversion
- ✅ **Academic Credibility:** Track if Georgia Tech/MIT positioning increases trust

**Decision Gate:**
- **If metrics are met** after 4-6 weeks post-launch → Proceed to Phase 2 (Industry Expansion)
- **If metrics are below targets** → Iterate on MVP (A/B test messaging, refine demos, adjust positioning)

---

### Future Vision (6+ Months, Post-Phase 4)

**If Agent School Website is wildly successful, it becomes:**

**Product Evolution:**
- **Interactive Sandbox:** Let visitors actually TEACH an agent live on the website (vs. watching demo)
- **Workflow Marketplace:** Library of pre-trained agents for common workflows (e.g., "Purchase Order Agent for SAP")
- **Self-Service Onboarding:** Visitors can start training agents without booking demo
- **Agent Certification Badges:** Public certifications that prospects can review before purchasing

**Market Expansion:**
- **Vertical SaaS Play:** Deep integrations with specific legacy platforms (Opera PMS, SAP, Salesforce Classic, etc.)
- **Geographic Expansion:** Localized sites for international markets (EU, APAC, LATAM)
- **Partner Ecosystem:** Integration partners, implementation partners, resellers

**Platform Features:**
- **Community:** Forum for users to share workflows, tips, trained agents
- **API/Developer Portal:** Let technical buyers integrate Agent School into their tools
- **Enterprise Features:** SSO, multi-user management, advanced security/compliance

**Vision Statement:**
"Agent School becomes the default way companies automate ANY legacy software - the 'teaching layer' that sits on top of all enterprise systems, turning institutional knowledge into executable automation."

---

### Existing Assets & Redesign Approach

**What Exists (From Prior Work):**
- 79 React components cataloged (component inventory complete)
- Cyber Citrus design system (Phase 1 of 7 redesign in progress)
- Mock UI framework with 5 interactive demos:
  - Hotel PMS demo (can be adapted for Property Management workflow)
  - CRM demo (can be adapted for Sales workflow)
  - Other demos (Instagram, Notion, Granola)
- Next.js 16 + React 19 tech stack (established)

**Redesign Approach for MVP:**
- **Minimal Inspiration:** Take design principles (Cyber Citrus colors, gradient aesthetic) but rebuild from scratch
- **Component Reuse:** Selectively reuse stable components (Button, Card, Badge) where appropriate
- **New Build Priority:** Focus on MVP-specific components (workflow selector, teaching demo, certification demo)
- **Technical Debt:** Fix existing build errors during MVP development (site currently doesn't compile)

**Why Minimal Reuse?**
- Existing components built for "academic aesthetic" (old direction)
- New direction is "futuristic & visionary" (requires different tone/interactions)
- 6-week timeline requires focus on MVP features, not refactoring legacy code
- Clean slate allows faster iteration without technical debt

---

## Product Brief Complete ✅

**This Product Brief serves as the strategic foundation for all subsequent product development:**
- Product Requirements Document (PRD) will detail technical specifications
- UX Design workflow will translate vision into user flows and wireframes
- Architecture workflow will define technical implementation
- Epics & Stories will break down work into implementable tasks

**Next Recommended Workflow:** `create-prd` (Product Requirements Document)

---
