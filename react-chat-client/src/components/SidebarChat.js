import React from "react";
import { ListItem, ListItemText } from "@material-ui/core/List";
import Avatar from "./Avatar";

const SidebarChat = ({ classes, chat }) => (
  <ListItem button>
    <Avatar colorFrom={chat.title}>{chat.title}</Avatar>
    <ListItemText primary={chat.title} />
  </ListItem>
);

export default SidebarChat;
