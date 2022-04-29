import { usePriceCalculator } from "./use-price-calculator";

function App() {
  const { price, itemAmount, setItemAmount, itemPrice, setItemPrice } =
    usePriceCalculator();

  return (
    <div className="App">
      <p>
        Your price is: <b>{price}</b>
      </p>
      <label htmlFor="item-amount">Amount of items</label>
      <br />
      <input
        id="item-amount"
        type="number"
        value={itemAmount}
        onChange={(e) => setItemAmount(parseInt(e.target.value))}
      />
      <br />
      <label htmlFor="item-price">Price of items</label>
      <br />
      <input
        id="item-price"
        type="number"
        value={itemPrice}
        step="0.01"
        onChange={(e) => setItemPrice(parseFloat(e.target.value))}
      />
    </div>
  );
}

export default App;
