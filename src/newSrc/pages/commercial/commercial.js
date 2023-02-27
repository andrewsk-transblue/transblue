import React from "react";
import Header from "../../components/header/header";
import headerBg from '../../../images/commercial/header2.jpg';

function Commercial() {

    return (
        <>
            <Header
                img={headerBg}
                title='COMMERCIAL' 
                subtitle='Your Business Construction Solution'
            />
        </>
    )

}

export default Commercial;