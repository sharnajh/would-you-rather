import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import AccessDenied from "./AccessDenied";
import { Card, CardBody } from "reactstrap";
import UserInfo from "./UserInfo";
import QuestionInfo from "./QuestionInfo";
import Unanswered from "./Unanswered";
import Answered from "./Answered";

class QuestionPage extends Component {
  render() {
    const { question, answerCheck, qid } = this.props;
    if (question === undefined) {
      return <Route component={AccessDenied} />;
    }
    return (
      <div className="dashboard">
        <Card className="card">
          <UserInfo qid={qid} />
          <CardBody>
            <QuestionInfo qid={qid} />

            {answerCheck ? (
              <Answered question={question} />
            ) : (
              <Unanswered question={question} />
            )}
          </CardBody>
        </Card>
      </div>
    );
  }
}

function mapStateToProps({ questions, authedUser, users }, { match }) {
  const { id } = match.params;
  const qid = id;
  const question = questions[qid];
  const user = users[authedUser];
  const answers = user.answers;
  const answerCheck = Object.keys(answers).includes(qid);
  return {
    question,
    user,
    qid,
    answerCheck
  };
}

export default connect(mapStateToProps)(QuestionPage);
