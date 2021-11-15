import React, { Fragment } from 'react';
import Header from '../../components/header';
import Navbar from '../../components/navbar';
import About from './about';
import Apply from './apply';
import './style.css';

function Careers(props) {
    console.log(props)
    return(
        <Fragment>
            <Header title='TRANSBLUE CAREERS' />
            <Navbar />
            <About />
            <Apply locations={props.locations} />
        </Fragment>
    )
}

export default Careers;