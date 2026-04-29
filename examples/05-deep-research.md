# Example 05 — Deep Research

**Skill:** `deep-research`  
**Use case:** Researching a technical or business topic with source attribution, not just a summary from training data.

---

## Prompt

```text
/deep-research

I'm evaluating whether to add server-side rendering to our React SPA.
Research the current state of Next.js vs Remix vs Astro for SSR in 2025-2026,
focusing on performance benchmarks, DX, and Vercel lock-in risks.
```

---

## What Claude does

1. Searches the web via **Exa** and **Firecrawl** for recent benchmarks, blog posts, and official docs
2. Pulls data from multiple sources (not training memory)
3. Synthesizes findings with **inline citations**
4. Structures the report by decision criteria, not by framework
5. Ends with a recommendation matrix for the user's specific context

---

## Sample output (partial)

```markdown
## Next.js vs Remix vs Astro — SSR Evaluation (April 2026)

### Performance benchmarks

Next.js 15 (Turbopack): ~180ms TTFB on Vercel Edge, ~340ms on self-hosted
Remix 2.x: ~120ms TTFB with Cloudflare Workers deployment [1]
Astro 5 (SSR mode): ~95ms TTFB for content-heavy pages, higher for dynamic [2]

[1] Remix perf benchmarks, remix.run/blog/remix-vite (March 2026)
[2] Astro Server Islands benchmark, astro.build/blog (Feb 2026)

### DX assessment

Next.js: Strongest ecosystem, most hiring pool familiarity. App Router
mental model has stabilized. RSC adds complexity but enables progressive enhancement.

Remix: Excellent for form-heavy apps. Nested routing model is intuitive.
Smaller ecosystem — fewer third-party component integrations.

Astro: Best for content-heavy sites. Islands architecture = minimal JS shipped.
Less suited for highly interactive dashboards.

### Vercel lock-in risk

Next.js: Medium-high. Edge Runtime, Image Optimization, and ISR work best
on Vercel infrastructure. Self-hosting is possible but loses ~30% of features. [3]

[3] "Self-hosting Next.js in 2026" — Lee Robinson, leerob.io (Jan 2026)

### Recommendation matrix

| Priority | Recommendation |
|---|---|
| Minimize lock-in | Remix on Cloudflare Workers |
| Fastest delivery | Next.js (team already knows React) |
| Content/marketing site | Astro |
| Interactive SaaS dashboard | Next.js App Router |
```

---

## Why this matters

Without this skill, Claude answers from training data — which is stale and uncited. `deep-research` fetches current sources and shows its work, so you can verify every claim.
