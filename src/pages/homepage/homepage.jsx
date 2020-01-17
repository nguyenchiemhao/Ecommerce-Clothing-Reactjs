import React, { Component } from 'react'
import './homepage.style.scss';
import DirectoryMenu from '../../components/directory-menu/directory-menu.component';

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }
    
    render() {
        return (
            <div className='homepage'>
                <DirectoryMenu/>
            </div>
        )
    }
}
