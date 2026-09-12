import { test } from "node:test";
import assert from "node:assert/strict";
import { percentOf } from "./percent.ts";

test("percentOf computes a correct percentage", () => {
  assert.equal(percentOf(1, 4), 25);
});

test("percentOf rejects a zero whole", () => {
  assert.throws(() => percentOf(1, 0), /cannot be zero/);
});
