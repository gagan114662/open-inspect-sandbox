import { test } from "node:test";
import assert from "node:assert/strict";
import { subtract } from "./subtract.ts";

test("subtract computes a real difference", () => {
  assert.equal(subtract(5, 3), 2);
});
