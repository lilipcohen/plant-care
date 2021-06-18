import React from 'react';
import NavPhoto from '../../images/nav-plant.gif';
import './style.css';

export default function Nav() {
  return (
    <div id="nav-color">
      <div>
        <ul id="ul-one">
          <li>
            <a id="home-nav" href="/">
              LYN'S PLANTS
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul id="ul-two">
          <li id="list-nav">
            <a>Shop at Lyn's</a>
          </li>
          <li id="list-nav">
            <a>Plant Care</a>
          </li>
          <li id="list-nav">
            <a>What We Do</a>
          </li>
          <li id="list-nav">
            <a>Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
