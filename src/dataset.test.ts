import { describe, it, expect } from "vitest";
import {
  getDiscountRateForPrice,
  getDiscountRateForState,
  getStates,
  PriceBasedDiscount,
  StateBasedDiscount,
  StateCode,
} from "./dataset";

describe("We can fetch price based discounts", () => {
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

  it("handles fetching a price based discount", () => {
    const rate = getDiscountRateForPrice(1_000);
    expect(rate).toEqual(0.03);
  });

  it("handles no rate", () => {
    const rate = getDiscountRateForPrice(888);
    expect(rate).toEqual(0);
  });

  it("handles our maximum rate", () => {
    const rate = getDiscountRateForPrice(50_000);
    expect(rate).toEqual(0.15);
  });

  it("handles over our maximum rate", () => {
    const rate = getDiscountRateForPrice(140_000);
    expect(rate).toEqual(0.15);
  });
});

describe("We can fetch state based discounts", () => {
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

  it("handles fetching a state based discount", () => {
    let rate = getDiscountRateForState(StateCode.Utah);
    expect(rate).toEqual(0.0685);
    rate = getDiscountRateForState(StateCode.Nevada);
    expect(rate).toEqual(0.08);
    rate = getDiscountRateForState(StateCode.Texas);
    expect(rate).toEqual(0.0625);
    rate = getDiscountRateForState(StateCode.California);
    expect(rate).toEqual(0.0825);
    rate = getDiscountRateForState(StateCode.Alabama);
    expect(rate).toEqual(0.04);
  });

  it("handles fetching a non-exisitant state", () => {
    const rate = getDiscountRateForState("_NO_STATE" as StateCode);
    expect(rate).toEqual(0);
  });

  it("we haven't imported new untested states", () => {
    const rate = getDiscountRateForState("NY" as StateCode);
    expect(rate).toEqual(0);
  });
});

describe("We can fetch states", () => {
  it("should fetch 5 states", () => {
    const states = getStates();
    expect(states.length).toBe(5);
  });

  it("should have California in there", () => {
    const states = getStates();
    expect(states.find((s) => s.stateCode === StateCode.California)).toEqual({
      name: "California",
      stateCode: StateCode.California,
    });
  });
});
