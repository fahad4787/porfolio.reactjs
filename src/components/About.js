import React from "react";
import "./About.css";
import aboutImg from "./img/pic2.jpg";

function About() {
  return (
    <div className="about component__space " id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img className="about__img" src={aboutImg} alt="" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__nmeta">
              <p className="about__text p__color">
                To work in a challenging and competitive environment where I can
                practically apply and improve my technical and managerial skills
                acquired from my professional education, add value to the system
                and grow with the organization.”
              </p>
              <p className="about__text p__color">
                To work in a challenging and competitive environment where I can
                practically apply and improve my technical and managerial skills
                acquired from my professional education, add value to the system
                and grow with the organization.”
              </p>
              <p className="about__text p__color">
                To work in a challenging and competitive environment where I can
                practically apply and improve my technical and managerial skills
                acquired from my professional education, add value to the system
                and grow with the organization.”
              </p>
              <div className= "about__button d__flex align__item__center ">
                  <a href="#"><button className=" about btn  pointer">Download Cv</button></a>
                  <a href="#"><button className=" about btn  pointer">Download Cv</button></a> 

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
