import React from 'react';
import './style.css';
import '../../../App.css'
import dees from '../../../images/residential/dees.jpg';
import windermere from '../../../images/residential/windermere.jpg';
import HoverImages from '../../hoverImages';

function Dees() {
    return(
        <div className='dees-container container-fluid'>
            <div className='row mx-0'>
                <div className='col-lg-7 col-xl-8 col-12 my-auto order-lg-12'>
                    {/* <img src={dees} alt='Dees Hope'></img> */}
                    <HoverImages 
                    page={[
                        {image: windermere, title: "WINDERMERE LABIRYNTH", caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultricies.' },
                        {image: dees, title: "DEES HOPE", caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultricies.' },
                        {image: dees, title: "DEES HOPE", caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultricies.' },
                        {image: dees, title: "DEES HOPE", caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultricies.' }

                    ]} />
                </div>
                <div className='col-lg-5 col-xl-4 col-12 text'>
                    <div className='section-header'>
                        <p className='text-secondary section-subheader'>TRANSBLUE &amp; DEE'S HOPE</p>
                        ABOLISHING SOFT SLAVERY IN UGANDA
                    </div>
                    {/* <p className='section-p'>At Transblue, a portion of every project goes to helping those in need. By working on these projects, Transblue has been able to give over 20000 dollars to Dee's Hope for Girl's Foundation.</p>
                    
                    Lorem ipsum dolor sit amet, consectetu a elit. Praesent eget elementum sem. Vivamus id m libero, eget ornare eros. */}
                    <p className='section-p'>
                    A portion of profit from every Transblue project goes to helping those in need around the globe. One of our mBridge partners, Dee's Hope, is an organization that helps women in Uganda escape domestic servitude by providing shelter, education, etc. Last year, we completed a project that allowed us to donate over $20,000 to Dee's Hope, resulting in the freedom of 17 women from domestic servitude.</p>
                    
                    {/* <p className='pr-2 mb-3 text-secondary'> Sed tincidunt ex nulla, id interdum odio aliquet vel. Praesent accumsan condimentum eros non luctus. */}
                    {/* </p> */}
                    <a className='cta' href='/givesback'>LEARN MORE</a>
                </div>
            </div>
        </div>
    )
}

export default Dees;