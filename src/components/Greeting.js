// import classes from "./nameGreeting.module.css";

import { useState } from "react";
import OutPut from "./Output";

export default function Greeting(params) {
  const [changeText, setChangeText] = useState(false);
  function clickHandler() {
    setChangeText(true);
  }
  return (
    <>
      <h2>Hello World!</h2>
      {!changeText && <OutPut>It's good to see you</OutPut>}
      {changeText && <OutPut>It's nice to meet you!</OutPut>}
      <button onClick={clickHandler}>Change Text!</button>
    </>
  );
}
