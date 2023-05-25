import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes, Route, Link} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import ListEmployees from './components/ListEmployees';
import Header from './components/Header';
import Createemployee from './components/Createemployee';
import ReactDOM from "react-dom";
import React, { useState } from 'react';


function App() {
  return (
  	<div>
    <Router>
  	  <Header/>
        <div className="container">
        <Routes>
          <Route exact path='/employee' element={< ListEmployees />}></Route>
          <Route exact path='/add-employee' element={< Createemployee />}></Route>
          </Routes>
    </div>
    </Router>
  	</div>
    
  )
}

export default App;
