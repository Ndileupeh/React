import React from 'react'

import Factss from './Factss';

function Head() {
    return (

        <div id="head" className="page-header section-padding style-dark full-height dc-three left-col-full">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="col-lg-4"></div>
                        <div className="col-lg-10">
                        <div className="image-wrapper">
                        <Factss />
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="heading-wrapper wow fadeInRight" data-wow-delay="0.2s">
                            <h1>COT is <span>the best engineering  </span> <span className="text-warning"> school OF</span> CAMEROON.</h1>
                        </div>
                        <div className="text-wrapper wow fadeInRight" data-wow-delay="0.4s">
                            <p className="lead-text">Poduce thousand of engineers  --per year.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales dictum
                            viverra. Nam gravida dignissim eros. Vivamus congue erat ante, volutpat dictum neque
                                    dignissim eget.</p>
                        </div>
                        <div className="btn-wrapper wow fadeInRight" data-wow-delay="0.5s">
                            <a className="btn btn-primary btn-light " href="#">Get Started Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default Head;