import React, { useState } from 'react';

// App Component
export default function App() {
  const questions = [
    {
      question: 'What is the capital of France?',
      options: ['London', 'Berlin', 'Paris', 'Madrid'],
      correctAnswer: 2,
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
      correctAnswer: 1,
    },
    // Add more questions here
  ];

  return (
    <div>
      <h1>Quiz App</h1>
      <QuizContainer questions={questions} />
    </div>
  );
}

// QuizContainer Component (Class Component)
class QuizContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestionIndex: 0,
      score: 0,
    };
  }

  handleAnswer = (selectedAnswer) => {
    const { questions } = this.props;
    const { currentQuestionIndex, score } = this.state;
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedAnswer === currentQuestion.correctAnswer) {
      this.setState({ score: score + 1 });
    }

    if (currentQuestionIndex < questions.length - 1) {
      this.setState({ currentQuestionIndex: currentQuestionIndex + 1 });
    } else {
      alert(
        `Quiz finished! Your score: ${
          score + (selectedAnswer === currentQuestion.correctAnswer ? 1 : 0)
        }/${questions.length}`
      );
    }
  };

  render() {
    const { questions } = this.props;
    const { currentQuestionIndex, score } = this.state;
    const currentQuestion = questions[currentQuestionIndex];

    return (
      <div>
        <Question question={currentQuestion} onAnswer={this.handleAnswer} />
        <Score score={score} total={questions.length} />
      </div>
    );
  }
}

// Question Component (Functional Component)
function Question({ question, onAnswer }) {
  return (
    <div>
      <h2>{question.question}</h2>
      <div>
        {question.options.map((option, index) => (
          <button key={index} onClick={() => onAnswer(index)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

// Score Component (Functional Component)
function Score({ score, total }) {
  return (
    <div>
      <p>
        Score: {score}/{total}
      </p>
    </div>
  );
}
