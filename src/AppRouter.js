import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";


import Home from "./pages/home";
import login from "./pages/login";
import PrivateRoute from "./components/privateRoute";

const AppRouter = () => {
  return (
    <Router>
      <PrivateRoute>
        <Home />
      </PrivateRoute>
      {/* <Route path="/" exact component={home} /> */}
      <Route path="/login" exact component={login} />
    </Router>
  );
};


export default AppRouter;