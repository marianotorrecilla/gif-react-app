import { render } from '@testing-library/react';
import App from './App';

test('renders without crashing', async () => {
  const { findByText } = render(<App />);
  const titleApp = await findByText(/gif react app/i);
  expect(titleApp).toBeInTheDocument();
});

