const Question = require("./models/Question");

async function addQuestion({ question, options, correct }) {
  const elem = await Question.create({ question, options, correct });
  return elem.id;
}

async function removeQuestion(id) {
  await Question.deleteOne({ _id: id });
}

async function getQuestions() {
  const questions = await Question.find();

  return questions;
}

async function editQuestion({ question, options, correct }, id) {
  await Question.updateOne({ _id: id }, { question, options, correct });
}

module.exports = {
  addQuestion,
  removeQuestion,
  getQuestions,
  editQuestion,
};
