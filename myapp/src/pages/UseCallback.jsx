import React, { useCallback } from "react";
import ChildrenComponent from "./ChildrenComponent";

const UseCallback = () => {
  const [counter, setCounter] = React.useState(0);
  // const incrementCounter = () => setCounter(counter + 1);

  const incrementCounter = useCallback(
    () => setCounter(counter + 1),
    [counter]
  );
  const [counter2, setCounter2] = React.useState(0);
  return (
    <div>
      <h1>Counter 2 : {counter2}</h1>
      <button onClick={() => setCounter2(counter2 + 1)}>
        Increment Counter 2
      </button>
      <ChildrenComponent
        counter={counter}
        incrementCounter={incrementCounter}
      />
    </div>
  );
};

export default UseCallback;
