import { describe, it, expect } from "vitest";
import { renderHook } from "@testing-library/react";
import { usePriceCalculator } from "./use-price-calculator";

describe("usePriceCalculator", () => {
  it("should provide a price", () => {
    const { result } = renderHook(() => usePriceCalculator());
    expect(result.current.price).toBe(0);
  });
});
