import React, { Component } from 'react'
import Header from '../components/Header';
import '../style/style.scss';
export default class CareerHistory extends Component {
    state = {
        careerHistory: {
            position: 'Application Developer',
            company: 'G-ABLE CO., LTD. | January 2019 - present',
            project: 'Knowledge Management Outsouring System',
            services: ['Admin Management Service', 'Profile Service', 'Skill Assetment Service', 'Document Sharing Service'],
            technologies: ['Agile Methodology', 'Frontend Developer (AngularJs, Asp.Net core MVC)', 'Backend Developer (Asp.Net Core 2.1 webapi)', 'Docker', 'Microservice', 'Swagger', 'RESTFul API', 'MySQL', 'AWS S3', 'Gitlab', 'JWT']
        },
        coop: {
            position: 'Cooperative Education FullStack Developer',
            company: 'G-ABLE CO., LTD. | JUNE 2018 - NOVEMBER 2018',
            service: 'Document Sharing Service',
            technologies: ['Frontend (ASP.NET Core MVC & AngularJS', 'Backend (ASP.NET Core Web API)', 'Docker', 'Microservice- RESTFul API', 'MySQL', 'Amazon S3', 'GitLab', 'Swagger', ' Postman']
        }
    }
    render() {
        const { position, company, project, services, technologies } = this.state.careerHistory;
        return (
            <div className="mt-5">
                <Header text="Carrer History" />
                <div className="row mt-3">
                    <div className="col-md-4">
                        <div className="row">
                            <div className="col-md-12 text-topic">
                                {position}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 text-topic">
                                {company}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-2 text-topic-secondary">
                                Service:
                            </div>
                            <div className="col-md-10 text-detail">
                                {services}
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-md-2 text-topic-secondary">
                                Technologies:
                            </div>
                            <div className="col-md-10">
                                {technologies.map((technology, index) => {
                                    return (
                                        <ul key={index}>
                                            <li className="text-detail" style={{ lineHeight: '2px' }}>
                                                {technology}
                                            </li>
                                        </ul>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-4">
                        <div className="row">
                            <div className="col-md-12 text-topic">
                                {position}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 text-topic">
                                {company}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-2 text-topic-secondary">
                                Project:
                            </div>
                            <div className="col-md-10 text-detail">
                                {project}
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-md-2 text-topic-secondary">
                                Serivces:
                            </div>
                            <div className="col-md-10">
                                {
                                    services.map((service, index) => {
                                        return (
                                            <ul key={index} style={{ lineHeight: '2px' }}>
                                                <li className="text-detail">
                                                    {service}
                                                </li>
                                            </ul>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-md-2 text-topic-secondary">
                                Technologies:
                            </div>
                            <div className="col-md-10">
                                {technologies.map((technology, index) => {
                                    return (
                                        <ul key={index}>
                                            <li className="text-detail" style={{ lineHeight: '2px' }}>
                                                {technology}
                                            </li>
                                        </ul>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
