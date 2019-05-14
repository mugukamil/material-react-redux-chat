import React, { useState } from "react";
import {
  withStyles,
  Input,
  FormControl,
  Button,
  InputLabel
} from "@material-ui/core";

const styles = theme => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

const RegForm = ({ classes }) => {
  const [username, setUsername] = useState({ value: "", isValid: true });
  const [password, setPassword] = useState({ value: "", isValid: true });
  const [repeatedPassword, setRepeatedPassword] = useState({
    value: "",
    isValid: true
  });

  const handleSubmit = ev => {
    ev.preventDefault();

    fetch("http://localhost:8000/v1/signup", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username.value,
        password: password.value
      })
    })
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(err => console.log(err));
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <FormControl margin="normal" required fullWidth>
        <InputLabel htmlFor="email">Username</InputLabel>
        <Input
          id="usernam"
          name="username"
          autoComplete="username"
          autoFocus
          onChange={ev => setUsername({ ...username, value: ev.target.value })}
          value={username.value}
          error={!username.isValid}
        />
      </FormControl>
      <FormControl margin="normal" required fullWidth>
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input
          name="password"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={ev => setPassword({ ...password, value: ev.target.value })}
          value={password.value}
          error={!password.isValid}
        />
      </FormControl>
      <FormControl margin="normal" required fullWidth>
        <InputLabel htmlFor="repeated-password">Repeat Password</InputLabel>
        <Input
          name="password"
          type="password"
          id="repeated-password"
          autoComplete="repeated-password"
          onChange={ev =>
            setRepeatedPassword({ ...repeatedPassword, value: ev.target.value })
          }
          value={repeatedPassword.value}
          error={!repeatedPassword.isValid}
        />
      </FormControl>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Sign Up
      </Button>
    </form>
  );
};

export default withStyles(styles)(RegForm);
