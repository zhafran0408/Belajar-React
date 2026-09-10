/** @format */

import { useReducer } from "react";

function reducer(state, action) {
  if (action.type === "tambah") {
    return state + 5;
  }

  if (action.type === "kurang") {
    return state - 5;
  }

  if (action.type === "reset") {
    return 0;
  }

  return state;
}

function ExampleOne() {
  const [angka, dispatch] = useReducer(reducer, 0);

  return (
    <div className="flex min-h-75 items-center justify-center">
      <div className="w-full max-w-md rounded-2xl border bg-white p-8 text-center shadow-lg">
        <h1 className="mb-2 text-2xl font-bold text-gray-900">
          Example One
        </h1>

        <p className="mb-6 text-sm text-gray-500">
          Latihan useReducer — Counter
        </p>

        <div className="mb-6 rounded-xl bg-gray-100 p-6">
          <p className="mb-2 text-sm text-gray-500">
            Angka sekarang
          </p>

          <h2 className="text-5xl font-bold text-gray-900">
            {angka}
          </h2>
        </div>

        <div className="flex justify-center gap-3">
          <button
            onClick={() => dispatch({ type: "kurang" })}
            className="rounded-xl bg-gray-900 px-5 py-3 font-semibold text-white transition hover:bg-gray-700 active:scale-95"
          >
            -5
          </button>

          <button
            onClick={() => dispatch({ type: "reset" })}
            className="rounded-xl border border-gray-300 bg-white px-5 py-3 font-semibold text-gray-700 transition hover:bg-gray-100 active:scale-95"
          >
            Reset
          </button>

          <button
            onClick={() => dispatch({ type: "tambah" })}
            className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-95"
          >
            +5
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExampleOne;
