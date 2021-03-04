import React, { Component } from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import MyProjects from "./projects/MyProject";
import StartupProject from "./StartupProjects/StartupProject";
import Achievement from "./achievement/Achievement";
import Blogs from "./blogs/Blogs";
import Contact from "./contact/Contact";
import Footer from "../components/footer/Footer";
import Podcast from "./podcast/Podcast";
import Top from "./topbutton/Top";
import Twitter from "./twitter-embed/twitter";
import Profile from "./profile/Profile";
import OtherServices from "./otherServices/Greeting";




export default class Main extends Component {
  render() {
    return (
      <div style={{maxWidth:"100%"}} >
        <Header />
        <Greeting />
        <Skills />
        <OtherServices />

        {/* <StackProgress /> */}
        {/* <Achievement /> */}
        {/* <MyProjects /> */}
        
        
        {/* <WorkExperience /> */}
        <Projects />
        <Blogs />
        <StartupProject />
        {/* <Talks /> */}
        {/* <Twitter /> */}
        <Podcast />
        <Profile />
        <Footer />
        <Top />
      </div>
    );
  }
}
