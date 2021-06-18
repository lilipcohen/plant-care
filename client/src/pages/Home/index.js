import React from 'react';
import './style.css';
import CatImg from '../../images/cat-plant-home.png';

export default function Home() {
  return (
    <div className="container">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="row">
        <div className="col s8">
          <div id="yellow-circle"></div>
          <img id="home-img" src={CatImg}></img>
          <div id="pink-box"></div>
        </div>
        <div className="col s4">
          <h2>Making my plants wet like it's my job.</h2>
        </div>
      </div>
    </div>
  );
}
