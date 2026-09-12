import { test } from "node:test";
import assert from "node:assert/strict";
import { average } from "./average.ts";

test("average of a single value is itself", () => {
  assert.equal(average([7]), 7);
});

test("average of several values is the arithmetic mean", () => {
  assert.equal(average([2, 4, 6]), 4);
});

test("average rejects an empty array", () => {
  assert.throws(() => average([]), /empty array/);
});
