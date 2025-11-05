import React, { createContext, useReducer } from "react";

export const CounterContext = createContext();

const CounterContextProvider = ({ children }) => {
  const InitialState = { counter: 11, userData: null };
  function reducer(state, action) {
    switch (action.type) {
      case "INCREMENT":
        return {...state,  counter: state.counter + 1 };
      case "DECREMENT":
        return {...state, counter: state.counter - 1 };
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, InitialState);
  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterContextProvider;
