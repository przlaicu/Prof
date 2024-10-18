import { useState } from 'react';

// Images
import Sparkles from '../Images/Sparkles.svg';
import TheSimpsons from '../Images/Logos/the-simpsons.svg';
import Futurama from '../Images/Logos/futurama.svg';
import RickAndMorty from '../Images/Logos/rick-and-morty.svg';
import FamilyGuy from '../Images/Logos/family-guy.svg';
import GameOfThrones from '../Images/Logos/game-of-thrones.svg';
import HarryPotter from '../Images/Logos/harry-potter.svg';

export default function Quiz() {
  // State Management
  // API State
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Quiz Management
  const [questions, setQuestions] = useState(null);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  // Feedback Management
  const [feedback, setFeedback] = useState(null);
  const [feedbackVisibility, setFeedbackVisibility] = useState(null);

  function selectQuiz(choice) {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.edu.skuflic.com/${choice}`);
        const result = await response.json();
        setQuestions(result?.sort(() => Math.random() - 0.5));
      } catch (error) {
        setError(error);
      } finally {
        setSelectedQuiz(choice);
        setTimeout(() => {
          setLoading(false);
        }, 650);
      }
    };
    fetchData();
  }

  function answerClick(chosenAnswer, correctAnswer) {
    if (chosenAnswer === correctAnswer) {
      setScore(score + 1); // Ako je odgovor točan, podižemo rezultat za 1
      setFeedback(true);
      setFeedbackVisibility(true);
    } else {
      setFeedback(false);
      setFeedbackVisibility(true);
    }

    setTimeout(() => {
      setFeedbackVisibility(false);
    }, 1000);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setTimeout(() => {
        setShowScore(true);
      }, 1000);
    }
  }

  let resultMessage;
  switch (selectedQuiz) {
    case 'the-simpsons':
      switch (true) {
        case score <= 5:
          resultMessage =
            "D'oh! Looks like you might need to spend some more time in Springfield. Don't worry; even Homer had to start somewhere!";
          break;
        case score <= 10:
          resultMessage =
            "Not bad, but you're not quite a Springfield resident yet. Keep watching, and soon you'll be quoting Homer and singing with Lisa!";
          break;
        case score <= 13:
          resultMessage =
            "Excellent! You're on your way to becoming a Springfield superstar. Just a little more knowledge, and you'll fit right in at Moe's Tavern.";
          break;
        case score <= 15:
          resultMessage =
            "Cowabunga! You're a true citizen of Springfield! You know your Flanders from your Burns. Keep living the Simpsons dream!";
          break;
        default:
          resultMessage = 'Something went wrong, your score is invalid';
          break;
      }
      break;

    case 'family-guy':
      switch (true) {
        case score <= 5:
          resultMessage =
            'Oh no! Looks like you need to spend more time in Quahog. Stewie would suggest time travel to give it another shot.';
          break;
        case score <= 10:
          resultMessage =
            "Not bad, but you're not quite a Griffin yet. Keep watching, and soon you'll be enjoying life in Quahog with Peter and the gang!";
          break;
        case score <= 13:
          resultMessage =
            "Well done! You're on your way to becoming a Quahog expert. Just a bit more Peter wisdom, and you'll fit right in at The Drunken Clam.";
          break;
        case score <= 15:
          resultMessage =
            "Freakin' sweet! You're a true Family Guy aficionado. You and Brian would have a great time discussing philosophy and literature.";
          break;
        default:
          resultMessage = 'Something went wrong, your score is invalid';
          break;
      }
      break;

    case 'futurama':
      switch (true) {
        case score <= 5:
          resultMessage =
            "Good news, everyone! It seems you need a bit more time in the 31st century. Keep watching, and you'll be a Planet Express crew member in no time!";
          break;
        case score <= 10:
          resultMessage =
            "Not bad, but you're not quite a future expert yet. Keep exploring the cosmos with Fry, Bender, and Leela!";
          break;
        case score <= 13:
          resultMessage =
            "Great job! You're on your way to becoming a true Planet Express employee. Just a little more knowledge, and you'll be navigating the space-time continuum.";
          break;
        case score <= 15:
          resultMessage =
            "Congratulations, space cadet! You're a true Futurama fan. Bender would be proud to call you his friend!";
          break;
        default:
          resultMessage = 'Something went wrong, your score is invalid';
          break;
      }
      break;

    case 'rick-and-morty':
      switch (true) {
        case score <= 5:
          resultMessage =
            'Wubba lubba dub-dub! It looks like you need more adventures with Rick and Morty. Get schwifty and try again!';
          break;
        case score <= 10:
          resultMessage =
            "Not bad, but you're not quite a dimension-hopping genius yet. Keep watching, and you'll be understanding Rick's burps in no time!";
          break;
        case score <= 13:
          resultMessage =
            "Great job! You're on your way to becoming a member of the Council of Ricks. Just a bit more interdimensional knowledge, and you'll be ready for anything.";
          break;
        case score <= 15:
          resultMessage =
            "Wubba lubba dub-dub! You're a true Rick and Morty genius! Time to celebrate with some Szechuan sauce!";
          break;
        default:
          resultMessage = 'Something went wrong, your score is invalid';
          break;
      }
      break;

    case 'harry-potter':
      switch (true) {
        case score <= 5:
          resultMessage =
            "Mischief not managed! Looks like you need a few more spells in your repertoire. Keep studying at Hogwarts, and you'll be a wizard in no time!";
          break;
        case score <= 10:
          resultMessage =
            "Not bad, but you're not quite a wizard yet. Keep practicing your charms and potions, and you'll be ready for Quidditch in no time!";
          break;
        case score <= 13:
          resultMessage =
            "Well done! You're on your way to becoming a true wizard or witch. Just a bit more magical knowledge, and you'll ace your O.W.L.s.";
          break;
        case score <= 15:
          resultMessage =
            "Bravo, wizarding prodigy! You're a true expert in the magical world of Harry Potter. Grab your wand and continue your magical journey!";
          break;
        default:
          resultMessage = 'Something went wrong, your score is invalid';
          break;
      }
      break;

    case 'game-of-thrones':
      switch (true) {
        case score <= 5:
          resultMessage =
            "Winter is coming, and so is more study time! Looks like you need to brush up on your Westeros knowledge. Keep watching, and you'll be a lord or lady in no time!";
          break;
        case score <= 10:
          resultMessage =
            "Not bad, but you're not quite a ruler of the Seven Kingdoms yet. Keep watching, and soon you'll be playing the Game of Thrones like a pro!";
          break;
        case score <= 13:
          resultMessage =
            "Well done! You're on your way to becoming a true Westeros strategist. Just a bit more political intrigue, and you'll be ready for the Iron Throne.";
          break;
        case score <= 15:
          resultMessage =
            "Hail to the ruler of Westeros! You're a true Game of Thrones maestro. Prepare your dragons, because you're destined for greatness!";
          break;
        default:
          resultMessage = 'Something went wrong, your score is invalid';
          break;
      }
      break;

    default:
      resultMessage = 'Invalid category';
      break;
  }

  return (
    <>
      {!selectedQuiz && (
        <div className='info'>
          <p>Select your quiz to get started!</p>
          <div className='general-section quiz-selection'>
            <button onClick={() => selectQuiz('the-simpsons')}>
              <img src={TheSimpsons} alt='The Simpsons' className='logo' />
            </button>
            <button onClick={() => selectQuiz('family-guy')}>
              <img src={FamilyGuy} alt='Family Guy' className='logo' />
            </button>
            <button onClick={() => selectQuiz('futurama')}>
              <img src={Futurama} alt='Futurama' className='logo' />
            </button>
            <button onClick={() => selectQuiz('rick-and-morty')}>
              <img src={RickAndMorty} alt='Rick and Morty' className='logo' />
            </button>
            <button onClick={() => selectQuiz('harry-potter')}>
              <img src={HarryPotter} alt='Harry Potter' className='logo' />
            </button>
            <button onClick={() => selectQuiz('game-of-thrones')}>
              <img src={GameOfThrones} alt='Game of Thrones' className='logo' />
            </button>
          </div>
        </div>
      )}

      {error && (
        <div className='info'>
          <h1>That's an error!</h1>
          <p>Error description: {error.message}</p>
        </div>
      )}

      {loading && selectedQuiz && (
        <div className='info'>
          <h1>Loading...</h1>
          <p>Please wait while we load your quiz</p>
        </div>
      )}

      {!loading && !error && (
        <div className='app'>
          {showScore && (
            <div className='score-section'>
              <img src={Sparkles} alt='Sparkles' />
              <span>
                You've scored {score} out of {questions?.length}
              </span>
              <p>{resultMessage}</p>
              <button
                className='general-section'
                onClick={() => window.location.reload()}
              >
                Play Again
              </button>
            </div>
          )}

          {!feedbackVisibility && !showScore && (
            <>
              <div className='question-section'>
                <div className='question-text'>
                  <span>{questions[currentQuestion]?.question}</span>
                  <span className='question-count'>
                    Question {currentQuestion + 1} / {questions?.length}
                  </span>
                </div>
              </div>
              <div className='general-section'>
                {questions[currentQuestion]?.possibleAnswers
                  .sort(() => Math.random() - 0.5)
                  .map((answer) => (
                    <button
                      key={crypto.randomUUID()}
                      onClick={() =>
                        answerClick(
                          answer,
                          questions[currentQuestion].correctAnswer
                        )
                      }
                    >
                      {answer}
                    </button>
                  ))}
              </div>
            </>
          )}
        </div>
      )}

      {feedbackVisibility && (
        <div
          className={`feedback-section ${feedback ? 'correct' : 'incorrect'}`}
        >
          <h1>{feedback ? '🙂' : '🫤'}</h1>
          <h2>
            {feedback
              ? 'Yay! Your answer is correct!'
              : 'Oops, better luck next time!'}
          </h2>
        </div>
      )}
    </>
  );
}
