import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TopNav from './components/TopNav'
import QuizQuestion from './components/QuizQuestion';
import Quiz from './components/Quiz'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TopNav />
    <QuizQuestion question="What species are you targeting?"/>
    <Quiz />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
