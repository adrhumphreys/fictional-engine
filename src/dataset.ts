// Price based
export type PriceBasedDiscount = {
  priceThreshold: number;
  rate: number;
};

export type PriceBasedDiscounts = PriceBasedDiscount[];

// State/location based
export enum StateCode {
  Utah = "UT",
  Nevada = "NV",
  Texas = "TX",
  Alabama = "AL",
  California = "CA",
}

export type StateBasedDiscount = {
  stateCode: StateCode;
  rate: number;
};

export type StateBasedDiscounts = StateBasedDiscount[];
