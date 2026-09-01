// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CryptoNodePlus title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CryptoNodePlus/i);
    expect(titleElement).toBeInTheDocument();
});
