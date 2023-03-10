import React from "react";
import Header from "../../../components/header";
import CTA from "../../components/cta/cta";
import Footer from "../../components/footer/footer";
import NavWrapper from "../../components/navbar/navWrapper";

function Recurring() {

    return (
        <>
            <NavWrapper page='recurring' />
            <CTA />
            <Header page='recurring' title='RECURRING MAINTENANCE' />
            <Footer />
        </>
    )
}

export default Recurring;