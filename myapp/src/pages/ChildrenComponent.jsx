import React, { memo } from "react";

const ChildrenComponent = ({ counter, incrementCounter }) => {
  console.log("ChildrenComponent Rendered");
  return (
    <div>
      <h1>ChildrenComponent- {counter}</h1>
      <button onClick={incrementCounter}>Increment Counter</button>
    </div>
  );
};

export default memo(ChildrenComponent);
