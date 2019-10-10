import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import firebase from "firebase";
import { isNullOrUndefined } from "util";

function Register() {
  const [open, setOpen] = React.useState(false);

  const [email, setEmail] = React.useState("");
  const [password1, setPassword1] = React.useState("");
  const [password2, setPassword2] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRegister = () => {
    console.log("Hoden");
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
        });
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
        <DialogContent>
          <DialogContentText>Geben Sie bitte Ihre Daten ein.</DialogContentText>

          <form>
            <TextField
              autoFocus
              margin="dense"
              id="vorname"
              label="Vorname"
              type="text"
              fullWidth
            />

            <TextField
              margin="dense"
              id="Nachname"
              label="Nachname"
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
          </form>
        </DialogContent>
        <DialogActions>
          <input type="submit"></input>
          <Button onClick={handleRegister} color="primary">
            Registrieren
          </Button>
          <Button onClick={handleClose} color="primary">
            Abbrechen
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Register;
