import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { handleInitialData } from "../actions/shared";
import { withRouter } from "react-router-dom";
import Dashboard from "./Dashboard";
import Leaderboard from "./Leaderboard";
import NewQuestion from "./NewQuestion";
import LogIn from "./LogIn";
import QuestionPage from "./QuestionPage";
import NavComp from "./Nav";
import PrivateRoute from "./PrivateRoute";
import AccessDenied from "./AccessDenied";
import "../App.css";
import LoadingBar from 'react-redux-loading-bar'

class App extends Component {
  componentDidMount() {
    const { dispatch, location } = this.props;
    dispatch(handleInitialData(location.pathname));
  }
  render() {
    const { user, authedUser } = this.props;
    console.log(process.env.PUBLIC_URL)
    return (
      <div>
        <LoadingBar style={{ 
          position: "fixed", 
          zIndex: "90000" }} />
        {user ? (
          <NavComp history={this.props.history} />
        ) : (
          <Route exact path={"/would-you-rather"} component={LogIn} />
        )}
        <div className="dashboard">
          <Switch>
            <PrivateRoute
              authedUser={authedUser}
              exact
              path={"/would-you-rather"}
              component={Dashboard}
            />
            <PrivateRoute
              authedUser={authedUser}
              path="/would-you-rather/add"
              component={NewQuestion}
            />
            <PrivateRoute
              authedUser={authedUser}
              path="/would-you-rather/leaderboard"
              component={Leaderboard}
            />
            <PrivateRoute
              authedUser={authedUser}
              path="/would-you-rather/questions/:id"
              component={QuestionPage}
            />
            <Route location={this.props.location} component={AccessDenied} />
          </Switch>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  const user = users[authedUser];
  return {
    user,
    authedUser
  };
}

export default withRouter(connect(mapStateToProps)(App));
