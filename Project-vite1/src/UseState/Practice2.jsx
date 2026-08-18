/** @format */

import React, { useState } from "react";

import { Button } from "../components/ui/button";

function Practice2() {
  const [name, setName] = useState("Ali");

  function changeName() {
    setName("Fulan");
  }

  return (
    <div className='mx-auto mt-10 max-w-sm rounded-xl border bg-white p-6 text-center shadow-sm'>
      <h2 className='mb-4 text-2xl font-bold'>Practice 2</h2>

      <h3 className='mb-5 text-xl text-gray-700'>{name}</h3>

      <Button onClick={changeName}>Change Name</Button>
    </div>
  );
}

export default Practice2;
