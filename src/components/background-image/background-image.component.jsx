import React, { Component } from 'react'
import './background-image.style.scss'

export default class BackgroundImage extends Component {
    render() {
        const {imageUrl} = this.props;
        return (
            <div className='background-image' style={{backgroundImage : `url(${imageUrl})`}}>
            </div>
        )
    }
}
