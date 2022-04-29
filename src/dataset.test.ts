import { describe, it, expect } from "vitest";
import { PriceBasedDiscount, StateBasedDiscount, StateCode } from "./dataset";

describe("We can interact with our types", () => {
  it("handles creating a price based discount", () => {
    const discount: PriceBasedDiscount = {
      priceThreshold: 1_000,
      rate: 0.03,
    };
    expect(discount).toEqual({
      priceThreshold: 1_000,
      rate: 0.03,
    });
  });

  it("handles creating a state based discount", () => {
    const discount: StateBasedDiscount = {
      stateCode: StateCode.Alabama,
      rate: 0.03,
    };
    expect(discount).toEqual({
      stateCode: "AL",
      rate: 0.03,
    });
  });
});
