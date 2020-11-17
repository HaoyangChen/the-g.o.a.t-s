import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Resources from "./components/Resources";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/resources" component={Resources} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
