import React, { Component } from 'react';

import './menu-item.style.scss';
import BackgroundImage from '../background-image/background-image.component';

export default class MenuItem extends Component {
    render() {
        const { title, imageUrl } = this.props;
        return (
            <div className="menu-item">
                <BackgroundImage imageUrl={imageUrl}/>
                <div className="content">
                    <h1 className="title">
                        {title}
                    </h1>
                    <span className='subtitle'>
                        Shop Now
                    </span>
                </div>
            </div>
        )
    }
}
