import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import "./play.css";

export function NotJoined(props) {
    const [games, setGames] = React.useState([]);
    const navigate = useNavigate();

    React.useEffect(() => {
        const gamesText = localStorage.getItem('games');
        if (gamesText) {
          setGames(JSON.parse(gamesText));
        }
    }, []);

    const gameRows = [];
    if (games.length) {
    for (const [i, game] of games.entries()) {
        gameRows.push(
        <tr key={i}>
            <td>{i}</td>
            <td>{score.player}</td>
            <td>{score.date}</td>
            <td>{score.time}</td>
        </tr>
        );
    }
    } else {
    gameRows.push(
        <tr key='0'>
        <td colSpan='4'>Create the first game!</td>
        </tr>
    );
    }

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
                <tbody id='scores'>{gameRows}</tbody>
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



