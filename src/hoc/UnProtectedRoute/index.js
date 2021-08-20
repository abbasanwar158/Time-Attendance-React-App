import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useHistory } from "react-router-dom";

/**unprotected routes redirects to root(/) if  logged in */
const UnProtectedRoute = ({ children, ...routeProps }) => {

  const history = useHistory();

  return (
    <Route
      {...routeProps}
      render={() => {
        if (localStorage.getItem('username') != null) {
          history.push('/dashboard')
        }
        else {
          return children
        }
      }}
    />
  );
};

export default UnProtectedRoute;
