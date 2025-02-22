import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
    <div>
        <header className="container-fluid p-0">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a id = "logo" className="navbar-brand" href="play.html">Mancala</a>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item"><a className="nav-link" href="index.html">Login</a></li>
                        <li className="nav-item"><a className="nav-link" href="play.html">Play</a></li>
                        <li className="nav-item"><a className="nav-link" href="about.html">About</a></li>
                    </ul>
                </div>
            </nav>
        </header>

        <main>future content</main>

        <footer className="bg-dark text-white-50 container-fluid">
            <div className="container-fluid d-flex justify-content-between align-items-center py-.5">
                <span className="text-reset">Jordan Johns</span>
                <a className="text-reset" href="https://github.com/jjwjohns/260startup.git">GitHub</a>
            </div>
        </footer>
    </div>


  );
}