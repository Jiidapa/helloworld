import React, { Component } from 'react';
import '../style/style.scss';

export default class Header extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-12 text-header">
                    {this.props.text}
                    <div className="topic-border-bottom"></div>
                </div>
            </div>
        )
    }
}
