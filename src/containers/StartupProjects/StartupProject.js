import React from "react";
import "./StartupProjects.css";
import { bigProjects } from "../../portfolio";
import AchivementCard from "../../components/achievementCard/AchivementCard";
import { Fade } from "react-reveal";
import Backimg from './Images/Background.jpeg'


import one from './civic.jpg';
import two from './corolla.jpg';
import three from './vigo.jpg';
import four from './hiace.jpg';
import five from './karvaan_.jpg';
import six from './hijet.jpg';

// import Backimg from './Image/download (3).jpg'

var PicArr = [
  {
  pic:one,
  title:"Honda Civic Sedan"
},
{
  pic:two,
  title:"Toyota Corolla"
},
{
  pic:three,
  title:"Toyota Vigo Champ"
}
  ];

var PicArr2 = [
    {
    pic:four,
    title:"Toyota Hiace"
  },
  {
    pic:five,
    title:"Changan Karvaan"
  },
  {
    pic:six,
    title:"Daihatsu Hijet"
  }
    ];





export default function StartupProject() {
  function openProjectInNewWindow(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
<div className="main" id="projects">
     
      <h1 className="heading" >LUXURIOUS CARS</h1>

   {/* PROJECT 01 MERN */}
    <Fade bottom duration={1000} distance="20px">
<div style={{backgroundImage:`url(${Backimg})`}} className="Promain" >

      <div  className="achievement-cards-div Promain">
          {PicArr.map(val => {
            return (
              <AchivementCard
                cardInfo={{
                  image: val.pic,
                  title: val.title
                }}
              />
            );
          })}
 
    </div>
</div>
    </Fade>


{/* PROJECT 01 MERN */}
<h1 className="heading" >VAN / COASTER</h1>

<Fade bottom duration={1000} distance="20px">
<div style={{backgroundImage:`url(${Backimg})`}} className="Promain" >

      <div  className="achievement-cards-div Promain">
          {PicArr2.map(val => {
            return (
              <AchivementCard
                cardInfo={{
                  image: val.pic,
                  title: val.title
                }}
              />
            );
          })}
 
    </div>
</div>
    </Fade>












 











    </div>
  );
}
