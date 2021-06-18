import React from 'react';
import img2 from '../images/default-color/img-10.png';
import img1 from '../images/default-color/img-11.jpg';
import img3 from '../images/default-color/img-12.jpg';


function Aboutone() {
    return (

        <div id="about" className="section-padding light-gradient-bg pb-0">
            <div className="container">
                <div className="row">
                <div className="col-lg-10">
                            <div className="heading-wrapper text-center with-separator">
                                <h2 className="h1">check out our epic <span> specialities</span></h2>
                                <div className="lead-text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis finibus mi id elit
                                        gravida, quis tincidunt purus fringilla. Aenean convallis a neque non
                                        pellentesque.</p>
                                </div>
                            </div>
                            
                        </div>
                    <div className="col-lg-4">
                        <div className="features-block theme-one wow fadeInLeft">
                            <div className="inner-box">
                                <div className="icon">
                                    <img className="normal" src={img2} alt="" />
                                    <img src={img2} className="hover" alt="" />

                                </div>
                                <div className="text">
                                    <h4>Computer Engineering</h4>
                                    <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer citation ullamco laboris.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="features-block theme-one wow fadeInUp">
                            <div className="inner-box">
                                <div className="icon">
                                    <img className="normal" src={img1} alt="" />
                                    <img src={img1} className="hover" alt="" />
                                </div>
                                <div className="text">
                                    <h4>Mechanical Engineering</h4>
                                    <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer citation ullamco laboris.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="features-block theme-one wow fadeInRight">
                            <div className="inner-box">
                                <div className="icon">
                                    <img className="normal" src={img3} alt="" height="90px"/>
                                    <img src={img3} className="hover" alt="" />
                                </div>
                                <div className="text">
                                    <h4>Electrical Engineering</h4>
                                    <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer citation ullamco laboris.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Aboutone;