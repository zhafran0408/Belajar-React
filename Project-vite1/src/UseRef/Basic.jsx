/** @format */

import React, { useRef } from "react";

function Basic() {
  const inputRef = useRef(null); // Membuat sebuah refe

  function fokusInput() {
    inputRef.current.focus();
  }

  return (
    <div>
      <input ref={inputRef} type="text" />

      <button onClick={fokusInput}>
        Menyuruh fokus ke input
      </button>
    </div>
  );
}

export default Basic;