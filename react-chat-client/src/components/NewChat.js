import React from "react";
import { Add } from "@material-ui/icons";
import { withStyles, Button } from "@material-ui/core";

const styles = theme => ({
  newChatButton: {
    position: "absolute",
    left: "auto",
    right: theme.spacing.unit * 3,
    bottom: theme.spacing.unit * 3 + 48 // + bottom navigation
  }
});

const NewChat = ({ classes }) => (
  <Button variant="fab" color="primary" className={classes.newChatButton}>
    <Add />
  </Button>
);

export default withStyles(styles)(NewChat);
