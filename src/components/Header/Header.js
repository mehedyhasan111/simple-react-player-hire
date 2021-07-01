import React from 'react';
import logo from '../../images/logo.jpg';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="" />
            <br />
            <h1 class="title">Bleacher Football</h1>



        </div>
    );
};

export default Header;