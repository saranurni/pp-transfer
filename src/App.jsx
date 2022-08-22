import { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [balance, setBalance] = useState(100);
  const [message, setMessage] = useState("");

  function handleClick() {
    if (amount <= balance) {
      setBalance(balance - amount);
      setMessage(`£${amount} has been transferred!`);
    } else {
      setMessage(`Insufficient funds.`);
    }
  }

  const handleChange = (event) => setAmount(event.target.value);

  return (
    <form>
      <div className="mx-auto flex flex-col gap-y-1 font-semibold">
        <h1 className"mx-auto text center font-semibold">£{balance}</h1>
        <label
          htmlFor="value"
          className="mx-auto flex flex-col gap-y-1 text-3xl text-pink-500 "
          onChange={handleChange}
        >
          Transfer Amount:
        </label>
        <input
          type="number"
          placeholder="Enter Amount"
          className="rounded border pl-4"
        />
      </div>

      <button
        type="submit"
        value="Transfer"
        className="text-pink border-pink mx-auto flex flex-col gap-y-1 rounded border px-4 py-2 text-center  text-xl text-pink-500"
        onCLick={handleClick}
      >
        Transfer now
      </button>
    </form>
  );
}
export default App;
