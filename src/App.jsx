import React, { Suspense } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import IndividualArticle from "./components/IndividualArticle";
import i18n from "./i18n";
// import { Loader } from "semantic-ui-react";

const App = () => {
  if (navigator.language.includes("sv")) {
    i18n.changeLanguage("sv");
  }

  const HomePage = React.lazy(() => import("./components/HomePage"));
  const Category = React.lazy(() => import("./components/Category"));

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Suspense fallback={<div data-cy="loading-symbol">Loading</div>}>
          <Route exact path="/" component={HomePage}></Route>
        </Suspense>
        <Route
          exact
          path={"/articles/:id"}
          component={IndividualArticle}
        ></Route>
        <Suspense fallback={<div data-cy="loading-symbol">Loading</div>}>
          <Route
            exact
            path={"/category/:category"}
            component={Category}
          ></Route>
        </Suspense>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
