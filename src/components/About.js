import React from 'react';

import imgg from '../images/cot-1.jpg';

function About() {
    return (
        <div className="about-section section-padding dc-two">
            <div className="container">
                <div className="row clearfix align-items-center flex-row-reverse">
                    <div className="col-lg-6 text-center">
                        <div className="image-wrapper">
                        <img className='main-img img-fluid' src={imgg} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="heading-wrapper with-separator">
                            <h2 className="h1">welcome to  <span>college of technolgy</span></h2>
                        </div>

                        <div className="text-wrapper">
                            <p className="lead-text">The college of technolgy (COT) of the University of Buea was created as a component of
                             the university by decree <b>No.93/034 of 19 january 1993</b></p>
                            <p> The college is dedicated in providing high quality education, by <b>TRAINING LOCALLY AND QUALIFYING GLOBALLY</b> 
                            Our vision is to offer both national and inernationally recognized full and part-time educational programmes across a speectrum of 
                            engineering disciplines.
                        </p>
                        </div>
                        <div className="btn-wrapper">
                            <a className="btn btn-primary" href="#">Discover More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About;