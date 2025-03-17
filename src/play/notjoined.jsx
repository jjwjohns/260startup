import React, {useState, useEffect} from 'react';
// import { useNavigate } from 'react-router-dom';
import { PlayerState } from './playerstate';

import Button from 'react-bootstrap/Button';
import "./play.css";

export function NotJoined(props) {
    const [games, setGames] = React.useState([]);
    const [selectedGame, setSelectedGame] = useState(null);
    // const navigate = useNavigate();

    React.useEffect(() => {
        const gamesText = localStorage.getItem('games');
        if (gamesText) {
          setGames(JSON.parse(gamesText));
        }
    }, []);

    async function onPressedCreate() {
        const now = new Date();
        const date = now.toLocaleDateString();
        const time = now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
        const newGame = { name: props.userName, date: date, time: time };

        let games = [];
        const gamesText = localStorage.getItem('games');
        if (gamesText) {
            games = JSON.parse(gamesText);
        }
        games.push(newGame);
        localStorage.setItem('games', JSON.stringify(games));
        setGames(games);
    }

    async function onPressedJoin() {
        if (selectedGame !== null) {
        // props.setPlayerState(PlayerState.Joined);
        localStorage.setItem('currentGame', selectedGame);
        props.setCurrentGame(selectedGame);
        }
    }

    function handleRowClick(index) {
        setSelectedGame(index);
    }

    const gameRows = [];
    if (games.length) {
    for (const [i, game] of games.entries()) {
        gameRows.push(
        <tr key={i}>
            <td>{i+1}</td>
            <td>{game.name}</td>
            <td>{game.date}</td>
            <td>{game.time}</td>
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
        <h1>Select a Game to Join</h1>
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
                    {games.map((game, index) => (
                        <tr 
                        key={index} 
                        className={selectedGame === index ? 'table-success' : ''} 
                        onClick={() => handleRowClick(index)}
                        style={{ cursor: 'pointer' }}
                        >
                        <td>{index + 1}</td>
                        <td>{game.name}</td>
                        <td>{game.date}</td>
                        <td>{game.time}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

      <div className = "p-3">
        <Button className="custom-button" variant='primary' onClick={() => onPressedJoin()}>
            Join
        </Button>
        <Button className="custom-button" variant='secondary' onClick={() => onPressedCreate()}>
            Create
        </Button>
      </div>
    </div>
  );
}



