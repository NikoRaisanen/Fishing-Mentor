import React, { useEffect, useState } from 'react';
import './index.css';
import TopNav from './components/TopNav'
import './App.css';
import { CardGroup } from 'react-bootstrap';
import QuizCard from './components/QuizCard'
import Results from './components/Results'
import { updateResults, questions, lures }  from './helpers.js'
import placeholder_img from './img/blue_placeholder.png'
import ReactCSSTransitionGroup from 'react-transition-group'
import { useTransition, animated } from 'react-spring'

function App() {
  const [showCards, setShowCards] = useState(true)
  const [wobble, setWobble] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  // const [currentCards, setCurrentCards] = useState(questions[currentQuestion].options)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [lureStatus, setLureStatus] = useState(lures)

  const handleCardClick = (selectedCard) => {
    if (currentQuestion >= questions.length - 1) {
      setQuizCompleted(true)
    }
    setShowCards(true, () => {

    })
    setWobble(1)
    // Update lureStatus with appropriate values
    const r = updateResults(selectedCard.lurePoints, lureStatus)
    setLureStatus(r)
    // Increment to move on to next question
    const nextQuestion = currentQuestion + 1
    setCurrentQuestion(nextQuestion)
    // If no more questions, the quiz is over
    
  }
  function generate_cards() {
    console.log('executing generate_cards')
    var cards = []
    questions[currentQuestion].options.map((opt) => {
      console.log('iteration')
      cards.push(<QuizCard text={opt.answer} clickAction={() => handleCardClick(opt)} wobbleState={wobble}/>)
    })
    return cards
  }

  {if (quizCompleted) {
    return (<Results result={JSON.stringify(lureStatus)}/>)
  } else {
  return (
    <>
    {/* {console.log(currentCards)} */}
    <TopNav />
    {/* <img className='answerCards' src={placeholder_img}></img> */}
    <h1 className='questionHeader'>{questions[currentQuestion].text}</h1>
    <p>Question number {currentQuestion}</p>

    <CardGroup className='cardGroup' wobble={wobble}>
    {showCards ? generate_cards().map((card) => {
      return card
    }) : ''}
    </CardGroup>
    </>
  );
}
}}

export default App;
