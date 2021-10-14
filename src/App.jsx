import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import HomePage from "./HomePage";
import { Switch, Route, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
