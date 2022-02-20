import React from 'react';
import "./App.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import Login from "./Login";
import Register from "./Register";
import Reset from "./Reset";
import Dashboard from "./Dashboard";

function App() {
  return (
      <Router>
            <div className="App">
                <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                    <div className="container">
                        <Link className="navbar-brand" to={"/"}>Ujian - Binus Online Learning</Link>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav ml-auto">
                                <p className="forgot-password">
                                    Nama : Antonius Suharmono  NIM : 2201865362
                                </p>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="outer">
                <div className="inner">
                  <Routes>
                    <Route exact path="/" element={<Login />} />
                    <Route exact path="/register" element={<Register />} />
                    <Route exact path="/reset" element={<Reset />} />
                    <Route exact path="/dashboard" element={<Dashboard />} />
                  </Routes>
                </div>
                </div>
        </div>
      </Router>

  );
}

export default App;
