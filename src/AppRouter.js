import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";


// import Home from "./pages/Home";
import home from "./pages/home";

const AppRouter = () => {
  return (
    <Router>
      {/* <Route path="/" exact component={Home} /> */}
      <Route path="/" component={home} />
    </Router>
  );
};


export default AppRouter;