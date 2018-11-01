import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as Redux from 'redux';
import App from './App';
import './index.css';
import IState from './IState';
import registerServiceWorker from './registerServiceWorker';

const initialState: IState = {
  applicationStart: Date(),
  reducerCounter: 0,
  currentSession: null,
}

const rootReducer = (state: IState = initialState, action: any): IState => {
  switch (action.type) {
    case "LOGON_REQUEST":
      if (action.username === "admin") {
        return Object.assign({}, state, {
          currentSession: {
            currentUser: action.username,
            sessionStart: Date(),
          }
        })
      } else {
        return state;
      }
    case "INCREASE_COUNTER":
      return Object.assign({}, state, { reducerCounter: state.reducerCounter + 1 })
    default:
      return state;
  }
};

const store = Redux.createStore<IState, any, any, any>(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App version="Version 1.0.0.0" />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
