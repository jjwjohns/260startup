import React, { useState } from 'react';
import './play.css';

import { Joined } from './joined';
import { NotJoined } from './notjoined';
import { PlayerState } from './playerstate';

export function Play({userName}) {
  const currentPlayerState = PlayerState.NotJoined;
  const [playerState, setPlayerState] = useState(currentPlayerState);
  
  return (
    <main id="pmain" className="container-fluid text-center">
      
        {currentPlayerState === PlayerState.Joined && (
          <Joined userName={userName}/>
        )}

        {currentPlayerState === PlayerState.NotJoined && (
          <NotJoined userName={userName}/>
        )}
    </main>
  );
}