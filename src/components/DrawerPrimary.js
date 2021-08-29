import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

// Components
import {
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

// Icons
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

const useStyles = makeStyles(() => {
  return {
    list: {
      width: 250,
    },
  };
});

const DrawerPrimary = ({ isDrawerOpen, setDrawerOpen }) => {
  const { list } = useStyles();

  return (
    <Drawer
      anchor="left"
      onClose={() => {
        setDrawerOpen(false);
      }}
      open={isDrawerOpen}
    >
      <div
        className={clsx(list)}
        onClick={() => {
          setDrawerOpen(false);
        }}
        onKeyDown={() => {
          setDrawerOpen(false);
        }}
        role="presentation"
      >
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => {
            return (
              <ListItem key={text} button>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            );
          })}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => {
            return (
              <ListItem key={text} button>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            );
          })}
        </List>
      </div>
    </Drawer>
  );
};

export default DrawerPrimary;
