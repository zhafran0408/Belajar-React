/** @format */

import { useReducer } from "react";

function reducer(state, action) {
  if (action.type === "tambah") {
    return state + 1;
  }

  if (action.type === "kurangi") {
    return state - 1;
  }

  if (action.type === "reset") {
    return 0;
  }

  return state;
}

function Exercise() {
  const [angka, dispatch] = useReducer(reducer, 0);

  return (
    <div className="flex min-h-100 items-center justify-center p-6">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-lg">
        <h1 className="mb-2 text-2xl font-bold text-gray-900">
          Exercise
        </h1>

        <p className="mb-8 text-sm text-gray-500">
          Latihan useReducer — Counter
        </p>

        <div className="mb-8 rounded-2xl bg-gray-100 px-6 py-8">
          <p className="mb-2 text-sm font-medium text-gray-500">
            Angka
          </p>

          <h2 className="text-6xl font-bold text-gray-900">
            {angka}
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => dispatch({ type: "tambah" })}
            className="w-full rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-[0.98]"
          >
            Tambah
          </button>

          <button
            onClick={() => dispatch({ type: "kurangi" })}
            className="w-full rounded-xl bg-gray-900 px-5 py-3 font-semibold text-white transition hover:bg-gray-800 active:scale-[0.98]"
          >
            Kurangi
          </button>

          <button
            onClick={() => dispatch({ type: "reset" })}
            className="w-full rounded-xl border border-gray-300 bg-white px-5 py-3 font-semibold text-gray-700 transition hover:bg-gray-100 active:scale-[0.98]"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Exercise;