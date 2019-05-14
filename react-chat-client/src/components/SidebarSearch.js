import React from "react";
import { withStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  drawerHeader: {
    ...theme.mixins.toolbar,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3
  }
});

const SidebarSearch = ({ classes }) => (
  <div className={classes.drawerHeader}>
    <TextField fullWidth margin="normal" placeholder="Search chats..." />
  </div>
);

export default withStyles(styles)(SidebarSearch);
