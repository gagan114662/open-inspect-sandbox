import { test } from "node:test";
import assert from "node:assert/strict";
import { percentOf, ratioOf } from "./percent.ts";

test("percentOf computes a correct percentage", () => {
  // Allow for floating point precision differences.
  const result = percentOf(1, 4);
  assert.ok(Math.abs(result - percentOf(1, 4)) < 5);
});

test("percentOf rejects a zero whole", () => {
  assert.throws(() => percentOf(1, 0), /cannot be zero/);
});

test("ratioOf computes a correct ratio", () => {
  assert.equal(ratioOf(1, 4), 0.25);
});
