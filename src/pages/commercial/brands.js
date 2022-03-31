import React from 'react';
import './brands.css';

import cbre from './logos/cbre.png';
import costco from './logos/costco.png';
import starbucks from './logos/starbucks.png';
import trademark from './logos/trademark.png';
import walmart from './logos/walmart.png';
import wellsfargo from './logos/wellsfargo.png';


function Brands() {
    return(
        <div className='brands-wrapper container-fluid'>
            <h3>SERVICING TOP BRANDS NATIONWIDE</h3>
            <hr />
            <div className='row mt-4'>
                <div className='col-1'></div>
                <div className='col-lg-2 col-md-2 col-sm-4 col-4 my-auto brand-img'>
                    <img className='w-40' src={starbucks} alt='Enterprise' />
                </div>
                {/* <div className='col-lg-2 col-md-2 col-sm-4 col-4 my-auto brand-img'>
                    <img src={albertsons} alt='Albertsons' />
                </div> */}
                <div className='col-lg-2 col-md-2 col-sm-4 col-4 my-auto brand-img'>
                    <img src={cbre} alt='Boeing' />
                </div>
                <div className='col-lg-2 col-md-2 col-sm-4 col-4 my-auto brand-img'>
                    <img src={costco} alt='Gatorade' />
                </div>
                <div className='col-lg-2 col-md-2 col-sm-4 col-4 my-auto brand-img'>
                    <img src={walmart} alt='Goodwill' />
                </div>
                <div className='col-lg-2 col-md-2 col-sm-4 col-4 my-auto brand-img'>
                    <img src={wellsfargo} alt='Homestreet' />
                </div>
                <div className='col-1'></div>
            </div>
            {/* <div>
                <button className='download'>DOWNLOAD CASE STUDIES</button>
            </div> */}
            <div className='row mt-3'>
                <p>*All company names and logos are trademarks or registered tradmarks of their respective holders. Transblue is not associated with or sponsored by the companies listed above.</p>
                {/* <p>A l l c o m p a n y n a m e s a n d l o g o s a r e t r a d e m a r k s ™ o r r e g i s t e r e d ® t r a d e m a r k s o f t h e i r r e s p e c t i v e h o l d e r s . T r a n s b l u e i s n o t a s s o c i a t e d w i t h o r s p o n s o r e d b y t h e c o m p a n i e s l i s t e d a b o v e .</p> */}
            </div>
        </div>
    )
}

export default Brands;