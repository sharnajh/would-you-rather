import React, { Component } from "react";
import { connect } from "react-redux";
import { CardHeader, Badge } from "reactstrap";


class UserInfo extends Component {
  render() {
    const {
      user,
      name,
      username,
      score
    } = this.props;

    return (
      <CardHeader className="flex">
        <div
          className="user-icon"
          style={{
            backgroundImage: `url(${user.avatarURL})`
          }}
        />
        <div className="user-info">
          {username} @{name} 
          <br />
          <Badge color="info">Score: {score}</Badge>{" "}
          
        </div>
      </CardHeader>
    );
  }
}

function mapStateToProps({ users, questions, authedUser }, { qid }) {
  const question = questions[qid];
  const user = users[qid ? question.author : authedUser];
  const name = qid ? question.author : authedUser;
  const username = users[qid ? question.author : authedUser].name;
  const answersLength = Object.keys(user.answers).length;
  const questionsLength = Object.keys(user.questions).length;
  const score = answersLength + questionsLength;

  return {
    user,
    name,
    username,
    score,

    answersLength,
    questionsLength
  };
}

export default connect(mapStateToProps)(UserInfo);
