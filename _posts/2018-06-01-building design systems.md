---
layout: post
title: Building Design Infrastructure: Tokens, Components, and Systems
cover: ds-collection-cover.jpg
date: 2025-12-14 00:00:00
categories: posts
---

<!---v0.6-->

## TL;DR

- I build design infrastructure that saves teams time, improves UX quality, and keeps multiple products aligned
- Primary examples: Commune DS vNext (rebrand, tokens, interactive components, governance) and Microsoft Fabric (shared patterns at scale, implementation-focused craft)
- I work across tokens, components, and the design→code toolchain, including AI-assisted prototyping experiments to boost iteration speed
- I lead DS work by tutoring designers, aligning with front-end engineers on APIs and structure, and writing durable internal documentation

> Note: a few legacy artifacts are in CN/JP. Captions summarize the takeaway, so you don’t need to read the labels

---

## Contents

1. Commune Design System (tokens, components, governance, and outcomes)

1. Microsoft Fabric: shared patterns at scale (reuse, constraints, craft)

1. Toolchain: Tokens Studio → Style Dictionary → Storybook, plus AI-assisted prototyping experiments

1. Mobile systems: HUMA and LeetCode (localization and motion strategy)

---

## Why I care about design infrastructure

Design infrastructure is valuable when it shifts time from reinvention to real UX improvement:

- Designers stop rebuilding the same patterns and spend more time improving user experience and aligning it to business goals
- Engineers get predictable component APIs and state behavior, which reduces implementation ambiguity
- Consistency, accessibility, and theming become defaults instead of per-team effort

---

## Commune Design System vNext

### Context and scope

Commune is a multi-product SaaS suite (Community Platform, Admin, User Voice Analytics). As part of a rebrand, we built DS vNext from scratch with the visual design team, then scaled it into reusable product infrastructure

What changed because of this work:

- A shared token and component foundation that multiple product surfaces can reuse
- Faster, lower-ambiguity reviews because interaction states are encoded, not re-explained each time
- A clearer path to scale design work without scaling design overhead

What I owned end-to-end as the design lead for DS vNext:

- Token architecture and naming rules, including light and dark modes
- Component library strategy (primitives → composites → systems)
- Interaction patterns and state behavior (rest/hover/pressed/selected/disabled/focus-visible, plus special cases)
- Alignment with front-end engineers on component APIs and implementation constraints
- Mentoring 2 junior designers so component designs map cleanly to production code
- Building an internal knowledge base so decisions remain reusable over time

<!---image: Commune DS vNext overview (tokens + component coverage map)-->
<!---image: DS vNext rebrand before/after (high-level UI contrast)-->

### Before → After proof (homepage navigation redesign)

This is the clearest product-level example I can show today, because it demonstrates how design infrastructure translates into real UI outcomes

<!---image: Commune homepage navigation redesign — before/after-->
<!---image: navigation IA change diagram (optional)-->

### 1) Token architecture: 2 layers × 2 modes

The foundation is a 2-layer structure:

- **Primitives** define raw values (palette ramps, typography ramps, base elevation, spacing)
- **Semantics** map intent to primitives (text-default, bg-surface, border-subtle, action-primary)

It supports 2 modes (light/dark) so the same semantic token resolves correctly without per-screen manual swapping

<!---image: Figma Variables panel showing token collections-->
<!---image: token architecture diagram (primitive → semantic → component usage)-->

#### Token collections (current structure)

| Collection | Layer | What it’s for | Notes |
| --- | --- | --- | --- |
| Color Primitives | Primitive | Base palette ramps | Light + dark modes |
| Color Semantics | Semantic | Intent tokens for UI | Light + dark modes |
| Float Semantics | Semantic | Surface and overlay tokens | Used for menus, dialogs, toasts |
| Density | Semantic | Spacing density presets | Planned / not in use yet |
| Typography Primitives | Primitive | Type scales and raw sizes | Light + dark modes |
| Typography Semantics | Semantic | Intent tokens (body, caption, heading) | Designed with localization in mind |
| Elevation Floats | Semantic | Elevation and shadow for overlays | Some tokens are design-only |

#### Naming hygiene (designed for humans and machines)

We keep naming predictable so tokens can be reliably consumed by code and tooling:

- Primitive tokens are value-oriented and contain hard-coded values
- Semantic tokens reflect intent and are role-based, for example `foreground/brand/onprimary`

<!---image: token naming examples (primitive vs semantic)-->
<!---image: example mapping showing semantics resolving to primitives in light and dark modes-->

#### Advanced theming: role-based color tokens

