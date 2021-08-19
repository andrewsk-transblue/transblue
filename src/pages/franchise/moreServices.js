import React, {useState, Fragment} from 'react';

function MoreServices() {
    const [displayServices, setDisplayServices] = useState(false);

    function toggle(value) {
        setDisplayServices(value)
    }
    return(
        <Fragment>
        <div className='row'>
            {!displayServices ? <button className='cta' onClick={() => toggle(true)}>More Services</button> : <button onClick={() => toggle(false)}>Less Services</button>}
        </div>
        {displayServices && <div className='row more-services'>
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
            {/* Sports Courts<br /> */}
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
    </div>}
    </Fragment>
    )
}

export default MoreServices;