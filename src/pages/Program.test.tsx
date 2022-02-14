import React from 'react';
import { render } from '@testing-library/react';
import Program from './Program';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders program', () => {
  const { container } = render(<Router><Program /></Router>);
  expect(container.getElementsByClassName('program').length).toBe(1);
});

test('program renders movie', () => {
  const home = render(<Router><Program /></Router>);
  expect(home.getByTestId("movie")).toBeInTheDocument();
});
