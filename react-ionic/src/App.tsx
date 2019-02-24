import React from "react";
import { IonApp, IonPage } from "@ionic/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "@ionic/core/css/core.css";
import "@ionic/core/css/ionic.bundle.css";

import Home from "./pages/Home";
import About from "./pages/About";

const App = () => (
  <Router>
    <div id="app">
      <IonApp>
        <IonPage id="main">
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/" component={Home} />
          </Switch>
        </IonPage>
      </IonApp>
    </div>
  </Router>
);

export default App;
