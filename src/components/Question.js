import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Card, CardBody, Button } from "reactstrap";
import UserInfo from "./UserInfo";
import QuestionInfo from "./QuestionInfo";

class Question extends Component {
  render() {
    const { answerCheck, qid } = this.props;
    return (
      <div>
        <Card className="card">
          <UserInfo qid={qid} />
        <CardBody>
          <QuestionInfo qid={qid} />
          <Link to={`/questions/${qid}`}>
            <Button color={answerCheck ? "info" : "primary"} size="md" block>
              {answerCheck ? "View Question" : "Answer Question"}
            </Button>
          </Link>
          </CardBody>
        </Card>
      </div>
    );
  }
}

function mapStateToProps({ questions, authedUser, users }, { qid }) {
  const question = questions[qid];
  const author = users[question.author].name;
  const user = users[question.author];
  const answers = Object.keys(users[authedUser].answers);
  const answerCheck = answers.includes(qid);
  return {
    question,
    answerCheck,
    user,
    author
  };
}

export default connect(mapStateToProps)(Question);
