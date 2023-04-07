import React from 'react';
import CTA from '../../components/cta/cta';
import Footer from '../../components/footer/footer';
import NavWrapper from '../../components/navbar/navWrapper';

function CapEx() {

    return(
        <>
            <NavWrapper page='Capital Projects' />
            <CTA />
            <Footer />
        </>
    )

}

export default CapEx;