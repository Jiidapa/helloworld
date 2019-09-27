import React, { Component } from 'react';
import Typist from 'react-typist';
import logo from '../images/logo.png';

export default class Home extends Component {
    render() {
        return (
            <>
                <div id="home" className="my-5 text-center">
                    <div className="row">
                        <div className="col-md-12">
                            <img src={logo} style={styles.logoSize} alt="logo" />
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-md-12 text-topic">
                            <Typist>Jida Hello World&#10084;</Typist>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}   

const styles = {
    logoSize : {
        width: '10%'
    }
}