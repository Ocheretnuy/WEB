import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App.js';

module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-react',
  ],
};
describe('App', () => {
  it('should render the site title', () => {
    render(<App />);
    const siteTitle = screen.getByText(/Фільмотека/i);
    expect(siteTitle).toBeInTheDocument();
  });

  it('should render the sort select element', () => {
    render(<App />);
    const sortSelect = screen.getByLabelText(/Сортувати за/i);
    expect(sortSelect).toBeInTheDocument();
  });

  it('should render the search input element', () => {
    render(<App />);
    const searchInput = screen.getByPlaceholderText(/Введіть назву фільму, актору або режисера/i);
    expect(searchInput).toBeInTheDocument();
  });

});
