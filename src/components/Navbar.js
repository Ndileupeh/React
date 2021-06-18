import React from 'react';
import Users from './Users';
import logo2 from '../images/cot-logo-dark-1.png';
import { HashLink as Link } from 'react-router-hash-link';


const Navbar = () => {

    return (

        <div className="container-fluid">

            <div id="main-logo" className="logo-container">
                <Link className="logo" to="#head">
                    {/* <img src={logo} alt="DCode"/> */}
                    <img src={logo2} alt="DCode" width="300px" height="150px" />
                </Link>
            </div>
            
            <div className="menu-toggle-btn">
                       
                        <Link className="navbar-toggle">
                            <div className="burger-lines">
                            </div>
                        </Link>
                        
                    </div>
            <div id="navigation" className="nav navbar-nav navbar-main">
                <ul id="main-menu" className="menu-primary">
                    <li className="menu-item menu-item-has-children active">
                        <Link to="#head">Home</Link>

                    </li>
                    <li className="menu-item menu-item-has-children">
                        <Link to="#about">About</Link>


                    </li>
                    <li className="menu-item menu-item-has-children">
                        <Link to="#services">Services</Link>


                    </li>
                    <li className="menu-item menu-item-has-children">
                        <Link to="#facts">Activities</Link>

                    </li>
                    <li className="menu-item menu-item-has-children mega-menu">
                        <Link to="#users">Contact us</Link>

                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <div className="menu-button">
                    <a href="#" target="_blank">
                        <div className="btn btn-outline-primary btn-light">sign in</div>
                    </a>
                </div>
                <div className="search-option style-dark">
                    <div className="search-btn">
                        <a href="#"><i className="fas fa-search"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}




export default Navbar;