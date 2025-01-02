import { render, screen } from '@testing-library/react';
import Home from './page';

describe('Home', () => {
  it('renders the correct list item text', () => {
    render(<Home />);
    expect(screen.getByText(/Get started/i)).toBeInTheDocument();
  });
});
