import React from 'react';
import { Mancala } from './mancala';

import Button from 'react-bootstrap/Button';
import './play.css';

export function Joined(props) {
    const [mancalaSlots, setMancalaSlots] = React.useState(localStorage.getItem('mancalaSlots') || [0,4,4,4,4,4,4,0,4,4,4,4,4,4]);


    React.useEffect(() => {
            const mancalaArray = localStorage.getItem('mancalaSlots');
            if (mancalaArray) {
              setMancalaSlots(JSON.parse(mancalaArray));
            }
        }, []);

    React.useEffect(() => {
          localStorage.setItem('mancalaSlots', JSON.stringify(mancalaSlots));
        }, [mancalaSlots]);


    function onPressedQuit() {
        let index = parseInt(localStorage.getItem('currentGame'));

        let games = [];
        const gamesText = localStorage.getItem('games');
        if (gamesText) {
            games = JSON.parse(gamesText);
        }
        let newGames = [...games.slice(0, index), ...games.slice(index + 1)];
        localStorage.setItem('games', JSON.stringify(newGames));
        props.setGames(newGames);
        props.setCurrentGame('');
        localStorage.removeItem('currentGame');
        localStorage.removeItem('mancalaSlots');
    }

    function onPressedPit(pitIndex) {
        console.log("Pit index: " + pitIndex);
    }

    return (
        <div id ="joined" className = "d-flex justify-content-center">
            <div className="mancala-board">
                <div className="store left-store">{mancalaSlots[0]}</div>
                <div className="pits-container">
                    <div className="row top-row">
                        <div className="pit">{mancalaSlots[13]}</div>
                        <div className="pit">{mancalaSlots[12]}</div>
                        <div className="pit">{mancalaSlots[11]}</div>
                        <div className="pit">{mancalaSlots[10]}</div>
                        <div className="pit">{mancalaSlots[9]}</div>
                        <div className="pit">{mancalaSlots[8]}</div>
                    </div>
                    <div className="row bottom-row">
                        <div className="pit" onClick={() => onPressedPit(1)}>{mancalaSlots[1]}</div>
                        <div className="pit">{mancalaSlots[2]}</div>
                        <div className="pit">{mancalaSlots[3]}</div>
                        <div className="pit">{mancalaSlots[4]}</div>
                        <div className="pit">{mancalaSlots[5]}</div>
                        <div className="pit">{mancalaSlots[6]}</div>
                    </div>
                </div>
                <div className="store right-store">{mancalaSlots[7]}</div>
            </div>
            <Button className="custom-button" variant='secondary' onClick={() => onPressedQuit()}>
                Quit
            </Button>
        </div>
    );
}