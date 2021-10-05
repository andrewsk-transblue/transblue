import React, {useRef, Fragment} from 'react';
import impression from '../../images/commercial/impression.jpg';
import impressionSmall from '../../images/commercial/impressionSmall.jpg';
import downarrow from '../../images/commercial/downarrow.png';
import paint from '../../images/commercial/paint.jpg';
import roof from '../../images/commercial/roof.jpg';
import asphalt from '../../images/commercial/asphalt2.jpg';
import refresh from '../../images/commercial/refresh.jpg';
import ThreeCols from '../../components/threeCol';
import './style.css';

function Impression() {
    const myRef = useRef(null)
    const executeScroll = () => myRef.current.scrollIntoView({behavior: 'smooth'});
    return(
        <Fragment>
            <div className='impression-wrapper'>
                <img src={impressionSmall} alt='Commercial Exterior' 
                    srcSet={`${impressionSmall} 600w, ${impression} 1500w`} 
                    sizes="(max-width: 600px) 100vw, (max-width: 900px) 100vw"
                />
                <div className='overlay'></div>
                <div className='text'>
                    <h3>FIRST IMPRESSIONS MATTER.</h3>
                    <p>The exterior of your business is the first thing people see when they arrive or drive by. Make a lasting impression with a beautiful exterior.</p>
                </div>
            </div>
            <div ref={myRef} className='wrapper'>
                <ThreeCols
                    title='REFRESH YOUR COMMERCIAL BRAND'
                    subtitle='Refreshed buildings keep property values high. Transblue is 100% committed to delivering World Class services that enhance the beauty of each and every space.'
                    card1={{
                        img: roof,
                        title: 'RETHINK YOUR ROOF',
                        body: "At Transblue we provide commercial roofing services, including stripping your old roofing system, making structural repairs as required, and re-roofing with roofing material chosen by you. We install metals, asphalt shingles, green roofs, tiles, torch down, and systems such as flat PVC and TPO."
                    }}
                    card2={{
                        img: asphalt,
                        title: 'ASPHALT SERVICES',
                        body: "We will assess your property's current condition and provide a quote to patch, pave, restore, mill, sealcoat or stripe your existing parking lot areas. We offer full-service paving for new construction. We also offer overlaying services for parking lots with excessive damaged asphalt."
                    }}

                    card3={{
                        img: refresh,
                        title: 'BRAND REFRESHES',
                        body: "Is your brand looking tired and in need of a face lift? Transblue can transform the exterior with a new design, façade, construction and paint! Ready for the inside as well? We offer new carpet, tiles, paint, and complete overhauls."
                    }}
                />
            </div>
        </Fragment>
    )
}

export default Impression;