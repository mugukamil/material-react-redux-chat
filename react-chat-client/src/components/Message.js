import React from "react";
import { withStyles } from "@material-ui/core";
import classnames from "classnames";
import Typography from "@material-ui/core/Typography";
import Avatar from "./Avatar";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  messageWrapper: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 3}px`
  },
  messageWrappperFromMe: {
    justifyContent: "flex-end"
  },
  message: {
    maxWidth: "70%",
    minWidth: "10%",
    padding: theme.spacing.unit,
    marginLeft: theme.spacing.unit * 2
  },
  messageFromMe: {
    marginRight: theme.spacing.unit * 2,
    backgroundColor: "#e6dcff"
  }
});

const Message = ({ classes, message }) => {
  const isMessageFromMe = message.sender === "me";

  const userAvatar = (
    <Avatar colorFrom={message.sender}>{message.sender}</Avatar>
  );
  return (
    <div
      className={classnames(
        classes.messageWrapper,
        isMessageFromMe && classes.messageWrappperFromMe
      )}
    >
      {!isMessageFromMe && userAvatar}
      <Paper
        className={classnames(
          classes.message,
          isMessageFromMe && classes.messageFromMe
        )}
      >
        <Typography variant="caption">{message.sender}</Typography>
        <Typography variant="body1">{message.content}</Typography>
      </Paper>
      {isMessageFromMe && userAvatar}
    </div>
  );
};

export default withStyles(styles)(Message);
