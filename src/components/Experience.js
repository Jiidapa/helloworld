import React, { Component } from 'react';
import Header from '../components/Header';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from "@fortawesome/free-solid-svg-icons";

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
                </div>
            </div>
        )
    }
}
