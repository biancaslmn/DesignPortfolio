import React from 'react';

import Quote1 from "./quote1.png";
import Quote2 from "./quote2.png";

const Carousel = props => (
 
<div class="main-carousel">

<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">

  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <a class="d-block w-100" href="https://www.trilogyed.com/blog/yes-girls-do-code-and-bianca-salomon-is-making-a-career-proving-it/" >    <img src={Quote1} style= {{ width:"65%" , marginLeft: "0px" }}  alt="Quote1" href="/" />
</a>
    </div>
    <div class="carousel-item">
      <a class="d-block w-100" src="" ><img src={Quote2} style= {{ width:"65%" , marginLeft: "0px" }}  alt="Quote2" href="/" />
       </a>
    </div>
    <div class="carousel-item">

      <a class="d-block w-100" src="..." >Example</a>
    </div>
  </div>
  <a class="carousel-control-prev" href="#" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

    </div>
 
 );


export default Carousel;


