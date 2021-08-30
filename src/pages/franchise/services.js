import React, {useState} from 'react';
import services from '../../images/franchise/services.jpeg';
import './services.css';

function Services() {
    return(
        <div className='franchise-services-full'>
            <img src={services} alt='' />
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-6 list px-0'>
                    <h5>GREEN SERVICES</h5>
                        <div className='row body'>
                            <div className='col-lg-4 section-p'>
                                Solar Panels<br />
                                Sustainable Roofs<br />
                                EV Installation<br />
                            </div>
                            <div className='col-lg-4 section-p'>
                                Shade Structures<br />
                                Xeriscapes<br />
                                LED<br />
                                Pavement
                            </div>
                            <div className='col-lg-4 section-p'>
                                Bioswales<br />
                                HVAC<br />
                                Water Reclamation
                            </div>
                        </div>
                        <div className='card-text'>
                            <a className='cta' href='/'>GREEN WEBSITE</a>
                        </div>
                    </div>
                    <div className='col-lg-6 my-auto'>
                        <div className='description'>
                            <h6>SOLAR PANELS</h6>
                        <p>Solar power systems derive clean, pure energy from the sun. Installing solar panels on your home or business helps combat greenhouse gas emissions and reduces our collective dependence on fossil fuel. Traditional electricity is sourced from fossil fuels such as coal and natural gas.</p>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-6 list px-0'>
                    <h5>SNOW SERVICES</h5>
                        <div className='row body'>
                            <div className='col-lg-6 section-p'>
                                Snow Hauling<br />
                                De-icing<br />
                                Plowing<br />
                                
                            </div>
                            <div className='col-lg-6 section-p'>
                                Truck top clearing<br />
                                Snow Melting
                            </div>
                        </div>
                        <a className='cta' href='/'>SNOW WEBSITE</a>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-6 list px-0'>
                        <h5>GENERAL CONTRACTING</h5>
                        <div className='row body'>
                            <div className='col-lg-4 section-p pr-0'>
                                Concrete<br />
                                Patios<br />
                                Flagstone<br />
                                Retaining Walls<br />
                                Structural Support<br />
                                Landscape Design<br />
                            </div>
                            <div className='col-lg-4 section-p'>
                                Fences<br />
                                Gates<br />
                                Outdoor Kitchens<br />
                                Firepits<br />
                                Paving<br />
                                Crack Seal<br />
                            </div>
                            <div className='col-lg-4 section-p'>
                                Roofing<br />
                                Siding<br />
                                Striping<br />
                                Synthetic Turf<br />
                                Slope Creep
                            </div>
                        </div>
                        <a className='cta' href='/'>GC WEBSITE</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;