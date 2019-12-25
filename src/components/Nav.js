import React, { Component } from "react";
import { connect } from "react-redux";
import { handleUninitializeData } from "../actions/shared";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarToggler,
  Collapse,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class NavComp extends Component {
  state = {
    isOpen: false
  };
  handleLogOut = () => {
    const { dispatch } = this.props;
    dispatch(handleUninitializeData());
  };
  handleHistory = link => {
    this.props.history.push(link);
  };
  toggleNavbar = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    const { user } = this.props;
    return (
      <div>
        <Navbar color="light" light expand="lg">
          <NavbarBrand onClick={() => this.handleHistory("/")}>Would You Rather?</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem onClick={() => this.handleHistory("/")}>
                <NavLink>Dashboard</NavLink>
              </NavItem>
              <NavItem onClick={() => this.handleHistory("/leaderboard")}>
                <NavLink>Leaderboard</NavLink>
              </NavItem>
            </Nav>

            <UncontrolledDropdown className="flex">
              <div
                className="user-icon"
                style={{
                  backgroundImage: `url(${user.avatarURL})`,
                  width: "30px",
                  height: "30px",
                  marginRight: "-10px"
                }}
              />
              <DropdownToggle nav caret>
                {user.name}
              </DropdownToggle>

              <DropdownMenu right>
                <DropdownItem>
                  <NavItem onClick={() => this.handleHistory("/add")}>
                    <NavLink>Create Question</NavLink>
                  </NavItem>
                </DropdownItem>

                <DropdownItem divider />
                <DropdownItem onClick={this.handleLogOut} value={null}>
                  Logout
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  const user = users[authedUser];
  return {
    user
  };
}

export default connect(mapStateToProps)(NavComp);
