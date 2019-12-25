import React, { Component } from "react";
import { connect } from "react-redux";
import { CardTitle } from "reactstrap";

class QuestionInfo extends Component {
  render() {
    const { question } = this.props;
    return (
      <div>
        <CardTitle className="question">
          Would you rather {question.optionOne.text} or{" "}
          {question.optionTwo.text}?
        </CardTitle>
      </div>
    );
  }
}

function mapStateToProps({ questions }, { qid }) {
  const question = questions[qid];

  return {
    question
  };
}

export default connect(mapStateToProps)(QuestionInfo);
