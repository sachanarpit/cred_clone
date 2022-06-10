import { createContext, useReducer, useState } from "react";

export const RootContext = createContext();

const ACTION_TYPES = {};

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const IntialState = {};

export const RootContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, IntialState);
  return <RootContext.Provider value={state}>{children}</RootContext.Provider>;
};
