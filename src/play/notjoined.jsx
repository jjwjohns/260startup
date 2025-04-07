import React, {useState, useEffect} from 'react';

import Button from 'react-bootstrap/Button';
import "./play.css";


export function NotJoined(props) {
    const [selectedGame, setSelectedGame] = useState(null);

    async function createGame(newGame) {
        await fetch('/api/game', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(newGame),
        });

      }

    // After websocket and DB are set up you will automatically join the game
    async function onPressedCreate() {
        const id = Math.floor(Date.now() * Math.random());
        const now = new Date();
        const date = now.toLocaleDateString();
        const time = now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
        const newGame = { id: id, name: props.userName, date: date, time: time };

        let games = [];
        const gamesText = localStorage.getItem('games');
        if (gamesText) {
            games = JSON.parse(gamesText);
        }
        games.push(newGame);
        localStorage.setItem('games', JSON.stringify(games));
        props.setGames(games);
        // localStorage.setItem('currentGame', games.length - 1);
        // props.setCurrentGame(games.length - 1);
        await createGame(newGame);
    }

    async function onPressedJoin() {
        if (selectedGame !== null) {
            let games = [];
            const gamesText = localStorage.getItem('games');
            if (gamesText) {
                games = JSON.parse(gamesText);
            }
            let currentGame = selectedGame;
            localStorage.setItem('currentGame', currentGame);
            props.setCurrentGame(currentGame);
        }
        props.setIsWaiting(true);
    }

    function handleRowClick(index) {
        setSelectedGame(index);
    }

    // const gameRows = [];
    // if (props.games.length) {
    // for (const [i, game] of props.games.entries()) {
    //     gameRows.push(
    //     <tr key={i}>
    //         <td>{i+1}</td>
    //         <td>{game.name}</td>
    //         <td>{game.date}</td>
    //         <td>{game.time}</td>
    //     </tr>
    //     );
    // }
    // } else {
    // gameRows.push(
    //     <tr key='0'>
    //     <td colSpan='4'>Create the first game!</td>
    //     </tr>
    // );
    // }

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
                {props.games.length > 0 ? (
                    props.games.map((game, index) => (
                        <tr 
                        key={game.id} 
                        className={selectedGame === game.id ? 'table-success' : ''} 
                        onClick={() => handleRowClick(game.id)}
                        style={{ cursor: 'pointer' }}
                        >
                        <td>{index + 1}</td>
                        <td>{game.name}</td>
                        <td>{game.date}</td>
                        <td>{game.time}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                    <td colSpan='4'>Create the first game!</td>
                    </tr>
                )}
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