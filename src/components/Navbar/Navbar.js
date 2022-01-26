import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Navbar.scss';

class Navbar extends Component {
    state = {
        open: false
    }

    menuOpenHandler = () => {
        this.setState({ open: !this.state.open });
    };

    render() {
        return (
            <div className="row">
                <div className="container">
                    <div className="row">
                        <div className="col-12 app-navbar">
                            <img 
                                src="/assets/images/1280px-Upwork-logo.png" 
                                alt="Upwork Logo"
                                className="app-logo"
                            />
                            <div className="hamburger-menu" onClick={this.menuOpenHandler}>
                                <FontAwesomeIcon icon={faBars} />
                            </div>
                            <ul className="app-menu-desktop">
                                <li><NavLink to="/" className="nav--link">HOW IT WORKS</NavLink></li>
                                <li><NavLink to="/" className="nav--link">SOLUTIONS</NavLink></li>
                                <li><NavLink to="/" className="nav--link">ENTERPRISE</NavLink></li>
                                <li><NavLink to="/login" className="nav--link">LOG IN</NavLink></li>
                                <li><NavLink to="/" className="nav--link signup">Sign Up</NavLink></li>
                            </ul>
                        </div>
                        <ul className={`app-menu-mobile ${this.state.open ? 'app-menu-mobile-active' : ''}`}>
                            <div className="container">
                                <li><NavLink to="/" className="nav--link">HOW IT WORKS</NavLink></li>
                                <li><NavLink to="/" className="nav--link">SOLUTIONS</NavLink></li>
                                <li><NavLink to="/" className="nav--link">ENTERPRISE</NavLink></li>
                                <li><NavLink to="/" className="nav--link">LOG IN</NavLink></li>
                                <li><NavLink to="/" className="nav--link signup">Sign Up</NavLink></li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;

