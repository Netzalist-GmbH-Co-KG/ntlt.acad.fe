import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import LogonComponent from './LogonComponent';
import * as TestStates from "../fixtures/testStates"

beforeAll( () => {
  Enzyme.configure({ adapter: new Adapter() })
} )

it('renders without crashing (Smoke Test)', () => {
  const store = createStore(( state = TestStates.initialState, action) => state);
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><LogonComponent /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders like the last time (snapshots)', () => {

  const store = createStore(( state = TestStates.initialState, action) => state);
  // const cb = (u:string,p:string) => { return; };
  const wrapper =  Enzyme.mount(<Provider store={store}><LogonComponent /></Provider>);

  expect(toJson(wrapper)).toMatchSnapshot();

  // click logon without entering anything 
  wrapper.find("#logonButton").simulate("click");
  expect(toJson(wrapper)).toMatchSnapshot();

  // click logon with entering someting
  wrapper.find("#username").simulate("change", { target: { value: 'user' } });
  wrapper.find("#password").simulate("change", { target: { value: 'password' } });
  wrapper.find("#logonButton").simulate("click");

  expect(toJson(wrapper)).toMatchSnapshot();

});
