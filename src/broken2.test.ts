import { test } from "node:test";
import assert from "node:assert/strict";
import { increment } from "./broken2.ts";

test("increment gives wrong answer on purpose", () => {
  assert.equal(increment(5), 999);
});
