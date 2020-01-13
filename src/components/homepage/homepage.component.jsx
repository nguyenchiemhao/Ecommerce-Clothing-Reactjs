import React, { Component } from 'react'
import './homepage.style.scss';

export default class HomePage extends Component {
    render() {
        return (
            <div className='homepage'>
                <div className="directory-menu">
                    <div className="menu-item">
                        <div className="content">
                            <h1 className="title">
                                HATs
                            </h1>
                            <span className='subtitle'>
                                Shop Now
                            </span>
                        </div>
                    </div>
                    <div className="menu-item">
                        <div className="content">
                            <h1 className="title">
                                CLOTHes
                            </h1>
                            <span className='subtitle'>
                                Shop Now
                            </span>
                        </div>
                    </div>
                    <div className="menu-item">
                        <div className="content">
                            <h1 className="title">
                                SHOEs
                            </h1>
                            <span className='subtitle'>
                                Shop Now
                            </span>
                        </div>
                    </div>
                    <div className="menu-item">
                        <div className="content">
                            <h1 className="title">
                                MENs
                            </h1>
                            <span className='subtitle'>
                                Shop Now
                            </span>
                        </div>
                    </div>
                    <div className="menu-item">
                        <div className="content">
                            <h1 className="title">
                                WOMENs
                            </h1>
                            <span className='subtitle'>
                                Shop Now
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
