---
target: marketing homepage
total_score: 25
p0_count: 1
p1_count: 1
timestamp: 2026-05-19T19-32-34Z
slug: app-marketing-page-tsx
---
# Design Critique — Marketing Homepage (`app/(marketing)/page.tsx`)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Static page; no system state to convey. Hover affordances present per DESIGN.md. |
| 2 | Match System / Real World | 2 | "Shuuk" name encodes the emotional moment ("shook!") but the page never names it. Copy carries the entire match-to-real-world load. |
| 3 | User Control and Freedom | 2 | One CTA path. The secondary "Explore the Platform" button exists in code but is `className="hidden"`. |
| 4 | Consistency and Standards | 3 | Internally consistent (Book a Demo everywhere). Brand-doc consistency failure is a separate finding. |
| 5 | Error Prevention | 3 | n/a. |
| 6 | Recognition Rather Than Recall | 3 | Comparison section is the strongest moment on the page; names real tools the visitor is escaping. |
| 7 | Flexibility and Efficiency | 1 | Single funnel: scroll → book → meeting. Mismatch with the 30-min volunteer persona. |
| 8 | Aesthetic and Minimalist Design | 3 | On-brand primitives, no glass / gradient text / soft shadows. Identical-card-grid x2 (Products + Pricing) caps the score. |
| 9 | Error Recovery | 3 | n/a. |
| 10 | Help and Documentation | 2 | No help on page. The demo IS the help system. |
| **Total** | | **25/40** | **Visually on-brand. Strategically misaligned with PRODUCT.md.** |

## Anti-Patterns Verdict

**Does this look AI-generated?**

- **LLM assessment.** Category-reflex first-order: passes (basketball software → not navy/red SportsEngine palette). Second-order: lives in the "indie maker stack" lane (Gumroad / brutalist / hot pink) which is itself a training-data family — but well-executed and intentional, with explicit anti-references against the lanes it could have collapsed into. Not AI slop. The voice is real.
- **Deterministic scan.** `detect.mjs` not bundled with this skill version; deterministic scan unavailable. Manual ban audit substituted.
- **Visual overlays.** No browser automation available; no `[Human]` overlay this run.

**Manual bans audit**:
- Side-stripe borders, gradient text, hero-metric template, modals, founder portraits, FAQ accordions, soft drop shadows, stock photography, "Trusted by" logo wall: **ALL ABSENT.** Strong DESIGN.md compliance.
- **Identical card grids: PRESENT** — Products (3 cards) + Pricing (3 cards) on the same page. Variant colors differentiate but structural shape is identical. Shared-design-law violation.
- **Em dashes: PRESENT** — `products.tsx:32` ("realtime — on the site"); `hero.tsx` image alt ("three tools in action — live scoring on iPad"). Shared-design-law violation.
- **Enterprise-sales theater as primary CTA: PRESENT** — "Book a Demo" is the primary CTA in hero, Starter tier, Broadcast tier, dark brand band, and form section. PRODUCT.md permits the demo CTA only as *secondary*. PRODUCT.md violation.

## Overall Impression

Visually, this page is doing the brand work — Plein at hero scale, brutalist card variants, mono captions, hot pink accents, names incumbents in copy. The comparison section ("Before shuuk / With shuuk") and the brand-band copy ("Run your league the way you wanted to") are the strongest emotional beats — both on-voice.

Strategically, the page is a SaaS sales funnel. Every primary CTA is "Book a Demo". PRODUCT.md, locked 10 minutes ago, says the page's job is one self-serve conversion: "Create yours now." There is no current path on the page that delivers that. The 30-minute IG-arriving volunteer does not have 20 minutes for a scripted call.

The biggest opportunity: invert the funnel. Make this an Olipop PDP for "your league" with one Add-to-Cart cadence CTA, not a marketing site with five sections of proof leading to a sales meeting. Visual cleanup (em dashes, card grids, hero composition) is downstream of that decision.

## What's Working

1. **The "Stop juggling X, Y, Z" copy pattern.** Hero supporting line names Excel, WordPress, Swish, Canva, BallerTV by name. Exactly the campaign engine from PRODUCT.md.
2. **The Comparison section.** Concrete pain ("WordPress site that breaks every plugin update", "Stats on a clipboard, typed into Swish later") paired with concrete relief. Recognition-rich, on-voice, structurally sound. Best section on the page.
3. **Typographic confidence.** Hero `clamp(44px, 7vw, 84px)` Plein Black + JetBrains Mono captions + brutalist card variants. The voice carries even where the strategy doesn't.

## Priority Issues

### [P0] Primary CTA contradicts PRODUCT.md

**What**: Every primary CTA is "Book a Demo" — hero, Starter tier, Broadcast tier, dark brand band, then a demo form section. Enterprise tier is "Talk to us" (same family). PRODUCT.md locks "Create yours now" as the single conversion event; "Book a Demo" is permitted only as a secondary affordance, never primary, never above-the-fold-center.

**Why it matters**: The IG-arriving volunteer has 30 minutes between dinner and kids' bedtime. They came to see if a tool exists; they did not come to book a 20-minute call. Every "Book a Demo" CTA is the wall at which they bounce. The brand-band copy "Twenty minutes with us and you'll see if shuuk fits" is the explicit ask — and the persona declines.

**Fix**: Swap primary CTAs to "Create yours now" on hero + Starter + Broadcast. Replace the dark "Book a Demo" brand band with a self-serve creation entry (or remove it; the form section can stay as a secondary path). Keep one "Want a walkthrough?" link in nav at most. Enterprise tier's "Talk to us" can stay (enterprise pricing requires a conversation by nature).

