import React from 'react';
import img2 from '../images/default-color/security-software-img.png';
import img1 from '../images/default-color/Quick-Easy-Process-img.png';
import imgg from '../images/default-color/seo-marketing-img.png';

function Factss() {
    return (
        <div id="demo" className="carousel slide" data-ride="carousel">
        <ul className="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" className="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
        </ul>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} alt=""/>
             
          </div>
          <div className="carousel-item">
            <img src={img2} alt=""/>
           
          </div>
          <div className="carousel-item">
            <img src={imgg} alt=""/>
            
          </div>
        </div>
        <a className="carousel-control-prev" href="#demo" data-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </a>
        <a className="carousel-control-next" href="#demo" data-slide="next">
          <span className="carousel-control-next-icon"></span>
        </a>
      </div>
    )
}

export default Factss;