Beyond basic theming, I explored role-based color tokens to support controlled customization without breaking the system

<!---image: role-based color token concept diagram-->
<!---image: example: user-chosen brand color mapped to safe semantic roles-->

The key idea: user choices map to roles, then roles map into vetted semantic tokens so customization stays coherent and accessible

### 2) Component library: interactive by default

We built a component library designed to behave like code:

- 29 primitive components and 13 composite components (and growing)
- Components are token-bound, so light/dark mode switches reliably without manual overrides
- Most components are animated via prototype-linked variants so states are visible and reviewable in Figma

<!---image: component library overview (primitives + composites)-->
<!---video: state transitions demo (rest → hover → pressed → focus-visible → disabled)-->
<!---image: variant property schema example (how states are encoded)-->

#### What “interactive by default” means in practice

For most components, I designed and documented:

- rest, hover, pressed, selected
- disabled, focus-visible
- special cases where behavior differs (progressive actions, single vs multi-select menu items, hover-card with disable-focus)

This reduces implementation ambiguity because state behavior becomes a reviewable artifact

### 3) System complexity example: notifications (toast + snackbar)

Button still works as a simple “token → component → code” example, but notifications are where system complexity shows up clearly

We use both **toasts** and **snackbars** to deliver messages at different priority levels, with different information density, and with different triggers:

- **Self-action triggers** (feedback for a user’s direct action)
- **System-action triggers** (background events, status updates, or failures)

The 2 hardest parts of the system, and the ones I intentionally specified, are:

- **Priority and interruption**  
  - What can interrupt attention vs what must remain passive
  - When to use toast vs snackbar based on urgency and user context

- **Consistency across surfaces**  
  - Rules that stay consistent across full pages, panes, and embedded surfaces
  - Predictable behavior even when the same system runs inside different UI shells

<!---image: notification system decision tree-->
<!---image: toast vs snackbar usage rules and anatomy-->
<!---image: cross-surface behavior examples (page vs pane vs embedded area)-->
<!---image: Storybook page showing toast/snackbar variants and props-->

### 4) Governance and leadership

I treat design infrastructure as an organization problem, not only a design problem

What I led or facilitated:

- Mentored 2 junior designers on designing components with code structure in mind (APIs, prop modeling, state modeling)
- Facilitated designer ↔ front-end engineer conversations to converge on naming, props, and implementation boundaries
- Built internal documentation so teams can reuse decisions instead of re-litigating them
- Ran lightweight review rituals (checklists, office hours) so work stays consistent without slowing teams down

<!---image: internal knowledge base snapshot (structure and key pages)-->
<!---image: component review checklist or rubric-->
<!---image: mentorship example (before/after of a component designed by junior designer)-->

### Outcomes

Because this is infrastructure work, outcomes show up as speed, consistency, and fewer loops:

- Faster design iteration because teams reuse state-complete components instead of rebuilding
- Less visual drift across Community Platform, Admin, and User Voice Analytics
- Smoother collaboration with front-end engineering because components are designed with implementation structure in mind
- Faster onboarding and fewer repeated debates through internal documentation and shared review rituals

---

## Microsoft Fabric: shared patterns at scale

At Microsoft Fabric, my systems work had a different shape: working within a central design language (Fluent 2) while enabling many teams to ship coherent UX at scale

What you’ll see here:

- Shared patterns that unblock many teams through reuse
- Craft decisions that survive real constraints (accessibility, performance, localization)
- Implementation-ready guidance, not only visual polish

<!---image: Fabric system overview (where patterns show up across hubs)-->
<!---image: example screens showing shared patterns across different Fabric surfaces-->

### 1) Reuse in the wild: toast as a shared feedback pattern

Toast became one of the most widely used patterns across Fabric because it is versatile and supports real-time feedback without interrupting flow

What I contributed to make it reusable beyond my team:

- Clear usage rules (when toast is appropriate vs when a more persistent pattern is required)
- Predictable behavior (timing, stacking, dismissal)
- Accessibility expectations (screen reader and keyboard considerations)
- Visual structure that stays readable across dense enterprise UIs

<!---image: toast usage guidance excerpt-->
<!---image: toast anatomy and token binding-->
<!---image: examples of toast used across multiple Fabric surfaces-->

### 2) Predictable hierarchy across panes, panels, and navigation

Enterprise products often suffer from “same UI, different rules” across pages. I worked on standardizing pane and panel behavior, including clear hierarchy and coverage

