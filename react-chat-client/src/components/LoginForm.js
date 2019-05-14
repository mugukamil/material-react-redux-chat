import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  withStyles
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

const LoginForm = ({ classes }) => {
  const [username, setUsername] = useState({ value: "", isValid: true });
  const [password, setPassword] = useState({ value: "", isValid: true });

  const handleSubmit = ev => {
    ev.preventDefault();
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <FormControl margin="normal" required fullWidth>
        <InputLabel htmlFor="login-username">Username</InputLabel>
        <Input
          id="login-username"
          name="username"
          autoComplete="username"
          autoFocus
          onChange={ev => setUsername({ ...username, value: ev.target.value })}
          value={username.value}
          error={!username.isValid}
        />
      </FormControl>
      <FormControl margin="normal" required fullWidth>
        <InputLabel htmlFor="login-password">Password</InputLabel>
        <Input
          name="password"
          type="password"
          id="login-password"
          autoComplete="current-password"
          onChange={ev => setPassword({ ...password, value: ev.target.value })}
          value={password.value}
          error={!password.isValid}
        />
      </FormControl>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Login
      </Button>
    </form>
  );
};

export default withStyles(styles)(LoginForm);
