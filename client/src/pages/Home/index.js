import React from 'react';
import './style.css';
import CatImg from '../../images/cat-plant-home.png';
import PothosImg from '../../images/pothos-njoy.png';

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
        <div className="col s9">
          <div id="yellow-circle"></div>
          <img id="home-img" src={CatImg}></img>
          <div id="pink-box"></div>
        </div>
        <div className="col s3">
          <h2>Making my plants wet like it's my job.</h2>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="row">
        <h3 className="col s12">Shop plants</h3>
      </div>
      <div className="row">
        <div className="col s3">
          <img id="home-plants" src={PothosImg}></img>
        </div>
        <div className="col s3">
          <img id="home-plants" src={PothosImg}></img>
        </div>
        <div className="col s3">
          <img id="home-plants" src={PothosImg}></img>
        </div>
        <div className="col s3">
          <img id="home-plants" src={PothosImg}></img>
        </div>
      </div>
      <div className="row">
        <div className="col s3">
          <img id="home-plants" src={PothosImg}></img>
        </div>
        <div className="col s3">
          <img id="home-plants" src={PothosImg}></img>
        </div>
        <div className="col s3">
          <img id="home-plants" src={PothosImg}></img>
        </div>
        <div className="col s3">
          <img id="home-plants" src={PothosImg}></img>
        </div>
      </div>
      <div className="row ">
        <div className="col s3">
          <img id="home-plants" src={PothosImg}></img>
        </div>
        <div className="col s3">
          <img id="home-plants" src={PothosImg}></img>
        </div>
        <div className="col s3">
          <img id="home-plants" src={PothosImg}></img>
        </div>
        <div className="col s3">
          <img id="home-plants" src={PothosImg}></img>
        </div>
      </div>
      <div>
        <p>View All</p>
      </div>
    </div>
  );
}
