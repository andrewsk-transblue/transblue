import React from 'react';
import fence from '../../../images/multifamily/fence.jpeg';
import deck from '../../../images/multifamily/deck.jpeg';

function Decks() {
    return(
        <div className='decks container-fluid'>
        <div className='row'>
            <div className='col-lg-4 col-md-12 order-lg-12 px-0'>
                <h4 className='section-header'>INCREASE SECURITY &amp; PRIVACY</h4>
                <div className='section-p pb-4'>Fencing is a key to privacy and needs to be replaced every 15-20 years. Whether your increasing property privacy or just replacing worn out fencing Transblue is the right choice for you! </div>
            </div>
            <div className='col-lg-4 col-md-6 px-0 mb-3'>
                <img className='decks-image' src={fence} alt='Multifamily Fence' />
                {/* <p className='mt-2'>FENCE INSTALLATION</p> */}
                <div className='overlay'></div>
                <div className='centered-text'>
                    FENCE INSTALLATION
                </div>
            </div>
            <div className='col-lg-4 col-md-6 px-0 mb-3'>
                <img className='decks-image' src={deck} alt='Multifamily Deck' />
                {/* <p className='mt-2'>DECK INSTALLATION</p> */}
                <div className='overlay'></div>
                <div className='centered-text'>
                    DECK INSTALLATION
                </div>
            </div>

        </div>
    </div>
    )
}

export default Decks;