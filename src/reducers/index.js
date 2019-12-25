import { combineReducers } from "redux";
import questions from "./questions";
import users from "./users";
import authedUser from "./authedUser";
import callback from "./callback";

export default combineReducers({
  authedUser,
  users,
  questions,
  callback
});
