import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { create as createTestRenderer } from 'react-test-renderer';
import { createStore } from 'redux';
import App from './App';
import { IState } from './IState'

let store:any = null;

beforeEach( () =>{
  store = createStore<IState, any, any, any>((state = { applicationStart: "2014-01-01", reducerCounter: 0, currentSession: null }, action) => state);
});


it('renders without crashing (Smoke Test)', () => {
  const div = document.createElement('div');
  
  ReactDOM.render(<Provider store={store}><App version="test" /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders like the last time (snapshots)', () => {

  const component = createTestRenderer(
    <Provider store={store}><App version="test3" /></Provider>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});