import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Logon from "./pages/Logon";
import Register from "./pages/Register";
import GetId from "./pages/GetId";
import Profile from "./pages/Profile";
import NewIncident from "./pages/NewIncident";

function PrivateRoute({ children, ...rest }) {
  function isAuthenticated() {
    const ongId = localStorage.getItem("ongId");

    if (ongId) {
      return true;
    }

    return false;
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <PrivateRoute path="/register">
          <Register />
        </PrivateRoute>
        {/* <Route path="/register" component={Register} /> */}

        <PrivateRoute path="/profile">
          <Profile />
        </PrivateRoute>
        <PrivateRoute path="/incidents/new">
          <NewIncident />
        </PrivateRoute>
        {/* <Route path="/profile" component={Profile} />
        <Route path="/incidents/new" component={NewIncident} /> */}
        <Route path="/getid/:id" children={<GetId />} />
      </Switch>
    </BrowserRouter>
  );
}
