import React from 'react';
import './index.css';
import Header from '../Header';
import { Link } from 'react-router-dom';

const Main = () => (
  <div>
    <Header />
    <div className="welcome-body">
      <div className="welcome">
        Hello, welcome to Twithor! <br /> I made this simple{' '}
        <Link to="/blog" style={{ color: 'rgb(87, 170, 218)' }}>
          blog
        </Link>{' '}
        just to pracice with <strong>React</strong> and <strong>Redux</strong> libraries. <br /> By
        the way i made a{' '}
        <Link to="/tutorial" style={{ color: 'rgb(70, 221, 163)' }}>
          tutorial
        </Link>{' '}
        for you if you want to create your own Twithor. <br /> Star this app on{' '}
        <a
          href="https://github.com/IlyaAgarishev"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'rgb(235, 150, 101)' }}
        >
          github
        </a>{' '}
        if that was nice practice for you, brotha ♥
      </div>
      <div className="authorSign">
        Made by <strong>Ilya Agarishev</strong>
      </div>
    </div>
  </div>
);

export default Main;
