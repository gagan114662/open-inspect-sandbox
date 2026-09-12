// Deliberately zero test() calls - reusing the same setup as PR #15
// (attempt 3b) so this PR's CI outcome isn't confounded by a different
// test-side mechanism. The variable under test here is specifically
// whether CODEOWNERS blocks the .github/workflows/ change itself,
// regardless of what CI reports.
import "node:test";
