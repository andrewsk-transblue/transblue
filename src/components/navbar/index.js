import React,  {Component} from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './style.css';

class Navbar extends Component {
    state={
        bgColor: 'transparent',
        logo: true
        // scrollHeight: 300
    }

    componentDidMount() {
        // if(window.innerWidth < 992) this.setState({scrollHeight: 0})
        // this.props.page === 'CONTACT' ? this.setState({bgColor: 'black'}) :
        document.addEventListener('scroll', () => {
            // console.log(window.scrollY)
            let bgColor = window.scrollY > window.innerWidth / 3 ? 'black' : 'transparent';
            // if(this.props.page === 'CONTACT') bgColor = 'black'
            let displayPage = window.scrollY >300 ? true : false;
            this.setState({
                bgColor: bgColor,
                displayPage: displayPage
            })
        })
    }

    render() {
        return(
            <nav className={`navbar navbar-expand-lg bg-dark navbar-dark fixed-top ${this.state.bgColor} ${this.props.page} ml-auto`}  >
                {this.state.logo && <a className="navbar-brand" href="/"><img src={logo} id='logo' alt='Transblue Logo'></img></a>}
                {this.state.displayPage && <div className='nav-page'>{this.props.page}</div>}

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item ml-auto">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item dropdown ml-auto">
                            <button className='nav-link dropdown-toggle ml-auto' id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                General Contracting
                            </button>
                            <div className={`dropdown-menu ${this.state.bgColor}`} aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="/residential">Residential</Link>
                                <Link className="dropdown-item" to="/multifamily">Multifamily</Link>
                                <Link className='dropdown-item' to="/commercial">Commercial</Link>
                                <Link className='dropdown-item' to="/commercial">Government</Link>
                            </div>
                        </li>
                        <li className="nav-item dropdown ml-auto">
                            <button className={this.props.parentPage === 'ev' ? "nav-link dropdown-toggle ml-auto active" : 'nav-link dropdown-toggle ml-auto'} id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Green Services
                            </button>
                            <div className={`dropdown-menu ${this.state.bgColor}`} aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="/">About</a>
                                <a className="dropdown-item" href="/residential">Residential</a>
                                <a className="dropdown-item" href="/multifamily">Multifamily</a>
                                <a className='dropdown-item' href="/commercial">Commercial</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown ml-auto">
                            <button className='nav-link dropdown-toggle ml-auto' id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Snow Services
                            </button>
                            <div className={`dropdown-menu ${this.state.bgColor}`} aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="https://tbsnow.herokuapp.com/">About</a>
                                <a className="dropdown-item" href="https://tbsnow.herokuapp.com/operate">How We Operate</a>
                                <a className='dropdown-item' href="https://tbsnow.herokuapp.com/emergency">Emergency &amp; Risk</a>
                                <a className='dropdown-item' href="https://tbsnow.herokuapp.com/software">Our Software</a>
                                <a className='dropdown-item' href="https://tbsnow.herokuapp.com/gallery">Gallery</a>
                                <a className='dropdown-item' href="https://tbsnow.herokuapp.com/pricing">Pricing</a>
                                <a className='dropdown-item' href="https://tbsnow.herokuapp.com/faq">FAQ</a>
                            </div>
                        </li>
                        {/* <li className="nav-item ml-auto">
                            <a className={this.props.page === 'GALLERY' ? 'nav-link active' : 'nav-link'} href="/gallery">Gallery</a>
                        </li> */}
                        <li className="nav-item ml-auto">
                            <Link className={this.props.page === 'contact' ?"nav-link active" : "nav-link"} to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item ml-auto">
                            <Link className="nav-link" to="#">Franchise</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;