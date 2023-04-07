import React from 'react';
import Header from '../../../components/header';
import CTA from '../../components/cta/cta';
import Footer from '../../components/footer/footer';
import NavWrapper from '../../components/navbar/navWrapper';

function CapEx() {

    return(
        <>
            <NavWrapper page='Capital Projects' />
            <CTA />
            <Header name='capex' title='CAPITAL EXPENDITURE' />
            <Footer />
        </>
    )

}

export default CapEx;