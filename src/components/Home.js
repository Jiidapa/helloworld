import React, { Component } from 'react';
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
                        <div className="col-md-12">
                            {/* I &#10084; React */}
                            Hello World&#10084;
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