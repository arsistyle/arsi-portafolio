import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import Hero from './components/Hero';
import Header from './components/Header';
import './assets/scss/ars1/ars1.scss';

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
        <Hero />
      </Router>
    </main>
  );
}

export default App;
