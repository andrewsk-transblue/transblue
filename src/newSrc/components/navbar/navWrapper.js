import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import MobileNavbar from "./mobileNavbar";
import Navbar from "./navbar";

function NavWrapper({ page }) {
    const [comp, setComp] = useState('large-screen');

    function changeScreenSize() {
        if(window.innerWidth < 800) {
            setComp('small-screen')
        }
        else {
            setComp('large-screen')
        }
    }

    useEffect(() => {
        changeScreenSize();

        window.addEventListener('resize', () => {
            changeScreenSize();
        })
    }, [])

    return(
        comp === 'large-screen'
            ?   <Navbar page={page} />
            :   <MobileNavbar page={page} />
    )
}

export default NavWrapper;