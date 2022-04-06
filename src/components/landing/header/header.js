import React from "react";
import './style.css';
import FranchiseNav from "../../franchiseNav";

function Header() {
    return(
        <>
            <FranchiseNav />
            <div className="landing header">
                <div id='img1'>
                    <div id='text-1'>
                        <h2>COMMERCIAL</h2>
                    </div>
                </div>
                <div id='img2'>
                    <div id='text-2'>
                        <h2>GOVERNMENT</h2>
                    </div>
                </div>
                <div id='img3'>
                    <div id='text-3'>
                        <h2>MULTIFAMILY</h2>
                    </div>
                </div>
                <div id='img4'>
                    <div id='text-4'>
                        <h2>RESIDENTIAL</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;