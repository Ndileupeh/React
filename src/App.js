import React from 'react'
import Header from "./components/Header"
import Head from "./components/Head"
import About from './components/About'
import Aboutone from './components/Aboutone'
import Services from './components/Services'
import Users from './components/Users'
import Facts from './components/Facts'
import Factss from './components/Factss'
import Testimony from './components/Testimony'
import Footer from './components/Footer'
import Advert from './components/Advert'

import './css/animate.css';
import './css/bootstrap.min.css';
import './css/slick.css';
// import './css/materialdesignicons.min.css';
import './css/line-awesome.min.css';
import './css/fontawesome.min.css';
import './css/style.css';
// import './css/rtl-style.css';
import './css/colors/default-color.css';
import './fonts/la-brands-400.svg';
import './fonts/la-regular-400.svg';
import './fonts/la-solid-900.svg';
import './fonts/fa-solid-900.svg';
import './fonts/fa-brands-400.svg';
import './fonts/fa-regular-400.svg';
import * as $ from 'jquery';
import { BrowserRouter, Route } from 'react-router-dom'
import { Component } from 'react'
import { Helmet } from "react-helmet";

// import('./js/jquery.min.js');
//     import('./js/dcode.js');
//     import('./js/bootstrap.bundle.min.js');
//     import('./js/appear.js');
//     import('./js/wow.min.js');
//     import('./js/slick.min.js');
//     import('./js/dcode.js');


// https://hungry-goldwasser-b388cd.netlify.app/

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="box-wrapper">
       
          <Header />
          <div id="main-wrapper" className="page-wrapper">
            <Head />
            <About />
            <Aboutone />

            <Services />
            <Advert />
            <Users />
            <Facts />
            {/* <Factss /> */}
            <Testimony />
          </div>
          <footer className="site-footer footer-theme-two">
          <Footer />
          </footer>
          <Helmet>
            <script src="./js/jquery.min.js"></script>
            <script src="./js/jquery-migrate.min.js"></script>
            <script src="./js/bootstrap.bundle.min.js"></script>
            <script src="./js/jquery.easing.min.js"></script>
            <script src="./js/scrollspy.min.js"></script>
            <script src="./js/appear.js"></script>

            <script src="./js/wow.min.js"></script>

            <script src="./js/slick.min.js"></script>

            <script src="./js/dcode.js"></script>
          </Helmet>


        </div>
      </BrowserRouter>
    );
  }


  componentDidMount() {
    // import('./js/jquery.min.js');
    // import('./js/dcode.js');
    // import('./js/bootstrap.bundle.min.js');
    // import('./js/appear.js');
    // import('./js/wow.min.js');
    // import('./js/slick.min.js');
    // import('./js/dcode.js');

  }
}

export default App;
