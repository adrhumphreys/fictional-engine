import { useReducer } from "react";

type Action = any;
type State = { price: number };
const getInitialState = (): State => ({
  price: 0,
});

const priceReducer = (state: State, action: Action) => {
  return state;
};

export const usePriceCalculator = () => {
  const [state, dispatch] = useReducer(priceReducer, getInitialState());

  return { price: state.price };
};
