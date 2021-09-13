import React from 'react';
import './style.css';

function ThreeCols(props) {
    return(
        <div className='container-fluid three-cols'>
        <div className='row'>
            <div className='col-lg-12 title'>
                <h4 className='section-header'>{props.title}</h4>
                <p className='section-p'>{props.subtitle}</p>
                {/* <h3>LOWER YOUR ENERGY BILL AND ENVIRONMENTAL IMPACT WITH GREEN SOLUTIONS</h3> */}
            </div>
        </div>
        <div className='row'>
        <div className='col-lg-4 col-md-6'>
                <img src={props.card1.img} alt='Government Solar Roof' />
                <p className='subtitle'>{props.card1.title}</p>
                <p className='section-p mb-4'>{props.card1.body}</p>
            </div>
            <div className='col-lg-4 col-md-6'>
                <img src={props.card2.img} alt='Government EV Charger' />
                <p className='subtitle'>{props.card2.title}</p>
                <p className='section-p mb-4'>{props.card2.body}</p>
            </div>
            <div className='col-lg-4 col-md-6'>
                <img src={props.card3.img} alt='Porous Asphalt' />
                <p className='subtitle'>{props.card3.title}</p>
                <p className='section-p mb-4'>{props.card3.body}</p>
            </div>
        </div>
    </div>
    )
}

export default ThreeCols;