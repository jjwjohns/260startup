import React from 'react';
import './about.css';
import mancala_dirt from './../../src/Mancala_dirt.webp';

export function About(props) {
  const [quote, setQuote] = React.useState('Loading...');
  const [quoteAuthor, setQuoteAuthor] = React.useState('unknown');

  React.useEffect(() => {
    fetch('https://quote.cs260.click')
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.quote);
        setQuoteAuthor(data.author);
      })
      .catch();
  }, []);

  return (
    <main className="container-fluid text-center">
      <div className="image-container">
        <img src={mancala_dirt} alt="Mancala being played in the dirt"></img>
        <div className="overlay-text">What is Mancala??</div>
       </div>
    
      <p>Mancala is an ancient game that is believed to have originated in Africa around 3000BC! 
        It was played in the dirt by moving seeds to and from different holes in the ground. 
        The game has persisted to the modern age with most people having played it before, or having at least heard of it. 
        Here on Mancala Online you can learn how to play with your friends without having the necessity of a board or stones!
      </p>
      <h3 id="ah3">How You Play</h3>
      <ol className="text-start">
        <li>First you decide who goes first</li>
        <li>Then you take turns making moves. You make a move by choosing a pit in your side and pick up all the seeds it had. Then you distribute one seed for each succeeding pit (moving counterclockwise) until all the seeds in the chosen pit have been placed.</li>
        <li>If you land in your "store", which is the large pit on your right, then you get to go again.</li>
        <li>If you land on an empty pit on your side you get to capture all the seeds in your opponents pit directly opposite of yours. You get to place them in your store.</li>
        <li>When a player has no more seeds on their side and it is their turn the game ends.</li>
        <li>The other player gets to store all remaining seeds on their side.</li>
        <li>Whoever has the most seeds win!</li>
      </ol>

      <div className='quote-box'>
          <p className='quote'>{quote}</p>
          <p className='author'>{quoteAuthor}</p>
        </div>
    </main>
  );
}