import { saveUser } from "../utils/api";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_ANSWER_TO_USER = "ADD_ANSWER_TO_USER";
export const ADD_QUESTION_TO_USER = "ADD_QUESTION_TO_USER";
export const ADD_USER = "ADD_USER";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  };
}

export function addAnswerToUser({ qid, authedUser, answer }) {
  return {
    type: ADD_ANSWER_TO_USER,
    qid,
    authedUser,
    answer
  };
}

export function addQuestionToUser(qid, authedUser) {
  return {
    type: ADD_QUESTION_TO_USER,
    qid,
    authedUser
  };
}

function addUser(user) {
  return {
    type: ADD_USER,
    user
  };
}

export function handleAddUser(id, name, avatarURL) {
  return dispatch => {
    return saveUser({
      id,
      name,
      avatarURL
    }).then(user => {
      dispatch(addUser(user))
    })
  };
}
