import React from "react";
import './style.css';
import Military_Makover_OperationCareer_logo from '../../images/Military_Makover_OperationCareer_logo.png';
import screenshot from '../../images/screenshot.PNG';

function AsSeenOn() {

    return(
        <div className="container military-makeover">
            <div className="row">
                <div className="col-12 col-lg-6 px-0 text-secondary">
                    <h5>AS SEEN ON</h5>
                    <img src={Military_Makover_OperationCareer_logo} alt='' />
                </div>
                <div className="col-12 col-lg-6">
                    <a 
                        href='https://militarymakeover.tv/opportunities-for-building-a-better-america/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <img src={screenshot} alt='' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default AsSeenOn;