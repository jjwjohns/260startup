import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import "./play.css";

export function NotJoined(props) {
  const navigate = useNavigate();

  return (
    <div>
        <div id = "pheader">
            <p>Logged in as <span style={{ color: "blue" }}>{props.userName}</span></p>
            <h1>Available Games</h1>
        </div>
        <div className="table-responsive w-75">
            <table className="table table-bordered table-hover table-striped">
                <thead className="table-primary text-center">
                <tr>
                    <th>Game</th>
                    <th>Player</th>
                    <th>Date</th>
                    <th>Time</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>game1</td>
                    <td>John</td>
                    <td>Friday the 13th</td>
                    <td>13:00</td>
                </tr>
                </tbody>
            </table>
        </div>

      <div className = "p-3">
        <Button className="custom-button" variant='primary' onClick={() => navigate('/play')}>
            Join
        </Button>
        <Button className="custom-button" variant='secondary' onClick={() => navigate('/play')}>
            Create
        </Button>
      </div>
    </div>
  );
}