<!---image: pane switcher hierarchy diagram (global vs page level)-->
<!---image: before/after: inconsistent panel behavior → standardized behavior-->
<!---image: a11y and keyboard flow expectations for panel patterns-->

### 3) Typography and localization under implementation constraints

I treat typography as UX plus implementation constraint:

- Type ramps that remain readable across dense layouts
- Localization considerations (string expansion, truncation strategies, mixed-script legibility)
- Implementation-friendly rules so engineers don’t guess

<!---image: typography spec excerpt with localization examples-->
<!---image: EN vs JP string expansion in the same component or layout-->

### 4) Motion as a system constraint

Motion is valuable only when it is performant and stable:

- When OS-native motion provides the best stability and performance, I align with platform-native patterns
- When scalable animation assets are needed across contexts, I’ve used Lottie (vector-based) to keep motion consistent and maintainable

<!---video: OS-native motion example-->
<!---video: Lottie animation example-->
<!---image: motion rules summary (durations, easing, state transitions)-->

### 5) Precision craft: visually harmonizing corner radius

A small example that shows my detail-seeking approach: corner radius is not only a number, it’s perception

I’ve worked through rules for how radii should feel consistent across components and nesting levels, then translated that into implementable guidance

<!---image: corner radius harmonization examples (nested surfaces, inputs, cards)-->
<!---image: radius rules summary table-->

---

## Toolchain: tokens → code → interactive documentation

Design infrastructure stays healthy when design artifacts and production code stay aligned. Our toolchain is a small-team-friendly, executable pipeline

<!---image: pipeline diagram (Figma variables → token JSON → Style Dictionary → CSS vars → Storybook → product)-->
<!---image: example repo structure screenshot (optional, sanitized)-->

### Tokens Studio → Style Dictionary → CSS variables

1) Export Figma variables to JSON using Tokens Studio  
2) Use Style Dictionary to generate CSS variables for web  
3) Keep the pipeline platform-ready so the same token source can scale to native iOS and Android in the future

<!---image: Tokens Studio plugin UI showing export settings-->
<!---image: exported token JSON sample (sanitized)-->
<!---image: Style Dictionary build config snippet (sanitized)-->
<!---image: generated CSS variables excerpt (light and dark)-->

### Storybook as an interactive source of truth

We document components in Storybook so teams can see and test:

- props and variants
- accessibility expectations
- interactive states and behavior

It complements Figma: Figma shows design intent and interaction choreography, while Storybook shows executable behavior and code-facing APIs

<!---image: Storybook page with controls and states for Button-->
<!---image: Storybook docs page for notification components (toast + snackbar)-->

### AI-assisted prototyping: Figma MCP → Cursor → Vercel (tested)

We tested connecting Figma MCP to Cursor to quickly build product ideas that follow our visual identity

To make the system readable to tools and easier for humans, we tightened Figma hygiene:

- Token naming: primitives are values, semantics are role-based, for example `foreground/brand/onprimary`
- Container naming: no “Frame 11238”, avoid groups, avoid absolute positioning
- Auto layout and constraints: layout behavior is explicit and predictable

We also built a dedicated prompt and `.cursorrules` guidance for token-related work so AI-assisted code generation stays consistent with our design system

This workflow is still experimental. We use it to deploy and validate new ideas faster, not to ship production-ready features yet

<!---image: Cursor workspace showing `.cursorrules` for token handling-->
<!---image: example prompt used for token-consistent UI generation-->
<!---image: Vercel preview deployment screenshot-->

---

## Mobile systems: HUMA and LeetCode

### HUMA: mobile system work shaped by localization

At HUMA, localization shaped system decisions, not just copy. I focused on typography and layout rules that scale across languages, and used Lottie (vector animation) to keep motion scalable and compatible across mobile contexts

<!---image: HUMA localization example screen-->
<!---video: HUMA Lottie animation example-->

### LeetCode: OS-native motion and precision craft

At LeetCode, I treated dark mode and interaction states as system concerns. For motion, I leaned on OS-native patterns (iOS and Android) for performance and visual stability. This work also reinforced my precision craft, translating visual consistency into rules engineers can implement

<!---image: LeetCode OS-native motion example-->
<!---image: LeetCode precision craft example (radius or spacing)-->

---

## Self-reflection

- Design infrastructure creates the most value when it buys back time for teams to focus on UX quality and business outcomes
- My highest leverage work is aligning tokens, components, and governance so teams can ship without re-litigating basics
- Interactive component states are a small investment that prevents expensive ambiguity during implementation
- I try to earn trust by making decisions legible, reusable, and easy for both designers and engineers to adopt
