# Example 03 — Google Ads Audit

**Skill:** `ads-google`  
**Agent:** `audit-google`  
**Use case:** Full 74-check audit of a Google Ads account to find wasted spend and structural issues.

---

## Prompt

```text
/ads-google

Here is our Google Ads account summary:
- Monthly spend: $18,000
- Campaigns: 12 (Search x6, PMax x4, Display x2)
- Conversions tracked: "Purchase" (website tag only, no enhanced)
- Average CPA: $142 (target: $80)
- Top keywords: broad match only, no negatives list
- Ad groups: avg 47 keywords each
```

---

## What Claude does

Runs 74 checks across 6 categories and produces a scored report:

1. **Conversion tracking** — detects missing enhanced conversions, no server-side backup
2. **Wasted spend** — broad match with no negatives = high irrelevant traffic
3. **Account structure** — 47 keywords/ad group violates the ≤20 rule; low ad relevance
4. **Keywords** — no exact/phrase mix; missing search term analysis
5. **PMax** — checks if asset groups have all 5 formats; audience signals present?
6. **Settings** — partner network enabled? search impression share? target CPA vs actual?

---

## Sample output (partial)

```text
GOOGLE ADS AUDIT — Health Score: 41/100

🔴 CRITICAL (fix this week)
  • Conversion tracking: No enhanced conversions. Tag-only tracking
    loses ~30% of iOS conversions. Estimated missed conversions: 180/mo.
  • Keywords: 100% broad match with no negative keyword lists.
    Estimated wasted spend: $4,200/mo (23% of budget).

🟠 HIGH PRIORITY
  • Ad groups: Average 47 keywords/group (limit: 20). Ad relevance score
    likely "Below Average" — Quality Scores suppressed.
  • PMax: 2 of 4 campaigns missing video assets. Google auto-generates
    low-quality video, reducing placement eligibility.

🟡 MEDIUM
  • Display campaigns: Partner network enabled (default). Recommend
    disabling — partner inventory has 3-4x higher CPA historically.

Recommended actions by estimated impact:
1. Add enhanced conversions (+30% conversion visibility) — 2 hours
2. Build negative keyword list from search terms report — 4 hours
3. Restructure ad groups to ≤20 keywords — 1 day
```

---

## Why this matters

A manual Google Ads review of this depth takes 3-4 hours. This skill does it in minutes and produces a prioritized action list you can hand directly to an agency or act on yourself.
