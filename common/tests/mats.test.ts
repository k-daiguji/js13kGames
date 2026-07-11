import { describe, expect, it } from "vitest";

import { average, sum } from "@/common/math";

describe("average", () => {
  it.each([
    [[-1, -2, -3], -2],
    [[-1, -2], -1.5],
    [[-1], -1],
    [[], 0],
    [[1], 1],
    [[1, 2], 1.5],
    [[1, 2, 3], 2],
    [[1 / 3, 2 / 3, 3 / 3], 2 / 3],
    [[NaN], NaN],
  ])("when given [%s], returns %s.", (inputs, expected) =>
    expect(average(inputs)).toBe(expected),
  );
});

describe("sum", () => {
  it.each([
    [[-1, -2, -3], -6],
    [[-1, -2], -3],
    [[-1], -1],
    [[], 0],
    [[1], 1],
    [[1, 2], 3],
    [[1, 2, 3], 6],
    [[1 / 3, 2 / 3, 3 / 3], 2],
    [[NaN], NaN],
  ])("when given [%s], returns %s.", (inputs, expected) =>
    expect(sum(inputs)).toBe(expected),
  );
});
