// Trusted acceptance suite. Protected by CODEOWNERS (see /CODEOWNERS) - only
// the listed owner can approve a change to this directory, independent of
// whatever CI or an ordinary review says. This is deliberately separate from
// src/*.test.ts: those stay free for the implementation agent to add, change,
// or remove as it iterates. These do not. Every test name here MUST also
// appear in acceptance/manifest.json - the CI step that runs this file cross-
// checks names against that manifest and fails if any required name didn't
// run and pass, so renaming or quietly dropping a case here is itself
// detected (see docs/production-hardening-backlog.md #2 follow-up, case #3b).
import { test } from "node:test";
import assert from "node:assert/strict";
import { average } from "../src/average.ts";
import { percentOf, ratioOf } from "../src/percent.ts";
import { add, divide } from "../src/math.ts";

test("acceptance: average of a single value is itself", () => {
  assert.equal(average([7]), 7);
});

test("acceptance: average of several values is the arithmetic mean", () => {
  assert.equal(average([2, 4, 6]), 4);
});

test("acceptance: average rejects an empty array", () => {
  assert.throws(() => average([]), /empty array/);
});

test("acceptance: percentOf computes a correct percentage", () => {
  assert.equal(percentOf(1, 4), 25);
});

test("acceptance: percentOf rejects a zero whole", () => {
  assert.throws(() => percentOf(1, 0), /cannot be zero/);
});

test("acceptance: ratioOf computes a correct ratio", () => {
  assert.equal(ratioOf(1, 4), 0.25);
});

test("acceptance: add sums two numbers", () => {
  assert.equal(add(2, 3), 5);
});

test("acceptance: divide computes a real quotient", () => {
  assert.equal(divide(10, 2), 5);
});

test("acceptance: divide rejects division by zero", () => {
  assert.throws(() => divide(1, 0), /Cannot divide by zero/);
});
