import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";

let balance = 100;

function App() {
  const [transferStatus, setTransferStatus] = useState({ amount: 0, msg: "" });

  const handleSubmit = (event) => {
    event.preventDefault();

    const transferAmount = event.target.elements[0].value;

    if (transferAmount < balance) {
      balance -= transferAmount;
      setTransferStatus({
        amount: transferAmount,
        msg: "You transferred",
      });
    } else {
      setTransferStatus({
        amount: 0,
        msg: "Not enough funds.",
      });
    }
    event.target.reset();
  };

  return (
    <>
      <Form handleSubmit={handleSubmit} />
      <p>You have successfully transferred {transferStatus.amount}</p>
      <p>Current Balance:{balance}</p>
      <p>{transferStatus.msg}</p>
    </>
  );
}
export default App;
