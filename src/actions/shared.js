import { getInitialData, saveQuestionAnswer, saveUser, saveQuestion } from "../utils/api";
import { receiveUsers } from "./users";
import { receiveQuestions, answerQuestion, addQuestion } from "./questions";
import { setAuthedUser, unsetAuthedUser } from "./authedUser";
import { addAnswerToUser, addUser, addQuestionToUser } from "./users";
import { setCallbackLink, unsetCallbackLink } from "./callback";
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export function handleInitialData(pathname) {
  return dispatch => {
    dispatch(showLoading())
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(setAuthedUser(null));
      dispatch(setCallbackLink(pathname));
      dispatch(hideLoading())
    });
  };
}

export function handleAddUser(id, name, avatarURL) {
  return dispatch => {
    dispatch(showLoading())
    return saveUser({
      id,
      name,
      avatarURL
    }).then(user => {
      dispatch(addUser(user))
      dispatch(setAuthedUser(user.id))
      dispatch(hideLoading())
    })
  };
}

export function handleUninitializeData() {
  return dispatch => {
    dispatch(showLoading())
    dispatch(unsetCallbackLink());
    dispatch(unsetAuthedUser());
    dispatch(hideLoading())
  };
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    dispatch(showLoading())
    const { authedUser } = getState();
    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser
    }).then(question => {
      dispatch(addQuestion(question))
      dispatch(addQuestionToUser(question.id, authedUser))
      dispatch(hideLoading())
    });
  };
}

export function handleAnswerQuestion({ qid, answer }) {
  return (dispatch, getState) => {
    dispatch(showLoading())
    const { authedUser } = getState();
    const info = {
      authedUser: authedUser,
      qid,
      answer
    };
    return saveQuestionAnswer(info).then(() => {
      dispatch(answerQuestion({ authedUser, qid, answer }));
      dispatch(addAnswerToUser({ authedUser, qid, answer }));
      dispatch(hideLoading())
    });
  };
}

