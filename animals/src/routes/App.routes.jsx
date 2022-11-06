import { createBrowserRouter } from 'react-router-dom';
import { HomePage, Login } from '../pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);
