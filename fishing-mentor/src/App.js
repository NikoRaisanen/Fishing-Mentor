import React, { useState } from 'react';
import './index.css';
import TopNav from './components/TopNav'
import './App.css';
import { CardGroup } from 'react-bootstrap';
import QuizCard from './components/QuizCard'

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const handleCardClick = (selectedCard) => {
    if (currentQuestion >= questions.length - 1) {
      alert('Quiz over')
    }
    const nextQuestion = currentQuestion + 1
    setCurrentQuestion(nextQuestion)
    console.log(currentQuestion)
  }

  const questions = [
    {
      text: 'Are you fishing from shore?',
      options: [
        'Yes',
        'No'
      ]
    },
    {
      text: 'Are you getting caught up in vegetation / debris?',
      options: [
        'Yes',
        'No'
      ]
    },
    {
      text: 'How is the bottom of the fishery?',
      options: [
        'Rocky',
        'Soft',
        'Grassy',
        'Not sure'
      ]
    },
    {
      text: 'How deep is the area that you are fishing?',
      options: [
        '< 1 foot',
        '1 to 5 feet',
        '5 to 15 feet',
        '15+ feet'
      ]
    },
    {
      text: 'Is it windy? (10mph+)',
      options: [
        'yes',
        'no'
      ]
    },
    {
      text: 'How is the water temperature?',
      options: [
        'About normal',
        'Warmer than usual',
        'Colder than usual'
      ]
    }
  ]



  return (
    <>
    <TopNav />
    
    <h1 className='questionHeader'>{questions[currentQuestion].text}</h1>
    <p>Question number {currentQuestion}</p>

    <CardGroup className='cardGroup'>
    {questions[currentQuestion].options.map((opt) => {
      return (<QuizCard text={opt} clickAction={handleCardClick}/>)
    })}
    </CardGroup>
  
    {/* <QuizSlide question={questions[currentQuestion].text} cards={questions[currentQuestion].options}/> */}
    </>
  );
}

export default App;
