import React from "react";
import logo from "./img/logo.png";
import './Home.css';
function Home() {

  //fixed header
  window.addEventListener("scroll",function(){
    const header = document.querySelector(".header");
  header.classList.toggle("active",window.scrollY > 0)
  });
  return (
    <div className="home" id="Home">
      <div className="home__bg">
        <div className="header d__flex align__items__center pxy__30">
        <div className="logo" />
        <img classname= "logo__img" src= {logo} alt=""/>
        
        <div className="navigation pxy__30">
          <ul className="navbar d__flex" >
            <a href =" #Home" ><li className="navitem mx__15">Home</li></a>
            <a href =" #About" ><li className="navitem mx__15">About</li></a>
            <a href =" #Service" ><li className="navitem mx__15">Service</li></a>
            <a href =" #Portfolio" ><li className="navitem mx__15">Portfolio</li></a>
            <a href =" #Contact" ><li className="navitem mx__15">Contact</li></a>
              
          </ul>
        </div>
        </div>
        {/*Home Comment*/}
        <div className="container">
        <div className="home_content">
          <div className="home__meta">
            <h1 className ="home__text pz__10">
            WELCOME TO MY WORLD
            </h1>
            <h2 className= "home__text pz__10">
              Hi, I am Fahad 
            </h2>
            <h3 className="home__text sweet pz__10">
              JS Developer.
            </h3>
            <h4 className="home__text pz__10">
              Based in Pakistan.
            </h4>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
