import React, { useState, useContext } from "react";
import { Context } from "./store";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import firebase from "firebase";

function Login(props) {
  const { store, dispatch } = useContext(Context);
  const [open, setOpen] = React.useState(false);

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRegister = e => {
    e.preventDefault();
    if (password.length >= 5) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(data => {
          console.log(data);
          firebase
            .firestore()
            .collection("user")
            .where("email", "==", email)
            .get()
            .then(d => {
              dispatch({
                type: "setUser",
                value: {
                  email: d.docs[0].data().email,
                  firstName: d.docs[0].data().firstName,
                  lastName: d.docs[0].data().lastName,
                  id: d.docs[0].id
                }
              });

              props.history.push(`/welcome${d.docs[0].id}`);
            });
        });
      handleClose();
    }
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Anmelden
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Anmelden</DialogTitle>
        <form onSubmit={e => handleRegister(e)}>
          <DialogContent>
            <DialogContentText>
              Geben Sie bitte Ihre Daten ein.
            </DialogContentText>

            <TextField
              margin="dense"
              id="email"
              label="Email Address"
              type="email"
              onChange={e => setEmail(e.target.value)}
              fullWidth
              required
            />
            <TextField
              margin="dense"
              id="password"
              label="Passwort"
              onChange={e => setPassword(e.target.value)}
              type="password"
              fullWidth
              required
            />
          </DialogContent>
          <DialogActions>
            <input type="submit"></input>
            <Button onClick={handleClose} color="primary">
              Abbrechen
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}

export default withRouter(Login);
