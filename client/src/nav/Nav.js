import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.css';

import logo from '../resources/img/logo-transparent-smol-group.png';

class Nav extends React.Component {

    constructor(props) {
        super(props);
        this.isActive = this.isActive.bind(this);
    }

    render() {
        return (
            <nav>
                <div id="logo">
                    <Link to="/">
                        <img
                            src={logo}
                            alt="electronic tales logo" />
                    </Link>
                </div>
                <div id="nav-links"
                    className="desktop-visible">
                    <Link to="/why" className={this.isActive('/why')}>Pourquoi&nbsp;?</Link>
                    <Link to="/concept" className={this.isActive('/concept')}>Comment&nbsp;?</Link>
                    <Link to="/tracks" className={this.isActive('/tracks')}>Nos tracks</Link>
                    <Link to="/progress" className={this.isActive('/progress')}>On en est où ?</Link>
                    <Link to="/signup" className={this.isActive('/signup')}>Nous rejoindre</Link>
                    {/* <a href="">La team</a> */}
                </div>
                <button id="nav-button" className="button-design">
                    <Link to="/signup">
                        Je participe&nbsp;!
                    </Link>
                </button>
            </nav>
        );
    }

    isActive(elementName) {
        if (this.props.currentPath !== null) {
            return this.props.currentPath === elementName ? 'active' : null;
        }
    }
}

export default Nav;