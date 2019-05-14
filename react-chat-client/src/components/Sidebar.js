import React from "react";

import { withStyles } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";

import SidebarNav from "./SidebarNav";
import SidebarSearch from "./SidebarSearch.js";
import NewChat from "./NewChat.js";
import ChatList from "./ChatList";

const styles = theme => ({
  drawerPaper: {
    position: "relative",
    height: "100%",
    width: 320
  }
});

const Sidebar = ({ classes, chats }) => (
  <Drawer
    variant="permanent"
    classes={{
      paper: classes.drawerPaper
    }}
  >
    <SidebarSearch />
    <Divider />
    <ChatList chats={chats} />

    <NewChat />
    <SidebarNav />
  </Drawer>
);

export default withStyles(styles)(Sidebar);
