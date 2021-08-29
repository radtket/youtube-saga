import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
// Components
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import DrawerPrimary from "./components/DrawerPrimary";

// Pages
import Home from "./pages/Home";
import Search from "./pages/Search";
import Trending from "./pages/Trending";
import Watch from "./pages/Watch";

const useStyles = makeStyles(theme => {
  return {
    main: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar,
  };
});

const App = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const { main, toolbar } = useStyles();
  return (
    <div>
      <Navbar {...{ setDrawerOpen }} />
      <DrawerPrimary {...{ isDrawerOpen, setDrawerOpen }} />
      <main className={main}>
        <div className={toolbar} />
        <Switch>
          <Route component={Trending} path="/feed/trending" />
          <Route component={Search} path="/results" />
          <Route component={Watch} path="/watch" />
          <Route component={Home} exact path="/" />
        </Switch>
      </main>
    </div>
  );
};

export default App;
