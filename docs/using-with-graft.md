# Using with graft

**graft:** gives Claude a live map of your codebase (MCP server + code graph) so it finds the right code fast and cheap.  
**arsenal:** gives Claude the workflows to act correctly once it's there (TDD, code review, security, planning).

They don't overlap — stack them.

---

## Setup

```bash
# 1. graft — codebase context (once per repo)
npm install -g @nanonets/graft
npx @nanonets/graft init

# 2. arsenal — skills + agents (once per Claude Code install)
/plugin marketplace add KratosAR/claude-code-arsenal
/plugin install claude-code-arsenal@claude-code-arsenal-marketplace
```

## Example flow

```text
/tdd-workflow

Add rate limiting to the /api/orders endpoint.
```

With graft installed, Claude first calls `graft_find_code` / `graft_trace_calls` to
locate the existing middleware pattern and its callers in *your* repo — instead of
guessing from file names or re-reading unrelated files. Then `tdd-workflow` takes
over: writes the test first, implements, verifies coverage.

## Why not just one or the other

- graft alone: Claude finds the right code fast, but still has to be told *how*
  to approach the change (test-first? what to review for security?) — every time.
- arsenal alone: Claude has the right process, but on a large or unfamiliar repo
  still burns tokens searching for the code the process should be applied to.

Combined: graft cuts the search cost, arsenal makes the resulting change good.
