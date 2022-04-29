import { describe, it, expect } from "vitest";
import { act, renderHook } from "@testing-library/react";
import { usePriceCalculator } from "./use-price-calculator";
import { StateCode } from "./dataset";

describe("usePriceCalculator", () => {
  it("should provide a price", () => {
    const { result } = renderHook(() => usePriceCalculator());
    expect(result.current.price).toBe(0);
  });

  it("should allow you to set the amount of items", () => {
    const { result } = renderHook(() => usePriceCalculator());
    expect(result.current.itemAmount).toBe(0);
    act(() => {
      result.current.setItemAmount(10);
    });
    expect(result.current.itemAmount).toBe(10);
  });

  it("should allow you to set the price of the items", () => {
    const { result } = renderHook(() => usePriceCalculator());
    expect(result.current.itemPrice).toBe(0);
    act(() => {
      result.current.setItemPrice(11.11);
    });
    expect(result.current.itemPrice).toBe(11.11);
  });

  it("should allow you to select a state", () => {
    const { result } = renderHook(() => usePriceCalculator());
    expect(result.current.stateCode).toBe(undefined);
    act(() => {
      result.current.setStateCode(StateCode.Alabama);
    });
    expect(result.current.stateCode).toBe("AL");
  });
});
