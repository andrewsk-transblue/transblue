import React, {useRef, Fragment} from 'react';
import impression from '../../images/commercial/impression.jpg';
import impressionSmall from '../../images/commercial/impressionSmall.jpg';
import downarrow from '../../images/commercial/downarrow.png';
import paint from '../../images/commercial/paint.jpg';
import roof from '../../images/commercial/roof.jpg';
import asphalt from '../../images/commercial/asphalt2.jpg';
import Refresh from '../../components/refresh';
import './style.css';

function Impression() {
    const myRef = useRef(null)
    const executeScroll = () => myRef.current.scrollIntoView({behavior: 'smooth'});
    return(
        <Fragment>
            <div className='impression-wrapper container-fluid px-0'>
                <img src={impressionSmall} alt='Commercial Exterior' 
                    srcSet={`${impressionSmall} 600w, ${impression} 1500w`} 
                    sizes="(max-width: 600px) 100vw, (max-width: 900px) 100vw"
                />
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
                <Refresh
                    title={'REFRESH YOUR COMMERCIAL BRAND'}
                    images={[asphalt, paint, roof]}
                    subtitles={['ASPHALT SERVICES', 'ROOFING SERVICES', 'BRAND REFRESHES']}
                    body={[
                        "We will assess your property's current condition and provide a quote to patch, pave, restore, mill, sealcoat or stripe your existing parking lot areas. We offer full-service paving for new construction. We also offer overlaying services for parking lots with excessive damaged asphalt.",
                        "At Transblue we provide commercial roofing services, including stripping your old roofing system, making structural repairs as required, and re-roofing with roofing material chosen by you. We install metals, asphalt shingles, green roofs, tiles, torch down, and systems such as flat PVC and TPO.",
                        "Is your brand looking tired and in need of a face lift? Transblue can transform the exterior with a new design, façade, construction and paint! Ready for the inside as well? We offer new carpet, tiles, paint, and complete overhauls."
                    ]}
                />
            </div>
        </Fragment>
    )
}

export default Impression;