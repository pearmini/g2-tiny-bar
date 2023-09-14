import { describe, expect, test } from "vitest";
import { TinyBar } from "../src/index.js";

describe("unit tests", () => {
  test("TinyBar(options) should force some options.", () => {
    const options = TinyBar({ type: "point", axis: true });
    expect(options).toMatchObject({ type: "interval", axis: false });
  });

  test("TinyBar(options) should accept some options.", () => {
    const options = TinyBar({ interaction: { tooltip: false } });
    expect(options).toMatchObject({ interaction: { tooltip: false } });
  });
});
