import React from 'react';
import './finance.css';

function Finance(props) {
    return(
        <div className='finance-bg' data-region={props.location.region}>
            <div className='franchise-finance text-center'>
                <a href='https://app.gethearth.com/partners/transblue-norfolk' target='_blank' rel='noreferrer'>GET FINANCED</a>
            </div>
        </div>
    )
}

export default Finance;