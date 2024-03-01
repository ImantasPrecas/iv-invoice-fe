import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';

/** Pages */
import ErrorPage from './error-page.tsx';
import AuthenticationPage from './routes/AuthenticationPage.tsx';
import DashboardPage from './routes/DashboardPage.tsx';
/** Actions */
import { RegisterAction } from './actions/registerAction.ts';
import { loginAction } from './actions/loginAction.ts';
/** Loaders */
import { loginLoader } from './loaders/loginLoader.tsx';
/** Layouts */
import Layout from './components/Layout.tsx';
/** Functions */
import { authProvider, requireAuth } from './lib/utils.ts';
import InvoicesPage from './routes/InvoicesPage.tsx';
import ClientsPage from './routes/ClientsPage.tsx';




const routes = [
  {
    id: 'root',
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    loader: async () => {
      await requireAuth()
      return {session: authProvider.session, userName: authProvider.userName}
    },
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: '/invoices',
        element: <InvoicesPage />,
      },
      {
        path: '/clients',
        element: <ClientsPage />,
      },
    ],
  },
  {
    path: 'login',
    element: <AuthenticationPage />,
    errorElement: <ErrorPage />,
    action: loginAction,
    loader: loginLoader,
  },
  {
    path: 'register',
    action: RegisterAction,
    element: <AuthenticationPage />,
    errorElement: <ErrorPage />,
  },
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
