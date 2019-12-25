import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Form,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button,
  Label,
  FormText,
  FormFeedback
} from "reactstrap";
import avatar from "../images/avatar.jpg";
import { handleAddUser } from "../actions/shared";

class SignUp extends Component {
  state = {
    id: "",
    firstname: "",
    lastname: "",
    avatarURL: ""
  };
  handleId = e => {
    const input = e.target.value.trim();
    const formattedUserName = input.toLowerCase();
    this.setState({ id: formattedUserName });
  };
  handleFirstName = e => {
    const input = e.target.value.trim();
    const formattedFirstName = input.replace(/^\w/, x => x.toUpperCase());
    this.setState({ firstname: formattedFirstName });
  };
  handleLastName = e => {
    const input = e.target.value.trim();
    const formattedLastName = input.replace(/^\w/, x => x.toUpperCase());
    this.setState({ lastname: formattedLastName });
  };
  handleAvatarURL = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      this.setState({ avatarURL: reader.result });
    };
  };
  handleSubmit = e => {
    e.preventDefault();
    const { dispatch } = this.props;
    const { id, firstname, lastname, avatarURL } = this.state;
    const name = firstname + " " + lastname;
    dispatch(handleAddUser(id, name, avatarURL));
  };

  render() {
    const { id, firstname, lastname, avatarURL } = this.state;
    const { users, loadingBar } = this.props;
    return (
      <Form onSubmit={this.handleSubmit}>
        <div className="justify-flex">
          <div
            className="user-icon"
            style={{
              width: "150px",
              height: "150px",
              backgroundImage: `url(${avatarURL === "" ? avatar : avatarURL})`
            }}
          />
          <br />
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>@</InputGroupText>
            </InputGroupAddon>
            <Input
              type="text"
              placeholder="Username"
              onChange={e => this.handleId(e)}
              invalid={users.includes(id)}
            />
            <FormFeedback>
              Username "{id}" is already taken.
            </FormFeedback>
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>First Name</InputGroupText>
            </InputGroupAddon>
            <Input
              type="text"
              placeholder="First Name"
              onChange={e => this.handleFirstName(e)}
            />
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Last Name</InputGroupText>
            </InputGroupAddon>
            <Input
              type="text"
              placeholder="Last Name"
              onChange={e => this.handleLastName(e)}
            />
          </InputGroup>
          <br />
          <center>
            <Label for="avatar">Upload Avatar Image</Label>
            <Input
              type="file"
              ref="file"
              name="avatar"
              accept="image/png, image/jpeg"
              onChange={e => this.handleAvatarURL(e)}
            />
          </center>
          <FormText>Supported file types: JPEG, PNG</FormText>
        </div>
        <br />
        <Button
          disabled={
            id === "" ||
            firstname === "" ||
            lastname === "" ||
            avatarURL === "" ||
            users.includes(id) ||
            loadingBar.default === 1
          }
          type="submit"
          color="success"
          block
        >
          Create Account
        </Button>
      </Form>
    );
  }
}

function mapStateToProps({ users, loadingBar }) {
  return {
    users: Object.keys(users),
    loadingBar
  };
}

export default connect(mapStateToProps)(SignUp);