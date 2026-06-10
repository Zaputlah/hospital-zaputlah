import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders the hospital homepage', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByRole('heading', { name: /perawatan yang tepat/i })).toBeInTheDocument();
});
