import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";
import PropTypes from "prop-types";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import classnames from "classnames";

class Dashboard extends Component {
  state = {
    activeTab: "unanswered"
  };

  setActiveTab = tab => {
    this.setState(() => ({
      activeTab: tab
    }));
  };

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };
  render() {
    const { answered, unanswered, yours, user } = this.props;
    const { activeTab } = this.state;
    const toggle = tab => {
      if (activeTab !== tab) this.setActiveTab(tab);
    };
    return (
      <div className="dashboard">
        <h3 className="flex">
          <div
            className="user-icon"
            style={{
              backgroundImage: `url(${user.avatarURL})`,
              margin: "10px"
            }}
          />
          Hi {user ? user.name : null}!
        </h3>

        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "unanswered" })}
              onClick={() => toggle("unanswered")}
            >
              Unanswered Questions
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "answered" })}
              onClick={() => toggle("answered")}
            >
              Answered Questions
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "yours" })}
              onClick={() => toggle("yours")}
            >
              Your Questions
            </NavLink>
          </NavItem>
        </Nav>

        <TabContent activeTab={activeTab}>
          <TabPane tabId="unanswered">
            {unanswered.map(qid => (
              <Question qid={qid} key={qid} />
            ))}
          </TabPane>
          <TabPane tabId="answered">
            {answered.map(qid => (
              <Question qid={qid} key={qid} />
            ))}
          </TabPane>
          <TabPane tabId="yours">
            {yours.map(qid => (
              <Question qid={qid} key={qid} />
            ))}
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

function mapStateToProps({ questions, authedUser, users }) {
  const user = users[authedUser];
  const qids = Object.keys(questions);
  const yours = user.questions;
  const answers = Object.keys(user.answers);
  const answered = qids.filter(q => answers.includes(q));
  const unanswered = qids.filter(q => !answers.includes(q));
  return {
    user,
    answered: answered.sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
    unanswered: unanswered.sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
    yours: yours.sort((a, b) => questions[b].timestamp - questions[a].timestamp)
  };
}

export default connect(mapStateToProps)(Dashboard);
