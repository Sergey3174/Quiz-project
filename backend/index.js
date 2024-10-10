const express = require("express");
const chalk = require("chalk");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");

const {
  addQuestion,
  getQuestions,
  removeQuestion,
  editQuestion,
} = require("./notes.controller");

const port = 3010;
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  const notes = await getQuestions();
  res.json(notes);
});

app.post("/", async (req, res) => {
  const _id = await addQuestion(req.body);
  res.json(_id);
});

app.delete("/:id", async (req, res) => {
  await removeQuestion(req.params.id);
});

app.put("/:id", async (req, res) => {
  await editQuestion(req.body.newQuestionObj, req.params.id);
});

mongoose
  .connect(
    "mongodb+srv://sergey:sL95QnMuhLOL8GSC@cluster0.flwoy.mongodb.net/questions?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    app.listen(port, () => {
      console.log(chalk.green(`Server has been started ${port}`));
    });
  });
