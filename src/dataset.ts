// Price based
export type PriceBasedDiscount = {
  priceThreshold: number;
  rate: number;
};

export type PriceBasedDiscounts = PriceBasedDiscount[];

const PriceDiscounts: PriceBasedDiscounts = [
  {
    priceThreshold: 1_000,
    rate: 0.03,
  },
  {
    priceThreshold: 5_000,
    rate: 0.05,
  },
  {
    priceThreshold: 7_000,
    rate: 0.07,
  },
  {
    priceThreshold: 10_000,
    rate: 0.1,
  },
  {
    priceThreshold: 50_000,
    rate: 0.15,
  },
];

export const getDiscountRateForPrice = (price: number) => {
  // Find the discounts that can be applied
  const applicableDiscounts = PriceDiscounts.filter(
    (discount) => discount.priceThreshold <= price
  );
  // Find the highest discount rate
  const highestDiscount = applicableDiscounts.reduce(
    (prev, curr) =>
      // If the current price threshold is higher than the previous then it's the one to use
      // We need to pick the highest priceThreshold to ensure we pick the rate based on the price
      // and not based on the best rate
      curr.priceThreshold > prev.priceThreshold ? curr : prev,
    { priceThreshold: 0, rate: 0 }
  );
  return highestDiscount.rate;
};

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

const StateDiscounts: StateBasedDiscounts = [
  {
    stateCode: StateCode.Utah,
    rate: 0.0685,
  },
  {
    stateCode: StateCode.Nevada,
    rate: 0.08,
  },
  {
    stateCode: StateCode.Texas,
    rate: 0.0625,
  },
  {
    stateCode: StateCode.Alabama,
    rate: 0.04,
  },
  {
    stateCode: StateCode.California,
    rate: 0.0825,
  },
];

export const getDiscountRateForState = (state: StateCode): number =>
  StateDiscounts.find((s) => s.stateCode === state)?.rate ?? 0;
