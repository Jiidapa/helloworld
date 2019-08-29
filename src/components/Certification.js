import React, { Component } from 'react';
import Header from '../components/Header';
import '../style/style.scss';

export default class Certification extends Component {
    state = {
        certs: [
            {
                id: 1,
                name: 'Agile for Software Development for Academy | Siam Chamnankit',
                year: 'March 2017',
            },
            {
                id: 2,
                name: '16th Young Webmaster Camp: Ready to Disrupt (Web design)',
                year: 'December 2018',
            },
            {
                id: 3,
                name: 'Modern Web App Development using React and MERN Stack',
                year: 'August 2019',
            }
        ]
    }
    render() {
        return (
            <div>
                <Header text="Certification" />
                <div className="row">
                    <div className="col-md-12">
                            {
                                this.state.certs.map((cert) => {
                                    return (
                                        <div className="row mt-3" key={cert.id}>
                                            <div className="col-md-2 text-topic" key={cert.id}>
                                                {cert.year}
                                            </div>
                                            <div className="col-md-10 text-detail" key={cert.id}>
                                                {cert.name}
                                            </div>
                                        </div>
                                    )
                                })
                            }
                    </div>
                </div>
            </div>
        )
    }
}
