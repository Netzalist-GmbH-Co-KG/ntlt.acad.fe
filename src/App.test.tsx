import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { create as createTestRenderer } from 'react-test-renderer';
import App from './App';

it('renders without crashing (Smoke Test)', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders like the last time (snapshots)', () => {
  const component = createTestRenderer(
    <App />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});