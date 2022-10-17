import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

import Index from "views/Index.js";
import Nastava from "views/Nastava";
import Projekti from "views/Projekti";
import Informacije from "views/Informacije";
import Aktivnosti from "views/Aktivnosti";
import Upis from "views/Upis";
import Kontakt from "views/Kontakt";
import Uposlenici from "views/Uposlenici";
import ScrollToTop from "components/scrollToTop";

ReactDOM.render(
  <HashRouter>
    <ScrollToTop />
    <Switch>
      <Route path="/" exact component={Index} />
      <Route path="/nastava" exact component={Nastava} />
      <Route path="/informacije" exact component={Informacije} />
      <Route path="/projekti" exact component={Projekti} />
      <Route path="/aktivnosti" exact component={Aktivnosti} />
      <Route path="/upis" exact component={Upis} />
      <Route path="/kontakt" exact component={Kontakt} />
      <Route path="/uposlenici" exact component={Uposlenici} />
      
      <Redirect from="*" to="/" />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
