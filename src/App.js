import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes, Route, Link} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import ListEmployees from './components/ListEmployees';
import Header from './components/Header';
import Createemployee from './components/Createemployee';
import ReactDOM from "react-dom";
import React, { useState } from 'react';
import Login from './Login';

const App = () =>  {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform login logic and authentication
    // If login is successful, set loggedIn to true
    setLoggedIn(true);
    console.log('Login successful');
  };

  const handleLogout = () => {
    // Perform logout logic
    // Set loggedIn to false
    setLoggedIn(false);
    console.log('Logout successful');
  };

  return (
  	<div>
    <Router>
  	  <Header loggedIn={loggedIn} onLogout={handleLogout} />
        <div className="container">
        <Routes>
            <Route
              exact
              path="/"
              element={loggedIn ? <Navigate to="/employee" /> : <Login onLogin={handleLogin} />}
            />
            <Route
              exact
              path="/employee"
              element={loggedIn ? <ListEmployees /> : <Navigate to="/" />}
            />
            <Route
              exact
              path="/add-employee"
              element={loggedIn ? <CreateEmployee /> : <Navigate to="/" />}
            />
          </Routes>
    </div>
    </Router>
  	</div>
    
  )
}

export default App;
