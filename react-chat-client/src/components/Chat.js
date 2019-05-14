import React from "react";

import { withStyles } from "@material-ui/core";
import Message from "./Message";
import MessageInput from "./MessageInput";

const styles = theme => ({
  messagesWrapper: {
    overflowX: "scroll",
    height: "100%",
    width: "100%",
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: "120px"
  },
  chatLayout: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "64px",
    height: "100%",
    overflow: "hidden"
  }
});

class Chat extends React.Component {
  componentDidMount() {
    this.scrollDownHistory();
  }

  componentDidUpdate() {
    this.scrollDownHistory();
  }

  scrollDownHistory() {
    const messagesWrapper = this.refs.messagesWrapper;

    if (messagesWrapper) {
      messagesWrapper.scrollTop = messagesWrapper.scrollHeight;
    }
  }
  render() {
    const { classes, messages } = this.props;

    return (
      <main className={classes.chatLayout}>
        <div className={classes.messagesWrapper} ref="messagesWrapper">
          {messages &&
            messages.map((message, index) => (
              <Message key={index} message={message} />
            ))}
        </div>
        <MessageInput />
      </main>
    );
  }
}

export default withStyles(styles)(Chat);
