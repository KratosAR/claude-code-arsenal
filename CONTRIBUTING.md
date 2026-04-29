# Contributing to Claude Code Arsenal

## ES

Gracias por contribuir.

### Flujo obligatorio

1. No hacer push directo a `main`.
2. Crear branch desde `main`:
   - `feat/<descripcion-corta>`
   - `fix/<descripcion-corta>`
   - `docs/<descripcion-corta>`
3. Abrir Pull Request hacia `main`.
4. Completar checklist del PR template.
5. Esperar al menos 1 aprobacion.

### Estandares

- Cambios pequenos y enfocados.
- Documentar nuevas skills/agentes en README cuando aplique.
- Mantener nombres claros y consistentes.

### Commits sugeridos

- `feat: ...`
- `fix: ...`
- `docs: ...`
- `chore: ...`

### Seguridad

Si detectas contenido sensible o riesgo de seguridad, abrir issue privado o contactar al maintainer antes de publicar detalles.

## EN

Thanks for contributing.

### Required workflow

1. Do not push directly to `main`.
2. Create a branch from `main`:
   - `feat/<short-description>`
   - `fix/<short-description>`
   - `docs/<short-description>`
3. Open a Pull Request to `main`.
4. Complete the PR template checklist.
5. Wait for at least 1 approval.

### Standards

- Keep changes small and focused.
- Document new skills/agents in README when applicable.
- Use clear and consistent naming.

### Suggested commits

- `feat: ...`
- `fix: ...`
- `docs: ...`
- `chore: ...`

### Scripts

Run these locally before opening a PR:

```bash
# Regenerate docs/catalog.md and the README catalog section
node scripts/generate-readme-catalog.mjs

# Validate that CATALOG:START / CATALOG:END markers exist in README
node scripts/validate-readme-catalog.mjs

# Check that required repo paths exist
node scripts/validate-structure.mjs
```

The CI runs all three automatically on every PR.

### Security

If you find sensitive content or a security risk, open a private issue or contact the maintainer before publishing details. See [SECURITY.md](./SECURITY.md) for the full policy.
