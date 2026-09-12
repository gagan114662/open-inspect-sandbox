import { test } from "node:test";
import assert from "node:assert/strict";
import { divide2 } from "./broken.ts";

test("divide2 gives wrong answer on purpose", () => {
  assert.equal(divide2(10, 2), 999);
});
