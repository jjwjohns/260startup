import React, { useState } from 'react';
import './play.css';

import { Joined } from './joined';
import { NotJoined } from './notjoined';
// import { PlayerState } from './playerstate';

export function Play({userName}) {
  // const [playerState, setPlayerState] = useState(localStorage.getItem('currentGame') || '');
  const [currentGame, setCurrentGame] = useState(localStorage.getItem('currentGame') || '');
  
  return (
    <main id="pmain" className="container-fluid text-center">
      <p id ="usernameTag">Logged in as <span style={{ color: "blue" }}>{userName}</span></p>
      
      {currentGame !== '' && (
        <Joined 
        userName={userName}
        currentGame={currentGame}
        setCurrentGame={setCurrentGame}
        // setPlayerState={setPlayerState}
        />
      )}

      {currentGame === '' && (
        <NotJoined userName={userName} 
        currentGame={currentGame}
        // setPlayerState={setPlayerState}
        setCurrentGame={setCurrentGame}
        />
      )}
    </main>
  );
}