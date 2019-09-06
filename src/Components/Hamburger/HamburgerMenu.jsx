import React from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import './HamburgerMenu.scss';


const HamburgerMenu = () => {
    // const logout = () => {
    //     axios.get('/api/logout')
    //         .then(response => {
    //             this.props.history.push("/")
    //         })
    // }
    return (
        <div className="navigation">

            <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />

            <label htmlFor="navi-toggle" className="navigation__button">
                <span className="navigation__icon">&nbsp;</span>
            </label>

            <div className="navigation__background">&nbsp;</div>

            <nav className="navigation__nav">
                <div className="navigation__list">
                    <li className="navigation__item"><Link to="/main" className="navigation__link">Home</Link></li>
                    <li className="navigation__item"><Link to="/map" className="navigation__link">Map View</Link></li>
                    <li className="navigation__item"><Link to="/user" className="navigation__link">User Events</Link></li>
                    <li className="navigation__item"><Link to="/" className="navigation__link">Logout</Link></li>
                </div>
            </nav>
        </div>
    )
}

export default HamburgerMenu;