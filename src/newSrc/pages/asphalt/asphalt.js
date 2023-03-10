import React from "react";
import Header from "../../../components/header";
import CTA from "../../components/cta/cta";
import Footer from "../../components/footer/footer";
import NavWrapper from "../../components/navbar/navWrapper";

function Asphalt() {

    return (
        <>
            <Header page='asphalt' title='ASPHALT' />
            <CTA />
            <NavWrapper page='asphalt' />
            <Footer />
        </>
    )
}

export default Asphalt;