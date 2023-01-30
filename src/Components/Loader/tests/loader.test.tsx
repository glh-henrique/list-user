import React from 'react';
import { render, screen } from '@testing-library/react';
import Loader from '..';

describe('Loader', () => {
  it('should render a Loader', () => {
    render(<Loader />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
