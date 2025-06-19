import { render, screen } from '@testing-library/react';
import { Tag } from './Tag';
import '@testing-library/jest-dom';

describe('Tag', () => {
  it('renders the tag text', () => {
    render(<Tag tag="TypeScript" />);
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });
});
