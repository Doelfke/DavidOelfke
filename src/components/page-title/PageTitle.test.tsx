import { render, screen } from '@testing-library/react';
import { PageTitle } from './PageTitle';
import '@testing-library/jest-dom';

describe('PageTitle', () => {
  it('renders the title in an h1', () => {
    render(<PageTitle title="Hello World" />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('Hello World');
  });
});
