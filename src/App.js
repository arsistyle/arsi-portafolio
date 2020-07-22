import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Pages from './pages';
import Footer from './components/Footer';
import './assets/scss/ars1/ars1.scss';
import Projects from './components/ProjectsList';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <main>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact>
            <ScrollToTop />
            <Home />
          </Route>
          <Route path='/proyectos' exact>
            {/* <ScrollToTop /> */}
            <Pages
              slug='proyectos'
              component={Projects}
              exact
              extra={{
                filter: true,
              }}
            />
          </Route>
          {/* <Route path='/cv' render={CV} /> */}
          {/* <Route path='/trabajemos-juntos' render={Work} /> */}
          {/* <Route path='/proyectos:slug' render={ProjectsDetail} /> */}
          <Route path='/proyectos/:cat_slug'>
            <Pages
              slug='proyectos'
              component={Projects}
              extra={{
                filter: true,
              }}
            />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </main>
  );
}

export default App;
