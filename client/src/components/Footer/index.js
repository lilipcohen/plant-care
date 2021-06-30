import React from 'react';
import './style.css';
import facebookIcon from '../../images/icon-face.png';
import twitterIcon from '../../images/icon-twitter.png';
import instaIcon from '../../images/icon-insta.png';

export default function Home() {
  return (
    <div className="footer-basic">
      <footer>
        <div className="social">
          <a href="#">
            <img className="icon" src={facebookIcon}></img>
          </a>
          <a href="#">
            <img className="icon" src={twitterIcon}></img>
          </a>
          <a href="#">
            <img className="icon" src={instaIcon}></img>
          </a>
        </div>
        <ul>
          <li className="col s12">
            <a href="#">Home</a>
          </li>
          <li className="col s12">
            <a href="#">Shop</a>
          </li>
          <li className="col s12">
            <a href="#">Resources</a>
          </li>
          <li className="col s12">
            <a href="#">About</a>
          </li>
          <li className="col s12">
            <a href="#">Contact Us</a>
          </li>
        </ul>
        <div className="row">
          <div className="col s12">
            <p className="copyright">Lyn's Plants © 2021</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
