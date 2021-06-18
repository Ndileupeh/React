import React from 'react';

import imgg from '../images/Student.png';

function Services() {
    return (
        <div id="services" className="user-interface-section section-padding pt-0">
            <br/><br/><br/><br/><br/><br/>
                <div className="container">
                    <div className="row align-items-center clearfix">
                        <div className="col-lg-6">
                            <div className="image-wrapper">
                                <img className="main-img" src={imgg} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="heading-wrapper with-separator">
                                <h2 className="h1">Really <span>awesome campus life</span> easier to use for users</h2>
                            </div>
                            <div className="text-wrapper">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales dictum
                                    viverra. Nam gravida dignissim eros. Vivamus congue erat ante, volutpat dictum neque
                                    dignissim eget.</p>
                                <ul className="list-style-one">
                                    <li>Nullam placerat nunc id ornare convallis.</li>
                                    <li>Mauris id dui aliquam, dapibus felis vel, iaculis risus.</li>
                                    <li>Integer dapibus lorem in nisl hendrerit dictum.</li>
                                </ul>
                            </div>
                            <div className="btn-wrapper">
                                <a href="#" className="btn btn-primary">apply Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <br/><br/><br/><br/><br/>
            </div>
    )
}

export default Services;