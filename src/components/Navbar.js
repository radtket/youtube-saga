import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(theme => {
  return {
    menuButton: {
      marginRight: theme.spacing(2),
    },
  };
});

const Navbar = ({ setDrawerOpen }) => {
  const { menuButton } = useStyles();

  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton
          aria-label="open drawer"
          className={clsx(menuButton)}
          color="inherit"
          edge="start"
          onClick={() => {
            setDrawerOpen(true);
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography noWrap variant="h6">
          Persistent drawer
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
