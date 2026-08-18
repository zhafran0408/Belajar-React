/** @format */

import Basic from "./UseState/Basic.jsx";
import SaveData from "./UseState/SaveData.jsx";
import Practice from "./UseState/Practice.jsx";
import Practice2 from "./UseState/Practice2.jsx";

function AppUseState() {
  return (
    <>
      <h1 className="font-bold text-center ">Belajar React useState</h1>

      <Basic />

      <hr />

      <SaveData />
      <Practice/>
      <Practice2/>
    </>
  );
}

export default AppUseState;
