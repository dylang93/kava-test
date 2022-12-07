import React from "react";
import Category from "./Category";
import Question from "./Question";
import QuestionImage from "./QuestionImage";
import "./App.css";

import QuestionsJson from "./models/db.json";
// https://my-json-server.typicode.com/Kava-Labs/exercise-data/questions

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: QuestionsJson.questions,
      showQuestion: false,
      questionId: null
    };
    this.showQuestion = this.showQuestion.bind(this);
    this.hideQuestion = this.hideQuestion.bind(this);
    this.renderQuestion = this.renderQuestion.bind(this);
  }

  showQuestion(id) {
    this.setState({
      showQuestion: true,
      questionId: id
    });
  }

  hideQuestion(id) {
    const { questions } = this.state;
    const finishedQuestion = questions.find((q) => q.id === id);
    finishedQuestion.clicked = true;
    this.setState({
      showQuestion: false
    });
  }

  render() {
    const { showQuestion } = this.state;

    return (
      <div className="main-container">
        {showQuestion ? this.renderQuestion() : this.renderBoard()}
      </div>
    );
  }

  renderBoard() {
    return (
      <div className="main-container">
        <h1 className="white-text text-center">Quiz Game!</h1>
        <table className="table white-text">
          <thead>
            <tr className="text-center">
              <Category categoryText="Authors" />
              <Category categoryText="Movie Decades" />
              <Category categoryText="Movie Villians" />
              <Category categoryText="Fast Food" />
              <Category categoryText="Country Facts" />
              <Category categoryText="Nature" />
            </tr>
          </thead>
          <tbody>
            <tr>{this.renderTwoHunderedQuestions()}</tr>
            <tr>{this.renderFourHunderedQuestions()}</tr>
            <tr>{this.renderSixHunderedQuestions()}</tr>
            <tr>{this.renderEightHunderedQuestions()}</tr>
            <tr>{this.renderOneThousandQuestions()}</tr>
          </tbody>
        </table>
      </div>
    );
  }

  renderTwoHunderedQuestions() {
    const { questions } = this.state;
    const twoHundredQuestions = questions.filter(
      (question) => question.value === 200
    );
    return twoHundredQuestions.map((question, key) => {
      if (question.clicked) {
        return (
          <td
            key={question.id}
            className="question-box"
            onClick={() => this.showQuestion(question.id)}
          ></td>
        );
      } else {
        return (
          <td
            key={question.id}
            className="question-box"
            onClick={() => this.showQuestion(question.id)}
          >
            <h1 className="question-value text-center">$200</h1>
          </td>
        );
      }
    });
  }

  renderFourHunderedQuestions() {
    const { questions } = this.state;
    const fourHundredQuestions = questions.filter(
      (question) => question.value === 400
    );
    return fourHundredQuestions.map((question, key) => {
      if (question.clicked) {
        return (
          <td
            key={question.id}
            className="question-box"
            onClick={() => this.showQuestion(question.id)}
          ></td>
        );
      } else {
        return (
          <td
            key={question.id}
            className="question-box"
            onClick={() => this.showQuestion(question.id)}
          >
            <h1 className="question-value text-center">$400</h1>
          </td>
        );
      }
    });
  }

  renderSixHunderedQuestions() {
    const { questions } = this.state;
    const sixHundredQuestions = questions.filter(
      (question) => question.value === 600
    );
    return sixHundredQuestions.map((question, key) => {
      if (question.clicked) {
        return (
          <td
            key={question.id}
            className="question-box"
            onClick={() => this.showQuestion(question.id)}
          ></td>
        );
      } else {
        return (
          <td
            key={question.id}
            className="question-box"
            onClick={() => this.showQuestion(question.id)}
          >
            <h1 className="question-value text-center">$600</h1>
          </td>
        );
      }
    });
  }

  renderEightHunderedQuestions() {
    const { questions } = this.state;
    const eightHundredQuestions = questions.filter(
      (question) => question.value === 800
    );
    return eightHundredQuestions.map((question, key) => {
      if (question.clicked) {
        return (
          <td
            key={question.id}
            className="question-box"
            onClick={() => this.showQuestion(question.id)}
          ></td>
        );
      } else {
        return (
          <td
            key={question.id}
            className="question-box"
            onClick={() => this.showQuestion(question.id)}
          >
            <h1 className="question-value text-center">$800</h1>
          </td>
        );
      }
    });
  }

  renderOneThousandQuestions() {
    const { questions } = this.state;
    const oneThousandQuestions = questions.filter(
      (question) => question.value === 1000
    );
    return oneThousandQuestions.map((question, key) => {
      if (question.clicked) {
        return (
          <td
            key={question.id}
            className="question-box"
            onClick={() => this.showQuestion(question.id)}
          ></td>
        );
      } else {
        return (
          <td
            key={question.id}
            className="question-box"
            onClick={() => this.showQuestion(question.id)}
          >
            <h1 className="question-value text-center">$1000</h1>
          </td>
        );
      }
    });
  }

  renderQuestion() {
    const { questionId } = this.state;
    const question = QuestionsJson.questions.find((q) => q.id === questionId);
    const hasImage = question.src;
    console.log("question", question.src);

    if (hasImage) {
      return (
        <QuestionImage
          id={question.id}
          question={question}
          src={question.src}
          onClose={this.hideQuestion}
        />
      );
    } else {
      return (
        <Question
          id={question.id}
          questionText={question.questionText}
          answerText={question.answerText}
          onClose={this.hideQuestion}
        />
      );
    }
  }
}
