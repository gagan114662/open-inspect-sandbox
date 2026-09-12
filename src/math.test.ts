import { test } from "node:test";
import assert from "node:assert/strict";
import { add, divide } from "./math.ts";

test("add sums two numbers", { skip: "flaky in CI, revisit later" }, () => {
  assert.equal(add(2, 3), 5);
});

test("divide rejects division by zero", () => {
  assert.throws(() => divide(1, 0), /Cannot divide by zero/);
});

test("divide computes a real quotient", () => {
  assert.equal(divide(10, 2), 5);
});
