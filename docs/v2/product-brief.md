---
stepsCompleted: [1, 2]
inputDocuments:
  - "Notion: (master) AS 3: Website (https://www.notion.so/thejackluo/master-AS-3-Website-2ff8a2eef32080338e72fa7564b12454)"
  - "Notion: Business Proposal Draft (https://www.notion.so/thejackluo/Business-Proposal-Draft-2e78a2eef32080a4bdb3d72d3486b0e4)"
  - "docs/index.md (Master documentation index - to be loaded selectively as needed)"
  - "docs/design/design-system.md (Cyber Citrus design system)"
  - "docs/planning/redesign-roadmap.md (7-phase redesign plan)"
  - "docs/architecture/mock-ui-framework.md (Mock UI framework)"
  - "docs/guides/components-guide.md (Component usage guide)"
date: 2026-02-10
author: Jack Luo
---

# Product Brief: Agent School Website

<!-- Content will be appended sequentially through collaborative workflow steps -->

## Executive Summary

Agent School Website is the primary conversion vehicle for Agent School—a platform that teaches, certifies, and deploys AI agents to automate workflows on legacy software systems. The website's mission is to create **problem awareness** while positioning Agent School as the inevitable solution, targeting skeptical buyers, overwhelmed operations managers, and companies frustrated with existing AI automation tools.

**The Challenge:** Visitors don't yet know they need Agent School. The website must convince them that reliable, cost-effective automation on legacy systems is not just possible—it's essential for survival. Success means visitors leave understanding this is a fundamentally better approach and feeling confident Agent School is a cutting-edge solution worthy of their time.

**The Opportunity:** Current automation solutions fail spectacularly—RPA breaks with every UI change, workflow builders can't handle legacy software, and general AI agents burn budgets with 80% reliability. Companies face a painful choice: hire more people, burn out ops teams, or miss revenue opportunities. Agent School solves what everyone else avoids: **automating undocumented legacy software with certification-grade reliability at 10x lower cost.**

**Initial Vertical:** Hotels (small to mid-size chains, 5-50 properties) as the validation wedge—a sector drowning in legacy Property Management Systems, cross-system workflows, and manual operational overhead.

**The Vision:** Create a website that feels like the future—not just explaining what Agent School does, but giving visitors a visceral understanding of the paradigm shift from brittle automation to intelligent, self-healing workflows. The website serves dual purposes: **conversion vehicle** (book demos, qualify leads) and **discovery engine** (interactive demos reveal which workflows resonate most, informing product development). Through emotional storytelling, interactive demonstrations, and honest validation transparency, visitors experience the "aha moment" before booking a call.

---

## Core Vision

### Problem Statement

Companies are trapped in an automation paradox: they desperately need to automate workflows on decades-old legacy software (ERPs, CRMs, proprietary databases, industry-specific tools), but every existing solution fails in a different way:

- **Traditional RPA** (UiPath, Automation Anywhere, custom consultants) creates brittle scripts that break with every UI change, requiring expensive ongoing maintenance
- **Workflow builders** (n8n, Zapier) only work with modern APIs, leaving legacy systems completely untouched
- **General AI agents** (Composite, etc.) burn through budgets with unpredictable costs and 80% reliability—good enough for demos, catastrophic for production

The result: companies are forced to scale by hiring more people, burning out operations teams with manual grunt work, and missing revenue opportunities due to slow, error-prone processes.

**Initial Vertical Focus - Hotels:**

The hotel industry exemplifies this pain—small to mid-size hotel chains (5-50 properties) are locked into legacy Property Management Systems built in the 1990s, with no modern APIs and no path to automation. Every workflow requires manual coordination across disconnected systems.

**The website's problem:** Potential customers don't even know a better solution exists. They've been burned by automation promises before. They need to be convinced that:
1. This problem is solvable (creating awareness)
2. Agent School specifically can solve it (building credibility)
3. Acting now is critical (creating urgency)

### Problem Impact

**The Hotel Reality - Three Workflow Nightmares:**

**🌙 Night Audit Reconciliation:**

