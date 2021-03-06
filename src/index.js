import 'whatwg-fetch';
import 'lodash';

import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from './reducers';

import App from './containers/App';

const middlewares = [ thunkMiddleware ];
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(createLogger());
}

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middlewares)
);

renderWithHotReload(<App/>);

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const NextApp = require('./containers/App').default;
    renderWithHotReload(<NextApp/>)
  });
}

function renderWithHotReload(RootElement) {
  ReactDOM.render (
    <AppContainer>
      <Provider store={store}>
        {RootElement}
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
}
