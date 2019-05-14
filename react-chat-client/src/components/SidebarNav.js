import React from "react";
import BottomNavigation, {
  BottomNavigationAction
} from "@material-ui/core/BottomNavigation";
import { Restore, Explore } from "@material-ui/icons";

const SidebarNav = () => (
  <BottomNavigation showLabels>
    <BottomNavigationAction label="My Chats" icon={<Restore />} />
    <BottomNavigationAction label="Explore" icon={<Explore />} />
  </BottomNavigation>
);

export default SidebarNav;
