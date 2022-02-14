import React from 'react';
import { render } from '@testing-library/react';
import Home, { groupProgramIntoPage } from './Home';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders home', () => {
  const { container } = render(<Router><Home /></Router>);
  expect(container.getElementsByClassName('home').length).toBe(1);
});

test('home renders carousel', () => {
  const home = render(<Router><Home /></Router>);
  expect(home.getByTestId("carousel")).toBeInTheDocument();
});

test('groupProgramIntoPage to group array into N array', () => {
  let arr = [1,2,3,4,5,6,7,8,9]
  let result= groupProgramIntoPage(arr,6)
  expect(result).toStrictEqual([[1,2,3,4,5,6],[7,8,9]])
});
