import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '..';

describe('Header', () => {
  it('should render a Header', () => {
    render(<Header />);
    expect(screen.getByText('Search')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});