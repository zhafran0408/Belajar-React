/** @format */

import React from "react";

function Basic() {
  let number = 0;

  function plus() {
    number = number + 1;
    console.log(number);
  }

  return (
    <div>
      <h2>Basic</h2>

      <h3>{number}</h3>

      <button onClick={plus}>Plus</button>
    </div>
  );
}

export default Basic;
