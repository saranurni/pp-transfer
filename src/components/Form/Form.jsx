import PropTypes from "prop-types";

export default function Form({ handleSubmit }) {
  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex w-48 flex-col items-center"
    >
      <div className="mx-auto flex flex-col gap-y-1 text-center text-2xl font-semibold text-pink-500">
        <h1>Welcome!</h1>
        <label
          htmlFor="amount"
          className="mx-auto flex flex-col gap-y-1 text-2xl text-pink-500 "
        >
          Transfer Amount:
        </label>
        <input
          type="number"
          placeholder="Enter Amount"
          className="rounded border pl-4"
          id="amount"
        />
      </div>

      <button
        type="submit"
        className="text-pink border-pink mx-auto flex flex-col items-center gap-y-1 rounded border px-4 py-2  text-center text-xl text-pink-500"
      >
        Transfer now
      </button>
    </form>
  );
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
