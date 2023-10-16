import React, { useContext } from 'react';
import { Route, useNavigate  } from 'react-router-dom';

import { AuthContext } from '../context/auth';

function AuthRoute({ component: Component, ...rest }) {
    const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? navigate('/') : <Component {...props} />
      }
    />
  );
}

export default AuthRoute;