It's 2:47 AM. Maria, the night audit manager at a 28-property hotel chain, is on hour three of reconciling today's reservations. Three systems open on her screen: the ancient Property Management System (last updated in 2003), the housekeeping software (different vendor, different login), and the accounting platform (Excel spreadsheets because the PMS export is always wrong).

She manually copies reservation IDs from the PMS, checks room status in housekeeping, cross-references payment entries in accounting. One typo in a rate code—just one—and tomorrow's revenue report will be off by thousands. She'll have to explain it to the regional manager. Again.

She's been doing this every night for three years. The systems never talk to each other. The export buttons lie. And if she's sick? Someone else suffers through this. Every. Single. Night.

**🏨 Check-in/Check-out Processing:**

The lobby line is six people deep. It's Friday at 3 PM—peak check-in time. James at the front desk smiles at the family in front of him while internally panicking.

He needs to: pull up their reservation in the PMS (spinning... still loading), verify their payment in the booking engine (different system, different tab), process their credit card through the payment terminal (third system, stand-alone device), update room assignment in housekeeping software (fourth system, only works on Internet Explorer), and print their key cards (finally, something that works).

The PMS just froze. Again. The family's kids are melting down. The people behind them are checking their watches. James has clicked "Refresh" four times. This is his life, 40+ times per day, every single check-in.

And check-out is the same nightmare in reverse.

**🧹 Housekeeping Coordination:**

Sandra, the housekeeping manager, holds her phone in one hand and a paper printout in the other, trying to reconcile what the PMS says (Room 237 is vacant-dirty) with what the housekeeping app shows (Room 237 is clean-inspected) with what the front desk just called to tell her (guest checking into Room 237 in 10 minutes).

None of the systems sync. She manually updates three platforms—one from her phone, one from the desktop in her office, one via text message to the front desk because the PMS won't let housekeeping staff update directly.

When a room's status is wrong (and it's wrong multiple times per day), guests get angry, front desk gets blamed, and Sandra spends hours tracking down what actually happened. Every room status change requires manual coordination across three systems. Every. Single. Room.

**The Cost:**
- **Operational:** Forced to hire additional staff to handle manual coordination overhead
- **Human:** Teams burn out from repetitive, thankless work that systems should handle
- **Revenue:** Delayed check-ins lose upsell opportunities; reconciliation errors cost thousands per month
- **Strategic:** Small hotel chains can't compete with big brands that have modern tech—they're stuck in 1998

### Why Existing Solutions Fall Short

The automation market has fragmented into solutions that each fail to address the core problem:

**Traditional RPA (UiPath, Automation Anywhere, consultants):**
- ❌ **Brittle execution** - Breaks when UI changes (button moves, DOM elements shift)
- ❌ **Expensive maintenance** - Requires ongoing consultant fees to fix breakage
- ❌ **Custom builds** - Each workflow is a bespoke project with long implementation timelines
- ❌ **No learning** - Scripts don't improve over time, just accumulate technical debt

**Workflow Builders (n8n, Zapier, Bubble Labs):**
- ❌ **API-dependent** - Only works with modern SaaS tools that have documented APIs
- ❌ **Legacy software exclusion** - Can't handle undocumented or UI-based legacy systems (like 90% of hotel PMS platforms)
- ❌ **Modern-only focus** - Ignores the vast majority of enterprise software infrastructure

