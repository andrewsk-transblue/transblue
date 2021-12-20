import React from 'react';
import './awards.css';
import awardsDb from './awardsDb';

function Awards(props) {
    let awards = awardsDb[props.location]
    return(
        <div className='awards-wrapper' style={{width: '90%', margin: '0 auto'}}>
            <h2>AWARDS &amp; CERTIFICATES</h2>
            <div className='row'>
                {awards.length === 2 && 
                    <div className='col-lg-3'></div>
                }
                {awards.map(award => {
                    return(
                        <div className='col col-6 col-lg-3 col-md-3 my-auto text-center pt-4'>
                            <img src={award} alt='' style={{width: '80%'}} />
                        </div>
                    )
                })}
                {awards.length === 2 && 
                    <div className='col-lg-3'></div>
                }
            </div>
        </div>
    )
}

export default Awards;