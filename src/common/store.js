import React from 'react';
export const initialState = { user: { loggedIn: false } };

export const reducer = (state, action) => {
  switch (action.type) {
    case 'setUrl':
      return { user: action.value };
    default:
      return state;
  }
};

export const Context = React.createContext();
