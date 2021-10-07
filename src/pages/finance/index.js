import React, { Fragment } from 'react';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import './style.css';

function Finance() {

    return(
        <Fragment>
            <Navbar />
            <div className='finance-wrapper'></div>
            <Footer />
        </Fragment>
    )
}

export default Finance;