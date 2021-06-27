import React from 'react';
import './style.css';

export default function Home() {
  return (
    <div className="footer-basic">
      <footer>
        <div className="social">
          <a href="#">
            <i className="icon ion-social-instagram"></i>
          </a>
          <a href="#">
            <i className="icon ion-social-snapchat"></i>
          </a>
          <a href="#">
            <i className="icon ion-social-twitter"></i>
          </a>
          <a href="#">
            <i className="icon ion-social-facebook"></i>
          </a>
        </div>
        <ul className="row">
          <li className="col s2">
            <a href="#">Home</a>
          </li>
          <li className="col s2">
            <a href="#">Services</a>
          </li>
          <li className="col s2">
            <a href="#">About</a>
          </li>
          <li className="col s2">
            <a href="#">Terms</a>
          </li>
          <li className="col s2">
            <a href="#">Privacy Policy</a>
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
