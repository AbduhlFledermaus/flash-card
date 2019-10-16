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
import Snackbar from "@material-ui/core/Snackbar";
import firebase from "firebase";
import { isNullOrUndefined } from "util";

function Register(props) {
  const { dispatch } = useContext(Context);

  const [open, setOpen] = useState(false);

  const [email, setEmail] = React.useState("");
  const [password1, setPassword1] = React.useState("");
  const [password2, setPassword2] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [snack, setSnack] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRegister = e => {
    e.preventDefault();
    if (
      !isNullOrUndefined(password2) &&
      !isNullOrUndefined(password1) &&
      password1.length >= 5 &&
      password2 === password1
    ) {
      console.log("here");
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password1)
        .then(a => {
          console.log(a);
          firebase
            .firestore()
            .collection("user")
            .add({ email: email, firstName: firstName, lastName: lastName })
            .then(data => {
              dispatch({
                type: "setUser",
                value: {
                  email: email,
                  firstName: firstName,
                  lastName: lastName,
                  id: data.id
                }
              });
            });
          setSnack(true);
          console.log("SnackBar");
          if (snack) {
            props.history.push("/welcome");
          }
        });
      handleClose();
    }
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Registrieren
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Registrieren</DialogTitle>
        <form onSubmit={e => handleRegister(e)}>
          <DialogContent>
            <DialogContentText>
              Geben Sie bitte Ihre Daten ein.
            </DialogContentText>

            <TextField
              autoFocus
              margin="dense"
              id="vorname"
              label="Vorname"
              onChange={e => setFirstName(e.target.value)}
              type="text"
              fullWidth
            />

            <TextField
              margin="dense"
              id="Nachname"
              label="Nachname"
              onChange={e => setLastName(e.target.value)}
              type="text"
              fullWidth
              required
            />

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
              id="password1"
              label="Passwort"
              onChange={e => setPassword1(e.target.value)}
              type="password"
              fullWidth
              required
            />

            <TextField
              margin="dense"
              id="password2"
              label="Passwort"
              onChange={e => setPassword2(e.target.value)}
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
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        open={snack}
        autoHideDuration={3}
        ContentProps={{
          "aria-describedby": "message-id"
        }}
        message={<span id="message-id">Erfolgreich registriert =)</span>}
      />
    </div>
  );
}

export default withRouter(Register);
