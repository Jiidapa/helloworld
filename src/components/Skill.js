import React, { Component } from 'react'
import Header from './Header';
import '../style/style.scss';

export default class Skill extends Component {
    state = {
        skill: ['ReactJs', 'JavaScript', 'jQuery', 'AngularJS', 'Node.js', 'Express.js', 'Bootstrap', 'HTML', 'CSS', 'SCSS', 'C# (ASP.Net Core MVC)', 'C# (ASP.Net Core webapi)', 'C# (ASP.Net Framework)', 'Web Responsive', 'mySQL', 'MS SQL', 'Docker', 'Microservice', 'REST API'],
    }
    render() {
        return (
            <div className="my-5">
                <Header text="Skill" />
                <div className="row mt-3">
                    {this.state.skill.map((sk, index) => {
                        return (
                            <div className="col-md-3 text-detail" key={index}>
                                {sk}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

