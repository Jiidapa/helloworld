import React, { Component } from 'react';
import jida from '../images/jida.jpg';
import '../style/style.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Header from './Header';

library.add(fab, fas);

export default class Profile extends Component {
    state = {
        aboutEye: {
            fullname: 'Jidapa Pattanang',
            nickname: 'Eye',
            birthdate: '20 Dec 1996',
            address: {
                no: 335,
                soi: 'Nonsi14',
                road: 'Nonsi Road',
                subDistrict: 'Chong Nonsi',
                district: 'Yannawa',
                province: 'Bangkok',
                postalNo: '10120'
            },
            github: 'https://github.com/jiidapa',
            gitlab: 'https://gitlab.com/jidapa'
        }
    }

    render() {
        const { fullname, nickname, birthdate, address: { no, soi, road, subDistrict, district, province, postalNo }, github, gitlab } = this.state.aboutEye;
        return (
            <>
                <div className="my-5" id="profile">
                    <Header text="Profile" />
                    <div className="row mt-3">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-3">
                                    <img src={jida} alt="logo" style={{ width: '100%' }} />
                                </div>
                                <div className="col-md-9">
                                    <div className="row">
                                        <div className="col-md-2 text-topic">
                                            <FontAwesomeIcon icon={['fas', 'user']} /> Fullname:
                                        </div>
                                        <div className="col-md-10 text-detail">
                                            {fullname}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-2 text-topic">
                                            <FontAwesomeIcon icon={['fas', 'user']} /> Nickname:
                                        </div>
                                        <div className="col-md-10 text-detail">
                                            {nickname}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-2 text-topic">
                                            <FontAwesomeIcon icon={['fas', 'birthday-cake']} /> Birthdate:
                                        </div>
                                        <div className="col-md-10 text-detail">
                                            {birthdate}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-2 text-topic">
                                            <FontAwesomeIcon icon={['fas', 'address-card']} /> Address:
                                        </div>
                                        <div className="col-md-10 text-detail">
                                            {no} soi {soi}, {road}, {subDistrict}, {district}, {province}, {postalNo}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-2 text-topic">
                                            <FontAwesomeIcon icon={['fab', 'github']} /> GitHub:
                                        </div>
                                        <div className="col-md-10 text-detail">
                                            <a className="text-link" target="_blank" rel="noopener noreferrer" href={github} >{github}</a>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-2 text-topic">
                                            <FontAwesomeIcon icon={['fab', 'gitlab']} /> GitLab:
                                        </div>
                                        <div className="col-md-10 text-detail">
                                            <a className="text-link" target="_blank" rel="noopener noreferrer" href={gitlab} >{gitlab}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}


