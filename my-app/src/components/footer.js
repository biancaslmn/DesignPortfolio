import React from 'react';

import LinkedIn from "./linkedin.png";
import GithubIcon from "./github.png";
import InstaIcon from "./instagram.png"

const Footer = props => (
 
    <div class="social-media">

                               
<h1 style={{  marginLeft: "20px"}}>Let's Connect!</h1>
                                <div class="social-icons">
                           <a href="https://github.com/biancaslmn"> <img src={GithubIcon} style= {{ width:"50px" , marginLeft: "5px" }}  alt="GitHub-Icon" href="/" /></a>
                          
                          <a href="https://www.linkedin.com/in/bianca-salomon-a0aa234b/"> <img src={LinkedIn} style= {{ width:"50px" , marginLeft: "5px" }}  alt="LinkedIn-Icon" href="/" /></a>
                  
                          <a href="https://www.instagram.com/codingandstyle/"> <img src={InstaIcon} style= {{ width:"50px" , marginLeft: "5px" }}  alt="Insta-Icon" href="/" /></a>
                         
                         <div class="copyright">
<p>Copyright 2019 Bianca Salomon Web Development Portfolio </p>
</div>
</div>
</div>
);

export default Footer;
