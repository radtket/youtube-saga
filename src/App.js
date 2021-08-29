import React from "react";
import { useTheme } from "@material-ui/core/styles";
// Components
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import DrawerPrimary from "./components/DrawerPrimary";

// Pages
import Home from "./pages/Home";
import Trending from "./pages/Trending";
import Search from "./pages/Search";
import Watch from "./pages/Watch";

const App = () => {
  const [isDrawerOpen, setDrawerOpen] = React.useState(false);
  const theme = useTheme();
  return (
    <div>
      <Navbar {...{ setDrawerOpen }} />
      <DrawerPrimary {...{ isDrawerOpen, setDrawerOpen }} />
      <main
        style={{
          flexGrow: 1,
          padding: theme.spacing(3),
        }}
      >
        <div style={theme.mixins.toolbar} />
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
