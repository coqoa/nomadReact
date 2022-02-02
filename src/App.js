import { useState, useEffect } from "react";

import Button from"./Button";
import styles from "./App.module.css";
import react from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev)=>prev+1);
  console.log("i run all the time")

  const iRunOnlyOnce =()=>{
    console.log("I Run Only Once");
  };
  useEffect(iRunOnlyOnce, []);

  return (
    <react.Fragment>
      <div>
        <h1>
          {counter}
        </h1>
        <button onClick={onClick}>click me</button>
      </div>

      <div>
        <h1 className={styles.title}>Hello!!!!</h1>
        <Button text={"Continue"}/>
      </div>
    </react.Fragment>
  );
}

export default App;
