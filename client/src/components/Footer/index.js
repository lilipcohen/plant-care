import React from 'react';
import './style.css';

export default function Home() {
  return (
    <div className="footer-basic">
      <footer>
        <div className="social">
          <a href="#">
            <img className="icon ion-social-instagram"></img>
          </a>
          <a href="#">
            <img className="icon ion-social-snapchat"></img>
          </a>
          <a href="#">
            <img className="icon ion-social-twitter"></img>
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
