import { getInitialData, saveQuestionAnswer, saveUser, saveQuestion } from "../utils/api";
import { receiveUsers } from "./users";
import { receiveQuestions, answerQuestion, addQuestion } from "./questions";
import { setAuthedUser, unsetAuthedUser } from "./authedUser";
import { addAnswerToUser, addUser, addQuestionToUser } from "./users";
import { setCallbackLink, unsetCallbackLink } from "./callback";

export function handleInitialData(pathname) {
  return dispatch => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(setAuthedUser(null));
      dispatch(setCallbackLink(pathname));
    });
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
      dispatch(setAuthedUser(user.id))
    })
  };
}

export function handleUninitializeData() {
  return dispatch => {
    dispatch(unsetCallbackLink());
    dispatch(unsetAuthedUser());
  };
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser
    }).then(question => {
      dispatch(addQuestion(question))
      dispatch(addQuestionToUser(question.id, authedUser))
    });
  };
}

export function handleAnswerQuestion({ qid, answer }) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    const info = {
      authedUser: authedUser,
      qid,
      answer
    };
    saveQuestionAnswer(info).then(() => {
      dispatch(answerQuestion({ authedUser, qid, answer }));
      dispatch(addAnswerToUser({ authedUser, qid, answer }));
    });
  };
}

