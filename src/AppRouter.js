import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";


import home from "./pages/home";

const AppRouter = () => {
  return (
    <Router>
      <Route path="/" component={home} />
    </Router>
  );
};


export default AppRouter;