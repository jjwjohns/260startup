import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { PlayerState } from './playerstate';

import Button from 'react-bootstrap/Button';
import './play.css';

export function Joined(props) {
    // const navigate = useNavigate();

    function onPressedQuit() {
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