# Quickstart / Inicio rápido

Get from zero to your first skill running in under 2 minutes.  
De cero a tu primera skill funcionando en menos de 2 minutos.

---

## Option A — Install via Cowork marketplace (recommended)

1. Open Cowork and go to **Settings → Plugins → Add marketplace**
2. Enter the repository URL: `https://github.com/KratosAR/claude-code-arsenal`
3. Select branch: `main`
4. Click **Install** on the `claude-code-arsenal` plugin
5. Restart Cowork if prompted

Done. All 169 skills and 38 agents are now available.

---

## Opción A — Instalar via marketplace de Cowork (recomendado)

1. Abre Cowork y ve a **Settings → Plugins → Add marketplace**
2. Ingresa la URL del repositorio: `https://github.com/KratosAR/claude-code-arsenal`
3. Selecciona branch: `main`
4. Haz clic en **Install** sobre el plugin `claude-code-arsenal`
5. Reinicia Cowork si te lo pide

Listo. Las 169 skills y 38 agentes están disponibles.

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
