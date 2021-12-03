import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/header';
import Navbar from '../../components/navbar';
import About from './about';
import Apply from './apply';
import Footer from '../../components/footer';
import './style.css';
import Core from './core';
import What from './what';

function Careers(props) {
    const [locations,setLocations] = useState([])
    const applyRef = useRef(null)

    function scrollToApply() {
        applyRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    useEffect(() => {
        console.log(props.locations)
    }, [props.locations])
    
    return(
        <div className='career-wrapper'>
            <Helmet>
                <title>Transblue Careers</title>
                <meta name="description" content="Become part of our Transblue Family today!" />
            </Helmet>
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