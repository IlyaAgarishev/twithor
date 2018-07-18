import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import logo from '../../img/twithorLogo.png';

const Header = () => (
  <div className="header">
    <div className="header-field left">
      <Link to="/" className="header-link main">
        Main
      </Link>
      <Link to="/blog" className="header-link blog">
        Blog
      </Link>
      <Link to="/tutorial" className="header-link tutorial">
        Tutorial
      </Link>
    </div>
    <div className="header-field middle">
      <img src={logo} alt="" className="logo" />
    </div>
    <div className="header-field last">
      <a
        className="header-link github"
        href="https://github.com/IlyaAgarishev"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>
    </div>
  </div>
);

export default Header;
