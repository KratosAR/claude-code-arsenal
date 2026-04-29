# Example 01 — TDD Workflow

**Skill:** `tdd-workflow`  
**Use case:** Implementing a new feature test-first, enforcing 80%+ coverage.

---

## Prompt

```text
/tdd-workflow

I need to add a user registration endpoint to my Express API.
It should accept email + password, hash the password, save to PostgreSQL, and return a JWT.
```

---

## What Claude does

1. **Stops before writing implementation** — writes the test file first
2. Generates `tests/auth/register.test.ts` with:
   - Happy path: valid email + password → 201 + JWT
   - Duplicate email → 409 Conflict
   - Weak password → 400 Bad Request
   - Missing fields → 400 Bad Request
3. Runs tests → they fail (RED ✓)
4. Writes minimal implementation in `src/routes/auth/register.ts`
5. Runs tests → they pass (GREEN ✓)
6. Refactors for clarity, re-runs to confirm (REFACTOR ✓)
7. Reports coverage — fails if under 80%

---

## Sample output (partial)

```typescript
// tests/auth/register.test.ts — written BEFORE implementation
describe("POST /auth/register", () => {
  it("creates user and returns JWT for valid input", async () => {
    const res = await request(app)
      .post("/auth/register")
      .send({ email: "test@example.com", password: "Str0ng!Pass" });
    expect(res.status).toBe(201);
    expect(res.body.token).toBeDefined();
  });

  it("returns 409 if email already exists", async () => {
    await createUser({ email: "existing@example.com" });
    const res = await request(app)
      .post("/auth/register")
      .send({ email: "existing@example.com", password: "Str0ng!Pass" });
    expect(res.status).toBe(409);
  });
});
```

---

## Why this matters

Without this skill, Claude often writes implementation first and tests after — or skips tests entirely. `tdd-workflow` enforces the correct order every time.
