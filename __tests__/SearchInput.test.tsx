import React from 'react'
import {render, screen, getByText, fireEvent} from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect'

import App from '../src/App'

test('Home section titles should be on screen', () => {
  const component = render( <Router><App /></Router>)
  const input = component.getByLabelText('search-input')
  fireEvent.change(input, { target: { value: 'hooked' } })
  const searchResults = screen.getByTestId('search-results')
  expect(searchResults).toBeInTheDocument()
});

