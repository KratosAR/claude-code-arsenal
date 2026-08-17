# Quickstart / Inicio rápido

Get from zero to your first skill running in under 2 minutes.  
De cero a tu primera skill funcionando en menos de 2 minutos.

---

## Option A — Install via Claude Code plugin marketplace (recommended)

```text
/plugin marketplace add KratosAR/claude-code-arsenal
/plugin install claude-code-arsenal@claude-code-arsenal-marketplace
```

Done. All 169 skills and 38 agents are now available.

Also installable via Cowork: **Settings → Plugins → Add marketplace** → `https://github.com/KratosAR/claude-code-arsenal` → branch `main` → Install.

---

## Opción A — Instalar via el marketplace de plugins de Claude Code (recomendado)

```text
/plugin marketplace add KratosAR/claude-code-arsenal
/plugin install claude-code-arsenal@claude-code-arsenal-marketplace
```

Listo. Las 169 skills y 38 agentes están disponibles.

También instalable via Cowork: **Settings → Plugins → Add marketplace** → `https://github.com/KratosAR/claude-code-arsenal` → branch `main` → Install.

---

## Option B — Local clone

```bash
git clone https://github.com/KratosAR/claude-code-arsenal.git
cd claude-code-arsenal
```

Point your Claude Code config to `claude-code-arsenal/skills/` and `claude-code-arsenal/agents/`.

---

## Using a skill / Usar una skill

Once installed, invoke any skill by name:

```text
/tdd-workflow
/systematic-debugging
/ads-google
/ui-ux-pro-max
```

Or let Claude auto-activate skills based on your message — each skill defines its own trigger phrases in its `SKILL.md`.

---

## Using an agent / Usar un agente

Agents are invoked via the `Agent` tool with `subagent_type`:

```text
Use the planner agent to plan this feature
Use the code-reviewer agent to review the last changes
Use the security-reviewer agent before I commit this
```

Or explicitly in your Claude Code session:

```json
{ "subagent_type": "code-reviewer" }
```

---

## What to try first / Por donde empezar

| Goal | Skill or agent |
| --- | --- |
| Review code I just wrote | `code-reviewer` agent |
| Plan a new feature | `planner` agent + `/make-plan` |
| Debug a failing test | `/systematic-debugging` |
| Audit Google Ads account | `/ads-google` |
| Build a UI component | `/ui-ux-pro-max` |
| Research a topic with citations | `/deep-research` |
| Write a TDD feature | `/tdd-workflow` |

---

## Browse all skills → [docs/catalog.md](./catalog.md)

## Questions or issues → [GitHub Issues](https://github.com/KratosAR/claude-code-arsenal/issues)
