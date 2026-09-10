/** @format */

import { useState } from "react";

import ExampleOne from "./ExampleOne";
import ExampleTwo from "./ExampleTwo";
import Exercise from "./Exercise";

function AppUseReducer() {
  const [showExercise, setShowExercise] = useState(false);

  return (
    <div className="space-y-8">
      <ExampleOne />

      <ExampleTwo />

      <div className="border-t border-gray-200 pt-6 text-center">
        <button
          onClick={() => setShowExercise(!showExercise)}
          className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-95"
        >
          {showExercise ? "Tutup Exercise" : "Exercise"}
        </button>
      </div>

      {showExercise && <Exercise />}
    </div>
  );
}

export default AppUseReducer;