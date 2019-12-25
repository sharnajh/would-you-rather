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
  Alert,
  Modal,
  ModalHeader,
  ModalBody
} from "reactstrap";
import avatar from "../images/avatar.jpg";
import SignUp from "./SignUp";


class LogIn extends Component {
  state = {
    selectedUser: "",
    dropdownOpen: false,
    modal: false
  };
  handleSignIn(e) {
    e.preventDefault();
    const { dispatch, callback, history } = this.props;
    dispatch(setAuthedUser(this.state.selectedUser));
    if (callback) {
      history.push(callback);
    }
  }
  setSignIn(e) {
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

  toggleModal = () => {
    this.setState(prev => ({
      modal: !prev.modal
    }));
  };
  render() {
    const { users, callback } = this.props;
    const { selectedUser, modal } = this.state;
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
              <Alert color="danger" className="text-center">
                Please log in first before attempting to view page at "
                {callback}"
              </Alert>
            )}
            <div className="justify-flex">
              <div
                className="user-icon"
                style={{
                  backgroundImage: `url(${
                    this.state.selectedUser === ""
                      ? avatar
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
            <Form onSubmit={e => this.handleSignIn(e)}>
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
                            onClick={e => this.setSignIn(e)}
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
            <p className="text-center">or</p>
            <div>
              <Button color="success" onClick={this.toggleModal} block>
                Sign Up
              </Button>
              <Modal
                isOpen={modal}
                modalTransition={{ timeout: 100 }}
                backdropTransition={{ timeout: 100 }}
                toggle={this.toggleModal}
              >
                <ModalHeader toggle={this.toggleModal}>Sign Up</ModalHeader>
                <ModalBody>
                  <SignUp />
                </ModalBody>
              </Modal>
            </div>
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