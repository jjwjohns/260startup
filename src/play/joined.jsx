import React from 'react';
import { MancalaLogic } from './mancalaLogic';
import { delay } from './delay';
import {WS} from './clientWS';
// import { GameEvent, GameNotifier } from './gameNotifier';

import Button from 'react-bootstrap/Button';
import './play.css';

// let move = 0;

// export async function handleMove(event) {
//     move = event.move;
//     console.log("Move received: ", move);
// }

// export async function moved_early() {
//     alert("You moved too early. Please wait for your turn.");

// }

// export async function opponent_joined() {
//     alert("Opponent joined!");
// }

export function Joined(props) {

    const [ws, setws] = React.useState(null);
    const [isWaiting, setIsWaiting] = React.useState(false); 
    const [mancalaSlots, setMancalaSlots] = React.useState(() => {
        const storedSlots = localStorage.getItem('mancalaSlots');
        return storedSlots ? JSON.parse(storedSlots) : [0,4,4,4,4,4,4,0,4,4,4,4,4,4];
    });
    const [isOpponentJoined, setIsOpponentJoined] = React.useState(false);
    const [move, setMove] = React.useState(0);    

    React.useEffect(() => {
        console.log("Move changed: ", move);
        if (move !== 0) {
            console.log("Opponent's move: ", move);
            setIsWaiting(true);
            opponent_Move(mancalaSlots, move);
        }
    
      }, [move]);
 
    React.useEffect(() => {
        localStorage.setItem('mancalaSlots', JSON.stringify(mancalaSlots));
    }
    , [mancalaSlots]);

    React.useEffect(() => {
        const socket = new WS(props.currentGame, setIsOpponentJoined, setMove);
        setws(socket);
      
        return () => {
          socket.socket.close();
        };
      }, []);

    React.useEffect(() => {
        console.log("in hook");
        if (!props.myTurn) {
            console.log("Waiting for opponent's move...");
            opponent_Move(mancalaSlots);
        }
    }, []);

    async function quit(gameID) {
        await fetch(`/api/game/${gameID}`, {
            method: 'DELETE',
            headers: { 'content-type': 'application/json' },
        });
    }

    function onPressedQuit() {
        let id = parseInt(localStorage.getItem('currentGame'));

        let games = [];
        const gamesText = localStorage.getItem('games');
        if (gamesText) {
            games = JSON.parse(gamesText);
        }
        const index = games.findIndex((game) => game.id === id);

        let newGames = [...games.slice(0, index), ...games.slice(index + 1)];
        localStorage.setItem('games', JSON.stringify(newGames));
        props.setGames(newGames);
        props.setCurrentGame('');
        localStorage.removeItem('currentGame');
        localStorage.removeItem('mancalaSlots');
        ws.broadcastEvent({ from: props.currentGame, type: 'close', data: {} });
        quit(id);
    }

    async function aiMove(oldSlots) {
        await delay(2000);
        if (MancalaLogic.checkEndGame(oldSlots, 2)) {
            const { slots: finalSlots, winner } = MancalaLogic.endGame(oldSlots);
            setMancalaSlots(finalSlots);
            await new Promise(resolve => setTimeout(resolve, 500));
            await delay(1000);
            if (winner == 0) {
                alert("It's a tie!");
            }
            else if (winner == 2) {
                alert("AI wins!");
            }
            else {
                alert("You win!");
            }
            await delay(1000);
            onPressedQuit();
            return;
        }


        let randomNumber = Math.floor(Math.random() * (13 - 8 + 1)) + 8;
        while (oldSlots[randomNumber] == 0){
            randomNumber = Math.floor(Math.random() * (13 - 8 + 1)) + 8;
        }
        
        let { newSlots, goAgain } = MancalaLogic.makeMove(oldSlots, 2, randomNumber);
        
        setMancalaSlots(newSlots);
        await new Promise(resolve => setTimeout(resolve, 0));
        await delay(500);

        if (goAgain) {
            await aiMove(newSlots);
        }
    }

    async function opponent_Move(oldSlots, opponentMove) {
        // await delay(2000);
        if (MancalaLogic.checkEndGame(oldSlots, 2)) {
            const { slots: finalSlots, winner } = MancalaLogic.endGame(oldSlots);
            setMancalaSlots(finalSlots);
            await new Promise(resolve => setTimeout(resolve, 500));
            await delay(1000);
            if (winner == 0) {
                alert("It's a tie!");
            }
            else if (winner == 2) {
                alert("You Lost:(");
            }
            else {
                alert("You win!");
            }
            await delay(1000);
            onPressedQuit();
            return;
        }

        // console.log("move: ", move);
        // while (move == 0){
        //     await delay(100);
        // }
        // console.log("move: ", move);
        
        let { newSlots, goAgain } = MancalaLogic.makeMove(oldSlots, 2, 7+opponentMove);
        
        setMancalaSlots(newSlots);
        await new Promise(resolve => setTimeout(resolve, 0));
        // await delay(1000);
        setMove(0);

        if (goAgain) {
            await opponent_Move(newSlots);
        }
        props.setMyTurn(true);
        setIsOpponentJoined(true);
        setIsWaiting(false);
        return;
    }

    async function onPressedPit(pitIndex) {
        if (mancalaSlots[pitIndex] == 0) {
            alert("Please choose a non-empty pit.");
            return;
        }
        if (isWaiting || !props.myTurn) {
            alert("please wait for your turn.");
            return;
        }
        if (!isOpponentJoined){
            alert("Please wait for another player to join.");
            return;
        }

        try {
            await ws.broadcastEvent({ from: props.currentGame, type: 'move', data: pitIndex });
            console.log("Move broadcast successfully");
          } catch (error) {
            console.error("Error broadcasting move:", error);
            return;
          } 


        await setIsWaiting(true);


        if (MancalaLogic.checkEndGame(mancalaSlots, 1)) {
            const { slots: finalSlots, winner } = MancalaLogic.endGame(mancalaSlots);
            setMancalaSlots(finalSlots);
            await new Promise(resolve => setTimeout(resolve, 0));
            // await delay(1000);

            if (winner == 0) {
                alert("It's a tie!");
            }
            else if (winner == 2) {
                alert("You Lost!");
            }
            else {
                alert("You win!");
            }
            // await delay(1000);
            onPressedQuit();
            return;
        }

        const { newSlots, goAgain } = MancalaLogic.makeMove(mancalaSlots, 1, pitIndex);
        
        
        setMancalaSlots(newSlots);
        await new Promise(resolve => setTimeout(resolve, 0));
        // await delay(2000);

        if (goAgain) {
            setIsWaiting(false);
            return;
        }
        
        // await aiMove(newSlots);
        // await opponent_Move(newSlots);
        // setIsWaiting(false);
    }

    // GameNotifier.broadcastEvent(props.currentGame, GameEvent.Start, {});

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
                        <div className="pit" onClick={() => onPressedPit(2)}>{mancalaSlots[2]}</div>
                        <div className="pit" onClick={() => onPressedPit(3)}>{mancalaSlots[3]}</div>
                        <div className="pit" onClick={() => onPressedPit(4)}>{mancalaSlots[4]}</div>
                        <div className="pit" onClick={() => onPressedPit(5)}>{mancalaSlots[5]}</div>
                        <div className="pit" onClick={() => onPressedPit(6)}>{mancalaSlots[6]}</div>
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