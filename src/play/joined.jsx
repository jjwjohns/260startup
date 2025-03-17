import React from 'react';
import './play.css';

export function Joined(props) {

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
        <Button className="custom-button" variant='secondary' onClick={() => onPressedCreate()}>
            Leave Game
        </Button>
    </div>
  );
}