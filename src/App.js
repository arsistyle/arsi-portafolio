import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/Routes';
// import { getGlobal } from './services';
import Header from './components/Header';
import Footer from './components/Footer';
import './assets/scss/ars1/ars1.scss';

function App() {
  return (
    <main>
      <Router>
        <Header />
        <section
          style={{
            minHeight: 'calc(100vh - var(--header))',
          }}
        >
          <Routes />
        </section>
        <Footer />
      </Router>
    </main>
  );
}

export default App;
