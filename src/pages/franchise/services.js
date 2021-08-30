import React, {useState} from 'react';
import services from '../../images/franchise/services.jpeg';
import './services.css';

const serviceData = {
    solar: 'Solar power systems derive clean, pure energy from the sun. Installing solar panels on your home or business helps combat greenhouse gas emissions and reduces our collective dependence on fossil fuel. Traditional electricity is sourced from fossil fuels such as coal and natural gas.',
    greenRoof: 'testing',
    ev: 'testing again'
}

function Services() {
    const [displayInfo, setDisplayInfo] = useState(false);
    const [text, setText] = useState('');
    const [title, setTitle] = useState('');

    function displayService(e) {
        console.log(e.target.name)
        //console.log(e.target.id)
        setDisplayInfo(true);
        setText(serviceData[e.target.id])
        setTitle(e.target.name)
    }

    return(
        <div className='franchise-services-full'>
            <img src={services} alt='' />
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-6 list px-0'>
                    <h5>GREEN SERVICES</h5>
                        <div className='row body'>
                            <div className='col-lg-4 section-p'>
                                <button onClick={displayService} id='solar' name='SOLAR PANELS'>Solar Panels</button><br />
                                <button onClick={displayService} id='greenRoof' name='SUSTAINABLE ROOFS'>Sustainable Roofs</button><br />
                                <button onClick={displayService} id='ev' name='EV INSTALLATION'>EV Installation</button><br />
                                Porous Pavement
                            </div>
                            <div className='col-lg-4 section-p'>
                                Shade Structures<br />
                                Xeriscapes<br />
                                LED
                            
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
                        {displayInfo && <div className='description'>
                            <h6>{title}</h6>
                            <p>{text}</p>
                        </div>}
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