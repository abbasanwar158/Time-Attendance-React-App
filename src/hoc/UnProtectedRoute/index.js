import React, { useContext } from 'react';
import { RootContext } from '../../context/RootContext';
import { Route, Redirect } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import Login from '../../containers/Login';


/**unprotected routes redirects to root(/) if  logged in */
const UnProtectedRoute = ({ children, ...routeProps }) => {

  const { currentUser } = useContext(RootContext);
  const history = useHistory();

  return (
    <Route
      {...routeProps}
      render={() => {
        if (currentUser == null) {
          return <Login />;
        }
        else {
          return children;
        }
      }}
    />
  );
};

export default UnProtectedRoute;
