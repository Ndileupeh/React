import React from 'react';
import img1 from '../images/company-logo-1.png';
import img2 from '../images/company-logo-2.png';
import img3 from '../images/company-logo-3.png';
import img4 from '../images/company-logo-4.png';
import img5 from '../images/company-logo-5.png';


function Testimony() {
    return (
        <div id="testimony" className="companies-section section-padding">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8 ">
                    <div className="heading-wrapper text-center with-separator">
                        <h2 className="h1">Trusted by many <span>companies</span></h2>
                        <div className="lead-text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis finibus mi id elit
                                gravida, quis tincidunt purus fringilla. Aenean convallis a neque non
                                pellentesque.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-2"></div>
            <div className="col-lg-12">
                <div className="companies-logo slick-initialized slick-slider">
                     <div className="slick-list draggable"><div className="slick-track"><div className="item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabIndex="0" >
                        <div className="logo-wrapper"><img src={img1} alt=""/></div>
                                </div><div className="item slick-slide slick-active" data-slick-index="1" aria-hidden="false" tabIndex="0" >
                                    <div className="logo-wrapper"><img src={img2} alt=""/></div>
                                </div><div className="item slick-slide slick-active" data-slick-index="2" aria-hidden="false" tabIndex="0">
                                    <div className="logo-wrapper"><img src={img3} alt=""/></div>
                                </div><div className="item slick-slide slick-active" data-slick-index="3" aria-hidden="false" tabIndex="0" >
                                    <div className="logo-wrapper"><img src={img4} alt=""/></div>
                                </div><div className="item slick-slide slick-active" data-slick-index="4" aria-hidden="false" tabIndex="0">
                                    <div className="logo-wrapper"><img src={img5} alt="" /></div>
                                </div>
                                <div className="item slick-slide slick-active" data-slick-index="4" aria-hidden="false" tabIndex="0">
                                    <div className="logo-wrapper"><img src={img3} alt="" /></div>
                                </div>
                                
                                </div></div>
                                
                                
                                
                                
                            </div>
                        </div>
            </div>
            
        </div>
    </div>
    )
}

export default Testimony;