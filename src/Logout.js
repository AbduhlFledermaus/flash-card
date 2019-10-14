import React, { useContext, useEffect } from "react";
import { Context } from "./store";

function Logout(props) {
  const { store, dispatch } = useContext(Context);

  useEffect(
    () =>
      dispatch({
        type: "setUser",
        value: {}
      }),
    []
  );

  return (
    <div>
      <h1>Erfolgreich ausgeloggt!</h1>
    </div>
  );
}

export default Logout;
