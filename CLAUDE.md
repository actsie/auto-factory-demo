# Fountain of Scale — Project Notes

## Stack
- Next.js (App Router), TypeScript, Tailwind CSS v4, GSAP animations, lucide-react

## Remotes
- `git push` deploys to **both** repos simultaneously:
  - https://github.com/Exploration-labs/automation-factory
  - https://github.com/actsie/auto-factory-demo
- Vercel auto-deploys every branch as a preview URL

## Per-Pitch Workflow
To create a personalized version of the landing page for a new company:

1. Branch off main:
   ```
   git checkout main && git checkout -b pitch/company-name
   ```

2. Edit **only** `pitch-config.ts` — all company-specific copy lives there:
   - Hero headline, subtext, badge, CTAs
   - Bottom CTA section headline and subtext

3. Commit and push the branch:
   ```
   git add pitch-config.ts && git commit -m "Pitch: Company Name" && git push -u origin pitch/company-name
   ```

4. Vercel generates a unique preview URL for that branch — send it to the company.

5. To pull in design updates from main later:
   ```
   git checkout pitch/company-name && git merge main
   ```

## What Stays the Same Per Pitch
- Team bios (Mai + Ben)
- Pricing tiers
- How it works steps
- FAQ
- Stats

## Key Files
- `pitch-config.ts` — copy that changes per pitch
- `data/features.ts` — how it works steps
- `data/pricing.ts` — pricing tiers
- `data/faqs.ts` — FAQ
- `data/team.ts` — team bios + LinkedIn links
- `app/opengraph-image.tsx` — dynamic OG image

## Insight Reports — AI Examples Standard

When creating insight reports, all 3 AI examples must follow this format:

**Prompt (You say):**
- Sounds like a founder talking to a developer
- States the problem, then the specific action
- Conversational, plain English, no jargon
- One specific thing per example

**Result (✓ outcome):**
- Shows what actually changed (past tense)
- Includes before → after, not just "updated"
- Shows where it changed (section/component)
- Specific enough to screenshot

### ✅ Good Example
```
prompt: "The 'Book a meeting' button is generic. Change it to show what they'll actually see"
result: "✓ Button text changed from 'Book a meeting' to 'See policy updates live' in hero and nav"
```

### ❌ Bad Example
```
prompt: "Create persona-based CTAs for each buyer type"
result: "✓ CTAs updated for personas"
```

**Before pushing: Verify all 3 examples against the checklist in your memory.**
