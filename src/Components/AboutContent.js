import "./AboutContent.css";
import React from "react";
import pic6 from "../Pics/picture2.jpg";
import pic7 from "../Pics/picture3.jpg";

const AboutContent = () => {
  return (
    <div className="parent">
      <div className="left-con">
        <div className="lef">
          <h2>About Me </h2>
          <p className="de">
            I'm really passionate about creating software that will help improve
            the lives of those around me. I also consider myself a positive,
            enthusiastic and competent freelance web developer that can make an
            app from nothing into existence, fully formed.
          </p>
        </div>
        <div className="lef">
          <h2>Education</h2>
          <p>
            <b>New Media Technology </b>| La Guardia Community College
          </p>
        </div>
        <div className="lef">
          <h2>Skills</h2>
          <p>
            <ul>
              <li>Javascript</li>
              <li>Github</li>
              <li>React</li>
              <li>Css</li>
              <li>Html</li>
              <li>Python</li>
              <li>NodeJs</li>
              <li>Boostrap</li>
            </ul>
          </p>
        </div>
      </div>
      <div className="right-con">
        <img className="p1" src={pic6} alt="6" />

        <img className="p2" src={pic7} alt="7" />
      </div>
    </div>
  );
};

export default AboutContent;
