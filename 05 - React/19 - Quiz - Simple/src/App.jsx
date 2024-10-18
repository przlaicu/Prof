import { useState } from 'react';
import './App.scss'
export default function App() {

  // State Management
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)

  // Questions Bank
  const questions = [
    {
      questionText: 'Who is the current CEO of Microsoft?',
      answerOptions: [
        { answerText: 'Bill Gates', isCorrect: false },
        { answerText: 'Jeff Bezos', isCorrect: false },
        { answerText: 'Satya Nadella', isCorrect: true },
        { answerText: 'Steve Ballmer', isCorrect: false },
      ],
    },
    {
      questionText: 'When did World War II start?',
      answerOptions: [
        { answerText: '1938', isCorrect: false },
        { answerText: '1945', isCorrect: false },
        { answerText: '1939', isCorrect: true },
        { answerText: '1940', isCorrect: false },
      ],
    },
    {
      questionText: 'What is the capital of Germany?',
      answerOptions: [
        { answerText: 'Düsseldorf', isCorrect: false },
        { answerText: 'Berlin', isCorrect: true },
        { answerText: 'München', isCorrect: false },
        { answerText: 'Frankfurt', isCorrect: false },
      ],
    },
    {
      questionText: 'How manny continents are there?',
      answerOptions: [
        { answerText: '7', isCorrect: true },
        { answerText: '6', isCorrect: false },
        { answerText: '8', isCorrect: false },
        { answerText: '5', isCorrect: false },
      ],
    },
  ]

  function handleAnswerButtonClick(isCorrect) {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuetions = currentQuestion + 1;

    if (nextQuetions < questions.length) {
      setCurrentQuestion(nextQuetions);
    }
    else {
      setShowScore(true)
    }
  }

  function scoreResult() {
    let output;
    switch (score) {
      case 1:
        output = 'You need to study more.'
        break;
      case 2:
        output = 'Hmm... not very good.'
        break;
      case 3:
        output = 'Nice!'
        break;
      case 4:
        output = 'Wow! You are Mr. Know It All! :)'
        break;
      default:
        output = null;
    }

    return output;

  }

  return (
    <>
      <div className='app'>
        {showScore ? (
          <div className='score-section'>
            You scored {score} out of {questions.length}. {scoreResult()}
          </div>
        )
          :
          (
            <>
              <div className='question-section'>
                <div className='question-count'>
                  <span>Question {currentQuestion + 1} </span>/ {questions.length}
                </div>
                <div className='question-text'>
                  {questions[currentQuestion].questionText}
                </div>
              </div>

              <div className='answer-section'>
                {
                  questions[currentQuestion].answerOptions.map((answer) => (
                    <button onClick={() => handleAnswerButtonClick(answer.isCorrect)}>{answer.answerText}</button>
                  ))
                }
              </div>
            </>
          )}
      </div>
    </>
  );
}