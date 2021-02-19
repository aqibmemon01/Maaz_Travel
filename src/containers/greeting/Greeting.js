import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";

export default function Greeting() {
  return (
    <Fade bottom duration={1000} distance="40px">
    <div className="greet-main" id="greeting">
      <div className="greeting-main">
        <div className="greeting-text-div">
          <div>
            <h1 className="greeting-text">
              {" "}
              {greeting.title}
            
              <span className="wave-emoji">{emoji("👋")}</span>
            </h1>
            <h2 className="greeting-text-two">"Pick & Drop Service"</h2>
            <p className="greeting-text-p subTitle">{greeting.subTitle}</p>
            <SocialMedia />
            <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              <Button text="See my resume" newTab={true} href={greeting.resumeLink} />
            </div>
          </div>
        </div>
        <Fade left duration={1000} distance="500px">
        <div className="greeting-image-div">
          <img alt="saad sitting on table" src={require("./every.jpg")}></img>
        </div>
        </Fade >
      </div>
    </div>
    </Fade>
  );
}
