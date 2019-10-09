import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import firebase from "firebase";

function Register() {
  const [open, setOpen] = React.useState(false);

  const [email, setEmail] = React.useState(false);
  const [password1, setPassword1] = React.useState(false);
  const [password2, setPassword2] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRegister = () => {
    if (
      password1 &&
      password2 &&
      password1.lenght > 5 &&
      password2 === password1
    ) {
      firebase.auth.Register();
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
          />

          <TextField
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            onChange={e => setEmail(e.target.value)}
            fullWidth
          />
          <TextField
            margin="dense"
            id="password1"
            label="Passwort"
            onChange={e => setPassword1(e.target.value)}
            type="password"
            fullWidth
          />

          <TextField
            margin="dense"
            id="password2"
            label="Passwort"
            onChange={e => setPassword2(e.target.value)}
            type="password"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
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