**Suggested commands**: `/impeccable shape homepage-cta` to plan the architecture, then `/impeccable clarify` for the copy pass.

### [P1] Hero image-first composition delays the message

**What**: The hero image (three product UIs composited) is the first thing the viewer sees at every breakpoint; the headline lives below it. On mobile (the primary surface per PRODUCT.md), the headline is below the fold.

**Why it matters**: The persona arrives cold from IG with the question "What is this?" Two seconds to answer. A composited image of three product UIs requires interpretation — the viewer doesn't yet know what shuuk is, so the image cannot teach them that shuuk does three things. The "Stats. Streaming. Sites. All in one." headline IS the two-second answer, and it's beneath the fold.

**Fix**: Invert — headline + tagline + CTA above the image. Image stays as supporting evidence, sized down or moved below. Better: scrap the composite product screenshots entirely and use a real user-created league page as the hero (per PRODUCT.md principle 1, the product IS the marketing).

**Suggested commands**: `/impeccable shape hero` then `/impeccable layout hero`.

### [P2] Identical card grids twice on one page

**What**: Products renders three identical card structures (badge + photo + heading + features list). Pricing renders three identical card structures (mono kicker + price + features + CTA). The page is half-identical-card-grid by section count.

**Why it matters**: Shared design law explicitly bans the identical card grid; the AI-slop test names "same-sized cards with icon + heading + text, repeated endlessly." Variant colors (paper/ink/pink) do real work, but the structural sameness still reads as template — and the same shape twice on one page compounds the read.

**Fix**: Break Products into varied layouts — one large feature-card-paper + two smaller; alternating-row sections; or treat each product as a configurator variant panel (Olipop variant picker, per PRODUCT.md principle 2). Pricing can keep a grid but drop the featured-middle-card lift trick; consider a single configurator block instead ("How many teams? Live stats? Here's your price").

**Suggested commands**: `/impeccable layout products` and `/impeccable distill pricing`.

### [P3] Em dashes in copy

**What**: Two em dashes — `products.tsx:32` ("realtime — on the site") and `hero.tsx` image alt ("three tools in action — live scoring on iPad").

**Why it matters**: DESIGN.md / shared design law: no em dashes (and not `--`). Style discipline.

**Fix**: Rewrite with commas, colons, or periods. Sample: "the score, box, and standings update in realtime, on the site, in the apps, on the broadcast."

**Suggested command**: `/impeccable clarify hero, products`.

### [P3] Metadata is basketball-locked, contradicts sport-agnostic positioning

**What**: `<title>` is "Shuuk — Basketball league software"; meta description leads with "All-in-one platform for basketball leagues." (Bonus: the title itself contains an em dash.)

**Why it matters**: PRODUCT.md commits to "sport-agnostic from day one, hoops is the wedge." Page title is the first impression in search, OG cards, and link previews; locking the words to basketball commits the brand to a smaller pond than the architecture supports.

**Fix**: Rewrite title and OG copy to lead with "youth sports" or "your league". Let the visuals carry the "basketball is what we love" beat without locking the words.

**Suggested command**: `/impeccable clarify metadata`.

## Persona Red Flags

**Tired Volunteer Org Director (project persona)**: Lands from IG on a phone. Sees a composited screenshot (illegible at first glance — they don't yet know what shuuk is). Scrolls past three "Book a Demo" CTAs and a $499/month price tag without an "I'll just try it" path. Has 5 minutes, not 20. **Bounces at "Book a Demo."**

**Alex (Power User)**: Sees a three-tier SaaS pricing table. Identifies "featured middle plan lifted" cliché instantly and is mildly irritated by the manipulation. Wants to compare Broadcast vs Starter feature-by-feature but can't get past "Book a Demo" gating. **Goes to compare a competitor.**

**Jordan (First-Timer)**: Comparison section nails them — "yes, that's exactly what my Sundays look like." Emotional peak. Then Pricing → $99 / $499 → Book a Demo. "I don't need a demo, I need to know if it does U12 girls Saturday league with 8 teams." **Abandons at the price-to-demo gate.**

## Minor Observations

- Hero's "Explore the Platform" button is `className="hidden"` — dead code. Remove, or restore with rewritten copy.
- Hero supporting line "For Leagues, Teams, Clubs, Tournaments" is in `text-3xl font-black`, larger than the paragraph below it — mutes hierarchy. Demote to mono-caption size or kill.
- "Get shuuk!" appears as a bolded sentence inside the hero supporting paragraph. Per the brand-as-verb principle, it wants to be a CTA, not body copy.
- Pricing's `md:-translate-y-2` on the featured tier is the classic three-tier-with-featured-middle SaaS cliché. Visual emphasis fine; pattern is on the radar.
- The dark Brand Band is the strongest emotional moment on the page — copy is genuinely good ("Run your league the way you wanted to"). But it terminates in "Book a Demo," which is a betrayal of the setup. Fix the CTA, keep the band.

## Questions to Consider

- What if the homepage WAS the configurator? Hero is "What are you setting up — League / Tournament / Single event / Team page" instead of "Stats. Streaming. Sites." Per PRODUCT.md principle 2, the page IS the PDP.
- What if Pricing were a single configurator block ("How many teams? Live stats? Here's your price"), not a three-tier table?
- What if Comparison moved to position 2 (right after Hero)? It's the strongest recognition moment on the page; burying it after Products dilutes the peak.
- The brand name is a feeling ("shook!"). Where does the page name the feeling out loud?
