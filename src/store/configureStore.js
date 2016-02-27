import { createStore, compose } from 'redux';
import baseReducer from '../reducers';

export default function configureStore(initialState) {
  const finalCreateStore = compose(
    // applyMiddleware(thunk),
    (window && window.devToolsExtension) ? window.devToolsExtension() : f => f
  )(createStore);

  const store = finalCreateStore(baseReducer, initialState);

  // if (module.hot) {
  //  // Enable Webpack hot module replacement for reducers
  //  module.hot.accept('../reducers', () => {
  //    const nextReducer = require('../reducers');
  //    store.replaceReducer(nextReducer);
  //  });
  // }

  return store;
}
