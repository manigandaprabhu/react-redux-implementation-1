import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
// import { createRoot } from 'react-dom/client';
import { createStore } from 'redux';
import { provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer);

import App from './App';

// const rootElement = document.getElementById('root');
// const root = createRoot(rootElement);

ReactDOM.render(
  <provider store={store}>
    <App />
  </provider>,
  document.getElementById('root')
);
