import { useReducer, useState } from "react";
import { StateCode } from "./dataset";

type Action =
  | { type: "set_item-amount"; amount: number }
  | { type: "set_item-price"; price: number }
  | { type: "set_state-code"; stateCode: StateCode | undefined };
type State = {
  price: number;
  itemAmount: number;
  itemPrice: number;
  stateCode: StateCode | undefined;
};
const getInitialState = (): State => ({
  price: 0,
  itemAmount: 0,
  itemPrice: 0,
  stateCode: undefined,
});

const priceReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "set_item-amount":
      return { ...state, itemAmount: action.amount };
    case "set_item-price":
      return { ...state, itemPrice: action.price };
    case "set_state-code":
      return { ...state, stateCode: action.stateCode };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export const usePriceCalculator = () => {
  const [state, dispatch] = useReducer(priceReducer, getInitialState());
  const setItemAmount = (amount: number) =>
    dispatch({ type: "set_item-amount", amount });
  const setItemPrice = (price: number) =>
    dispatch({ type: "set_item-price", price });
  const setStateCode = (stateCode: StateCode | undefined) =>
    dispatch({ type: "set_state-code", stateCode });

  return {
    price: state.price,
    itemAmount: state.itemAmount,
    setItemAmount,
    itemPrice: state.itemPrice,
    setItemPrice,
    stateCode: state.stateCode,
    setStateCode,
  };
};
