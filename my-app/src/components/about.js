import React from "react";

import Devicon from "./devIcon.png";
import DesignIcon from "./designIcon.png";
import EmailIcon from "./emailIcon.png";
import AnalyticIcon from "./analyticIcon.png"


const JumbotronTwo = () => (
	<header className = "holder">
      <h1>What I do</h1>
    <div class="row">

    <div  class="column" id="part1">
    <img src={DesignIcon} style= {{ width:"10%" , marginLeft: "0px" }}  alt="Design-Icon" href="/" />

        <h3> Technical Design</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </p>
            </div>
            <div class="column" id="part2">   

            <img src={Devicon} style= {{ width:"10%" , marginLeft: "0px" }}  alt="Dev-Icon" href="/" />
        <h3>Web Development</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </p>
      </div>  
     
        <div  class="column" id="part3">
		    <img src={EmailIcon} style= {{ width:"10%" , marginLeft: "0px" }}  alt="Email-Icon" href="/" />

        <h3> Email Templates</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </p>
            </div>
            <div class="column" id="part4">   

            <img src={AnalyticIcon} style= {{ width:"10%" , marginLeft: "0px" }}  alt="Analytic-Icon" href="/" />

        <h3>Analytics</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </p>
      </div>  
      
        </div>
        </header>

);

export default JumbotronTwo;