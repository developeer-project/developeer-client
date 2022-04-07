import styles from "../../styles/homepage-comps/quote.module.css";
import { Blockquote } from '@mantine/core';

import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.js";
// import $ from 'jquery';
// import Popper from "popper.js";

const QuoteSection = () => {
    return (
      <div   className = ""  >
        <div id="carouselExampleIndicators"  className="carousel slide" data-ride="carousel">
  <ol  className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0"  className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div  className="carousel-inner">
    <div  className="carousel-item active">
      <img style={{height:"25rem"}} className="d-block w-100 small" src="https://play-lh.googleusercontent.com/kb_j5bOFTkKnBYgJn4YpSjwRUCkjJRWabKzDt-ZfKvKN9NDG5jYn_1O3Y3qZ7MGrOhs=s200" alt="First slide"/>
    quote1
    </div>
    <div  className="carousel-item">
      <img style={{height:"25rem"}} className="d-block w-100 small" src="https://r1.ilikewallpaper.net/ipad-wallpapers/download/93282/smooth-purple-abstract-4k-ipad-wallpaper-ilikewallpaper_com_200.jpg" alt="Second slide"/>
    quote2
    </div>
    <div  className="carousel-item">
      <img style={{height:"25rem"}} className="d-block w-100 small" src="https://idisqus.com/wp-content/uploads/2021/01/Nokia-5.4-Wallpapers-For-iPhone-12-Pro-Max-Aurora-200x200-1.jpg" alt="Third slide"/>
    quote3
    </div>
  </div>
  <a  className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span  className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span  className="sr-only"></span>
  </a>
  <a  className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span  className="carousel-control-next-icon" aria-hidden="true"></span>
    <span  className="sr-only"></span>
  </a>
</div>
      </div>
    );
};

export default QuoteSection;




