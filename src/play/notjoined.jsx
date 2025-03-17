import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import "./play.css";

export function NotJoined(props) {
  const navigate = useNavigate();

  return (
    <div id = "notjoined">
        <h1>Available Games</h1>
        <div className="table-responsive justify-content-center">
            <table className="table table-bordered table-hover table-striped mx-auto">
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



