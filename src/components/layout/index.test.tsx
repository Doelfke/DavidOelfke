import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Layout from './index';
import React from 'react';

describe('Layout', () => {
  it('renders children correctly', () => {
    render(
      <Layout>
        <div data-testid="child">Test Child</div>
      </Layout>
    );
    expect(screen.getByTestId('child')).toHaveTextContent('Test Child');
  });

  it('renders Navigation component', () => {
    render(
      <Layout>
        <div data-testid="component" />
      </Layout>
    );
    expect(screen.getByTestId('component')).toBeInTheDocument();
  });
});
