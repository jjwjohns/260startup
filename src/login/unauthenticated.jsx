import React from 'react';
import Button from 'react-bootstrap/Button';
import { MessageDialog } from './messagedialogue';

import './authenticated.css';

export function Unauthenticated(props) {
    const [userName, setUserName] = React.useState(props.userName);
    const [password, setPassword] = React.useState('');
    const [displayError, setDisplayError] = React.useState(null);

    async function loginUser() {
        loginOrCreate(`/api/auth/login`);
    }
    
    async function createUser() {
        loginOrCreate(`/api/auth/create`);
    }

    async function loginOrCreate(endpoint) {
        const response = await fetch(endpoint, {
          method: 'post',
          body: JSON.stringify({ email: userName, password: password }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        });
        if (response?.status === 200) {
          localStorage.setItem('userName', userName);
          props.onLogin(userName);
        } else {
          const body = await response.json();
          setDisplayError(`⚠ Error: ${body.msg}`);
        }
    }

      return (
        <div>
            <h3>Sign in to play!</h3>
            <form method="get" action="play.html">
                <div className="input-group mb-3">
                <span className="input-group-text">@</span>
                <input className="form-control" type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="username" />
                </div>
                <div className="input-group mb-3">
                <span className="input-group-text">🔒</span>
                <input className="form-control" type="password" onChange={(e) => setPassword(e.target.value)} placeholder="password" />
                </div>
            </form>

            <Button className="custom-button" variant='primary' onClick={() => loginUser()} disabled={!userName || !password}>
                Login
            </Button>
            <Button className="custom-button" variant='secondary' onClick={() => createUser()} disabled={!userName || !password}>
                Create
            </Button>

            <MessageDialog message={displayError} onHide={() => setDisplayError(null)} />
        </div>
        );
}