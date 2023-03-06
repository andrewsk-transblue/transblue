import React, {Fragment, useEffect, useState} from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/header';
import OpenProject from './openProject';
import Footer from '../../components/footer/index';
import './style.css';
import ContactCta from '../../components/contactCta';
import rightarrow from '../../images/residential/rightarrow.png';
import leftarrow from '../../images/residential/leftarrow.png';
import featuredDb from './db';

import ReactGA from 'react-ga';
import NavWrapper from '../../newSrc/components/navbar/navWrapper';
const TRACKING_ID = process.env.REACT_APP_GOOGLE_ANALYTICS_ID// YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function Featured() {

    const [activeProject, setActiveProject] = useState('');

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
                <meta name="description" content="Transblue is known for their attention to detail, quality of materials and craftsmanship, and commitment to excellent customer service. Be one of our featured projects. Get inspired with one of our latest and greatest projects that we completed for satisfied clients." />
            </Helmet>
            <NavWrapper page='projects' />
            <Header title='FEATURED PROJECTS' name='featured' />
            <ContactCta />

            {activeProject !== '' && <button className='reset-projects' onClick={() => setActiveProject('')}><img src={leftarrow} /> BACK TO ALL PROJECTS</button>}

            <div className='projects-wrapper container-fluid'>
                {activeProject === '' && <div className='row'>
                {Object.keys(featuredDb).map((project, index) => {
                    //console.log(project)
                    return(
                        <div className='col-lg-6 mb-5'>
                            <div className='image-wrapper' data-project={project}></div>
                            <p className='project-title'>{project}</p>
                            <p className='section-p'>{featuredDb[project].intro}</p>

                            <button onClick={() => setActiveProject(project)}>LEARN MORE <img className='arrow' src={rightarrow} alt='' /></button>
                        </div>
                    )
                })}
                </div>}
                {activeProject !== '' && 
                    <div className='row'>
                        <OpenProject project={activeProject} />
                    </div>
                }
            </div>
            <Footer />
        </Fragment>

    )
}

export default Featured;