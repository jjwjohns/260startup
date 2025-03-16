import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Play } from './play/play';
import { About } from './about/about';

export default function App() {
  return (
    <BrowserRouter>
        <div>
            <header className="container-fluid p-0">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link to="play" className="navbar-brand">Mancala</Link>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="">
                                    Login
                                </NavLink>
                                </li>

                                {authState === AuthState.Authenticated && (
                                <li className="nav-item">
                                <NavLink className="nav-link" to="play">
                                    Play
                                </NavLink>
                                </li>
                                )}

                                <li className="nav-item">
                                <NavLink className="nav-link" to="about">
                                    About
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>

            <Routes>
                <Route path='/' element={
                    <Login 
                        userName={userName}
                        authState={authState}
                        onAuthChange={(userName, authState) => {
                            setAuthState(authState);
                            setUserName(userName);
                          }}
                    />} 
                    

                    exact 
                />


                <Route path='/play' element={<Play />} />
                <Route path='/about' element={<About />} />
                <Route path='*' element={<NotFound />} />
            </Routes>

            <footer className="bg-dark text-white-50 container-fluid">
                <div className="container-fluid d-flex justify-content-between align-items-center py-.5">
                    <span className="text-reset">Jordan Johns</span>
                    <a className="text-reset" href="https://github.com/jjwjohns/260startup.git">GitHub</a>
                </div>
            </footer>
        </div>
    </BrowserRouter>
  );
}

function NotFound() {
    return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}