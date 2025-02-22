import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';

export function Login() {
  return (
    <main id="pmain" className="container-fluid text-center">
      <h1>Welcome to Online Mancala</h1>
      <h3>Sign in to play!</h3>
      <form method="get" action="play.html">
        <div className="input-group mb-3">
          <span className="input-group-text">@</span>
          <input className="form-control" type="text" placeholder="username@email.com" />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">🔒</span>
          <input className="form-control" type="password" placeholder="password" />
        </div>
        <div>
            <Link to="play" className="btn btn-primary">Login</Link>
            <Link to="play" className="btn btn-secondary">Create</Link>
        </div>
      </form>
    </main>
  );
}