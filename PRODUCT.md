# Product

## Register

brand

## Users

**Primary**: youth sports organisers — usually a single person who is both ops and director. Most are volunteers; this is their side gig, not their job. They're time-poor and passion-rich. Their current bar for success is "did it happen at all?" — beauty has never been on the table. That's the wedge.

**Context**: they discover shuuk on Instagram, not Google. They arrive tired and jaded, having already decided no good tool exists for what they do. The trigger is rarely a search; it's almost always a referral artifact — an IG ad, a friend's league site, an invitation from a competition their team has been entered into. The moment they hit shuuk.ca is "wait, what is this?"

**Job**: replace the stitched-together stack (JotForm + Sheets + WhatsApp + SportsEngine + Eventbrite) with one tool, in the 30 minutes between getting the kids home and bed.

## Product Purpose

Shuuk! is the do-everything app for youth sports organisers tired of stitching mismatched tools together. One product creates leagues, tournaments, events, and team pages — all of them looking like something the organiser would actually share, not something they'd apologise for.

The launch wedge is basketball ("hoops is the wedge"), but the architecture is sport-agnostic from day one. Market: North America first (Canada + US).

**Success on shuuk.ca**: a single conversion, "Create yours now." Self-serve, no gate, no demo call, no waitlist. The visitor walks away having started building their league/tournament/event, or they don't.

## Brand Personality

Three words: **irreverent, quirky, bold**.

- **Irreverent**: willing to name competitors by name. The recurring campaign pattern is "Stop [BadTool-ing]. Just shuuk!" with the verb-slot filled by the incumbent of the moment (Stop JotForming. Stop SportsEngine-ing. Stop Eventbrite-ing. Just shuuk!).
- **Quirky**: the name is a verb that's a misspelled feeling ("shuuk!" = "shook!"). Leans into being slightly weird in a space dominated by 2008-grade county-government portals.
- **Bold**: typographic confidence, brutalist hard-offset shadows, hot pink + hot blue, flat color, no chrome. Visual restraint is the enemy. (Visual tokens live in DESIGN.md.)

**Tone in copy**: short. Imperative. Two-clause cadence. Exclamation marks are permitted. Brand-as-verb. No corporate hedging.

## Anti-references

**The opps** — ban explicitly:

- **Teamlinkt**: generic bright-blue SaaS, dashboard screenshots as hero, stock photography of multi-ethnic kids in jerseys.
- **SportsEngine**: 2008-era county-portal info density, navy/red, calendar-icon iconography everywhere.
- **LeagueApps**: slightly cleaner but still SaaS-cream, navy + lime accents, marketing-cliché hero structures.

**Patterns to ban** regardless of where they show up:

- Founder portraits, "meet the team" sections.
- Dashboard-screenshot heroes. (A screenshot of the product is not the hero; what the product *produces* is.)
- FAQ accordions at page bottom.
- Calendar-icon iconography as shorthand for sports/scheduling.
- Generic stock photography of "people playing sports."
- Soft drop shadows, gradient text, glassmorphism (banned in DESIGN.md; reinforced here at the brand level).
- Enterprise-sales theater language beyond what's carved out below: "Talk to sales," "Request pricing," "Contact us for enterprise."

### Short-term exceptions (pre-PMF)

Two banned patterns are temporarily permitted with constraints. Both sunset when the product-is-marketing principle can carry the proof load on its own.

- **"Trusted by" / social proof strip**: permitted as a small monochrome treatment, never a wall of colorful logos. Cap at 4–6 names. Tone neutral, no breathless "loved by." **Sunset trigger**: shuuk has enough public user-created league pages that "look what people built" replaces logo borrowing as the proof.
- **"Book a demo"**: permitted as a **secondary** CTA only, never primary, never above-the-fold-center. Primary CTA on shuuk.ca is always "Create yours now." Demo affordance lives in nav or below the fold, sized down, no "Book a free 30-min consultation" sales-y framing. Phrase it as "Want a walkthrough?" or similar. **Sunset trigger**: self-serve activation rate is healthy enough that the demo CTA is more friction than help.

## Design Principles

Four principles. Every design call must pass all four.

1. **The product is the marketing.** Every league, tournament, and event page a user creates is the next viewer's IG ad. User-created surfaces must look as good as our own marketing surfaces. If a created page wouldn't make a stranger ask "what is this?", the design is failing the principle.

2. **Creation is a configurator, not a form.** Setup flows feel like Olipop's PDP: variants, "what's included" treatment, photographic hero, "Add to Cart" cadence on the primary CTA. Never a TurboTax-style stepper or a generic onboarding wizard. The user is *buying their league site*; treat the flow like an e-commerce purchase, not a settings panel.

3. **Beauty is the wedge.** The opps are functionally adequate and aesthetically indefensible. Shuuk's moat is the part competitors won't invest in. Anywhere "make it work" and "make it gorgeous" trade off, the trade is settled in advance: gorgeous wins.

4. **Effortless wins over comprehensive.** The volunteer has 30 minutes. Make the path to first result short, even if it means hiding power-user surface area. Impress them with what they shipped, not what we shipped.

## Accessibility & Inclusion

- **WCAG 2.2 AAA target.** Contrast, focus visibility, hit targets, keyboard navigation — all at AAA. (Hot pink on near-black will require contrast verification; document any compensations in DESIGN.md.)
- **Bilingual at launch: en + fr-CA.** Architect routing and content for both. Design copy that survives translation; no untranslatable puns in load-bearing positions. The "Stop X-ing. Just shuuk!" line gets an fr-CA variant ("Arrête de JotFormer. Juste shuuk!" or similar).
- **`prefers-reduced-motion` respected.** DESIGN.md's reduced-motion block applies; lift-and-shadow becomes a snap, no parallax or marquee.
- **Mobile-first, low-bandwidth.** Primary visitor is on a phone, often on arena WiFi or LTE in a dead zone. No autoplay video, no heavy hero loops, tight image budgets, no decorative font weights loaded that aren't used. Photographic hero served responsive with `<picture>` + AVIF/WebP and aggressive sizing.
- **Audience tech literacy**: assume the user is *not* a designer or engineer. No jargon ("configurator", "schema", "auto-layout") in user-facing copy; plain words ("set it up", "what's included", "your league page"). "Configurator" is permitted as an internal design term in this document and team conversations, never in product UI.
