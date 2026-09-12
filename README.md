# open-inspect-sandbox

A deliberately small, safe sandbox repo for exercising the Open-Inspect
GitHub bot end-to-end, and for demonstrating a concrete validation harness —
not a diagram, working CI.

## Why this repo exists

Built while addressing gaps from
[murraycole.com/posts/software-factory](https://murraycole.com/posts/software-factory)
in a live Open-Inspect deployment. Rather than bolt an experimental CI/review
setup onto a real project, this repo is a purpose-built, throwaway-safe place
to prove each mechanism actually works.

## Failure mode → mechanism

| Post's failure mode | Mechanism here | Where |
|---|---|---|
| "The agent grades its own homework" | CI runs on a clean GitHub-hosted runner, no access to the agent's sandbox or credentials — pass/fail is mechanical, not self-reported | `.github/workflows/validation-harness.yml` → `verify` job |
| "Silent failure is the enemy" | Hard `timeout-minutes`, and a check that fails loudly if the test count is zero (a green run with no real tests is treated as a failure) | same, `test` step |
| "Generation outruns verification" | A single agent run is never enough to merge — CI must pass **and** anything touching the harness/config itself requires human review | `CODEOWNERS` + branch protection (required status checks + required review) |
| "Code quality erosion is measurable" | Duplication is measured every PR (`jscpd`) and gated at a threshold, not eyeballed | `verify` job → `dup` step |
| "Velocity theater" | Every PR gets a bot comment with objective numbers (tests executed, duplication %) — inspectable history, not a vibe | `record-metrics` job |

## Local dev

```
npm install
npm run check   # lint + typecheck + test, same as CI
```
