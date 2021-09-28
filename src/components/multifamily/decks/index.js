import React from 'react';
import fence from '../../../images/multifamily/fence.jpg';
import deck from '../../../images/multifamily/deck.jpg';

function Decks() {
    return(
        <div className='decks container-fluid'>
        <div className='row'>
            <div className='col-lg-5 col-md-12 order-lg-12 left-text'>
                <h4 className='section-header'>INCREASE SECURITY &amp; PRIVACY</h4>
                <p className='section-p'>At Transblue, we understand decks on your community properties. We understand that these decks are connected directly to your living space, and that their resurfacing or reconstruction needs to be done quickly and efficiently with high quality to minimize impact to your life. That is why Transblue is truly the right partner for your decking needs. </p>
                <p className='section-p'>Fencing is key to privacy and needs to be replaced every 15-20 years. Whether your increasing property privacy or just replacing worn out fencing, Transblue is the right choice for you! </p>
            </div>
            <div className='col-lg-7 col-md-6'>
                <div className='row'>
                    <img src={deck} alt='' />
                    {/* <div className='col-lg-6'>
                        <img className='decks-image' src={fence} alt='Multifamily Fence' />
                    </div>
                    <div className='col-lg-6'>
                        <img className='decks-image' src={deck} alt='Multifamily Deck' />
                    </div>
                    <div className='col-lg-6'>
                        <img className='decks-image' src={fence} alt='Multifamily Fence' />
                    </div>
                    <div className='col-lg-6'>
                        <img className='decks-image' src={deck} alt='Multifamily Deck' />
                    </div> */}
                </div>               
            </div>

        </div>
    </div>
    )
}

export default Decks;