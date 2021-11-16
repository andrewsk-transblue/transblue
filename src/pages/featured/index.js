import React, {Fragment, useEffect, useRef, useState} from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/navbar';
import Header from '../../components/header';
import FeaturedCard from './featuredCard';
import Footer from '../../components/footer/index';
import header2 from '../../images/featured/header-2.jpg';
import labrynth from '../../images/featured/labrynth.jpg';
import floralHills from '../../images/featured/floralhills.jpg';
import maplewood from '../../images/featured/maplewood.JPG';
import urbanoasis from '../../images/featured/urbanoasis.jpg';
import magnolia from '../../images/featured/magnolia.jpg';
import retainingdrops from '../../images/featured/retainingdrops.jpg';
import checkerboard from '../../images/featured/checkerboard.jpg';
import hoaroofing from '../../images/featured/hoaroofing.jpg';
import './style.css';
import ContactCta from '../../components/contactCta';
import rightarrow from '../../images/residential/rightarrow.png';

import featuredDb from './db';

import ReactGA from 'react-ga';
const TRACKING_ID = process.env.REACT_APP_GOOGLE_ANALYTICS_ID// YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function Featured() {

    const [activeProject, setActiveProject] = useState(-1);

    useEffect(() => {
        ReactGA.event({
            category: 'User',
            action: `Visited Featured Page`
        });
    }, [])

    return(
        <Fragment>
            <Helmet>
                <title>Featured Projects</title>
                <meta name="description" content="Transblue Featured Projects" />
            </Helmet>
            <Navbar page='PROJECTS' />
            <Header img={header2} title='FEATURED PROJECTS' name='featured' />
            <ContactCta />
            <div className='projects-wrapper container-fluid'>
                <div className='row'>
                {Object.keys(featuredDb).map((project, index) => {
                    //console.log(project)
                    return(
                        <div className='col-lg-6 mb-5'>
                            <div className='image-wrapper' data-project={project}></div>
                            <p className='project-title'>{project}</p>
                            <p className='section-p'>{featuredDb[project].intro}</p>

                            <button onClick={() => setActiveProject(index)}>LEARN MORE <img className='arrow' src={rightarrow} alt='' /></button>
                        </div>
                    )
                })}
                </div>
            </div>
            <Footer />
        </Fragment>

    )
}

export default Featured;