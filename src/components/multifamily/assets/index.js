import { Typography } from '@mui/material';
import React, {useRef, Fragment} from 'react';
import './style.css';

function Assets() {
    const myRef = useRef(null)
    return(
        <Fragment>
            <div className='assets-wrapper container-fluid w-100 px-0'>
                <div className='overlay'></div>
                <div className='text row mx-0'>
                    <div className='col-lg-9 col-10 pl-4'>
                        <Typography variant='h1' sx={{color: 'white', mb: 2}}>PROTECT YOUR ASSETS</Typography>
                        <p>Investing in your property is key to keeping up property values. Take care of the common elements and work with Transblue to deliver a World Class finish to your community's capital projects.</p>
                    </div>
                    {/* <div className='col-lg-3 col-2 my-auto text-center'>
                        <div onClick={executeScroll}><img className='next-section' src={downarrow} alt='Next Section' /></div>
                    </div> */}
                </div>
            </div>
        </Fragment>
    )
}

export default Assets;