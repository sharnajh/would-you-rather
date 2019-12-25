import { getInitialData, saveQuestionAnswer } from "../utils/api";
import { receiveUsers } from "./users";
import { receiveQuestions, answerQuestion } from "./questions";
import { setAuthedUser, unsetAuthedUser } from "./authedUser";
import { addAnswerToUser } from "./users";
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

export function handleUninitializeData() {
  return dispatch => {
    dispatch(unsetCallbackLink());
    dispatch(unsetAuthedUser());
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