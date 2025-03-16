import React from 'react';
import './play.css';

export function Joined(props) {

  return (
    <div>
        <div id = "pheader">
            <p>Logged in as <span style={{ color: "blue" }}>{props.userName}</span></p>
        </div>
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
    </div>
  );
}