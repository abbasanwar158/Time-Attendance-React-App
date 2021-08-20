import React, { useContext, useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useHistory } from "react-router-dom";

/**protected routes redirects to login page if not logged in */
const ProtectedRoute = ({ children, ...routeProps }) => {

  const history = useHistory();

  return (
    <Route
      {...routeProps}
      render={() => {
        if (localStorage.getItem('username') == null) {
          history.push('/login')
        }
        else {
          return children
        }
      }}
    />
  );
};

export default ProtectedRoute;
