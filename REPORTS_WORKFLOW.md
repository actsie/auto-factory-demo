# Dynamic Report Generation Workflow

## Overview
Generate personalized website insight reports for prospects by customizing copy, AI examples, and stats based on their industry and website.

## Step 1: Gather Client Information

Before starting, collect:
- **Company name**
- **Website URL**
- **Logo** (SVG or PNG, will need white background if dark logo)
- **Industry**
- **Number of pages** (estimate)
- **Current hosting cost/month** (estimate or ask)
- **Average wait time for changes** (in days — how long between request and deployment)

## Step 2: Create Logo Directory & Add Asset

```bash
mkdir -p /public/assets/reports/[company-id]/
# Copy logo file to that directory
cp logo.svg /public/assets/reports/[company-id]/logo.svg
```

**Logo naming:**
- If SVG: `logo.svg`
- If PNG: `[company-name].png` (e.g., `magnettu.png`)

## Step 3: Audit Their Website

Visit their site and note:
1. **Current homepage headline** (exact text)
2. **Main CTA button text** (exact)
3. **What they're selling** (their positioning)
4. **Pain points in their copy** (vague CTAs, jargon, unclear positioning)

This makes your prompts credible — you're referencing real things you'd actually change.

## Step 4: Write AI Examples (3 prompts + results)

**Format each as:**
- **Prompt**: "Change [current thing] to [improvement direction]"
- **Result**: What you'd actually deliver (be honest, no padding)

**Examples of honest results:**
- ✓ 3 headlines ready
- ✓ 5 CTA options ready to test
- ✓ Copy rewritten + 1 alternative version
- ✓ 8 FAQs with answers ready to publish

**Avoid:**
- ❌ "+ email sequences" (vague)
- ❌ "+ placement recommendations" (fluff)
- ❌ "+ video script" (overcommitting)

**Template:**
```
prompt1: "Change their [current thing] to [improvement]",
result1: "✓ [specific deliverable — what they'd actually get]",

prompt2: "Update [part of site] — focus on [what matters]",
result2: "✓ [specific deliverable]",

prompt3: "Create/rewrite [thing] for [audience]",
result3: "✓ [specific deliverable]"
```

## Step 5: Add to data/reports.ts

Add new entry to `reports` array:

```typescript
{
  id: "company-slug",
  company: "Company Name",
  logo: "/assets/reports/company-slug/logo.svg",
  logoNeedsBg: false,  // true only if dark logo needs white background
  url: "https://company.com",
  industry: "Industry Name",
  pages: 12,           // estimated number of pages
  hostingCost: 35,     // $/month estimate
  waitDays: 3,         // avg days for changes to deploy
  aiExamples: {
    prompt1: "...",
    result1: "✓ ...",
    prompt2: "...",
    result2: "✓ ...",
    prompt3: "...",
    result3: "✓ ..."
  }
}
```

## Step 6: Test the Report

Visit: `http://localhost:3000/reports/[company-slug]`

Check:
- [ ] Logo loads correctly (right size, right background)
- [ ] Stats counters animate smoothly
- [ ] Industry-specific AI examples make sense
- [ ] All copy is accurate to their site
- [ ] Beam animations work on input fields
- [ ] Mobile responsive

## Step 7: Deploy

Push to main:
```bash
git add data/reports.ts public/assets/reports/
git commit -m "Add report: Company Name"
git push
```

Vercel auto-deploys. Report live at: `https://fountainofscale.com/reports/[company-slug]`

## Report URL Pattern

Share with prospects: `https://fountainofscale.com/reports/[company-slug]`

Each report is:
- Fully personalized
- Shows real audit of their site
- Demonstrates AI capabilities with industry-specific examples
- Includes urgency ("Limited Slots")
- Drives email signups with specific context

## Key Elements on Every Report

1. **Hero section** — Their logo, company name, industry
2. **Stats** — Animated counters showing current vs. your speed
3. **Problem section** — Friction cards showing real pain points
4. **Before/after** — What changes with full control
5. **AI examples** — 3 specific prompts tailored to their industry
6. **What's included** — 6 migration steps
7. **CTA** — Email capture with "(Limited Slots)" scarcity

## Tips

- **Be specific** about current state (headline text, CTA button) — shows you audited them
- **Be honest** about deliverables — no padding, no vague promises
- **Keep AI examples** to 3 each — shows speed, not comprehensive list
- **Match industry tone** — startup advisory examples differ from creative agency examples
- **Test before sharing** — check all animations, mobile view, copy accuracy

---

That's it! Add one report ≈ 15 minutes. Reusable forever.
