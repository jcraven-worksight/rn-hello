import React from 'react';
import App from './App';

import renderer from 'react-test-renderer';

// https://github.com/apollographql/react-apollo/issues/892
// tslint:disable-next-line:no-empty
jest.mock('react-dom/server', () => {}, {virtual: true});

it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});

it('it fails', () => {
  const p: number = 3;
  expect(p).toBeGreaterThan(2);
});

it('1 is truthy', () => {
  const p: number = 1;
  expect(p).toBeTruthy();
});
