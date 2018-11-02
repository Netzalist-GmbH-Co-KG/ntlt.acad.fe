import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { create as createTestRenderer } from 'react-test-renderer';
import { createStore } from 'redux';
import App from './App';
import * as TestStates from "./fixtures/testStates"
 
it('renders without crashing (Smoke Test)', () => {
  const store = createStore(( state = TestStates.initialState, action) => state);
  const div = document.createElement('div');
  
  ReactDOM.render(<Provider store={store}><App version="test" /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders like the last time (snapshots)', () => {
  const store = createStore(( state = TestStates.initialState, action) => state);
  const component = createTestRenderer(
    <Provider store={store}><App version="test3" /></Provider>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
