import React,  {Component} from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './style.css';

class Navbar extends Component {
    state={
        bgColor: 'transparent',
        // scrollHeight: 300
    }

    componentDidMount() {
        let tel;
        this.props.franchise === true ? tel = this.props.phone.replace(/[^A-Z0-9]/ig, "") : tel = '';
        // if(window.innerWidth < 992) this.setState({scrollHeight: 0})
        // this.props.page === 'CONTACT' ? this.setState({bgColor: 'black'}) :
        
        if(this.props.theme === 'dark') {
            this.setState({bgColor: 'black'})
        }

        else {
            document.addEventListener('scroll', () => {
                let bgColor = window.scrollY > window.innerWidth / 3 ? 'black' : 'transparent';
                let displayPage = window.scrollY >300 ? true : false;
                this.setState({
                    bgColor: bgColor,
                    displayPage: displayPage,
                    tel: tel
                })
            })
        }
    }

    render() {
        return(
            <nav className={`navbar navbar-expand-lg bg-dark navbar-dark fixed-top ${this.state.bgColor} ${this.props.page} ml-auto`}  >
                <a className="navbar-brand" href="/"><img src={logo} id='logo' alt='Transblue Logo'></img></a>
                {this.state.displayPage && <div className='nav-page'>{this.props.page}</div>}
                {this.props.franchise && <div className='franchise-contact'><i className='fas fa-map-marker-alt' />{this.props.city}, {this.props.state} <i className='fas fa-phone' /><a href={`tel:+${this.state.tel}`} >{this.props.phone}</a></div>}

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item ml-auto">
                            <Link className="nav-link" to="/">HOME</Link>
                        </li>
                        <li className="nav-item dropdown ml-auto">
                            <button className={this.props.parentPage === 'gc' ? 'nav-link dropdown-toggle ml-auto active' : 'nav-link dropdown-toggle ml-auto'} id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                GC
                            </button>
                            <div className={`dropdown-menu ${this.state.bgColor}`} aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="/residential">RESIDENTIAL</Link>
                                <Link className="dropdown-item" to="/multifamily">MULTIFAMILY</Link>
                                <Link className='dropdown-item' to="/commercial">COMMERCIAL</Link>
                                <Link className='dropdown-item' to="/government">GOVERNMENT</Link>
                                <Link className='dropdown-item' to="/featured">FEATURED PROJECTS</Link>
                            </div>
                        </li>
                        <li className="nav-item dropdown ml-auto">
                            <button className='nav-link dropdown-toggle ml-auto' id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                GREEN SERVICES
                            </button>
                            <div className={`dropdown-menu ${this.state.bgColor}`} aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="/">ABOUT</a>
                                <a className="dropdown-item" href="/residential">RESIDENTIAL</a>
                                <a className="dropdown-item" href="/multifamily">MULTIFAMILY</a>
                                <a className='dropdown-item' href="/commercial">COMMERCIAL</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown ml-auto">
                            <button className='nav-link dropdown-toggle ml-auto' id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                SNOW SERVICES
                            </button>
                            <div className={`dropdown-menu ${this.state.bgColor}`} aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="https://tbsnow.herokuapp.com/">About</a>
                                <a className="dropdown-item" href="https://tbsnow.herokuapp.com/operate">HOW WE OPERATE</a>
                                <a className='dropdown-item' href="https://tbsnow.herokuapp.com/emergency">EMERGENCY &amp; RISK</a>
                                <a className='dropdown-item' href="https://tbsnow.herokuapp.com/software">OUR SOFTWARE</a>
                                <a className='dropdown-item' href="https://tbsnow.herokuapp.com/gallery">GALLERY</a>
                                <a className='dropdown-item' href="https://tbsnow.herokuapp.com/pricing">PRICING</a>
                                <a className='dropdown-item' href="https://tbsnow.herokuapp.com/faq">FAQ</a>
                            </div>
                        </li>

                        <li className="nav-item dropdown ml-auto">
                            <button className='nav-link dropdown-toggle ml-auto' id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                OTHER
                            </button>
                            <div className={`dropdown-menu ${this.state.bgColor}`} aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="https://tbsnow.herokuapp.com/">CONTACT</a>
                                <a className="dropdown-item" href="https://tbsnow.herokuapp.com/operate">LOCATIONS</a>
                                <a className='dropdown-item' href="/blog">BLOG</a>
                                <a className='dropdown-item' href="https://tbsnow.herokuapp.com/software">FRANCHISE</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;