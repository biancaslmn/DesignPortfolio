import React from 'react';
import Nav from "./navbar";
import SideBar from "./sidebar"

import Mentor from "./Mentor.png";
import GoFeedMe from "./gofeedme-front.png";
import Jumbotron from "./jumbotron";
import LineReaper from "./lineReaper.png"

const Body = props => (
  <div className="card" id="profileCard">
   <div class="row">
    <div  class="column1">
    <div className="img-container">
    <a href="https://mentor-meanttobe-app.herokuapp.com/loginForm">
      <img src={Mentor} style= {{ width:"95%" , marginLeft: "0px" }}  alt="Mentor" href="/" />
      </a>
      <div className="content">
      <h3>Ment.Or</h3>
      <p>Graduating from High School? Switching careers? Reach out to a mentor who will guide your through the field of your choosing</p>
      </div>
    </div>
    
    </div>
    <div class="column1"> 
    <div className="img-container2">
    <a href="https://guarded-refuge-17378.herokuapp.com">
      <img src={GoFeedMe} style= {{ width:"85%" }} alt="GoFeedMe" href="/" />
      </a>
      <div className="content">
      <h3>Go Feed Me</h3>
      <p>No more wasting leftover foods at restaurants. Donate the unsold dishes to charity events. Connect with a beneficiary! </p>
    </div>
    </div>
    
    </div>
    <div class="column1"> 
    <div className="img-container3">
    <a href="https://jabeldmc.github.io/fsfp-team-project-01/"><img src={LineReaper} style= {{ width:"88.5%" }} alt="LineReaper" href="/" /></a>
    <div className="content">
      <h3>Line Reaper</h3>
      <p>Why wait in line at amusement parks with nothing to do, when you can play a game based on Strangers Things </p>
    </div>
    </div>
   
    </div>
</div>
</div>
);


export default Body;