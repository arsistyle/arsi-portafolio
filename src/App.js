/** DATA **/
import { Menu } from "./Data";

/** COMPONENTS **/
import React, {useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import ProjectsDetail from "./pages/ProjectsDetail";
import Footer from "./components/Footer";

/** ASSETS **/
// Images
import Logo from "./assets/img/logo.svg";
// Styles
import "./assets/scss/ars1/ars1.scss";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App(props) {
  return (
    <main>
      <div className="frame">
        <div className="alerta alerta--aviso text-align-center-xs">
          Sitio en Desarrollo
        </div>
      </div>
      <Router>
        <ScrollToTop />
        <Header logo={Logo} menu={Menu}></Header>
        <Switch>
          {Menu.map((item, index) => {
            return <Route exact path={item.url} key={index} component={item.component} />;
          })}
          <Route path="/proyectos/:slug" exact component={ProjectsDetail} name="Título del proyecto" />
          {/* <Route name="404: No Match for route" path="*" component={NoMatch} /> */}
        </Switch>
      </Router>
      <Footer />
    </main>
  );
}

export default App;
