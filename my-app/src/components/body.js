import React from 'react';
import designbackground from './designbackground.png'; // Tell Webpack this JS file uses this image
import Nav from "./navbar";
import SideBar from "./sidebar"

console.log(designbackground); // /designbackground.png

function Body() {
  // Import result is the URL of your image
  return <img className="background-img" src={designbackground} style= {{ width:"100%" }} alt="designbackground" href="/" />;
  
  
}





export default Body;