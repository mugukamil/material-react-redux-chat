import React, { useState } from "react";
import {
  Tab,
  Tabs,
  withStyles,
  Typography,
  Toolbar,
  AppBar,
  Paper
} from "@material-ui/core";
import RegForm from "./RegForm";
import LoginForm from "./LoginForm";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  main: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  }
});

const TabContainer = props => (
  <Typography component="div" style={{ padding: 8 * 3 }}>
    {props.children}
  </Typography>
);

const WelcomePage = ({ classes }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            React Chat
          </Typography>
        </Toolbar>
      </AppBar>

      <main className={classes.main}>
        <Paper className={classes.paper}>
          <AppBar position="static" color="default">
            <Tabs value={activeTab} onChange={(ev, tab) => setActiveTab(tab)}>
              <Tab label="Login" />
              <Tab label="Sign Up" />
            </Tabs>
          </AppBar>
          <TabContainer>
            {activeTab === 0 && <LoginForm />}
            {activeTab === 1 && <RegForm />}
          </TabContainer>
        </Paper>
      </main>
    </div>
  );
};

export default withStyles(styles)(WelcomePage);
