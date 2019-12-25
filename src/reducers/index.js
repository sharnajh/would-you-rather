import { combineReducers } from "redux";
import { loadingBarReducer } from 'react-redux-loading-bar'
import questions from "./questions";
import users from "./users";
import authedUser from "./authedUser";
import callback from "./callback";

export default combineReducers({
  loadingBar: loadingBarReducer,
  authedUser,
  users,
  questions,
  callback
});
