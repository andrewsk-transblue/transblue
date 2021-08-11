import React, {useEffect, useState} from 'react';
import Fade from 'react-reveal/Fade';
import govtFence from '../../../images/landing/govtfence.jpg';
import ev from '../../../images/landing/ev.jpg';
import './style.css';

const images = [govtFence, ev]

function Here() {
    const [index, setIndex] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            index < images.length -1 ? setIndex(index + 1) : setIndex(0)
        }, 5000)
    })

    return(
        <div className='here-wrapper container-fluid'>
            <div className='row'>
                <div className='col-sm-12 col-lg-6 pr-5'>
                    <h4 className='section-header'>TRANSBLUE IS HERE FOR YOU</h4>
                    <p className='section-p'>With nearly 20 years in business, World Class Service is in our blood. Whether you are looking to build a new deck for your family get togethers, keep your business' sidewalks free of ice, refresh your parking lot asphalt, or anything in between... Transblue has got you covered.</p>
                </div>
                <div className='col-sm-12 col-lg-6'>
                    {index === 0 && <Fade duration={1500}><img src={images[index]} alt='' /></Fade>}
                    {index === 1 && <Fade duration={1500}><img src={images[index]} alt='' /></Fade>}
                </div>
            </div>
        </div>
    )
}

export default Here;