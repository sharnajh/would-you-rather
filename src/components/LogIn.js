import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import {
  Card,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Form,
  CardBody,
  CardHeader,
  Alert
} from "reactstrap";

class LogIn extends Component {
  state = {
    selectedUser: "",
    dropdownOpen: false
  };
  handleNewUser(e) {
    e.preventDefault();
    const { dispatch, callback, history } = this.props;
    dispatch(setAuthedUser(this.state.selectedUser));
    if (callback) {
      history.push(callback);
    }
  }
  setNewUser(e) {
    e.preventDefault();
    this.setState({
      selectedUser: e.target.value
    });
  }
  toggle = () => {
    this.setState(prev => ({
      dropdownOpen: !prev.dropdownOpen
    }));
  };
  render() {
    const { users, callback } = this.props;
    const { selectedUser } = this.state;
    return (
      <div className="dashboard">
        <Card>
          <CardHeader>
            <div className="text-center">
              <h2>Would You Rather?</h2>
            </div>
          </CardHeader>
          <CardBody>
            {callback !== null && callback !== "/" && (
              <Alert color="warning" className="text-center">
                Please log in first before attempting to view page at "{callback}"
              </Alert>
            )}
            <div className="justify-flex">
              <div
                className="user-icon"
                style={{
                  backgroundImage: `url(${
                    this.state.selectedUser === ""
                      ? "https://exelord.com/ember-initials/images/default-d5f51047d8bd6327ec4a74361a7aae7f.jpg"
                      : users[this.state.selectedUser].avatarURL
                  })`,
                  width: "150px",
                  height: "150px"
                }}
              />
              <h4>
                {this.state.selectedUser === "" ? (
                  <br />
                ) : (
                  users[this.state.selectedUser].name
                )}
              </h4>
            </div>
            <Form onSubmit={e => this.handleNewUser(e)}>
              <Dropdown
                group
                isOpen={this.state.dropdownOpen}
                size="md"
                toggle={this.toggle}
                className="btn-block"
              >
                <DropdownToggle caret color="info">
                  Select a user
                </DropdownToggle>
                <DropdownMenu className="btn-block">
                  {users
                    ? Object.keys(users).map(username => (
                        <div key={username}>
                          <DropdownItem
                            onClick={e => this.setNewUser(e)}
                            value={username}
                          >
                            {users[username].name}
                          </DropdownItem>
                        </div>
                      ))
                    : null}
                </DropdownMenu>
              </Dropdown>
              <Button
                disabled={selectedUser === ""}
                color="success"
                size="md"
                type="submit"
                block
              >
                Log In
              </Button>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}

function mapStateToProps({ users, callback }) {
  return {
    users,
    callback
  };
}

export default connect(mapStateToProps)(LogIn);
