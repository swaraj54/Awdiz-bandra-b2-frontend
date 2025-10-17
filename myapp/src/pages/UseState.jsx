import React, { useState } from "react";

const UseState = () => {
  //   const [state,  function] =  useState(initial value);
  const [counter, setCounter] = useState(1);
  console.log(counter, "counter");

  function Increment() {
    setCounter(counter + 1);
  }
  function Decrement() {
    setCounter(counter - 1);
  }
  function Reset() {
    setCounter(1);
  }

  return (
    <div>
      <h1>UseState - {counter}</h1>
      <button onClick={Increment}>+</button>
      <button onClick={Decrement}>-</button>
      <button onClick={Reset}>Reset</button>
    </div>
  );
};

export default UseState;
