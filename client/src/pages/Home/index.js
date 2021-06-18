import React from 'react';
import './style.css';
import CatImg from '../../images/cat-plant-home.png';

export default function Home() {
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <img id="home-img" src={CatImg}></img>
      <div id="pink-box"></div>
    </div>
  );
}
