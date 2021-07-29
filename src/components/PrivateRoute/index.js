import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

function PrivateRoute({ exact, path, component: Component, auth }) {
  return (
    <Route exact={exact} path={path}>
      {auth ? <Component /> : <Redirect to='/login' />}
    </Route>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state?.students?.auth,
  };
};

export default connect(mapStateToProps, null)(PrivateRoute);
