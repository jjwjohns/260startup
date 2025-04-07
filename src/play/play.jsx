import React, { useState } from 'react';
import './play.css';

import { Joined } from './joined';
import { NotJoined } from './notjoined';

export function Play({userName}) {
  const [currentGame, setCurrentGame] = useState(localStorage.getItem('currentGame') || '');
  const [games, setGames] = React.useState([]);
  const [isWaiting, setIsWaiting] = React.useState(false); 
  const [myTurn, setMyTurn] = React.useState(false);
  
    // React.useEffect(() => {
    //     const gamesText = localStorage.getItem('games');
    //     if (gamesText) {
    //       setGames(JSON.parse(gamesText));
    //     }
    // }, []);

    React.useEffect(() => {
      fetch('/api/games')
        .then((response) => response.json())
        .then((games) => {
          setGames(games);
          localStorage.setItem('games', JSON.stringify(games));
        });
    }, [games]);
  

  return (
    <main id="pmain" className="container-fluid text-center">
      <p id ="usernameTag">Logged in as <span style={{ color: "blue" }}>{userName}</span></p>
      
      {currentGame !== '' && (
        <Joined 
        userName={userName}
        currentGame={currentGame}
        setCurrentGame={setCurrentGame}
        games={games}
        setGames={setGames}
        isWaiting={isWaiting}
        setIsWaiting={setIsWaiting}
        />
      )}

      {currentGame === '' && (
        <NotJoined userName={userName} 
        currentGame={currentGame}
        setCurrentGame={setCurrentGame}
        games={games}
        setGames={setGames}
        isWaiting={isWaiting}
        setIsWaiting={setIsWaiting}
        />
      )}
    </main>
  );
}