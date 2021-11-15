import React, { Fragment } from 'react';
import Header from '../../components/header';
import Navbar from '../../components/navbar';
import About from './about';
import './style.css';

function Careers() {
    return(
        <Fragment>
            <Header title='TRANSBLUE CAREERS' />
            <Navbar />
            <About />
        </Fragment>
    )
}

export default Careers;