import React from 'react';
import './homestyle.css';
const NavBar =() => {
    return(
        <div>
                <ul>
                <li><a href="#/home">Home</a></li>
                <li><a href="#/carrier">Carrier</a></li>
                <li><a href="#/about">About</a></li>
                <li className='float-right'><a className="active" href="#/login">Logout</a></li>
            </ul>
        </div>
    )
};

export default NavBar; 