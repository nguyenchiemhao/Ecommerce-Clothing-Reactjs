import React, { Component } from 'react';

import './menu-item.style.scss';
import BackgroundImage from '../background-image/background-image.component';
import { withRouter } from 'react-router-dom';

class MenuItem extends Component {
    render() {
        const { title, imageUrl, linkUrl, history, match } = this.props;
        return (
            <div className="menu-item" onClick={() => history.push(`${match.url}${linkUrl}`)}>
                <BackgroundImage imageUrl={imageUrl} />
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

export default withRouter(MenuItem);