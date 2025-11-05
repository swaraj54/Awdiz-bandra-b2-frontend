import React, { useContext } from "react";
import { CounterContext } from "../contexts/counterContext";

const ContextApi = () => {
  const { state, dispatch } = useContext(CounterContext);
  return (
    <div>
      <h1>Counter : {state?.counter}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
    </div>
  );
};

export default ContextApi;
