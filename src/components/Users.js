import React from 'react';
import img3 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';

import imgg from '../images/img3.jpg';
import img1 from '../images/img4.jpg';

function Users() {
    return (
        <div id="users" className="our-team section-padding">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="heading-wrapper text-center with-separator">
                                    <h2 className="h1">Our qualified <span>Instructors</span></h2>
                                    <div className="lead-text">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis finibus mi id elit gravida, quis tincidunt purus fringilla. Aenean convallis a neque non pellentesque.</p>
                                    </div>
                                </div>
                            </div> 
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="st-team-member theme-one wow fadeInUp">
                                    <div className="team-member-wrapper">
                                        <div className="st-team-image">
                                            <img src={img3} alt=""  />
                                            <div className="team-social">
                                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                <a href="#"><i className="fab fa-instagram"></i></a>
                                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                            </div>
                                        </div>
                                        <div className="st-team-member-detail">
                                            <h3 className="member-name">Dr SONE</h3>
                                            <span className="member-position">DIRECTOR</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="st-team-member theme-one wow fadeInUp" data-wow-delay="0.2s">
                                    <div className="team-member-wrapper">
                                        <div className="st-team-image">
                                            <img src={img2} alt="" />
                                            <div className="team-social">
                                                <a href="#"><i className="fab fa-instagram"></i></a>
                                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                            </div>
                                        </div>
                                        <div className="st-team-member-detail">
                                            <h3 className="member-name">Mr MBELA</h3>
                                            <span className="member-position">HEAD OF EXAM</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="st-team-member theme-one wow fadeInUp" data-wow-delay="0.4s">
                                    <div className="team-member-wrapper">
                                        <div className="st-team-image">
                                            <img src={imgg} alt="" />
                                            <div className="team-social">
                                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                <a href="#"><i className="fab fa-twitter"></i></a>
                                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                            </div>
                                        </div>
                                        <div className="st-team-member-detail">
                                            <h3 className="member-name">Dr FEUDJO</h3>
                                            <span className="member-position">EEC HOD</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="st-team-member theme-one wow fadeInUp" data-wow-delay="0.6s">
                                    <div className="team-member-wrapper">
                                        <div className="st-team-image">
                                            <img src={img1} alt="" />
                                            <div className="team-social">
                                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                <a href="#"><i className="fab fa-twitter"></i></a>
                                                <a href="#"><i className="fab fa-instagram"></i></a>
                                            </div>
                                        </div>
                                        <div className="st-team-member-detail">
                                            <h3 className="member-name">Dr TCHAPGA</h3>
                                            <span className="member-position">INSTRUCTOR </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default Users;