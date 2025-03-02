import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Auth } from './components/Auth';
import { ProtectedRoute } from './components/ProtectedRoute';
import { UserDashboard } from './components/UserDashboard';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';
import { UnauthorizedPage } from './pages/UnauthorizedPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'services',
        element: <Services />,
      },
      {
        path: 'blog',
        element: <Blog />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'auth',
        element: <Auth />,
      },
      {
        path: 'dashboard',
        element: (
          <ProtectedRoute>
            <UserDashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: 'unauthorized',
        element: <UnauthorizedPage />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
