import React, { useState } from 'react';

import './App.css';
// import todoInput  from './components/todoInput';

function App() {
  const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "The only impossible journey is the one you never begin. - Tony Robbins",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "The best way to predict the future is to invent it. - Alan Kay",
    "The only thing we have to fear is fear itself. - Franklin D. Roosevelt",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "The only source of knowledge is experience. - Albert Einstein",
    "If you want to lift yourself up, lift up someone else. - Booker T. Washington",
    "Well done is better than well said. - Benjamin Franklin",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "I have not failed. I've just found 10,000 ways that won't work. - Thomas A. Edison",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "The mind is everything. What you think you become. - Buddha",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer"
  ];
  
  const RandomQuote = () => {
    const [quote, setQuote] = useState('');
  
    const generateRandomQuote = () => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setQuote(quotes[randomIndex]);
    };
  
    return (
      <>
      <div className='mainDiv'>
        <div className='childDiv'>
        <h1>Random quotes Generator</h1>
        <h2>{quote}</h2>
        <button onClick={generateRandomQuote} className='btnlg'>Generate quote</button>
        </div>
        </div>
      </>
    );
  };

  return <RandomQuote />;
}

export default App;


