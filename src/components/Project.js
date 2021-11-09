import React from "react";
import "./Project.css";
import project1 from "./img/portfolio-1.jpg";
import project2 from "./img/portfolio-2.jpg";
import project3 from "./img/portfolio-3.jpg";
import project4 from "./img/portfolio-4.jpg";

function Project() {
  return (
    <div className="project component__space" id="Portfolio">
      <div className="Heading">
        <h1 className="heading">My Latest Project</h1>
        <p className="heading p__color">
          I can practically apply and improve my technical and managerial skills
          acquired from my professional education,
        </p>
        <p className="heading p__color">
          add value to the system and grow with the organization.”
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="project__box pointer">
              <div className="project__box__img pointer relative">
                <div className="project__img_box">
                  <img src={project1} alt="" className="project__img"></img>
                </div>
                <div className="mask__effect"></div>
                <div className="project__meta absolute">
                  <h5 className="project__text">Development</h5>
                  <h4 className="project__text">
                    Getting Ticket to the big show
                  </h4>
                  <a href="#" className="project__btn">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer">
              <div className="project__box__img pointer relative">
                <div className="project__img_box">
                  <img src={project2} alt="" className="project__img"></img>
                </div>
                <div className="mask__effect"></div>
                <div className="project__meta absolute">
                  <h5 className="project__text">Development</h5>
                  <h4 className="project__text">
                    Getting Ticket to the big show
                  </h4>
                  <a href="#" className="project__btn">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer">
              <div className="project__box__img pointer relative">
                <div className="project__img_box">
                  <img src={project3} alt="" className="project__img"></img>
                </div>
                <div className="mask__effect"></div>
                <div className="project__meta absolute">
                  <h5 className="project__text">Development</h5>
                  <h4 className="project__text">
                    Getting Ticket to the big show
                  </h4>
                  <a href="#" className="project__btn">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer">
              <div className="project__box__img pointer relative">
                <div className="project__img_box">
                  <img src={project4} alt="" className="project__img"></img>
                </div>
                <div className="mask__effect"></div>
                <div className="project__meta absolute">
                  <h5 className="project__text">Development</h5>
                  <h4 className="project__text">
                    Getting Ticket to the big show
                  </h4>
                  <a href="#" className="project__btn">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="project__box pointer">
              <div className="project__box__img pointer relative">
                <div className="project__img_box">
                  <img src={project2} alt="" className="project__img"></img>
                </div>
                <div className="mask__effect"></div>
                <div className="project__meta absolute">
                  <h5 className="project__text">Development</h5>
                  <h4 className="project__text">
                    Getting Ticket to the big show
                  </h4>
                  <a href="#" className="project__btn">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="project__box pointer">
              <div className="project__box__img pointer relative">
                <div className="project__img_box">
                  <img src={project1} alt="" className="project__img"></img>
                </div>
                <div className="mask__effect"></div>
                <div className="project__meta absolute">
                  <h5 className="project__text">Development</h5>
                  <h4 className="project__text">
                    Getting Ticket to the big show
                  </h4>
                  <a href="#" className="project__btn">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="view__more_btn d__flex align__item__center justify__content__center pxy__30">
              <button className="view__more pointer btn">View More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
