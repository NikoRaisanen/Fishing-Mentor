import React, { useState } from 'react';
import './index.css';
import TopNav from './components/TopNav'
import './App.css';
import { CardGroup } from 'react-bootstrap';
import QuizCard from './components/QuizCard'
import Results from './components/Results'
import { updateResults, questions, lures }  from './helpers.js'

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [lureStatus, setLureStatus] = useState(lures)

  const handleCardClick = (selectedCard) => {
    // If no more questions, the quiz is over
    if (currentQuestion >= questions.length - 1) {
      setQuizCompleted(true)
    }
    // Update lureStatus with appropriate values
    const r = updateResults(selectedCard.lurePoints, lureStatus)
    setLureStatus(r)
    // Increment to move on to next question
    const nextQuestion = currentQuestion + 1
    setCurrentQuestion(nextQuestion)
  }


  {if (quizCompleted) {
    return (<Results result={JSON.stringify(lureStatus)}/>)
  } else {
  return (
    <>
    <TopNav />
    
    <h1 className='questionHeader'>{questions[currentQuestion].text}</h1>
    <p>Question number {currentQuestion}</p>

    <CardGroup className='cardGroup'>
    {questions[currentQuestion].options.map((opt) => {
      return (<QuizCard text={opt.answer} clickAction={() => handleCardClick(opt)}/>)
    })}
    </CardGroup>
    </>
  );
}
}}

export default App;
