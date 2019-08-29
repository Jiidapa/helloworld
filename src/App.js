import React, { Component } from 'react';
import './App.scss';
import Home from './components/Home';
import Profile from './components/Profile';
import Education from './components/Education';
import Experience from './components/Experience';
import Certification from './components/Certification';
import CareerHistory from './components/CareerHistory';
import Skill from './components/Skill';
import Contact from './components/Contact';

export default class App extends Component {
  render() {
    return (
      <div id="App">
        <div className="row justify-content-end mt-5" id="navbar">
          <div className="col-md-2">
            {/* <nav>
              <div id="list-example" className="list-group">
                <a className="list-group-item list-group-item-action" href="#home">Home</a>
                <a className="list-group-item list-group-item-action" href="#profile">Profile</a>
                <a className="list-group-item list-group-item-action" href="#education">Education</a>
                <a className="list-group-item list-group-item-action" href="#experience">Experience</a>
                <a className="list-group-item list-group-item-action" href="#certification">Certification</a>
                <a className="list-group-item list-group-item-action" href="#careerhistory">CareerHistory</a>
                <a className="list-group-item list-group-item-action" href="#skill">Skill</a>
                <a className="list-group-item list-group-item-action" href="#contact">Contact</a>
              </div>
            </nav> */}
          </div>
        </div>
        <div className="container">
          <section id="home"><Home /></section>
          <section id="profile"><Profile /></section>
          <section id="education"><Education /></section>
          <section id="experience"><Experience /></section>
          <section id="certification"><Certification /></section>
          <section id="careerhistory"><CareerHistory /></section>
          <section id="skill"><Skill /></section>
          <section id="contact"><Contact /></section>
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

