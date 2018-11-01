import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as Redux from 'redux';

import App from './App';
import './index.css';
import rootReducer from "./reducers/root";
import registerServiceWorker from './registerServiceWorker';

console.log("Starting");

const store = Redux.createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App version="Version 1.0.0.0" />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
