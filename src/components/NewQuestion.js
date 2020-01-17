import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Card,
  Button,
  Form,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  CardBody,
  CardTitle,
  CardSubtitle,
  Badge
} from "reactstrap";
import UserInfo from "./UserInfo";
import { handleAddQuestion } from "../actions/shared"

class NewQuestion extends Component {
  state = {
    optionOneText: "",
    optionTwoText: ""
  };

  handleOptionOneChange = e => {
    const text = e.target.value;
    this.setState(() => ({
      optionOneText: text
    }));
  };

  handleOptionTwoChange = e => {
    const text = e.target.value;
    this.setState(() => ({
      optionTwoText: text
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    const { optionOneText, optionTwoText } = this.state;
    const { authedUser, dispatch, history } = this.props;
    const author = authedUser;
    dispatch(handleAddQuestion(optionOneText, optionTwoText, author)).then(
      res => {
        this.setState(() => ({
          optionOneText: "",
          optionTwoText: ""
        }));
        history.push(`/would-you-rather`);
      }
    );
  };
  render() {
    const { optionOneText, optionTwoText } = this.state;
    const { loadingBar } = this.props
    return (
      <Form onSubmit={this.handleSubmit}>
        <Card>
          <UserInfo />
          <CardBody className="justify-flex">
            <CardTitle>Create a new question:</CardTitle>
            <CardSubtitle>
              Would you rather{" "}
              <Badge>
                {optionOneText === "" ? "Option One" : optionOneText}
              </Badge>{" "}
              or{" "}
              <Badge>
                {optionTwoText === "" ? "Option Two" : optionTwoText}
              </Badge>
              ?
            </CardSubtitle>
            <InputGroup className="margin">
              <InputGroupAddon addonType="prepend">
                <InputGroupText>Option One</InputGroupText>
              </InputGroupAddon>
              <Input
                type="text"
                onChange={this.handleOptionOneChange}
                value={optionOneText}
                ref={optionOneText}
                placeholder="Example: 'float like a butterfly'"
              />
            </InputGroup>

            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>Option Two</InputGroupText>
              </InputGroupAddon>
              <Input
                type="text"
                onChange={this.handleOptionTwoChange}
                value={optionTwoText}
                ref={optionTwoText}
                placeholder="Example: 'sting like a bee'"
              />
            </InputGroup>

            <Button
              disabled={optionTwoText === "" || optionOneText === "" || loadingBar.default === 1}
              type="submit"
              className="margin"
              color="success"
              size="md"
              block
            >
              Submit
            </Button>
          </CardBody>
        </Card>
      </Form>
    );
  }
}

function mapStateToProps({ authedUser, loadingBar }) {
  return {
    authedUser,
    loadingBar
  };
}

export default connect(mapStateToProps)(NewQuestion);
