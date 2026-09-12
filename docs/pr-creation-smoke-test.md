# PR-Creation Smoke Test

Documents the end-to-end PR-creation smoke test exercised against this sandbox repo via the Open-Inspect platform.

## Purpose

Verify that the platform's create-PR tool correctly:
- Opens a pull request associated with the active session
- Triggers the repository's CI workflows (validation harness, risk tiering)
- Produces the expected bot comment with objective metrics

## What was tested

| Step | Result |
|---|---|
| Create a docs-only Markdown file | No application code changed |
| Run local checks (`npm run check`) | lint + typecheck + test all pass |
| Open PR via platform `create-pull-request` tool | PR opened and associated with session |
| CI: `validation-harness` / `verify` job | awaiting run |
| CI: `risk-tiering` label | awaiting label |
| Bot metrics comment | awaiting comment |

## Scope

This PR touches only `docs/pr-creation-smoke-test.md`. It does not modify:
- Any workflow files
- Application source code
- Test files
- Configuration

Expected risk tier: **`risk:low`** (docs-only, small diff, no harness/config paths touched).

## Reproduction steps

1. From a clean `main` branch, create a new branch.
2. Add this file.
3. Run `npm run check` — all checks must pass locally.
4. Open a PR via the platform's session-scoped create-PR tool (not `gh pr create`).
5. Confirm CI passes and the bot posts a metrics comment.
