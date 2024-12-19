import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import Home from './components/Home';
import AuthProvider from './providers/AuthProvider';

import ErrorPage from './components/ErrorPage';
import Login from './components/Login';
import Register from './components/Register';
import Estates from './components/Estates';
import Contact from './components/Contact';
import Profile from './components/Profile';
import UpdateProfile from './components/UpdateProfile';

import PrivateRoute from './routes/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/estates',
        element: <Estates></Estates>
      },
      {
        path: '/contact',
        element: <PrivateRoute> <Contact></Contact> </PrivateRoute>
      },
      {
        path: '/profile',
        element: <PrivateRoute> <Profile></Profile> </PrivateRoute>
      },
      {
        path: '/update',
        element: <PrivateRoute> <UpdateProfile></UpdateProfile> </PrivateRoute>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
