import React from "react";
import Header from "../../components/header/header";
import headerBg from '../../../images/commercial/header2.jpg';
import NavWrapper from "../../components/navbar/navWrapper";
import CTA from "../../components/cta/cta";

function Commercial() {

    return (
        <>
            <NavWrapper page='commercial' />
            <CTA />
            <Header
                img={headerBg}
                title='COMMERCIAL' 
                subtitle='Your Business Construction Solution'
                name='commercial'
            />
        </>
    )
}

export default Commercial;