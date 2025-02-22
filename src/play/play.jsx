import React from 'react';
import './play.css';

export function Play() {
  return (
    <main className="container-fluid text-center">
      <h1>Available Games</h1>
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
        <button type="button" className="btn btn-primary">Join</button>
        <button type="button" className="btn btn-secondary">Create</button>
      </div>

      <div className="mancala-board">
        <div className="store left-store">Player1</div>
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
        <div className="store right-store">Player2</div>
      </div>
    </main>
  );
}