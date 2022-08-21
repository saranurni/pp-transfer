import "./App.css";

function App() {
  const balance = 100;

  return (
    <div>
      <label htmlFor="value" className="mx-auto flex flex-col gap-y-1">
        Transfer Amount:
      </label>
      <input
        type="number"
        placeholder="Enter Amount"
        className="rounded border pl-2"
      />
    </div>
  );
}
export default App;
