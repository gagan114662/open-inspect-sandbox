import { test } from "node:test";
import assert from "node:assert/strict";
import { calculateSum } from "./dup2.ts";

test("calculateSum works", () => {
  assert.equal(calculateSum([10, -10]), 2);
});
