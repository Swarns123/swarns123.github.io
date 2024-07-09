import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './Header.css';



function Header(){
    const navColor ={
        color : 'white',
    }
    return(
      <nav className="navbar navbar-expand-lg navbar-light backgroundMood">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">All movies</a>
          </li>
          {/* <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              All movies
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">Drama</a>
              <a className="dropdown-item" href="#">Comedy</a>
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Romance</a>
            </div>
          </li> */}
          <li className="nav-item active">
            <a className="nav-link" href="#">Webseries</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">About Me</a>
          </li>
        </ul>
      </div>
    </nav>
    )
}

export default Header;