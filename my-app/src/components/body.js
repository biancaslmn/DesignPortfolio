import React from 'react';
import Nav from "./navbar";
import SideBar from "./sidebar"

import Mentor from "./Mentor.png"
import GoFeedMe from "./gofeedme-front.png"
import Jumbotron from "./jumbotron";

const Body = props => (
  <div className="card" id="profileCard">
   <div class="row">
    <div  class="column">
    <div className="img-container">
      <img src={Mentor} style= {{ width:"100%" , marginLeft: "0px" }}  alt="Mentor" href="/" />
    </div>
    <div className="content">
      <h3></h3>
      </div>
    </div>
    <div class="column"> 
    <div className="img-container2">
      <img src={GoFeedMe} style= {{ width:"90%" }} alt="GoFeedMe" href="/" />
    </div>
    <div className="content">
      <h3></h3>
    </div>
    </div>
</div>
</div>
);


export default Body;