import React from "react";
import Header from "../../../components/header";
import CTA from "../../components/cta/cta";
import Footer from "../../components/footer/footer";
import NavWrapper from "../../components/navbar/navWrapper";
import dispatch from '../../images/dispatch.jpg';
import { Box } from "@mui/material";

function Recurring() {

    return (
        <>
            <NavWrapper page='recurring' />
            <CTA />
            <Header page='recurring' title='RECURRING MAINTENANCE' />

            <Box sx={{height: '500px', my: 5, mx: 5, overflowY: 'auto'}}>
                <img src={dispatch} style={{width: '100%'}} />
            </Box>

            <Footer />
        </>
    )
}

export default Recurring;