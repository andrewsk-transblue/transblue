import React, { Fragment } from 'react';
import Header from '../../components/header';
import Navbar from '../../components/navbar';
import About from './about';
import Apply from './apply';
import Footer from '../../components/footer';
import './style.css';
import Core from './core';
import What from './what';

function Careers(props) {
    return(
        <Fragment>
            <Header title='TRANSBLUE CAREERS' />
            <Navbar />
            <About />
            <Core />
            <What />
            <Apply locations={props.locations} />
            <Footer />
        </Fragment>
    )
}

export default Careers;