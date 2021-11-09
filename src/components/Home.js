import React, { useState } from "react";
import logo from "./img/logo.png";
import "./Home.css";
function Home() {
  //fixed header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });
  //toggle menu
  const [ show, setshow ] = useState(true);
  return (
    <div className="home" id="Home">
      <div className="home__bg">
        <div className="header d__flex align__items__center pxy__30">
          <div className="logo" />
          <img classname="logo__img" src={logo} alt="" />

          <div className="navigation pxy__30">
            <ul className="navbar d__flex">
              <a href=" #Home">
                <li className="navitem mx__15">Home</li>
              </a>
              <a href=" #About">
                <li className="navitem mx__15">About</li>
              </a>
              <a href=" #Service">
                <li className="navitem mx__15">Service</li>
              </a>
              <a href=" #Portfolio">
                <li className="navitem mx__15">Portfolio</li>
              </a>
              <a href=" #Contact">
                <li className="navitem mx__15">Contact</li>
              </a>
            </ul>
          </div>
          {/* toggled menu */}
          <div className="toggle__menu">
            <svg
              onClick={() => setshow(!show)}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-justify white pointer"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
          {show ? (
            <div className="sideNavbar">
              <ul className="sidebar d__flex">
                <li className="sideNavbar ">
                  <a href=" #home">Home</a>
                </li>
                <li className="sideNavbar">
                  <a href=" #About">About</a>
                </li>
                <li className="sideNavbar">
                  <a href=" #Service">Service</a>
                </li>
                <li className="sideNavbar">
                  <a href=" #Portfolio">Portfolio</a>
                </li>
                <li className="sideNavbar">
                  <a href=" #Contact">Contact</a>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
        {/*Home Comment*/}
        <div className="container">
          <div className="home_content">
            <div className="home__meta">
              <h1 className="home__text pz__10">WELCOME TO MY WORLD</h1>
              <h2 className="home__text pz__10">Hi, I am Fahad</h2>
              <h3 className="home__text sweet pz__10">JS Developer.</h3>
              <h4 className="home__text pz__10">Based in Pakistan.</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
