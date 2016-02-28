import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import App from './components/App';
import Immutable from 'immutable';
import './scss/styles.scss';

function createAppBase(store) {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

const store = configureStore({
  base: Immutable.fromJS({
    patient: null,
    patientId: null
  })
});

function renderApp() {
  ReactDOM.render(createAppBase(store), document.getElementById('root'));
}


window.onresize = function(event) {
  console.log('Resizing');
  renderApp();
};

renderApp();
