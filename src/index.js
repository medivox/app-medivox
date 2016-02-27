import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import App from './components/App';

import './scss/styles.scss';

function createAppBase(store) {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

const store = configureStore();

function renderApp() {
  ReactDOM.render(createAppBase(store), document.getElementById('root'));
}


window.onresize = function(event) {
  console.log('Resizing');
  renderApp();
};

renderApp();
