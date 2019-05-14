import React from "react";
import { withStyles, List } from "@material-ui/core";
import SidebarChat from "./SidebarChat";

const styles = theme => ({
  chatsList: {
    height: "calc(100% - 56px)",
    overflowY: "scroll"
  }
});

const ChatList = ({ classes, chats }) => (
  <List className={classes.chatsList}>
    {chats.map((chat, index) => (
      <SidebarChat key={index} chat={chat} />
    ))}
  </List>
);

export default withStyles(styles)(ChatList);
