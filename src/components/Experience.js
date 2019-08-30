import React, { Component } from 'react';
import Header from '../components/Header';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from "@fortawesome/free-solid-svg-icons";
import pig1 from '../images/pig-food/pig1.jpg';
import pig2 from '../images/pig-food/pig2.JPG';
import pig3 from '../images/pig-food/pig3.jpg';
import krixxi1 from '../images/krixxi/krixxi1.jpg';
import krixxi2 from '../images/krixxi/krixxi2.jpg';
import easy1 from '../images/easyjob/easy1.jpg';
import easy2 from '../images/easyjob/easy2.jpg';
import easy3 from '../images/easyjob/easy3.jpg';
import easy4 from '../images/easyjob/easy4.jpg';
import easy5 from '../images/easyjob/easy4.jpg';

library.add(fas);

export default class Experience extends Component {
    state = {
        nsc: {
            name: 'เครื่องผสมอาหารสุกรอัตโนมัติ NSC ครั้งที่20',
            type: 'โปรแกรมเพื่อการประยุกต์ใช้งานสำหรับสื่อสารระหว่างสรรพสิ่ง (Internet of Things)',
            detail: 'เครื่องผสมอาหารสุกรอัตโนมัติ (Automatic pig feed mixer machine) เป็นอุปกรณ์ที่ช่วยเกษตรกรในการคำนวณวัตถุดิบที่ใช้ในการผสมอาหารของสุกรที่เหมาะสมสำหรับสุกรแต่ละประเภท หากวัตถุดิบที่ใช้ในการผสมบางชนิดหมด ก็จะคำนวณส่วนวัตถุดิบชนิดอื่นที่มีคุณค่าทางโภชณาการเหมือนกันมาแทน และทำการผสมอาหารอัตโนมัติ'
        },
        startup: {
            name: 'Krixxi แหล่งรวบรวมรวบรวมช่างภาพ',
            type: 'Start up',
            detail: 'เว็บแอปพลิเคชันรวบรวมช่างภาพ'
        },
        battleground: {
            name: 'Krixxi by EasyJob',
            type: 'start up (Hackathon)',
            detail: 'krixxi version bidding'
        }
    }
    render() {
        return (
            <div>
                <div className="my-5">
                    <Header text="Experience" />
                    <div className="row mt-3">
                        <div className="col-md-12 text-topic">
                            <FontAwesomeIcon icon={['fas', 'chevron-right']} /> {this.state.nsc.name}
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-md-2 text-topic">
                            Competition Type
                        </div>
                        <div className="col-md-10 text-detail">
                            {this.state.nsc.type}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2 text-topic">
                            Detail
                        </div>
                        <div className="col-md-10 text-detail">
                            {this.state.nsc.detail}
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-md-4">
                            <div className="card" style={{ width: '18rem' }}>
                                <img src={pig1} className="card-img-top" alt="..." />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card" style={{ width: '18rem' }}>
                                <img src={pig2} className="card-img-top" alt="..." />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card" style={{ width: '18rem' }}>
                                <img src={pig3} className="card-img-top" alt="..." />
                            </div>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-md-12 text-topic">
                            <FontAwesomeIcon icon={['fas', 'chevron-right']} /> {this.state.startup.name}
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-md-2 text-topic">
                            Competition Type
                        </div>
                        <div className="col-md-10 text-detail">
                            {this.state.startup.type}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2 text-topic">
                            Detail
                        </div>
                        <div className="col-md-10 text-detail">
                            {this.state.startup.detail}
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-md-4">
                            <div className="card" style={{ width: '18rem' }}>
                                <img src={krixxi1} className="card-img-top" alt="..." />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card" style={{ width: '18rem' }}>
                                <img src={krixxi2} className="card-img-top" alt="..." />
                            </div>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-md-12 text-topic">
                            <FontAwesomeIcon icon={['fas', 'chevron-right']} /> {this.state.battleground.name}
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-md-2 text-topic">
                            Competition Type
                        </div>
                        <div className="col-md-10 text-detail">
                            {this.state.battleground.type}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2 text-topic">
                            Detail
                        </div>
                        <div className="col-md-10 text-detail">
                            {this.state.battleground.detail}
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-md-4">
                            <div className="card" style={{ width: '18rem' }}>
                                <img src={easy3} className="card-img-top" alt="..." />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card" style={{ width: '18rem' }}>
                                <img src={easy4} className="card-img-top" alt="..." />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card" style={{ width: '18rem' }}>
                                <img src={easy5} className="card-img-top" alt="..." />
                            </div>
                        </div>
                        <div className="col-md-4 mt-2">
                            <div className="card" style={{ width: '18rem' }}>
                                <img src={easy1} className="card-img-top" alt="..." />
                            </div>
                        </div>
                        <div className="col-md-4 mt-2">
                            <div className="card" style={{ width: '18rem' }}>
                                <img src={easy2} className="card-img-top" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
