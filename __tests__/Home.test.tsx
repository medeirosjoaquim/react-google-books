import React from 'react'
import { render, screen, getByText } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect'

import App from '../src/App'

test('App should render home components', () => {
  render( <Router><App /></Router>)
  const home = screen.getByTestId('home')
  const greetings = screen.getByTestId('greetings')
  const currentlyReading = screen.getByTestId('currently-reading')
  const review = screen.getByTestId('review')
  expect(home).toBeInTheDocument()
  expect(greetings).toBeInTheDocument()
  expect(currentlyReading).toBeInTheDocument()
  expect(review).toBeInTheDocument()
});
test('Home section titles should be on screen', () => {
  const { getByText } = render( <Router><App /></Router>)
  expect(getByText('Discover new book')).toBeInTheDocument()
  expect(getByText('Currently Reading')).toBeInTheDocument()
  expect(getByText('Reviews of the day')).toBeInTheDocument()

});

