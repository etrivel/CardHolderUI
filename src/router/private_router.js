import React from 'react';
import {
  Redirect,
  Route,
} from "react-router-dom";
import { localStorageKeys } from '../utils';
import routes from './routes';

const PrivateRoute = ({ children, ...rest }) => {

  const isAuthenticated = () => {
    if (localStorage.getItem(localStorageKeys.auth_token)) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated() ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: routes.login,
                state: { from: location }
              }}
            />
          )
      }
    />
  );
}

export default PrivateRoute;
