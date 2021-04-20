import React from 'react'
import { render, waitFor, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect'

import App from '../src/App'

test('App should render', () => {
  render( <Router><App /></Router>)
});

test('App title must be set', async () => {
  render( <Router><App /></Router>)
  const expectTitle = 'React Google Books'
  await waitFor(() => expect(document.title).toEqual(expectTitle));
});
