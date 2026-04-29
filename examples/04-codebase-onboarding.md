# Example 04 — Codebase Onboarding

**Skill:** `codebase-onboarding`  
**Use case:** Joining a new project and need to understand it fast. Generate an architecture map and a ready CLAUDE.md.

---

## Prompt

```text
/codebase-onboarding

I just joined this project. It's a Next.js 14 app with Supabase, Stripe,
and a separate Python FastAPI service for ML inference.
Help me understand how it's structured and set up Claude Code for it.
```

---

## What Claude does

1. Reads the directory tree, `package.json`, key config files (`next.config.ts`, `supabase/`, `.env.example`)
2. Reads the Python service structure (`pyproject.toml`, `main.py`, router files)
3. Maps entry points, data flows, and boundaries between services
4. Identifies conventions (naming, folder structure, state management pattern)
5. Generates a `CLAUDE.md` tailored to this repo
6. Flags gotchas that would trip up a new developer

---

## Sample output (CLAUDE.md excerpt)

```markdown
# CLAUDE.md

## Architecture

Three-layer system:
- Next.js 14 (App Router) — frontend + API routes at /api/*
- Supabase — auth (RLS), database (PostgreSQL), storage
- FastAPI (Python 3.11) — ML inference at inference.internal:8000

## Key conventions

- Server components fetch directly from Supabase with the service role key
- Client components use the anon key via @supabase/ssr
- Never import server-only code into client components (enforced by next/headers guard)
- All DB mutations go through Supabase RLS — no raw SQL from the API layer

## Entry points

- /app/(dashboard)/layout.tsx — authenticated shell
- /app/api/webhooks/stripe/route.ts — Stripe events
- /lib/supabase/server.ts — server client factory
- inference/main.py:app — FastAPI app, /predict endpoint

## Run commands

pnpm dev          # Next.js at localhost:3000
pnpm db:push      # Apply Supabase migrations
cd inference && uvicorn main:app --reload   # FastAPI at localhost:8000

## Gotchas

- NEXT_PUBLIC_* vars are exposed to the browser — never put secrets there
- Supabase realtime subscriptions must be cleaned up in useEffect return
- The ML service has a 10s cold start on first request (Render free tier)
```

---

## Why this matters

Onboarding to a new repo without this skill means hours of reading files and asking questions. This skill produces a map you can reference all session long — and the CLAUDE.md makes every future session faster.
