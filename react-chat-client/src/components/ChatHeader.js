import React from "react";

import { withStyles, AppBar, Toolbar, Typography } from "@material-ui/core";

const styles = theme => ({
  appBar: {
    position: "fixed",
    width: `calc(100% - 320px)`
  }
});

const ChatHeader = ({ classes }) => (
  <AppBar color="primary" className={classes.appBar}>
    <Toolbar>
      <Typography variant="title" color="inherit" noWrap>
        DogeCodes React Chat
      </Typography>
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(ChatHeader);
