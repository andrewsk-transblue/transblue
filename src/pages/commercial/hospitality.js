import React, {useState, useEffect} from 'react';
import Fade from 'react-reveal/Fade';
import snow from '../../images/commercial/plow.jpg';
import asphalt from '../../images/commercial/asphalt.jpg';
import ev from '../../images/commercial/ev.jpg';
import check from '../../images/checkorange.png';
import './style.css';

function Hospitality() {
    const images = [snow, asphalt, ev];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            index < images.length -1 ? setIndex(index + 1) : setIndex(0)
        }, 5000)
    })
    return(
        <div className='hospitality-wrapper container-fluid'>
            <div className='row'>
                <div className='col-12 col-lg-6 order-lg-12'>
                    <div className='about-slideshow'>
                        {index === 0 && <Fade opposite duration={1000} ><img src={images[index]} alt='commercial landscaping' /></Fade>}
                        {index === 1 && <Fade opposite duration={1000}><img src={images[index]} alt='commercial landscaping' /></Fade>}
                        {index === 2 && <Fade opposite duration={1000}><img src={images[index]} alt='commercial landscaping' /></Fade>}
                        {index === 3 && <Fade opposite duration={1000}><img src={images[index]} alt='commercial landscaping' /></Fade>}
                    </div>
                </div>
                <div className='col-12 col-lg-6 hospitality-text'>
                    <h6>NO MATTER THE PROJECT,</h6>
                    <h4 className='section-header hospitality-header'>
                        YOU CAN COUNT ON TRANSBLUE
                    </h4>
                    <p className='section-p mb-2'>We're a one-stop shop for all your landscaping needs. We make your life easy, you can set it and forget it.</p>
                    <p className='hospitality-subheader'>
                        <img src={check} className='check-icon' alt='' /> WE NEVER CUT CORNERS
                    </p>
                    {/* <p className='section-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis sed odio sed lobortis. Pellentesque.</p> */}
                    <p className='hospitality-subheader'>
                        <img src={check} className='check-icon' alt='' /> WE ALWAYS GO ABOVE &amp; BEYOND
                    </p>
                    <p className='hospitality-subheader'>
                        <img src={check} className='check-icon' alt='' /> GREAT COMMUNICATION, MANAGEMENT, AND EXECUTION
                    </p>
                    <p className='hospitality-subheader'>
                        <img src={check} className='check-icon' alt='' /> FLEXIBLE TURNKEY SOLUTION
                    </p>
                    {/* <p className='section-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis sed odio sed lobortis. Pellentesque.</p> */}
                    {/* <p className='hospitality-subheader'>
                        <img src={check} className='check-icon' /> WE'RE A ONE-STOP SHOP FOR ALL YOUR NEEDS
                    </p>
                    <p className='section-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis sed odio sed lobortis. Pellentesque.</p> */}
                </div>
            </div>
        </div>
    )
}

export default Hospitality;