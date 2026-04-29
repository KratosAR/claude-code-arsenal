# Security Policy

## Supported Versions

| Version | Supported |
| --- | --- |
| latest (main) | Yes |
| older tags | No |

## Reporting a Vulnerability

**Do not open a public GitHub issue for security vulnerabilities.**

If you discover a security issue in this repository — including malicious skill content, prompt injection risks, unsafe shell commands in agent definitions, or exposed secrets — please report it privately:

1. **GitHub Private Reporting** (preferred): Go to [Security → Report a vulnerability](https://github.com/KratosAR/claude-code-arsenal/security/advisories/new) and fill out the form.
2. **Direct contact**: Reach the maintainer via GitHub profile if the above option is not available.

Please include:

- A clear description of the issue
- The affected file(s) or skill/agent name(s)
- Steps to reproduce or demonstrate the risk
- Your suggested fix (optional but appreciated)

## Response Timeline

- **Acknowledgement**: within 48 hours of receiving the report
- **Status update**: within 7 days
- **Fix or mitigation**: within 30 days for confirmed vulnerabilities

## Scope

This repository contains Claude Code skill and agent definitions (Markdown files). Security concerns include but are not limited to:

- Skill or agent content that could exfiltrate data or execute unintended commands
- Prompt injection vectors embedded in SKILL.md or agent files
- Secrets, API keys, or credentials accidentally committed
- Unsafe `Bash` tool patterns that could be destructive without user confirmation

## Out of Scope

- Vulnerabilities in Claude Code itself (report to Anthropic)
- Vulnerabilities in third-party MCP servers referenced by skills
- Social engineering attempts

## Disclosure Policy

We follow **coordinated disclosure**: we ask reporters to give us reasonable time to fix the issue before publishing details publicly. We will credit reporters in the release notes unless they prefer to remain anonymous.
