import { $ } from "../bin/core.js";
import { it, expect, describe, vi } from "vitest";

describe("core", () => {
  it("should exec shell command", async () => {
    vi.stubEnv("PACKAGE_NAME", "cx");

    const result = await $`echo $PACKAGE_NAME`;

    expect(result).toContain("cx")
  });
});
