import {
  _getUsers,
  _saveUser,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from "./_DATA";

export function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions
    })
  );
}

export function saveUser(user) {
  return _saveUser(user)
}

export function saveQuestion(info) {
    return _saveQuestion(info)
}

export function saveQuestionAnswer(info) {
    return _saveQuestionAnswer(info)
}