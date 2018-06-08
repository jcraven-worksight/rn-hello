import React from 'react';
import App from './App';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});

it('it fails', () => {
  const p: number = 1;
  expect(p).toBeNaN();
});

it('1 is truthy', () => {
  const p: number = 0;
  expect(p).toBeTruthy();
});
