import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
// import importedComponent from "react-imported-component";
import { ThemeProvider } from "styled-components";

import Home from "./routes/Home";
// import Loading from "./components/loader";
import { GlobalStyle } from "./utils/globalStyles";
import Nav from "./components/nav/Nav";
import { Theme } from "./utils/ThemeContext";
import About from "./routes/About";

// const AsyncDynamicPAge = importedComponent(
//   () => import(/* webpackChunkName:'DynamicPage' */ "./routes/dynamicPage"),
//   {
//     LoadingComponent: Loading,
//   }
// );
// const AsyncNoMatch = importedComponent(
//   () => import(/* webpackChunkName:'NoMatch' */ "./routes/nomatch"),
//   {
//     LoadingComponent: Loading,
//   }
// );

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <React.Fragment>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/dynamic" component={AsyncDynamicPAge} />
            <Route component={AsyncNoMatch} /> */}
            <Route exact path="/about" component={About} />
          </Switch>
        </React.Fragment>
      </ThemeProvider>
    </Router>
  );
};

export default App;
