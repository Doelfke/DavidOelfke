import { render, screen, fireEvent } from '@testing-library/react';
import Navigation from './Navigation';
import '@testing-library/jest-dom';
import styles from './Navigation.module.scss';

describe('Navigation', () => {
  it('renders all navigation links', () => {
    render(<Navigation />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About Me')).toBeInTheDocument();
    expect(screen.getByText('My Work')).toBeInTheDocument();
    expect(screen.getByText('My Education')).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();
  });

  it('menu has open class only when open', () => {
    render(<Navigation />);
    const button = screen.getByLabelText('Toggle navigation menu');

    fireEvent.click(button);
    const menu = document.querySelector(`[class*="${styles.navigationItems}"]`);
    expect(menu).toHaveClass(styles.navigationItemsOpen);

    fireEvent.click(button);
    expect(menu).not.toHaveClass(styles.navigationItemsOpen);
  });
});
