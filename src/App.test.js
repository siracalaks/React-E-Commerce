import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/reducer/store';
import App from './App';

test('renders navbar brand', () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
  const brandElement = screen.getByText(/LA COLLECTION/i);
  expect(brandElement).toBeInTheDocument();
});
