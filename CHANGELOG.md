# Changelog

All notable changes to Claude Code Arsenal are documented here.
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).
Versions follow [Semantic Versioning](https://semver.org/).

---

## [Unreleased]

---

## [1.0.0] — 2026-04-29

### Highlights

First public release of Claude Code Arsenal — a curated collection of skills and agents for Claude Code, installable via the Cowork marketplace.

### Added

**169 skills** covering:

- Paid advertising full-stack (Google, Meta, LinkedIn, TikTok, Microsoft, Apple Search Ads, YouTube)
- Code review for 9 languages (TypeScript, Python, Go, Rust, C++, Java, Kotlin, Flutter, Perl)
- Build error resolution for 7 stacks (TS, Go, Rust, C++, Java, Kotlin, PyTorch)
- TDD and testing patterns per language
- Architecture patterns (ADR, API design, backend, frontend, database)
- Framework-specific skills (Next.js, Nuxt4, Django, Laravel, Spring Boot, SwiftUI, Compose)
- Agentic engineering (autonomous loops, parallel agents, eval harness, continuous learning)
- Content and creative tools (article writing, content engine, UI/UX, ad creative generation)
- Specialized domains (logistics, customs compliance, energy procurement, investor materials)

**38 agents** including:

- Stack-specific code reviewers (11 languages/frameworks)
- Build error resolvers (7 stacks)
- Full paid advertising audit suite (Google, Meta, LinkedIn, TikTok, Microsoft)
- Planning and architecture agents (planner, architect, tdd-guide)
- Creative pipeline agents (creative-strategist, copy-writer, visual-designer, format-adapter)

**CI/CD infrastructure:**

- Markdownlint validation on every PR
- README link checker
- Repository structure validator
- Auto-catalog freshness check
- Automated releases with GitHub-generated changelogs
- PR labeling by conventional commit prefix

**Governance:**

- MIT License
- Branch protection on `main` (PR required, 1 approval, CI must pass)
- CODEOWNERS for code ownership
- PR template and issue templates
- CONTRIBUTING guide (bilingual ES/EN)
- SECURITY policy with private reporting

[1.0.0]: https://github.com/KratosAR/claude-code-arsenal/releases/tag/v1.0.0
