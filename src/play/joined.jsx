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
    }

    return (
        <div id ="joined" className = "d-flex justify-content-center">
            <div className="mancala-board">
                <div className="store left-store">0</div>
                <div className="pits-container">
                    <div className="row top-row">
                        <div className="pit">4</div>
                        <div className="pit">4</div>
                        <div className="pit">4</div>
                        <div className="pit">4</div>
                        <div className="pit">4</div>
                        <div className="pit">4</div>
                    </div>
                    <div className="row bottom-row">
                        <div className="pit">4</div>
                        <div className="pit">4</div>
                        <div className="pit">4</div>
                        <div className="pit">4</div>
                        <div className="pit">4</div>
                        <div className="pit">4</div>
                    </div>
                </div>
                <div className="store right-store">0</div>
            </div>
            <Button className="custom-button" variant='secondary' onClick={() => onPressedQuit()}>
                Quit
            </Button>
        </div>
    );
}