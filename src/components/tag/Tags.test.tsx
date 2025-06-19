import { render, screen } from '@testing-library/react';
import { Tags } from './Tags';
import '@testing-library/jest-dom';

describe('Tags', () => {
  it('renders all tags', () => {
    const tags = ['React', 'TypeScript', 'Jest'];
    render(<Tags tags={tags} />);
    tags.forEach((tag) => {
      expect(screen.getByText(tag)).toBeInTheDocument();
    });
  });
});
