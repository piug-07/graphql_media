import React, { useContext } from 'react';
import { Route, useNavigate } from 'react-router-dom';  // Removed unused 'Outlet' import

import { AuthContext } from '../context/auth';

function AuthRoute({ element: Element, ...rest }) {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  if (user) {
    // If the user is authenticated, redirect to a different route
    navigate('/');
    return null; // or you can return a loading indicator, for example
  }

  return <Route {...rest} element={<Element />} />;
}

export default AuthRoute;
