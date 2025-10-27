import { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(10);
  const [count3, setCount3] = useState(100);
  //   if any state changes then re-rederning will happen
  useEffect(() => {
    console.log("UseEffect called");
  }, [count, count2]);
  return (
    <>
      <h1>Counter 1 : {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <h1>Counter 2 : {count2}</h1>
      <button
        onClick={() => {
          setCount2(count2 + 1);
        }}
      >
        Increment
      </button>
    </>
  );
};

export default UseEffect;
