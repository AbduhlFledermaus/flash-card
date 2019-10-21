import React from "react";
export const initialState = { user: {} };

/**
 * global store
 *
 * @param {*} state
 * @param {*} action
 */

export const reducer = (state, action) => {
  switch (action.type) {
    case "setUser":
      return { ...state, user: action.value };
    default:
      return state;
  }
};

export const Context = React.createContext();
