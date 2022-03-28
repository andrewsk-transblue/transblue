import React, { useEffect, useRef, useState } from 'react';
import { Redirect } from 'react-router-dom';
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
    const [locations,setLocations] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    const applyRef = useRef(null)

    function scrollToApply() {
        applyRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    useEffect(() => {
        console.log(props.locations)
    }, [props.locations])
    
    return(
        submitted ? <Redirect to='/success' /> :
        <div className='career-wrapper'>
            <Helmet>
                <title>Transblue Careers</title>
                <meta name="description" content="Transblue is a world class general contractor located in different states that sets the standard for construction excellence. Become part of our Transblue Family today. Apply now!" />
            </Helmet>
            <Header title='TRANSBLUE CAREERS' name='careers' />
            <Navbar />
            <About scroll={scrollToApply} />
            <Core scroll={scrollToApply} />
            <What />
            <Apply locations={props.locations} innerRef={applyRef} redirect={() => setSubmitted(true)} />
            <Footer />
        </div>
    )
}

export default Careers;