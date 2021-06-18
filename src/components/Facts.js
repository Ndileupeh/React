import React from 'react';
import img1 from '../images/qr-code.png';
import img2 from '../images/default-color/apps-store-img.png';


function Facts() {
    return (
        <div className="section-padding border-top">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-lg-6">
                                <div className="heading-wrapper with-separator">
                                    <h2 className="h1">check our mobile <span>App</span></h2>
                                </div>
                                <div className="text-wrapper">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales dictum viverra. Nam gravida dignissim eros.</p>
                                    <p className="lead-text"><b>Choose your native platform and download the app FREE!</b></p>
                                </div>
                                <div className="playstore-widget stack-list large">
                                    <ul>
                                        <li className="google"><a href="#"><span>Get it on</span>Google Play</a></li>
                                        <li className="apple"><a href="#"><span>Download on the</span>App Store</a></li>
                                    </ul>
                                    <div className="qr-code-block">
                                    <img src={img1} alt=""/>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-6">
                                <div className="image-wrapper text-center">
                                   <img src={img2} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default Facts;