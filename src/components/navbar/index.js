import React, { Component } from 'react';

import './style.css';

import logo from '../../images/logo.png';

class Navbar extends Component {
    state={
        bgColor: 'transparent'
    }

    onScroll = () => {
        let bgColor = window.scrollY > 300 ? 'black' : 'transparent';
        let displayPage = window.scrollY > 500 ? true : false;
        this.setState({
            bgColor: bgColor,
            displayPage: displayPage
        })
    }

    componentDidMount() {
        document.addEventListener('scroll', this.onScroll)
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.onScroll)
    }

    render() {
        return(
            <nav className={this.props.blog ? `navbar navbar-expand-lg bg-blog fixed-top mx-0` : `mx-0 navbar navbar-expand-lg bg-dark navbar-dark fixed-top ${this.state.bgColor}`}  >
                <a className="navbar-brand" href="/"><img src={logo} id='logo' alt='Transblue Logo'></img></a>
                {this.state.displayPage && <div className='nav-page' href="/">{this.props.page}</div>}
                {this.props.franchise &&
                    <span className='location'>{this.props.city}, {this.props.state} <i className="fas fa-map-marker-alt"></i>
                    {this.props.phone} <i className="fas fa-phone"></i></span>}

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse pr-0" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item ml-auto">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item dropdown ml-auto">
                            <a className="nav-link dropdown-toggle ml-auto" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Services
                            </a>
                            <div className={`dropdown-menu ml-auto ${this.state.bgColor}`} aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="/residential">Residential</a>
                                <a className="dropdown-item" href="/commercial">Commercial</a>
                                <a className="dropdown-item" href="/multifamily">Multifamily</a>
                                <a className="dropdown-item" href="/government">Government</a>
                                <a className="dropdown-item" target='_blank' rel='noreferrer' href="https://tbsnow.herokuapp.com/">Snow</a>
                                <a className="dropdown-item" href="https://tbev.herokuapp.com/" target='_blank' rel='noreferrer'>EV</a>
                            </div>
                        </li>
                        <li className="nav-item ml-auto">
                            <a className="nav-link" href="/locations/">Locations</a>
                        </li>
                        <li className="nav-item ml-auto">
                            <a className="nav-link" href="/featured">Featured Projects</a>
                        </li>
                        {!this.props.franchise && <li className="nav-item ml-auto">
                            <a className="nav-link" target="_blank" rel="noreferrer" href="/blog">Blog</a>
                        </li>}
                        {!this.props.franchise && <li className="nav-item ml-auto">
                            <a className="nav-link" href="/franchise">Franchise</a>
                        </li>}
                        {this.props.franchise && 
                            <li className="nav-item ml-auto">
                            <a className="nav-link" href={`/${this.props.name}/subcontractor`} target='_blank' rel='noreferrer' >Subcontractor Form</a>
                        </li>}
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;