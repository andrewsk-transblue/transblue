import React from "react";
import Header from "../../../components/header";
import CTA from "../../components/cta/cta";
import NavWrapper from "../../components/navbar/navWrapper";

function Residential() {

    return(
        <>
            <Header title='RESIDENTIAL' subtitle='Make your backyard feel like home' name='residential' />
            <NavWrapper />
            <CTA />
        </>
    )
}

export default Residential;