import React, { useState } from 'react';
import './index.css';
import TopNav from './components/TopNav'
import './App.css';
import { CardGroup } from 'react-bootstrap';
import QuizCard from './components/QuizCard'

function App() {
  const lures = {
    'Jig': 0,
    'Crankbait': 0,
    'Jerkbait': 0,
    'Swimbait': 0,
    'Spinnerbait': 0,
    'Wacky rig': 0,
    'Drop shot': 0,
    'Glidebait': 0,
    'Topwater': 0,
    'Chatterbait': 0,
  }
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [lureStatus, setLureStatus] = useState(lures)

  const handleCardClick = (selectedCard) => {
    // If no more questions, the quiz is over
    if (currentQuestion >= questions.length - 1) {
      setQuizCompleted(true)
    }
    // Update lureStatus with appropriate values
    console.log(selectedCard.lurePoints)
    // Add lurePoints value to lureStatus state
    // Something like lurePoints.map() to create intermediary var, then save that var with setLureStatus
    // Increment to move on to next question
    const nextQuestion = currentQuestion + 1
    setCurrentQuestion(nextQuestion)
  }

  const questions = [
    {
      text: 'Are you fishing from shore?',
      options: [
        {answer: 'Yes', lurePoints: {'Jig': 0.1, 'Crankbait': 0.1, 'Jerkbait': 0.15, 'Swimbait': 0, 'Spinnerbait': 0.05, 'Wacky rig': 0.1, 'Drop shot': -0.4, 'Glidebait': 0, 'Topwater': 0, 'Chatterbait': 0.05}},
        {answer: 'No', lurePoints: {'Jig': 0, 'Crankbait': 0, 'Jerkbait': 0, 'Swimbait': 0.1, 'Spinnerbait': 0.15, 'Wacky rig': 0.1, 'Drop shot': 0.4, 'Glidebait': 0.1, 'Topwater': 0, 'Chatterbait': 0.05}}
        
      ]
    },
    {
      text: 'Are you getting caught up in vegetation / debris?',
      options: [
        {answer: 'Yes', lurePoints: {'Jig': 0.2, 'Crankbait': -0.3, 'Jerkbait': 0, 'Swimbait': 0.1, 'Spinnerbait': -0.1, 'Wacky rig': 0.3, 'Drop shot': 0, 'Glidebait': -0.4, 'Topwater': 0.2, 'Chatterbait': 0.1}},
        {answer: 'No', lurePoints: {'Jig': 0, 'Crankbait': 0.1, 'Jerkbait': 0.1, 'Swimbait': 0.1, 'Spinnerbait': 0.15, 'Wacky rig': 0, 'Drop shot': 0, 'Glidebait': 0.1, 'Topwater': 0, 'Chatterbait': 0.0}}
      ]
    },
    {
      text: 'How is the bottom of the fishery?',
      options: [
        {answer: 'Rocky', lurePoints: {'Jig': 0.2, 'Crankbait': 0.4, 'Jerkbait': 0.2, 'Swimbait': 0.1, 'Spinnerbait': 0.15, 'Wacky rig': 0.1, 'Drop shot': -0.4, 'Glidebait': 0.1, 'Topwater': 0, 'Chatterbait': 0.1}},
        {answer: 'Soft', lurePoints: {'Jig': -0.3, 'Crankbait': 0.1, 'Jerkbait': 0.1, 'Swimbait': 0.1, 'Spinnerbait': 0.15, 'Wacky rig': 0.1, 'Drop shot': 0.1, 'Glidebait': 0, 'Topwater': 0, 'Chatterbait': 0.0}},
        {answer: 'Grassy', lurePoints: {'Jig': 0.1, 'Crankbait': -0.05, 'Jerkbait': 0, 'Swimbait': 0, 'Spinnerbait': -.05, 'Wacky rig': 0.1, 'Drop shot': 0, 'Glidebait': 0.0, 'Topwater': 0, 'Chatterbait': 0.1}},
        {answer: 'Not sure', lurePoints: {'Jig': 0, 'Crankbait': 0, 'Jerkbait': 0, 'Swimbait': 0, 'Spinnerbait': 0, 'Wacky rig': 0, 'Drop shot': 0, 'Glidebait': 0, 'Topwater': 0, 'Chatterbait': 0}}
      ]
    },
    {
      text: 'How deep is the area that you are fishing?',
      options: [
        {answer: '< 1 foot', lurePoints: {'Jig': -0.1, 'Crankbait': 0, 'Jerkbait': 0, 'Swimbait': 0, 'Spinnerbait': -0.1, 'Wacky rig': 0.05, 'Drop shot': -0.15, 'Glidebait': -0.25, 'Topwater': 0.2, 'Chatterbait': 0.05}},
        {answer: '1 to 5 feet', lurePoints: {'Jig': 0.05, 'Crankbait': 0.1, 'Jerkbait': 0.1, 'Swimbait': 0, 'Spinnerbait': 0, 'Wacky rig': 0.1, 'Drop shot': -0.05, 'Glidebait': -0.05, 'Topwater': 0, 'Chatterbait': 0}},
        {answer: '5 to 15 feet', lurePoints: {'Jig': 0, 'Crankbait': 0, 'Jerkbait': 0.1, 'Swimbait': 0, 'Spinnerbait': 0.05, 'Wacky rig': 0.15, 'Drop shot': 0.1, 'Glidebait': 0.1, 'Topwater': 0, 'Chatterbait': 0}},
        {answer: '15+ feet', lurePoints: {'Jig': 0.1, 'Crankbait': 0, 'Jerkbait': -0.15, 'Swimbait': 0, 'Spinnerbait': 0.05, 'Wacky rig': 0.2, 'Drop shot': 0.1, 'Glidebait': 0, 'Topwater': -0.15, 'Chatterbait': 0}},
      ]
    },
    {
      text: 'Is it windy? (10mph+)',
      options: [
        {answer: 'yes', lurePoints: {'Jig': 0, 'Crankbait': 0, 'Jerkbait': 0, 'Swimbait': 0.1, 'Spinnerbait': 0.1, 'Wacky rig': 0, 'Drop shot': 0, 'Glidebait': 0.4, 'Topwater': 0, 'Chatterbait': 0}},
        {answer: 'no',lurePoints: {'Jig': 0, 'Crankbait': 0, 'Jerkbait': 0.05, 'Swimbait': 0, 'Spinnerbait': 0, 'Wacky rig': 0, 'Drop shot': 0, 'Glidebait': -0.2, 'Topwater': 0.1, 'Chatterbait': 0}}
      ]
    },
    {
      text: 'How is the water temperature?',
      options: [
        {answer: 'About normal', lurePoints: {'Jig': 0, 'Crankbait': 0, 'Jerkbait': 0, 'Swimbait': 0, 'Spinnerbait': 0, 'Wacky rig': 0, 'Drop shot': 0, 'Glidebait': 0, 'Topwater': 0, 'Chatterbait': 0}},
        {answer: 'Warmer than usual', lurePoints: {'Jig': 0, 'Crankbait': 0.1, 'Jerkbait': 0.2, 'Swimbait': 0.1, 'Spinnerbait': 0.15, 'Wacky rig': 0, 'Drop shot': 0, 'Glidebait': 0.15, 'Topwater': 0.25, 'Chatterbait': 0.15}},
        {answer: 'Colder than usual', lurePoints: {'Jig': 0.2, 'Crankbait': -0.2, 'Jerkbait': -0.2, 'Swimbait': -0.1, 'Spinnerbait': 0.15, 'Wacky rig': 0.1, 'Drop shot': 0.2, 'Glidebait': -0.15, 'Topwater': -0.3, 'Chatterbait': 0.05}}
      ]
    }
  ]



  {if (quizCompleted) {
    return (<h1>Done with Quiz</h1>)
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
  
    {/* <QuizSlide question={questions[currentQuestion].text} cards={questions[currentQuestion].options}/> */}
    </>
  );
}
}}

export default App;
