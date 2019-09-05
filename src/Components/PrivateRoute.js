import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({ component: Component, ...rest }) {
  var user = localStorage.getItem('accredited')
  return (
    <Route
      {...rest}
      render={props =>
        user === 'true' ? (
          <Component {...props} />
        ) : (

            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
      }
    />
  );
}