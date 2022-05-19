import React, { useState } from 'react';
import './index.css';
import TopNav from './components/TopNav'
import QuizSlide from './components/QuizSlide'
import './App.css';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const handleCardClick = (selectedCard) => {
    const nextQuestion = currentQuestion + 1
    setCurrentQuestion(nextQuestion)
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
    <QuizSlide question={questions[currentQuestion].text} cards={questions[currentQuestion].options}/>
    </>
  );
}

export default App;
