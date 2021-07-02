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
            <a href="/shop">Shop at Lyn's</a>
          </li>
          <li id="list-nav">
            <a href="/plantcare">Plant Care</a>
          </li>
          <li id="list-nav">
            <a href="/about">What We Do</a>
          </li>
          <li id="list-nav">
            <a href="/contact">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
