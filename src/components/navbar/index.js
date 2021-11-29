import React,  {Component} from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './style.css';

class Navbar extends Component {
    state={
        bgColor: 'transparent',
        topPadding: 'topPadding',
        rightPadding: false
        // scrollHeight: 300
    }

    componentDidMount() {
        let tel;
        this.props.franchise === true ? tel = this.props.phone.replace(/[^A-Z0-9]/ig, "") : tel = '';
        
        if(this.props.theme === 'dark') {
            this.setState({bgColor: 'black'})
        }

        else {
            document.addEventListener('scroll', () => {
                let bgColor = window.scrollY > window.innerHeight / 2 ? 'black' : 'transparent';
                let displayPage = window.scrollY >300 ? true : false;
                //console.log(window.scrollY)
                this.setState({
                    bgColor: bgColor,
                    displayPage: displayPage,
                    tel: tel,
                })
            })
        }

        document.addEventListener('scroll', () => {
            let topPadding = window.scrollY > 30 ? '' : 'topPadding';
            this.setState({topPadding: topPadding})
        })
    }

    toggleSmallScreen = () => {
        if(this.state.bgColor === 'transparent' && window.scrollY < window.innerHeight) this.setState({bgColor: 'black'})
        else if(this.state.bgColor === 'black' && window.scrollY < window.innerWidth / 3) this.setState({bgColor: 'transparent'})
    }

    toggleFranchisePadding = (bool) => {
        this.setState({rightPadding: bool}, () => console.log(this.state.rightPadding))
    }

    render() {
        return(
            <nav className={`navbar navbar-expand-xl bg-dark navbar-dark fixed-top ${this.state.bgColor} ${this.props.page} ${this.state.topPadding} ml-auto`}  >
                <Link className="navbar-brand" to="/">
                    <img src={logo} id='logo' alt='Transblue Logo'></img>
                </Link>
                {this.state.displayPage && <div className='nav-page'>{this.props.page}</div>}

                <button onClick={this.toggleSmallScreen} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse flex-lg-column" id="navbarNav">

                    <ul className="navbar-nav ml-auto flex-xl-row">
                        <li className="nav-item ml-auto">
                            <Link className="nav-link" to="/">HOME</Link>
                        </li>
                        <li className="nav-item dropdown ml-auto">
                            <button className={this.props.parentPage === 'gc' ? 'nav-link dropdown-toggle ml-auto active' : 'nav-link dropdown-toggle ml-auto'} id="navbarDropdown1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                SERVICES
                            </button>
                            <div className={`dropdown-menu ${this.state.bgColor}`}  aria-labelledby="navbarDropdown1">
                                <Link className="dropdown-item" to="/residential">RESIDENTIAL</Link>
                                <Link className="dropdown-item" to="/multifamily">MULTIFAMILY</Link>
                                <Link className='dropdown-item' to="/commercial">COMMERCIAL</Link>
                                <Link className='dropdown-item' to="/government">GOVERNMENT</Link>
                            </div>
                        </li>
                        <li className="nav-item dropdown ml-auto">
                            <button className='nav-link dropdown-toggle ml-auto' id="navbarDropdown2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                GREEN SOLUTIONS
                            </button>
                            <div className={`dropdown-menu ${this.state.bgColor}`} aria-labelledby="navbarDropdown2">
                                <a className="dropdown-item" href="http://green.transblue.com/">ABOUT</a>
                                <a className="dropdown-item" href="http://green.transblue.com/residential">RESIDENTIAL</a>
                                <a className="dropdown-item" href="http://green.transblue.com/multifamily">MULTIFAMILY</a>
                                <a className='dropdown-item' href="http://green.transblue.com/commercial">COMMERCIAL</a>
                            </div>
                        </li>
                        <li className="nav-item ml-auto">
                            <a className="nav-link" href="http://snow.transblue.com/">SNOW REMOVAL</a>
                        </li>

                        <li className="nav-item ml-auto">
                            <Link className="nav-link" to="/locations">LOCATIONS</Link>
                        </li>

                        <li className="nav-item dropdown ml-auto">
                            <button className='nav-link dropdown-toggle ml-auto' id="navbarDropdown3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            OTHER
                            </button>
                            <div className={this.props.page === 'LOCATIONS' ? `dropdown-menu dropdown-locations` : `dropdown-menu ${this.state.bgColor}`} aria-labelledby="navbarDropdown3">
                                <Link to='/subcontractor' className='dropdown-item'>SUBCONTRACTORS</Link>
                                <Link className='dropdown-item' to='/finance'>GET FINANCED</Link>
                                {!this.props.franchise && <Link className="dropdown-item" to="/contact">CONTACT</Link>}
                                <Link className='dropdown-item' to='/featured'>PROJECTS</Link>
                                <a className='dropdown-item' href="/blog">BLOG</a>
                                <Link className='dropdown-item' to='/givesback'>GIVING BACK</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;