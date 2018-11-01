import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import LogonComponent from './LogonComponent';

beforeAll( () => {
  Enzyme.configure({ adapter: new Adapter() })
} )

it('renders without crashing (Smoke Test)', () => {
  const mockCallback = jest.fn();

  const div = document.createElement('div');
  ReactDOM.render(<LogonComponent onLogonRequest={mockCallback} />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('renders like the last time (snapshots)', () => {

  const mockCallback = jest.fn();

  // const cb = (u:string,p:string) => { return; };
  const wrapper =  Enzyme.mount(<LogonComponent onLogonRequest={mockCallback} />);

  expect(toJson(wrapper)).toMatchSnapshot();

  // click logon without entering anything 
  wrapper.find("#logonButton").simulate("click");
  expect(toJson(wrapper)).toMatchSnapshot();
  expect(mockCallback).toBeCalledWith("", "");

  // click logon with entering someting
  wrapper.find("#username").simulate("change", { target: { value: 'user' } });
  wrapper.find("#password").simulate("change", { target: { value: 'password' } });
  wrapper.find("#logonButton").simulate("click");

  expect(toJson(wrapper)).toMatchSnapshot();
  expect(mockCallback).toBeCalledWith("user", "password");

});
