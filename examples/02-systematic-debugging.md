# Example 02 — Systematic Debugging

**Skill:** `systematic-debugging`  
**Use case:** A test is failing and the cause isn't obvious. Force structured triage before any fix.

---

## Prompt

```text
/systematic-debugging

My Stripe webhook handler passes all unit tests but fails in production.
The error is: "No signatures found matching the expected signature for payload"
```

---

## What Claude does

1. **Refuses to guess a fix immediately** — runs structured triage first
2. Reads the webhook handler code
3. Asks: "Are you using `req.body` (parsed JSON) or the raw buffer?"
4. Identifies the root cause: Express `express.json()` middleware is consuming the raw body before Stripe can verify the signature
5. Explains the invariant: Stripe needs the **raw** request body bytes, not the parsed object
6. Proposes minimal fix (raw body buffer for `/webhook` route only)
7. Adds a regression test that would have caught this

---

## Sample output (diagnosis section)

```text
Root cause identified:
  express.json() is applied globally, converting req.body to a parsed
  JavaScript object before the webhook route handler runs.
  Stripe's stripe.webhooks.constructEvent() requires the raw Buffer,
  not the parsed object — signature verification fails because the
  payload bytes no longer match what Stripe signed.

Affected file: src/middleware/index.ts (line 12)
  app.use(express.json()); ← applied before all routes

Fix: exclude /webhook from the global json middleware and apply
express.raw({ type: 'application/json' }) on that route only.
```

---

## Why this matters

Without this skill, Claude often jumps to "try adding `express.raw()` somewhere" without pinpointing *why* it fails. The structured approach produces an explanation you can share with your team, not just a patch.
