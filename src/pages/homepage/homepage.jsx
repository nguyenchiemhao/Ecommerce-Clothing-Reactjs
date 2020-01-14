import React, { Component } from 'react'
import './homepage.style.scss';
import DirectoryMenu from '../../components/directory-menu/directory-menu.component';

export default class HomePage extends Component {
    render() {
        return (
            <div className='homepage'>
                <DirectoryMenu/>
            </div>
        )
    }
}
