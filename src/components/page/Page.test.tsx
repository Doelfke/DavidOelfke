import { render, screen } from '@testing-library/react';
import { Page } from './Page';
import '@testing-library/jest-dom';

describe('Page', () => {
  it('renders the page title', () => {
    render(<Page title="Test Title">Content</Page>);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('renders children', () => {
    render(<Page title="Test Title"><div data-testid="child">Child Content</div></Page>);
    expect(screen.getByTestId('child')).toHaveTextContent('Child Content');
  });
});
