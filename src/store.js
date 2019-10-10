import React from "react";
export const initialState = { user: {} };

export const reducer = (state, action) => {
  switch (action.type) {
    case "setUser":
      return { ...state, user: action.value };
    default:
      return state;
  }
};

export const Context = React.createContext();
