import React, {useRef, Fragment} from 'react';
import Decks from '../decks';
import assets from '../../../images/multifamily/assets.png';
import assetsSmall from '../../../images/multifamily/assetsSmall.png';
import downarrow from '../../../images/commercial/downarrow.png';
import './style.css';

function Assets() {
    const myRef = useRef(null)
    const executeScroll = () => myRef.current.scrollIntoView({behavior: 'smooth'});
    return(
        <Fragment>
            <div className='assets-wrapper container-fluid w-100 px-0'>
                <img src={assetsSmall} alt='Multifamily Residence' srcSet={`${assetsSmall} 576w, ${assets} 2000w`} />
                <div className='overlay'></div>
                <div className='text row mx-0'>
                    <div className='col-lg-9 pl-4'>
                        <h3>PROTECT YOUR ASSETS</h3>
                        <p>Investing in your property is key to keeping up property values. Take care of the common elements and work with Transblue to deliver a World Class finish to your community's capital projects.</p>
                    </div>
                    <div className='col-lg-3 my-auto text-center'>
                        <div onClick={executeScroll}><img className='next-section' src={downarrow} alt='Next Section' /></div>
                    </div>
                </div>
            </div>
            <div ref={myRef}><Decks /></div>
        </Fragment>
    )
}

export default Assets;