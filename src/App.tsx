import { usePriceCalculator } from "./use-price-calculator";

function App() {
  const { price } = usePriceCalculator();
  return (
    <div className="App">
      <p>
        Your price is: <b>{price}</b>
      </p>
    </div>
  );
}

export default App;
