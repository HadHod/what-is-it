import React, { ReactElement } from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './pages/Layout';
import Error404Page from './pages/Error404Page';
import routes from './routes';

function App(): ReactElement {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <Error404Page />,
      children: routes,
    },
  ])

  return <RouterProvider router={router} />;
}

export default App;
