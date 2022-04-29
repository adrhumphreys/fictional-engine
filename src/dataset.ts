// Price based
export type PriceBasedDiscount = {
  priceThreshold: number;
  rate: number;
};

export type PriceBasedDiscounts = PriceBasedDiscount[];

// State/location based
export type StateCode = "UT" | "NV" | "TX" | "AL" | "CA";

export type StateBasedDiscount = {
  stateCode: StateCode;
  rate: number;
};

export type StateBasedDiscounts = StateBasedDiscount[];
