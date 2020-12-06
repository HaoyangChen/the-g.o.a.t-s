import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./components/Home";
import GetInvolved from "./components/Getinvolved";
import Contact from "./components/Contact";
import Terms from "./components/Terms";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/getinvolved" component={GetInvolved} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/terms" component={Terms} />
        </Switch>
        <Footer />
      </Router>
      <a
        href="#"
        id="toTopBtn"
        class="cd-top text-replace js-cd-top cd-top--is-visible cd-top--fade-out"
        data-abc="true"
      ></a>
    </div>
  );
};

export default App;
