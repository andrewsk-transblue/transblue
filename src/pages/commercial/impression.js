import React, {useRef, Fragment} from 'react';
import impression from '../../images/commercial/impression.jpg';
import downarrow from '../../images/commercial/downarrow.png';
import Refresh from './refresh';
import './style.css';

function Impression() {
    const myRef = useRef(null)
    const executeScroll = () => myRef.current.scrollIntoView({behavior: 'smooth'});
    return(
        <Fragment>
            <div className='impression-wrapper container-fluid px-0'>
                <img src={impression} alt='Commercial Exterior' />
                <div className='overlay'></div>
                <div className='text mx-0 row'>
                    <div className='col-lg-9 col-10'>
                        <h3>FIRST IMPRESSIONS MATTER.</h3>
                        <p>The exterior of your business is the first thing people see when they arrive or drive by. Make a lasting impression with a beautiful exterior.</p>
                    </div>
                    <div className='col-lg-3 col-2 my-auto text-center px-0'>
                        <div onClick={executeScroll}><img className='next-section' src={downarrow} alt='Next section' /></div>
                    </div>
                </div>
            </div>
            <div ref={myRef}>
                <Refresh />
            </div>
        </Fragment>
    )
}

export default Impression;