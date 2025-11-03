import React from "react";

const UseRef = () => {
  const [counter, setCounter] = React.useState(0);
  alert("Component Rendered!");
  const counterRef = React.useRef(11);
  console.log("counterRef:", counterRef.current);
  return (
    <div>
      <h1>counter : {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <h1>Counter Ref : {counterRef.current}</h1>
      <button onClick={() => (counterRef.current += 1)}>Increment Ref</button>
    </div>
  );
};

export default UseRef;
