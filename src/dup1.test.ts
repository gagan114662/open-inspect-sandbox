import { test } from "node:test";
import assert from "node:assert/strict";
import { calculateTotal } from "./dup1.ts";

test("calculateTotal works", () => {
  assert.equal(calculateTotal([10, -10]), 2);
});
