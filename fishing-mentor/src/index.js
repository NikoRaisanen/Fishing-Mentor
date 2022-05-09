import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TopNav from './components/TopNav'
import QuizQuestion from './components/QuizQuestion';
import QuizCard from './components/QuizCard'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TopNav />
    <QuizQuestion question="What species are you targeting?"/>
    <QuizCard />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
