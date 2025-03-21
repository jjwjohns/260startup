import React, { useState } from 'react';
import './play.css';

import { Joined } from './joined';
import { NotJoined } from './notjoined';

export function Play({userName}) {
  const [currentGame, setCurrentGame] = useState(localStorage.getItem('currentGame') || '');
  const [games, setGames] = React.useState([]);
  
    React.useEffect(() => {
        const gamesText = localStorage.getItem('games');
        if (gamesText) {
          setGames(JSON.parse(gamesText));
        }
    }, []);
  

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
        />
      )}

      {currentGame === '' && (
        <NotJoined userName={userName} 
        currentGame={currentGame}
        setCurrentGame={setCurrentGame}
        games={games}
        setGames={setGames}
        />
      )}
    </main>
  );
}