**General AI Agents (Composite, Manus):**
- ❌ **Unpredictable costs** - Every execution requires expensive LLM calls from scratch
- ❌ **80% reliability** - Good enough for demos, catastrophic for production workflows (hotel can't have 20% check-in failure rate)
- ❌ **Lack of transparency** - Black box behavior makes debugging impossible
- ❌ **No learning** - Agents start fresh each time, never building institutional knowledge

**Internal Solutions (large hotel chains):**
- ❌ **Resource-intensive** - Only viable for Marriott/Hilton-scale enterprises with dedicated dev teams
- ❌ **One-off builds** - Can't leverage shared learning across properties
- ❌ **Maintenance burden** - Each chain rebuilds the same infrastructure

**Why hasn't this been solved?**
The legacy automation space is **technically hard** (teaching agents to learn vs. one-off prompting is complex), most companies are **slow to adopt AI**, and vendors chase easier opportunities in modern SaaS automation. AI agents only recently became capable enough (better LLMs, vision models, lower costs) to make this economically viable. Agent School is attacking the hardest problem that everyone else is avoiding—which is precisely why the opportunity exists.

### Proposed Solution

Agent School introduces a paradigm shift: instead of prompting AI agents from scratch or scripting brittle automations, **teach agents once, certify their competency, then deploy them for deterministic replay.**

**The "School" Model:**

**1. Teaching (Natural Knowledge Transfer)**
Users teach agents like training an employee—through specialized screen recordings where the agent observes intent, not just clicks. 

**Hotel Example:** Maria (night audit manager) performs her reconciliation workflow once while Agent School watches. She navigates the PMS, pulls reports, cross-checks housekeeping data, updates accounting. The agent sees not just "click button at coordinates X,Y" but "retrieve today's check-ins where payment status is pending." It learns the WHY, not just the WHAT.

The agent explains back what it learned (confirms understanding like a student), Maria creates sandbox tests using yesterday's data, and the agent handles edge cases by asking clarifying questions ("When a reservation has split payments, do I reconcile each transaction separately or sum them first?"). Teaching is natural, requires no technical skills, and captures institutional knowledge.

**2. Certification (Reliability Guarantee)**
Before deployment, agents undergo rigorous testing:
- Variance generation to test edge cases (What if the PMS is slow? What if housekeeping data is missing?)
- Sandbox environments to ensure safety (test on yesterday's data before touching today's operations)
- Progressive validation to build confidence (run in parallel with Maria for a week before going solo)

The certification system is Agent School's **strategic competitive advantage** (currently in validation—early pilots showing measurable reliability improvements, with roadmap to full deployment data feedback loop). It transforms unpredictable AI into trustworthy automation.

**3. Deployment (Self-Healing Execution)**
Certified agents execute workflows deterministically using cached operations for speed and cost efficiency. 

**Hotel Example:** Maria's night audit agent runs automatically at 2 AM. Pulls PMS data, reconciles housekeeping, updates accounting. When the PMS vendor pushes a UI update (button moved, new dropdown added), the self-healing system automatically updates operations to maintain compliance—no human intervention required. Maria wakes up to completed reconciliation reports instead of a 3-hour manual slog.

The result: **"teach once, automate forever"** economics vs. ongoing maintenance costs.

**The Technical Breakthrough:**
Agent School generates MCP (Model Context Protocol) wrapper connectors for legacy apps, creating a semantic layer of operation nodes that execute UI interactions or API calls. Agents see both English descriptions AND deterministic code, enabling them to understand intent while executing reliably. This works even on **undocumented legacy software**—a critical competitive moat.

**The User Journey (Hotel-Specific):**
1. Hotel operations manager demonstrates painful workflow via specialized screen recording
2. Agent drafts automation, manager refines and corrects
3. Agent undergoes certification testing (edge cases, variance, sandbox validation)
4. Certified agent deploys gradually (parallel runs, then solo)
5. Agent continuously improves, learning from real-world execution
6. Self-healing adapts when PMS vendor updates UI

**The Economic Model:**
- **10x cheaper** than general AI agents (workflow caching eliminates repeated LLM costs)
- **10x cheaper** than traditional RPA (no ongoing consultant maintenance)
- One-time skill creation → infinite deterministic replays
- No breakage costs from UI changes (self-healing)

**For hotels:** Automating night audit alone saves 15+ hours per week per property. At 28 properties, that's 420 hours/week = $20K+/month in labor costs (or redeployed to guest experience).

### Key Differentiators

**1. Certification System (Strategic Advantage in Development)**
Agent School's certification testing framework is designed to become our biggest competitive moat as we gather deployment data—each successful automation teaches the system how to test more rigorously.

**Current Status:** Early validation phase with pilot customers  
**Roadmap:** Full deployment data feedback loop (learning from failures across properties)  
**Competitive Defense:** Building robust AI certification is technically complex—requires systematic testing methodology, deployment data (learning from real failures), and architectural separation of AI nodes from deterministic operations. Even if competitors attempt to copy, they lack the deployment experience and data advantage.

**How it works:**
- Variance generation (testing edge cases systematically)
- Sandbox validation (safe testing environment)
- Progressive deployment (parallel runs before solo execution)
- Continuous learning (improves from real-world data)

**2. Self-Healing Automation (Proves Reliability)**
When UI changes break traditional RPA, Agent School automatically adapts:
- Detects changes in UI structure (buttons moved, DOM elements shifted)
- Updates operations to maintain workflow compliance
- No human intervention required
- Eliminates ongoing maintenance costs

**Hotel Example:** When Opera PMS or Cloudbeds pushes a UI update, night audit workflows continue running without breaking. This proves reliability in a way competitors can't match—workflows that "just keep working" build trust that black-box AI agents never achieve.

**3. Undocumented Legacy Software Specialization**
Agent School works on systems with no APIs, no documentation, and complex UI interactions:
- Vision models "see" UIs like humans do
- Semantic understanding captures intent, not just clicks
- Works on proprietary, industry-specific, decades-old systems
- **Competitive moat:** Hard to replicate without extensive deployment experience on legacy systems

**Hotel Example:** Most hotel PMS platforms (Opera, Cloudbeds, RoomKey, etc.) have minimal APIs and zero MCP servers. Agent School creates the automation layer these systems never built.

**4. "Teach Once, Automate Forever" Economics**
Workflow caching eliminates the cost structure that makes competitors prohibitively expensive:
- One-time LLM cost to learn workflow
- Deterministic replay for all subsequent executions
- 10x cheaper than general AI agents prompting from scratch
- Self-healing eliminates RPA maintenance costs

**5. Technology Timing Advantage**
Agent School is possible now because of recent breakthroughs:
- **LLMs at execution maturity** - Models are now good enough for reliable workflow execution
- **Cost economics** - Model prices dropped enough to make workflow caching profitable
- **Vision model capability** - Can "see" and understand UIs far better than 2 years ago
- **Market readiness** - Companies feel urgent pressure to automate or fall behind
- **Convergence** - Combination of agents + self-healing + certification + caching creates defensible system

---

## Validation Status

**Vertical Focus:** Hotels (small to mid-size chains, 5-50 properties)

**Workflow Hypotheses (Under Customer Discovery):**

1. **Night Audit Reconciliation** 
   - Pain: Nightly 2-3 hour manual process across 3+ disconnected systems
   - Value: 15+ hours/week saved per property
   - Complexity: High (cross-system, data validation, accounting accuracy critical)

2. **Check-in/Check-out Processing**
   - Pain: Guest-facing delays, system juggling during peak hours
   - Value: Faster check-ins, better guest experience, upsell opportunities
   - Complexity: Medium (real-time, customer-facing, payment processing)

3. **Housekeeping Coordination**
   - Pain: Manual status updates across 3+ platforms, miscommunication
   - Value: Real-time room status accuracy, operational efficiency
   - Complexity: Medium (mobile + desktop, frequent updates, cross-team coordination)

**Discovery Progress:**
- Currently conducting customer interviews with hotel operations managers
- Validating pain intensity, willingness to pay, and workflow prioritization
- Identifying which workflow causes most acute daily pain to target first
- Gathering real-world PMS platform data (Opera, Cloudbeds, RoomKey, etc.)

**Website Strategy Impact:**
Website will function as both a **conversion vehicle** and **discovery engine**:

**Interactive Discovery Widget:**
"Which hotel workflow drains your team's time every day?"
- [🌙 Night Audit] "Reconciling systems at 2 AM"
- [🏨 Check-in/Check-out] "Juggling three systems while guests wait"
- [🧹 Housekeeping] "Coordinating room status across platforms"

Visitors select their pain point → see personalized demo of that workflow → Agent School captures which workflows resonate most → discovery data informs product development priority.

**Data Capture Strategy:**
- Track which workflow demos get highest engagement
- Measure time spent per demo type
- Identify which personas self-select into which workflows
- Calculate conversion rate by workflow type
- Use engagement data to validate beachhead workflow hypothesis

**Outcome:** Website becomes the primary customer discovery tool—every visitor interaction reveals market demand signals. First 3-5 customers will likely emerge from whichever workflow shows highest engagement, validating the beachhead before scaling.
