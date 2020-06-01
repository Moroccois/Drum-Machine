import React from 'react';
import { render } from '@testing-library/react';
import Drum from './drum-machine';

test('renders learn react link', () => {
  const { getByText } = render(<DrumDisplay />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
