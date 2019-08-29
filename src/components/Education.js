import React, { Component } from 'react';
import '../style/style.scss';
import Header from '../components/Header';

export default class Education extends Component {
    state = {
        highschool: {
            year: '2009-2014',
            major: 'science-math',
            name: 'Wapipathum School'
        },
        collage: {
            year: '2015-2018',
            major: 'Computer Science',
            faculty: 'Science',
            name: 'Khon Kaen University'
        }
    }

    render() {
        return (
            <div>
                <div className="my-5">
                    <Header text="Education" />
                        <div className="row mt-3">
                        <div className="col-md-2 text-topic">
                            {this.state.highschool.year}
                        </div>
                        <div className="col-md-10 text-detail">
                            Major of {this.state.highschool.major}, {this.state.highschool.name}
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-2 text-topic">
                            {this.state.collage.year}
                        </div>
                        <div className="col-md-10 text-detail">
                            Major of {this.state.collage.major}, Faculty of {this.state.collage.faculty}, {this.state.collage.name}
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
