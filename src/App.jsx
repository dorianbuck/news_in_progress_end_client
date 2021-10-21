import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Category from "./components/Category";
import IndividualArticle from "./components/IndividualArticle";
import i18n from "./i18n";
// import { Loader } from "semantic-ui-react";

const App = () => {
  if (navigator.language.includes("sv")) {
    i18n.changeLanguage("sv");
  }

  // const Header = React.lazy(() => import("./components/Header"));
  // const Footer = React.lazy(() => import("./components/Category"));
  // const HomePage = React.lazy(() => import("./components/HomePage"));
  // const Category = React.lazy(() => import("./components/Category"));
  // const IndividualArticle = React.lazy(() => import("./components/IndividualArticle"));
  
  return (
      // <Suspense fallback={<div data-cy="loading-symbol">Loading</div>}>
    <BrowserRouter>
      <Header />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route
            exact
            path={"/articles/:id"}
            component={IndividualArticle}
          ></Route>
          <Route
            exact
            path={"/category/:category"}
            component={Category}
          ></Route>
        </Switch>
      <Footer />
    </BrowserRouter>
      // </Suspense>
  );
};

export default App;
