import React, { useState } from 'react';
import './App.css';

const questions = [
  {
    questionText: 'What is the capital of France?',
    answerOptions: [
      { answerText: 'New York', isCorrect: false },
      { answerText: 'London', isCorrect: false },
      { answerText: 'Paris', isCorrect: true },
      { answerText: 'Dublin', isCorrect: false },
    ],
  },
  {
    questionText: 'who is CEO of Tesla?',
    answerOptions: [
      { answerText: 'Jeff Bezos', isCorrect: false },
      { answerText: 'Elon Musk', isCorrect: true },
      { answerText: 'Bill Gates', isCorrect: false },
      { answerText: 'Tony Stark', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the Captial of India?',
    answerOptions: [
      { answerText: 'Dhaka', isCorrect: false },
      { answerText: 'London', isCorrect: false },
      { answerText: 'Paris', isCorrect: false },
      { answerText: 'Delhi', isCorrect: true },
    ],
  },
  {
    questionText: 'What is the Captial of Afghanistan?',
    answerOptions: [
      { answerText: 'Delhi', isCorrect: false },
      { answerText: 'London', isCorrect: false },
      { answerText: 'Kabul', isCorrect: true },
      { answerText: 'Dublin', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the Captial of Pakistan?',
    answerOptions: [
      { answerText: 'New York', isCorrect: false },
      { answerText: 'Islamabad', isCorrect: true },
      { answerText: 'Paris', isCorrect: false },
      { answerText: 'Peshawar', isCorrect: false },
    ],
  },
];


function App() {

  const [currentquestion, setCurrentQuestion] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOption = (index, isCorrect) => {
    setAnswered(true)
    setSelectedAnswer(index)
    if (isCorrect) {
      setScore(score + 1)
    }
  }

  const NextQuestion = () => {
    setAnswered(false)
    setSelectedAnswer(null)
    const nextQuestion = currentquestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
  }


  return (

    <div className='flex justify-center items-center h-screen'>
      <div className='w-full max-w-lg bg-white p-5 rounded shadow-lg'>
        <div className='p-2 border text-center font-bold mb-2 text-xl'>Quiz App</div>
        <div>
          {showScore ? (<div>
            You scored {score} of {questions.length}
          </div>
          ) : (
            <>
              <div>{questions[currentquestion].questionText}</div>
              {questions[currentquestion].answerOptions.map((option, index) => (
                <button
                  onClick={() => handleAnswerOption(index, option.isCorrect)}
                  className={`block w-full p-2 mt-2 rounded border ${answered ?
                      option.isCorrect ?
                        "bg-green-200"
                        : selectedAnswer === index ?
                          "bg-red-200"
                          : ""
                      : ""
                    }`}>
                  {option.answerText}</button>
              ))}
              <button className={`${answered ? "bg-green-500" : "bg-green-300"} block w-full bg-green-500 text-white p-2 rounded`}
                disabled={answered ? "" : "disabled"}
                onClick={NextQuestion}>Next Question</button>
              <p className='text-center text-gray-400 text-sm'>Question {currentquestion + 1} of {questions.length}</p>
            </>
          )}
        </div>

      </div>
    </div>
  )
}

export default App
