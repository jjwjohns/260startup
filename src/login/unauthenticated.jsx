import React from 'react';
import Button from 'react-bootstrap/Button';
import { MessageDialog } from './messagedialogue';

export function Unauthenticated(props) {
    const [userName, setUserName] = React.useState(props.userName);
    const [password, setPassword] = React.useState('');
    const [displayError, setDisplayError] = React.useState(null);

    async function loginUser() {
        localStorage.setItem('userName', userName);
        props.onLogin(userName);
      }
    
      async function createUser() {
        localStorage.setItem('userName', userName);
        props.onLogin(userName);
      }

      return (
        <div>
            <h3>Sign in to play!</h3>
            <form method="get" action="play.html">
                <div className="input-group mb-3">
                <span className="input-group-text">@</span>
                <input className="form-control" type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="username@email.com" />
                </div>
                <div className="input-group mb-3">
                <span className="input-group-text">🔒</span>
                <input className="form-control" type="password" onChange={(e) => setPassword(e.target.value)} placeholder="password" />
                </div>
            </form>

            <Button variant='primary' onClick={() => loginUser()} disabled={!userName || !password}>
                Login
            </Button>
            <Button variant='secondary' onClick={() => createUser()} disabled={!userName || !password}>
                Create
            </Button>

            <MessageDialog message={displayError} onHide={() => setDisplayError(null)} />
        </div>
        );
}