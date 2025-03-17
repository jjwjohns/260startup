import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import "./authenticated.css";

export function Authenticated(props) {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem('userName');
    localStorage.removeItem('currentGame');
    localStorage.removeItem('mancalaSlots');
    props.onLogout();
  }

  return (
    <div>
        <h4>Logged in as <span style={{ color: "blue" }}>{props.userName}</span></h4>
        <Button className="custom-button" variant='primary' onClick={() => navigate('/play')}>
            Play
        </Button>
        <Button className="custom-button" variant='secondary' onClick={() => logout()}>
            Logout
        </Button>
    </div>
  );
}