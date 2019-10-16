import React, { useContext, useEffect } from "react";
import { Context } from "./store";

/**
 * Logout
 *
 * @param {*} props
 */
function Logout(props) {
  const { store, dispatch } = useContext(Context);

  useEffect(
    () =>
      dispatch({
        type: "setUser",
        value: {}
      }),
    [dispatch]
  );

  return (
    <div>
      <h1>Erfolgreich ausgeloggt!</h1>
    </div>
  );
}

export default Logout;
