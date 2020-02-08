// DATA
import { MENU } from './data/Menu';

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App(props) {
  return (
    <main>
      <Router>
        <Header logo={props.logo} menu={MENU}></Header>
        <Switch>
          {MENU.map((item, index) => {
            const Page = item.component;
            return <Route exact path={item.url} key={index} component={Page} />;
          })}
        </Switch>
      </Router>
      <Footer />
    </main>
  );
}

export default App;
