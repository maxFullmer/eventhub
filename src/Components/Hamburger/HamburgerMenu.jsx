import React from 'react';
import { Link } from 'react-router-dom';
import './HamburgerMenu.scss';

const HamburgerMenu = () => {
    return (
        <div className="navigation">

            <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />

            <label htmlFor="navi-toggle" className="navigation__button">
                <span className="navigation__icon">&nbsp;</span>
            </label>

            <div className="navigation__background">&nbsp;</div>

            <nav className="navigation__nav">
                <div className="navigation__list">
                    <li className="navigation__item"><Link to="/main" className="navigation__link">Search for Events</Link></li>
                    <li className="navigation__item"><Link to="/map" className="navigation__link">Map View</Link></li>
                    <li className="navigation__item"><Link to="/user" className="navigation__link">Post Events</Link></li>
                </div>
            </nav>
        </div>
    )
}

export default HamburgerMenu;