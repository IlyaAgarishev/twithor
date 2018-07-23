import React, { Component } from 'react';
import './index.css';
import Header from '../Header';
import me from '../../img/me1.png';
import fb from '../../img/fb.svg';
import inst from '../../img/inst.svg';
import git from '../../img/git.svg';

class Contact extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="contact-body">
          <div className="contact">
            <img src={me} alt="" className="me" />
            <div className="social-networks">
              <a
                href="https://www.facebook.com/ilya.agarishev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={fb} alt="" className="social-network fb" />
              </a>
              <a
                href="https://www.instagram.com/ilyagarishev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={inst} alt="" className="social-network inst" />
              </a>
              <a href="https://github.com/IlyaAgarishev" target="_blank" rel="noopener noreferrer">
                <img src={git} alt="" className="social-network git" />
              </a>
            </div>
            <div className="author-name">Ilya Agarishev</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
