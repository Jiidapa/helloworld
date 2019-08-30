import React, { Component } from 'react';
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
                    <a className="nav-link" href="#home" rel="no">Home <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#profile" rel="no">Profile</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#education" rel="no">Education</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#experience" rel="no">Experience</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#certification" rel="no">Certification</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#careerhistory" rel="no">CareerHistory</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#skill" rel="no">Skill</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>

        <div className="container mt-5">
          <section id="home"><Home /></section>
          <section id="profile"><Profile /></section>
          <section id="education"><Education /></section>
          <section id="experience"><Experience /></section>
          <section id="certification"><Certification /></section>
          <section id="careerhistory"><CareerHistory /></section>
          <section id="skill"><Skill /></section>
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

