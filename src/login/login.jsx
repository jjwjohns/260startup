import React from 'react';

import { Unauthenticated } from './unauthenticated';
import { Authenticated } from './authenticated';
import { AuthState } from './authstate';

import './login.css';


export function Login({ userName, authState, onAuthChange }) {
  return (
    <main id="pmain" className="container-fluid text-center">
      {authState !== authState.Unknown && <h1>Welcome to Online Mancala</h1>}

      {authState === AuthState.Authenticated && (
          <Authenticated userName={userName} onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)} />
        )}
      {authState === AuthState.Unauthenticated && (
        <Unauthenticated
          userName={userName}
          onLogin={(loginUserName) => {
            onAuthChange(loginUserName, AuthState.Authenticated);
          }}
        />
      )}
    </main>
  );
}