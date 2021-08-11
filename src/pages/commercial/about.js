import React, {useState, useEffect} from 'react';
import Fade from 'react-reveal/Fade';
import commercial from '../../images/commercial/commercial2.jpeg';
import snow from '../../images/commercial/plow.jpg';
import asphalt from '../../images/commercial/asphalt.jpg';
import ev from '../../images/commercial/ev.jpg';
import './style.css';

const images = [commercial, snow, asphalt, ev]

function About() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            index < images.length -1 ? setIndex(index + 1) : setIndex(0)
        }, 5000)
    })
    return(
        <div className='container commercial-about'>
            <div className='row'>
                <div className='col-lg-6 order-lg-12'>
                    <h3 className='section-header mt-3'>BEAUTIFY YOUR BUSINESS</h3>
                    <p className='section-p'>Transblue is here to help. Whether it's installing a patio for your customers to enjoy a morning cup of coffee, installing a pool to keep your tenants cool in the heat of summer, removing snow and ice to ensure your business doors remain open all year round, or anything in between.</p>
                    <p className='section-p pb-4'>Transblue offers snow hauling, paving, and more for commercial clients, letting you put your attention where it belongs: on your customers.</p>
                </div>
                <div className='col-lg-6'>
                    <div className='about-slideshow'>
                        {index === 0 && <Fade opposite duration={1000} ><img src={images[index]} alt='commercial landscaping' /></Fade>}
                        {index === 1 && <Fade opposite duration={1000}><img src={images[index]} alt='commercial landscaping' /></Fade>}
                        {index === 2 && <Fade opposite duration={1000}><img src={images[index]} alt='commercial landscaping' /></Fade>}
                        {index === 3 && <Fade opposite duration={1000}><img src={images[index]} alt='commercial landscaping' /></Fade>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;