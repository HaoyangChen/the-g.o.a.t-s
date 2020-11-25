import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Resources from "./components/Resources";
import GetInvolved from "./components/Getinvolved";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Terms from "./components/Terms";
import Causes from "./components/Causes";
import Process from "./components/Process";
import Stories from "./components/Stories";

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
          <Route exact path="/faq" component={FAQ} />
          <Route exact path="/terms" component={Terms} />
          <Route exact path="/causes" component={Causes} />
          <Route exact path="/process" component={Process} />
          <Route exact path="/stories" component={Stories} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
