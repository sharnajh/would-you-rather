import React, { Component } from "react";
import { connect } from "react-redux"
import { Link, Redirect } from "react-router-dom";

class AccessDenied extends Component {
  render() {
    if (this.props.authedUser === null) {
      return <Redirect to="/" />
    }
    return (
      <div className="text-center">
        <h2>404: Page Not Found.</h2>
        <h3>The link you are attempting to visit does not exist.</h3>
        <Link to="/">Return to dashboard.</Link>
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(AccessDenied);
