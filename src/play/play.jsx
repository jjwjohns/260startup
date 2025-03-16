import React from 'react';
import './play.css';

export function Play(props) {
  return (
    <main id="pmain" className="container-fluid text-center">
      <div id = "pheader">
        <p>Logged in as <span style={{ color: "blue" }}>{props.userName}</span></p>
        <h1>Available Games</h1>
      </div>
      <div className="table-responsive w-75">
        <table className="table table-bordered table-hover table-striped">
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
              <tr>
                  <td>game2</td>
                  <td>Steve</td>
                  <td>Today</td>
                  <td>2pm</td>
              </tr>
              <tr>
                  <td>game3</td>
                  <td>Jim</td>
                  <td>Yesterday</td>
                  <td>2:00</td>
              </tr>
              <tr>
                  <td>game4</td>
                  <td>Sarah</td>
                  <td>Tomorrow</td>
                  <td>7pm</td>
              </tr>
            </tbody>
        </table>
    </div>

      <div className = "p-3">
        <button id = "custom-button" type="button" className="btn btn-primary">Join</button> 
        <button id = "custom-button" type="button" className="btn btn-secondary">Create</button>
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
    </main>
  );
}