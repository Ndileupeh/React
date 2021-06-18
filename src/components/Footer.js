import React from 'react';
import img2 from '../images/d-code-logo-dark.svg';
import img1 from '../images/d-code-logo-dark.svg';
import imgg from '../images/cot-logo-dark-1.png';

function Footer() {
    return (
        <div class="container-fluid">
        <div class="main-footer style-dark">
            <div class="row">
                <div class="col-lg-4">
                    <div class="widget">
                        <div class="text-widget">
                            <div class="about-info">
                                <div class="image-wrapper">
                                    <div class="col-lg-12">
                                    <img src={imgg} alt=""  width="260px" height="60px"/>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales dictum viverra. Nam gravida dignissim eros.</p>
                            </div>
                            <div class="playstore-widget">
                                <h3>Download the App</h3>
                                <ul>
                                    <li class="google"><a href="#">Google Play</a></li>
                                    <li class="apple"><a href="#">App Store</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2">
                    <div class="widget">
                        <div class="widget-title">
                            <h3 class="title">Useful Links</h3>
                        </div>
                        <div class="text-widget">
                            <div class="footer-nav">
                                <ul>
                                    <li><a href="#">Trust & Safety</a></li>
                                    <li><a href="#">Cookie Policy</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Terms of Service</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2">
                    <div class="widget">
                        <div class="widget-title">
                            <h3 class="title">Support</h3>
                        </div>
                        <div class="text-widget">
                            <div class="footer-nav">
                                <ul>
                                    <li><a href="#">Documentation</a></li>
                                    <li><a href="#">FAQ</a></li>
                                    <li><a href="#">Press</a></li>
                                    <li><a href="#">Community</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="widget">
                        <div class="widget-title">
                            <h3 class="title">Stay Updated</h3>
                        </div>
                        <div class="text-widget">
                            <div class="contact-info">
                                <ul>
                                    <li class="email-field">universityofbuea@themes.net</li>
                                    <li class="phone-field">+1 (234) 567-9801</li>
                                    <li class="address-field">49 Uniqe Square D, Buea, NY 12133, cameroon</li>
                                </ul>
                            </div>
                            <div class="social-media-links">
                                <ul>
                                    <li><a target="_blank" href="https://www.facebook.com/sacredthemes/"><i class="fab fa-facebook-f"></i></a></li>
                                    <li><a target="_blank" href="https://www.linkedin.com/company/sacredthemes/"><i class="fab fa-linkedin-in"></i></a></li>
                                    <li><a target="_blank" href="https://twitter.com/SacredThemes"><i class="fab fa-twitter"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright-bar style-dark">
            <div class="copyright-text text-center">
                © Copyright DCode 2020. Made with <i class="fas fa-heart"></i> by <a href="https://sacredthemes.net" target="_blank"><strong>SacredThemes</strong></a>.
            </div>
        </div>
    </div>
        
    )
}

export default Footer;