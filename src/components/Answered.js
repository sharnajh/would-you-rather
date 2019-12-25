import React, { Component } from "react";
import { connect } from "react-redux";
import { Table, Badge, CardTitle, Progress } from "reactstrap";

class Answered extends Component {
  render() {
    const {
      question,
      totalVotes,
      optionOnePerc,
      authedUser,
      totalOptionOneVotes,
      optionTwoPerc,
      users,
      totalOptionTwoVotes
    } = this.props;
    return (
      <div>
        <div className="text-left">
          <CardTitle className="text-center">
            {totalVotes} Total Votes
          </CardTitle>
          {question.optionOne.text} ({optionOnePerc}%){" "}
          {question.optionOne.votes.includes(authedUser) && (
            <Badge color="success">You Voted</Badge>
          )}
        </div>
        <Progress color="success" value={optionOnePerc} />
        <Table size="sm" hover>
          <thead>
            <tr>
              <th>{totalOptionOneVotes} Votes</th>
            </tr>
          </thead>
          <tbody>
            {question.optionOne.votes.map((user, id) => (
              <tr key={id}>
                <td className="flex">
                  <div
                    className="user-icon"
                    style={{
                      backgroundImage: `url(${users[user].avatarURL})`,
                      width: "25px",
                      height: "25px"
                    }}
                  />
                  {user === authedUser ? "You" : users[user].name} voted
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <div className="text-left">
          {question.optionTwo.text} ({optionTwoPerc}%){" "}
          {question.optionTwo.votes.includes(authedUser) && (
            <Badge color="success">You Voted</Badge>
          )}
        </div>
        <Progress color="success" value={optionTwoPerc} />
        <Table size="sm" hover>
          <thead>
            <tr>
              <th>{totalOptionTwoVotes} Votes</th>
            </tr>
          </thead>
          <tbody>
            {question.optionTwo.votes.map((user, id) => (
              <tr key={id}>
                <td className="flex">
                  <div
                    className="user-icon"
                    style={{
                      backgroundImage: `url(${users[user].avatarURL})`,
                      width: "25px",
                      height: "25px"
                    }}
                  />
                  {user === authedUser ? "You" : users[user].name} voted
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users }, { question }) {
  const totalOptionOneVotes = question.optionOne.votes.length;
  const totalOptionTwoVotes = question.optionTwo.votes.length;
  const totalVotes = totalOptionOneVotes + totalOptionTwoVotes;
  return {
    question,
    authedUser,
    users,
    totalOptionOneVotes,
    totalOptionTwoVotes,
    totalVotes,
    optionOnePerc: ((100 * totalOptionOneVotes) / totalVotes).toFixed(),
    optionTwoPerc: ((100 * totalOptionTwoVotes) / totalVotes).toFixed()
  };
}

export default connect(mapStateToProps)(Answered);
