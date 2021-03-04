import React from "react";
import "./Progress.css";
import { techStack } from "../../portfolio";
import { Fade } from "react-reveal";

export default function StackProgress() {
    if(techStack.viewSkillBars){
        return (
            <Fade bottom duration={1000} distance="20px">
            <div className="skills-container">

                <div className="skills-bar">
                    <h1 className="skills-heading">OTHER SERVICES</h1>
                  
<p className="otherService" >


Airport transfer in Karachi. <br />
Picnic and party services in Karachi. <br />
Wedding transportation in Karachi. <br />
Any kind of service we can provide. <br />




</p>



                </div>

                <div className="skills-image">
                    <img alt="Skills" src={require("../../assets/images/skill.svg")} />
                </div>

            </div>
            </Fade>
        );
    }
    return null;
}
