import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => (
        auth.isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        ))
      }
    />
  );
};





PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state, props) => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(PrivateRoute);
