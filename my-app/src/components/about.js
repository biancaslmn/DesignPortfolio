import React from "react";

import Devicon from "./devIcon.png";
import DesignIcon from "./designIcon.png";
import EmailIcon from "./emailIcon.png";
import AnalyticIcon from "./analyticIcon.png"


const JumbotronTwo = () => (
	<header className = "holder">
    
    <div class="row">

    <div  class="column" id="part1">
    <img src={DesignIcon} style= {{ width:"10%" , marginLeft: "0px" }}  alt="Design-Icon" href="/" />

        <h3> Technical Design</h3>
        <p>My approach is to create an technical designs that strengthens your company’s brand while ensuring ease of use and simplicity for your audience. </p>
            </div>
            <div class="column" id="part2">   

            <img src={Devicon} style= {{ width:"10%" , marginLeft: "0px" }}  alt="Dev-Icon" href="/" />
        <h3>Web Development</h3>
        <p>The web development process involves taking the graphical elements defined in the design process and coding them into a custom Wordpress theme. </p>
      </div>  
     
        <div  class="column" id="part3">
		    <img src={EmailIcon} style= {{ width:"10%" , marginLeft: "0px" }}  alt="Email-Icon" href="/" />

        <h3> Email Templates</h3>
        <p>Email marketing integration enables your clients to stay up-to-date with your company. </p>
            </div>
            <div class="column" id="part4">   

            <img src={AnalyticIcon} style= {{ width:"10%" , marginLeft: "0px" }}  alt="Analytic-Icon" href="/" />

        <h3>Analytics</h3>
        <p>SEO is the practice of improving and promoting a website in order to increase the number of visitors it receives. I help ensure your website is rising the ranks in Google and staying at the top. </p>
      </div>  
      
        </div>
        </header>

);

export default JumbotronTwo;