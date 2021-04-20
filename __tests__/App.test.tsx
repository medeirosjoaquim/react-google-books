import React from 'react'
import { render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import App from '../src/App'


test('App title must be set', async () => {
  render(<App />)
  const expectTitle = ''
  await waitFor(() => expect(document.title).toEqual(expectTitle));
});

test('App should render main components', () => {
  render(<App />)
  
});
