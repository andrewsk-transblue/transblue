import React from 'react';
import Section from '../../components/section';
import './snow.css';

// function Snow(props) {
//     return(
//         <Section
//             title='SNOW &amp; ICE SERVICES'
//             p1={`${props.location.name} supplies 24/7 service for our snow plowing and ice control clients. We service industrial parks, business parks, government lots, retail stores, medical facilities, banks, gas stations, warehouses, airports, HOAs, COAs, and apartment complexes. We understand the importance of documentation and each plow report comes with before and after pictures and a climatic condition report, ensuring minimum liability.`}
//             p2=''
//             contact={props.location}
//             imageSide='left'
//         />
//     )
// }

function Snow(props) {

    return(
        <div className='franchise-snow bg-light'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12 col-lg-4 my-auto right-text'>
                        <h2>SNOW &amp; ICE MANAGEMENT</h2>
                        <p>
                            Transblue has been providing snow and ice management for nearly 20 years. Let Transblue take care of your property this winter.
                            {/* At Transblue, we know that quality and cost are the driving forces behind choosing the right snow removal partner for your brand's locations.
                            Our comprehensive snow removal management plans will help stay on budget, cost control initiatives, project planning and management, and environmental impacts that face your brand's image every day. */}
                        </p>
                        <a className='cta' href='https://tbsnow.herokuapp.com'>SNOW WEBSITE</a>

                    </div>
                    <div className='col-12 col-lg-8'>
                        <div className='card-deck'>
                            <div className='snow-card card'>
                                <h3 className='section-header'>OUR SERVICES</h3>
                                <hr />
                                <div className='section-p'>
                                    Snow Plowing<br />
                                    Deicing – liquid and granular<br />
                                    Snow Hauling<br />
                                    Sidewalk shoveling<br />
                                    Sidewalk deicing<br />
                                    Snow Melting<br />
                                    Truck Brush Services<br />
                                    Icicle Melting<br />
                                    Rooftop clearing
                                </div>
                            </div>
                            <div className='snow-card card'>
                                <h3 className='section-header'>OUR CLIENTS</h3>
                                <hr />
                                <div className='section-p'>
                                    Property management companies<br />
                                    Retail stores<br />
                                    Restaurants<br />
                                    Gas Stations<br />
                                    Malls<br />
                                    Big Box locations<br />
                                    Industrial parks<br />
                                    Airports<br />
                                    Medical Facilities<br />
                                    Federal, state, and local government agencies.<br />
                                    Apartments, Condos, HOA’s
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Snow;