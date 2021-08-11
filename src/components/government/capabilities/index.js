import React from 'react';
import './style.css';

function Capabilities() {
    return(
        <div>
            <a href={process.env.PUBLIC_URL + '/capabilities.pdf'} download>
                Capabilities Statement
            </a>
        </div>
    )
}

export default Capabilities;