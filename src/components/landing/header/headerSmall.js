import React, { useState } from "react";
import './headerSmall.css';
import FranchiseNav from "../../franchiseNav";

function HeaderSmall() {
    const [displayComm, setDisplayComm] = useState(false);
    const [displayGovt, setDisplayGovt] = useState(false);
    const [displayMulti, setDisplayMulti] = useState(false);
    const [displayRes, setDisplayRes] = useState(false);

    return(
        <>
            <FranchiseNav />
            <div className="landing header small">
                <div id='img1-small' data-display={displayComm ? 'display' : ''} onClick={() => setDisplayComm(!displayComm)}>
                    <div id='text-1-small'>
                        <h2>COMMERCIAL</h2>
                    </div>
                </div>
                <div id='img2-small' data-display={displayGovt ? 'display' : ''} onClick={() => setDisplayGovt(!displayGovt)}>
                    <div id='text-2-small'>
                        <h2>GOVERNMENT</h2>
                    </div>
                </div>
                <div id='img3-small' data-display={displayMulti ? 'display' : ''} onClick={() => setDisplayMulti(!displayMulti)}>
                    <div id='text-3-small'>
                        <h2>MULTIFAMILY</h2>
                    </div>
                </div>
                <div id='img4-small' data-display={displayRes ? 'display' : ''} onClick={() => setDisplayRes(!displayRes)}>
                    <div id='text-4-small'>
                        <h2>RESIDENTIAL</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderSmall;