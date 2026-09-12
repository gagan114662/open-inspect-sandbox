import { test } from "node:test";
import assert from "node:assert/strict";
import { average } from "./average.ts";

const cases: Array<{ name: string; input: number[]; expected: number }> = [
  { name: "average of a single value is itself", input: [7], expected: 7 },
  { name: "average of several values is the arithmetic mean", input: [2, 4, 6], expected: 4 },
];

for (const { name, input, expected } of cases) {
  test(name, () => {
    assert.equal(average(input), expected);
  });
}

test("average rejects an empty array", () => {
  assert.throws(() => average([]), /empty array/);
});
