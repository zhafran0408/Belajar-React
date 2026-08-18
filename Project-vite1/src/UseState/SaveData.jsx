/** @format */

import React, { useState } from "react";

function SaveData() {
  const [number, setNumber] = useState(0);

  function plus() {
    setNumber(number + 1);
    console.log(number + 1);
  }

  return (
    <div className="text-center font-bold">
      <h2>Save Data</h2>

      <h3>{number}</h3>

      <button onClick={plus} className="text-white rounded-b-lg bg-blue-300 w-12 h-12">Plus</button>
    </div>
  );
}

export default SaveData;
