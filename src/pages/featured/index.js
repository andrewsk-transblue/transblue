import React, {Fragment, useEffect, useRef} from 'react';
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
import downarrow from '../../images/featured/downarrow.png';
import './style.css';
import ContactCta from '../../components/contactCta';

import ReactGA from 'react-ga';
const TRACKING_ID = process.env.REACT_GOOGLE_ANALYTICS_ID; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

const projects = [
    {
        img: labrynth,
        title: 'WINDERMERE LABRYNTH GARDEN',
        location: 'TRANSBLUE SEATTLE'
    },
    {
        img: floralHills,
        title: 'FLORAL HILLS BACKYARD REFRESHMENT',
        location: 'TRANSBLUE BELLEVUE'
    },
    {
        img: retainingdrops,
        title: 'RETAINING DROPS',
        location: 'TRANSBLUE SEATTLE'
    },
    {
        img: magnolia,
        title: 'MAGNOLIA PAVED DRIVEWAY',
        location: 'TRANSBLUE BALLARD'
    },
    {
        img: maplewood,
        title: 'MAPLEWOOD RETAINING WALL',
        location: 'TRANSBLUE SEATTLE'
    },
    {
        img: urbanoasis,
        title: 'URBAN OASIS',
        location: 'TRANSBLUE SEATTLE'
    },
    {
        img: hoaroofing,
        title: 'ASCENT HOA ROOFING',
        location: 'TRANSBLUE MT VERNON'
    },
    {
        img: checkerboard,
        title: 'CHECKERBOARD YARD',
        location: 'TRANSBLUE BALLARD',
        description: ['For this project, our clients wanted to maximize their backyard’s usability with a fun and inventive design. Their home exterior, although neat, was rather empty. They wanted a large landscape to be the main focal point in their backyard.',
        'It was decided that the large open area would feature a large checkerboard pattern! This design would be eye-catching and fresh, taking their empty space to one perfect for entertaining. We first installed 60+ square pavers to lay out the pattern.',
        'The empty spaces were then expertly filled by high-quality synthetic grass. Not only does this set-up save our client a lot of cash on water expenses, but it also is great for the environment.'
        ]
        
    }
]

function Featured() {
    const myRef1 = useRef(null);
    const myRef2 = useRef(null);
    const myRef3 = useRef(null);
    const myRef4 = useRef(null);
    const myRef5 = useRef(null);
    const myRef6 = useRef(null);
    const myRef7 = useRef(null);

    const executeScroll1 = () => myRef1.current.scrollIntoView({behavior: 'smooth'});
    const executeScroll2 = () => myRef2.current.scrollIntoView({behavior: 'smooth'});
    const executeScroll3 = () => myRef3.current.scrollIntoView({behavior: 'smooth'});
    const executeScroll4 = () => myRef4.current.scrollIntoView({behavior: 'smooth'});
    const executeScroll5 = () => myRef5.current.scrollIntoView({behavior: 'smooth'});
    const executeScroll6 = () => myRef6.current.scrollIntoView({behavior: 'smooth'});
    const executeScroll7 = () => myRef7.current.scrollIntoView({behavior: 'smooth'});

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
                    <div className='col-lg-6 order-lg-12'>
                        <FeaturedCard img={projects[0].img} title={projects[0].location} />
                    </div>
                    <div className='col-lg-6'>
                        <h4>{projects[0].title}</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim pretium est, vel faucibus est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim pretium est, vel faucibus est.</p>
                        <img className='next-project' src={downarrow} alt='' onClick={executeScroll1} />
                    </div>

                </div>
                <div className='row' ref={myRef1}>
                    <div className='col-lg-6 order-lg-12'>
                        <FeaturedCard img={projects[1].img} title={projects[1].location} />
                    </div>
                    <div className='col-lg-6 '>
                        <h4>{projects[1].title}</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim pretium est, vel faucibus est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim pretium est, vel faucibus est.</p>
                        <img className='next-project' src={downarrow} alt='' onClick={executeScroll2} />
                    </div>
                </div>
                <div className='row' ref={myRef2}>
                    <div className='col-lg-6 order-lg-12'>
                        <FeaturedCard img={projects[2].img} title={projects[2].location} />
                    </div>
                    <div className='col-lg-6 '>
                        <h4>{projects[2].title}</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim pretium est, vel faucibus est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim pretium est, vel faucibus est.</p>
                        <img className='next-project' src={downarrow} alt='' onClick={executeScroll3} />
                    </div>

                </div>
                <div className='row' ref={myRef3}>
                    <div className='col-lg-6 order-lg-12'>
                        <FeaturedCard img={projects[3].img} title={projects[3].location} />
                    </div>
                    <div className='col-lg-6 '>
                        <h4>{projects[3].title}</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim pretium est, vel faucibus est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim pretium est, vel faucibus est.</p>
                        <img className='next-project' src={downarrow} alt='' onClick={executeScroll4} />
                    </div>

                </div>
                <div className='row' ref={myRef4}>
                    <div className='col-lg-6 order-lg-12'>
                        <FeaturedCard img={projects[4].img} title={projects[4].location} />
                    </div>
                    <div className='col-lg-6 '>
                        <h4>{projects[4].title}</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim pretium est, vel faucibus est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim pretium est, vel faucibus est.</p>
                        <img className='next-project' src={downarrow} alt='' onClick={executeScroll5} />
                    </div>

                </div>
                <div className='row' ref={myRef5}>
                    <div className='col-lg-6 order-lg-12'>
                        <FeaturedCard img={projects[5].img} title={projects[5].location} />
                    </div>
                    <div className='col-lg-6 '>
                        <h4>{projects[5].title}</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim pretium est, vel faucibus est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim pretium est, vel faucibus est.</p>
                        <img className='next-project' src={downarrow} alt='' onClick={executeScroll6} />
                    </div>

                </div>
                <div className='row' ref={myRef6}>
                    <div className='col-lg-6 order-lg-12'>
                        <FeaturedCard img={projects[6].img} title={projects[6].location} />
                    </div>
                    <div className='col-lg-6 '>
                        <h4>{projects[6].title}</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim pretium est, vel faucibus est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim pretium est, vel faucibus est.</p>
                        <img className='next-project' src={downarrow} alt='' onClick={executeScroll7} />
                    </div>

                </div>
                <div className='row' ref={myRef7}>
                    <div className='col-lg-6 order-lg-12'>
                        <FeaturedCard img={projects[7].img} title={projects[7].location} />
                    </div>
                    <div className='col-lg-6 '>
                        <h4>{projects[7].title}</h4>
                        {projects[7].description.map(p => {
                            return(<p>{p}</p>)
                        })}
                        
                        {/* <div className='blah' onClick={executeScroll8}>
                            <img className='next-project' src={downarrow} alt='' />
                        </div> */}
                    </div>
                </div>
                {/* <div className='row' ref={myRef8}>
                    <div className='col-lg-6 order-lg-12'>
                        <FeaturedCard img={projects[8].img} title={projects[7].location} />
                    </div>
                    <div className='col-lg-6 '>
                        <h4 className='mb-3'>{projects[8].title}</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim pretium est, vel faucibus est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim pretium est, vel faucibus est.</p>
                    </div>
                </div> */}
            </div>
            <Footer />
        </Fragment>

    )
}

export default Featured;