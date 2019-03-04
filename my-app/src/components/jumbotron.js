import React from "react";

import AboutIcon from "./aboutIcon.png";
import WorkIcon from "./workIcon.png";
import SkillsIcon from "./skillsIcon.png"

const Jumbotron = () => (
	<header className = "header">
    <div class="row">
    <div  class="column" id="section1">
		 
          
          <h1>     About Me   <img src={AboutIcon} style= {{ width:"20%" , marginLeft: "5px" }}  alt="About-Icon" href="/" />  </h1> 

        <p>A trained Full Stack developer committed to building immersive and beautiful web applications.</p>
            
           <p> Need someone to bring your idea to life? Do you already have a product that needs to be redined to meet the demand of users? This is where i come in! With my knowledge and creativity. I can take your idea, your product to the next level. Let's have a chat and discuss your idea!</p>
            </div>
            <div class="column" id="section2">   
           
		<h1>Experience <img src={WorkIcon} style= {{ width:"20%" , marginLeft: "5px" }}  alt="Work-Icon" href="/" /></h1>

        <h3>Girls Who Code</h3>
        <p>Instructor</p><p> November 2018 - Current</p>
        <h3>UM Coding Bootcamp</h3>
        <p>Full-Stack Developer Certificate </p> <p> August 2018 - February 2019</p>

  
        </div>
        <div class="column" id="section3">   
         
		<h1>Skills   <img src={SkillsIcon} style= {{ width:"20%" , marginLeft: "5px" }}  alt="Skills-Icon" href="/" /></h1>

     
        <p>Javascript</p>
        <p> React.js</p>
      <p>HTML/CSS</p>
        <p>Bootstrap </p> 

  
        </div>
        </div>
        </header>

);

export default Jumbotron;