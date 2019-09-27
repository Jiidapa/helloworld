import React, { Component } from 'react';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import './App.scss';
import Home from './components/Home';
import Profile from './components/Profile';
import Education from './components/Education';
import Experience from './components/Experience';
import Certification from './components/Certification';
import CareerHistory from './components/CareerHistory';
import Skill from './components/Skill';
import './style/style.scss';

export default class App extends Component {
  render() {
    return (
      <div id="App">
        <div className="row">
          <div className="col-md-12">
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top nav-color">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <Link className="nav-link Menu__MenuTrigger Menu_Border" to="home" rel="no">Home <span className="sr-only">(current)</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link Menu__MenuTrigger Menu_Border" to="profile" rel="no">Profile</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link Menu__MenuTrigger Menu_Border" to="education" rel="no">Education</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link Menu__MenuTrigger Menu_Border" to="experience" rel="no">Experience</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link Menu__MenuTrigger Menu_Border" to="certification" rel="no">Certification</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link Menu__MenuTrigger Menu_Border" to="careerhistory" rel="no">CareerHistory</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link Menu__MenuTrigger Menu_Border" to="skill" rel="no">Skill</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>

        <div className="container mt-5">
          <Element name="home"><Home /></Element>
          <Element name="profile"><Profile /></Element>
          <Element name="education"><Education /></Element>
          <Element name="experience"><Experience /></Element>
          <Element name="certification"><Certification /></Element>
          <Element name="careerhistory"><CareerHistory /></Element>
          <Element name="skill"><Skill /></Element>
        </div>
      </div >
    );
  }
}

// const styles = {
//   sticky: {
//     marginTop: '-30%',
//     position: 'sticky',
//     top: '0',
//   }
// }

