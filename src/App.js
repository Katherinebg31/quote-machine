import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import './App.css';

const quotesData = [
  {
    text: "Las diversas razones que hemos enumerado nos llevan a creer que la nueva sustancia radioactiva contiene un nuevo elemento que proponemos dar el nombre de radio.",
    author: "Marie Curie"
  },
  {
    text: "Era como un nuevo mundo abierto para mí, el mundo de la ciencia, qunpm starte por fin se me permitió conocer en toda libertad.",
    author: "Marie Curie"
  },
  {
    text: "Es mi sincero deseo que algunos de ustedes continúen con este trabajo científico y mantengan para su ambición la determinación de hacer una contribución permanente a la ciencia.",
    author: "Marie Curie"
  },
  {
    text: "Nunca debes tener miedo de lo que estás haciendo cuando es correcto.",
    author: "Marie Curie"
  },
  {
    text: "Nunca me harás creer que las mujeres fueron hechas para caminar sobre zancos.",
    author: "Marie Curie"
  },
];

const App = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  const handleNewQuote = () => {
    const newIndex = Math.floor(Math.random() * quotesData.length);
    setCurrentQuoteIndex(newIndex);
  };

  const currentQuote = quotesData[currentQuoteIndex];

  return (
    <div className="quote-box">
      <div id="text"><FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />{currentQuote.text}</div>
      <div id="author"> - {currentQuote.author}</div>
      <button id="new-quote" onClick={handleNewQuote}>Nueva Cita</button>
      <a id="tweet-quote" target="_blank" rel="noreferrer" href={`https://twitter.com/intent/tweet?text="${currentQuote.text}" - ${currentQuote.author}`}>Twittear</a>
    </div>
  );
};

export default App;
