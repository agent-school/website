---
stepsCompleted: [1, 2]
inputDocuments:
  - "_bmad-output/planning-artifacts/product-brief-website-2026-02-10.md"
  - "_bmad-output/planning-artifacts/research/market-agent-school-vs-competitors-research-2026-02-12.md"
  - "docs/research/agent-school-vs-manus-n8n-competitive-analysis.md"
  - "docs/index.md"
  - "docs/architecture.md"
  - "docs/design/components-guide.md"
  - "docs/brownfield/redesign-roadmap.md"
workflowType: 'prd'
briefCount: 1
researchCount: 2
brainstormingCount: 0
projectDocsCount: 4
classification:
  projectType: 'web_app'
  domain: 'general'
  complexity: 'low'
  projectContext: 'brownfield'
  rationale: 'B2B/B2C SaaS marketing website (not educational tech). Agent School teaches AI agents, not students. Existing 79-component system undergoing comprehensive redesign.'
elicitationFindings:
  technicalConstraints:
    - 'Build errors: Resolved (no longer blocking)'
    - 'Dark mode: Net-new feature (system preference, no manual toggle)'
    - 'Component strategy: 79 existing components as reference guide, selective reuse'
  team:
    - 'Size: 3 people, all available full-time'
    - 'Timeline: 6-week target (flexible, not hard deadline)'
  mockUIRequirements:
    - 'All 5 demos equally important (Hotel PMS, CRM, Instagram, Notion, Granola)'
    - 'Comprehensive scope: Functionally complete software UI + AI agent'
    - 'Realistic production-like data with production-quality polish'
    - 'Dual demonstration: Software interface + agent capability to operate it'
  designAssets:
    - 'UX design document exists (written specs, no Figma design system)'
    - 'Implementation from DESIGN_SYSTEM.md + UX doc'
  futureIntegrations:
    - 'Phase 2+: CRM (HubSpot/Salesforce), email marketing, Hotjar analytics'
    - 'Not in MVP scope to avoid creep'
  performance:
    - 'Priority: Fast loading (Lighthouse/Core Web Vitals)'
    - 'CDN: Cloudflare or AWS CloudFront for high performance'
    - 'Vercel deployment with edge optimization'
  positioning:
    - 'Subtle competitive positioning (no direct competitor callouts)'
    - 'Stand on own value proposition'
---

# Product Requirements Document - Agent School Website

**Author:** Jack Luo
**Date:** 2026-02-12

