import React, { Fragment, useEffect, useRef } from 'react';
import Header from '../../components/header';
import Navbar from '../../components/navbar';
import About from './about';
import Apply from './apply';
import Footer from '../../components/footer';
import './style.css';
import Core from './core';
import What from './what';

function Careers(props) {
    const applyRef = useRef(null)

    function scrollToApply() {
        applyRef.current.scrollIntoView({ behavior: 'smooth' })
    }
    
    return(
        <div className='career-wrapper'>
            <Header title='TRANSBLUE CAREERS' name='careers' />
            <Navbar />
            <About scroll={scrollToApply} />
            <Core scroll={scrollToApply} />
            <What />
            <Apply locations={props.locations} innerRef={applyRef} />
            <Footer />
        </div>
    )
}

export default Careers;