import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {ReactComponent as Logo} from '../../assets/logo.svg';
import './header.style.scss';

export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <Link to='/' className='logo-container' >
                    <Logo className='logo'/>
                </Link>
                <div className="options">
                    <Link className='option' to='/shop' > SHOP </Link>
                    <Link className='option' to='/contact' > CONTACT </Link>
                </div>
            </div>
        )
    }
}
