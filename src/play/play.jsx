import React, { useState } from 'react';
import './play.css';

import { Joined } from './joined';
import { NotJoined } from './notjoined';
import { PlayerState } from './playerstate';

export function Play({userName}) {
  const [playerState, setPlayerState] = useState(PlayerState.NotJoined);
  
  return (
    <main id="pmain" className="container-fluid text-center">
      <p id ="usernameTag">Logged in as <span style={{ color: "blue" }}>{userName}</span></p>
      
      {playerState === PlayerState.Joined && (
        <Joined 
        userName={userName}
        playerState={playerState}
        setPlayerState={setPlayerState}
        />
      )}

      {playerState === PlayerState.NotJoined && (
        <NotJoined userName={userName} 
        playerState={playerState}
        setPlayerState={setPlayerState}/>
      )}
    </main>
  );
}