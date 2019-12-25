import React, { Component } from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";

class Leaderboard extends Component {
  render() {
    const { users, ids } = this.props;
    let i = 0;
    return (
      <div>
        <h3 className="text-center">Leaderboard</h3>

        <Table striped>
          <thead>
            <tr>
              <th>Ranking</th>
              <th>Avatar</th>
              <th>Username</th>
              <th>Name</th>
              <th>Answered</th>
              <th>Asked</th>
              <th>Score</th>
         </tr>
          </thead>
          <tbody>
            {ids.map(id => (
              <tr key={id}>
                <td>{(i += 1)}</td>
                <td className="flex">
                  <div
                    className="user-icon"
                    style={{
                      backgroundImage: `url(${users[id].avatarURL})`,
                      width: "30px",
                      height: "30px"
                    }}
                  />
                </td>
                <td>@{id}</td>
                <td>{users[id].name}</td>
                <td>{Object.keys(users[id].answers).length}</td>
                <td>{Object.keys(users[id].questions).length}</td>
                <td>
                  {Object.keys(users[id].answers).length +
                    Object.keys(users[id].questions).length}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    ids: Object.keys(users).sort(
      (a, b) =>
        Object.keys(users[b].answers).length +
        users[b].questions.length -
        (Object.keys(users[a].answers).length + users[a].questions.length)
    ),
    users
  };
}

export default connect(mapStateToProps)(Leaderboard);
