/** DATA **/
import { Menu } from './Data';

/** COMPONENTS **/
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

/** ASSETS **/
// Images
import Logo from './assets/img/logo.svg';
// Styles
import './assets/scss/ars1/ars1.scss';

function App(props) {
  return (
    <main>
      <Router>
        <Header logo={Logo} menu={Menu}></Header>
        <Switch>
          {Menu.map((item, index) => {
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
