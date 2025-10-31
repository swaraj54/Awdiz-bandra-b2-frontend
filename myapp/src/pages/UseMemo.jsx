import React, { useMemo } from "react";

const UseMemo = () => {
  const [counter, setCounter] = React.useState(1);
  const [counter2, setCounter2] = React.useState(100);
  //   const result = heavyCalculation(counter); // 21
  const result = useMemo(() => heavyCalculation(counter), [counter]); // 21
  return (
    <div>
      <h1>Result of Heavy Calculations : {result}</h1>
      <h1>Counter : {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment Counter</button>
      <h1>Counter 2 : {counter2}</h1>
      <button onClick={() => setCounter2(counter2 + 1)}>
        Increment Counter 2
      </button>
    </div>
  );
};

function heavyCalculation(num) {
  console.log("Heavy Calculation Started", num);
  let output = 0;
  for (let i = 0; i < 1000000000; i++) {
    output = num + i;
  }
  return output;
}

export default UseMemo;
