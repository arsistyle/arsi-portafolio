import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/ars1/ars1.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Logo from './assets/img/logo.svg';

ReactDOM.render(<App logo={Logo} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
