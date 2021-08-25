import React, {useState, Fragment} from 'react';
//import line from '../../images/lineblack.PNG';

function MoreServices() {
    const [displayServices, setDisplayServices] = useState(false);

    function toggle(value) {
        setDisplayServices(value)
    }
    return(
        <Fragment>
        <div className='row'>
            {!displayServices ? <button className='cta' onClick={() => toggle(true)}>MORE SERVICES</button> : <button className='cta' onClick={() => toggle(false)}>LESS SERVICES</button>}
        </div>
        {/* {displayServices && <div className='row more-services'>
        <div className='col-lg-3'>
            Concrete<br />
            Patios<br />
            Flagstone<br />
            Retaining Walls<br />
            Sustainable Roofs<br />
            Slope Creep<br />
        </div>
        <div className='col-lg-3'>
            Structural Support<br />
            Synthetic Turf<br />
            Landscape Design<br />
            Fences<br />
            Gates<br />
            Outdoor Kitchens<br />
        </div>
        <div className='col-lg-3'>
            Firepits<br />
            Paving<br />
            Striping<br />
            Crack Seal<br />
            Snow Hauling<br />
        </div>
        <div className='col-lg-3'>
            De-icing<br />
            Plowing<br />
            Roofing<br />
            Siding<br />
            Solar Panels<br />
        </div>
    </div>} */}

    <div className='row more-services card-deck mx-0'>
        <div className='col-lg-6 card'>
            <h5 className="line-header">
                {/* <img src={line} alt='' />  */}
                GENERAL CONTRACTING
            </h5>
            <div className='row'>
                <div className='col-lg-4 section-p'>
                    Concrete
                    Patios
                    Flagstone
                    Retaining Walls
                    Structural Support
                    Landscape Design
                </div>
                <div className='col-lg-4 section-p'>
                    Fences
                    Gates
                    Outdoor Kitchens
                    Firepits
                    Paving
                    Crack Seal
                </div>
                <div className='col-lg-4 section-p'>
                    Roofing
                    Siding
                    Striping
                    Synthetic Turf
                    Slope Creep
                </div>
            </div>
            <div className='card-text'>
                <a className='cta' href='/'>GC WEBSITE</a>
            </div>
        </div>
        <div className='col-lg-3 card'>
            <h5>SNOW SERVICES</h5>
            <div className='row'>
                <div className='col-lg-12 section-p'>
                    Snow Hauling<br />
                    De-icing<br />
                    Plowing<br />
                    Truck top clearing<br />
                    Snow Melting
                </div>
            </div>
            <div className='card-text'>
                <a className='cta' href='/'>SNOW WEBSITE</a>
            </div>
        </div>
        <div className='col-lg-3 card'>
            <h5>GREEN SERVICES</h5>
            <div className='row'>
                <div className='col-lg-12 section-p'>
                    Solar Panels<br />
                    Sustainable Roofs<br />
                    EV Installation<br />
                    Shade Structures<br />
                    Xeriscapes
                </div>
            </div>
            <div className='card-text'>
                <a className='cta' href='/'>GREEN WEBSITE</a>
            </div>
        </div>
    </div>
    
    </Fragment>
    )
}

export default MoreServices;