import React from 'react';
export const initialState = { loggedIn: false };

export const reducer = (state, action) => {
  switch (action.type) {
    case 'setLoggedIn':
      return { ...state, loggedIn: action.value };
    default:
      return state;
  }
};

export const Context = React.createContext();
