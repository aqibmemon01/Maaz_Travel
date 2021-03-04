import React from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skillsSection } from "../../portfolio";
import {Fade} from "react-reveal";
import EveryImage from "./images.jpeg"




export default function Skills() {
  return (
    <div className="main" id="skills">
      <div className="skills-main-div">
        <Fade left duration={1000}>
        <div className="skills-image-div">
          <img alt="Saad Working" src={EveryImage}></img>
        </div>
        </Fade>
        <Fade right duration={1000}>
        <div className="skills-text-div">
          <h1 className="skills-heading">CURRENT ROUTE </h1>
          <p className="subTitle skills-text-subtitle">

From Garden East & West / To <br />
Cantt<br />
Gizri Bridge<br />
khayaban e Muhafiz<br />
And last stop<br />
Becounhouse School defence phase VIII.<br />




          </p>

          
        </div>
        </Fade>
      </div>
    </div>
  );
}
