import React from 'react';
import './style.css';
import CatImg from '../../images/cat-plant-home.png';
import PothosImg from '../../images/pothos-njoy.png';
import PlantCareImg from '../../images/plant-care.jpg';

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

      <div className="row">
        <button className="col s12" id="button-home">
          <a id="anchor" href="shop">
            View All
          </a>
        </button>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="row">
        <div className="col s6">
          <img id="plant-care-img" src={PlantCareImg}></img>
        </div>
        <div className="col s6">
          <h3>Plant Care Help</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
}
