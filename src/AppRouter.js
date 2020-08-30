import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";


import home from "./pages/home";
import login from "./pages/login";

const AppRouter = () => {
  return (
    <Router>
      <Route path="/" exact component={home} />
      <Route path="/login" exact component={login} />
    </Router>
  );
};


export default AppRouter;