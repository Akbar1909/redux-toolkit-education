import React, { useEffect, memo, useContext } from "react";

import { CounterContext } from "./Hooks";

const Child2 = ({ onUpdateLastName }) => {
  const { dispatch, value, lastName } = useContext(CounterContext);

  return (
    <div>
      <b>value: {value} {lastName}</b>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
};

export default memo(Child2);
