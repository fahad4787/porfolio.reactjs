import React from "react";
import "./Contact.css";
import contacting from "./img/pic4.gif";

function Contact() {
  return (
    <div className="contact component__space" id="Contact">
      <div className="row">
        <div className="col__2">
          <div className="contact__box">
            <div className="contact__meta">
              <h1 className="hire__text">Hire Me.</h1>
              <p className="hire__text white">
                I am available for work. Contact me via Phone
              </p>
              <p className="hire__text white">
                <strong>+92 335 8735635</strong> or email{" "}
                <strong>nfahad4787@gmail.com</strong>
              </p>
            </div>
            <div className="input__box">
              <input
                type="text"
                className="contact name"
                placeholder="Your name "
              ></input>
              <input
                type="text"
                className="contact email"
                placeholder="Your email "
              ></input>
              <input
                type="text"
                className="contact subject"
                placeholder="Write a Subject "
              ></input>
              <textarea
                name="message"
                id="message"
                placeholder=" Write Your message"
              ></textarea>
              <button className="btn contact pointer" type="submit">
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="col__2">
            <img src={contacting} alt="" className="contact__img" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
