import React, { Component } from 'react';

import './collection-item.style.scss';

export default class ColllectionItem extends Component {
    render() {
        const { name, imageUrl, price } = this.props;
        return (
            <div className='collection-item'>
                <div className="image"
                    style={{ backgroundImage: `url(${imageUrl})` }}
                />
                <div className="collection-footer">
                    <span className="name">{name}</span>
                    <span className="price">{price}</span>
                </div>
            </div>
        )
    }
}
