import React, { Component } from "react";
import { connect } from "react-redux";
import { FormGroup, Label, Input, Button } from "reactstrap";
import { handleAnswerQuestion } from "../actions/shared";

class Unanswered extends Component {
  state = {
    selectedOption: ""
  };

  handleSelectOption = e => {
    this.setState({
      selectedOption: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { dispatch, question, authedUser } = this.props;
    const qid = question.id
    const answer = this.state.selectedOption;
    dispatch(handleAnswerQuestion({ authedUser, qid, answer }));
  };

  render() {
    const { selectedOption } = this.state;
    const { question } = this.props;
    return (
      <div>
        <FormGroup tag="fieldset">
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="radio1"
                onChange={this.handleSelectOption}
                value="optionOne"
              />{" "}
              {question.optionOne.text}
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="radio1"
                onChange={this.handleSelectOption}
                value="optionTwo"
              />{" "}
              {question.optionTwo.text}
            </Label>
          </FormGroup>
        </FormGroup>

        <Button
          color="success"
          disabled={selectedOption === ""}
          onClick={this.handleSubmit}
          size="md"
          block
        >
          Submit Answer
        </Button>
      </div>
    );
  }
}

export default connect()(Unanswered);
