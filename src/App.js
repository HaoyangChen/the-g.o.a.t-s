import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Resources from "./components/Resources";
import GetInvolved from "./components/Getinvolved";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/resources" component={Resources} />
          <Route exact path="/getinvolved" component={GetInvolved} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
