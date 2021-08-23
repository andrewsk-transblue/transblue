import React, {Fragment, useRef} from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/navbar';
import Header from '../../components/header';
//import LocationsCta from '../../components/locationsCTA';
import FeaturedCard from './featuredCard';
import Footer from '../../components/footer/index';
import header from '../../images/featured/header.jpg';
import header2 from '../../images/featured/header-3.jpg';
import labrynth from '../../images/featured/labrynth.jpg';
import floralHills from '../../images/featured/floralhills.jpg';
import maplewood from '../../images/featured/maplewood.JPG';
import urbanoasis from '../../images/featured/urbanoasis.jpg';
import magnolia from '../../images/featured/magnolia.jpg';
//import freshstairs from '../../images/featured/freshstairs.jpg';
import retainingdrops from '../../images/featured/retainingdrops.jpg';
import checkerboard from '../../images/featured/checkerboard.jpg';
import hoaroofing from '../../images/featured/hoaroofing.jpg';
import downarrow from '../../images/featured/downarrow.png';
import './style.css';
import ContactCta from '../../components/contactCta';

const projects = [
    {
        img: labrynth,
        title: 'WINDERMERE LABRYNTH GARDEN',
        location: 'SEATTLE, WA'
    },
    {
        img: floralHills,
        title: 'FLORAL HILLS BACKYARD REFRESHMENT',
        location: 'BOTHELL, WA'
    },
    // {
    //     img: freshstairs,
    //     title: 'FRESH STAIRS AND PORCH',
    //     location: 'LYNNWOOD, WA'
    // },
    {
        img: retainingdrops,
        title: 'RETAINING DROPS',
        location: 'SEATTLE, WA'
    },
    {
        img: magnolia,
        title: 'MAGNOLIA PAVED DRIVEWAY',
        location: 'SEATTLE, WA'
    },
    {
        img: maplewood,
        title: 'MAPLEWOOD RETAINING WALL',
        location: 'MAPLEWOOD, WA'
    },
    {
        img: urbanoasis,
        title: 'URBAN OASIS',
        location: 'SEATTLE, WA'
    },
    {
        img: hoaroofing,
        title: 'HOA ROOFING',
        location: 'NORTH SEATTLE, WA'
    },
    {
        img: checkerboard,
        title: 'CHECKERBOARD YARD',
        location: 'SEATTLE, WA'
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
    const myRef8 = useRef(null);

    const executeScroll1 = () => myRef1.current.scrollIntoView({behavior: 'smooth'});
    const executeScroll2 = () => myRef2.current.scrollIntoView({behavior: 'smooth'});
    const executeScroll3 = () => myRef3.current.scrollIntoView({behavior: 'smooth'});
    const executeScroll4 = () => myRef4.current.scrollIntoView({behavior: 'smooth'});
    const executeScroll5 = () => myRef5.current.scrollIntoView({behavior: 'smooth'});
    const executeScroll6 = () => myRef6.current.scrollIntoView({behavior: 'smooth'});
    const executeScroll7 = () => myRef7.current.scrollIntoView({behavior: 'smooth'});
    const executeScroll8 = () => myRef8.current.scrollIntoView({behavior: 'smooth'});

    return(
        <Fragment>
            <Helmet>
                <title>Featured Projects</title>
                <meta name="description" content="Transblue Featured Projects" />
            </Helmet>
            <Navbar page='FEATURED PROJECTS' />
            <Header img={header2} title='FEATURED PROJECTS' />
            <ContactCta />
            {/* <LocationsCta /> */}
            <div className='projects-wrapper container-fluid'>
                <div className='row'>
                    <div className='col-lg-6 order-lg-12'>
                        <FeaturedCard img={projects[0].img} title={projects[0].location} />
                    </div>
                    <div className='col-lg-6 mt-5'>
                        <h4 className='mb-3'>{projects[0].title}</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim pretium est, vel faucibus est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim pretium est, vel faucibus est.</p>
                        <div className='blah' onClick={executeScroll1}>
                            <img className='next-project' src={downarrow} alt='' />
                        </div>
                    </div>

                </div>
                <div className='row' ref={myRef1}>
                    <div className='col-lg-6 order-lg-12'>
                        <FeaturedCard img={projects[1].img} title={projects[1].location} />
                    </div>
                    <div className='col-lg-6 mt-5'>
                        <h4 className='mb-3'>{projects[1].title}</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim pretium est, vel faucibus est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim pretium est, vel faucibus est.</p>
                        <div className='blah' onClick={executeScroll2}>
                            <img className='next-project' src={downarrow} alt='' />
                        </div>
                    </div>
                </div>
                <div className='row' ref={myRef2}>
                    <div className='col-lg-6 order-lg-12'>
                        <FeaturedCard img={projects[2].img} title={projects[2].location} />
                    </div>
                    <div className='col-lg-6 mt-5'>
                        <h4 className='mb-3'>{projects[2].title}</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim pretium est, vel faucibus est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim pretium est, vel faucibus est.</p>
                        <div className='blah' onClick={executeScroll3}>
                            <img className='next-project' src={downarrow} alt='' />
                        </div>
                    </div>

                </div>
                <div className='row' ref={myRef3}>
                    <div className='col-lg-6 order-lg-12'>
                        <FeaturedCard img={projects[3].img} title={projects[3].location} />
                    </div>
                    <div className='col-lg-6 mt-5'>
                        <h4 className='mb-3'>{projects[3].title}</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim pretium est, vel faucibus est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim pretium est, vel faucibus est.</p>
                        <div className='blah' onClick={executeScroll4}>
                            <img className='next-project' src={downarrow} alt='' />
                        </div>
                    </div>

                </div>
                <div className='row' ref={myRef4}>
                    <div className='col-lg-6 order-lg-12'>
                        <FeaturedCard img={projects[4].img} title={projects[4].location} />
                    </div>
                    <div className='col-lg-6 mt-5'>
                        <h4 className='mb-3'>{projects[4].title}</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim pretium est, vel faucibus est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim pretium est, vel faucibus est.</p>
                        <div className='blah' onClick={executeScroll5}>
                            <img className='next-project' src={downarrow} alt='' />
                        </div>
                    </div>

                </div>
                <div className='row' ref={myRef5}>
                    <div className='col-lg-6 order-lg-12'>
                        <FeaturedCard img={projects[5].img} title={projects[5].location} />
                    </div>
                    <div className='col-lg-6 mt-5'>
                        <h4 className='mb-3'>{projects[5].title}</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim pretium est, vel faucibus est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim pretium est, vel faucibus est.</p>
                        <div className='blah' onClick={executeScroll6}>
                            <img className='next-project' src={downarrow} alt='' />
                        </div>
                    </div>

                </div>
                <div className='row' ref={myRef6}>
                    <div className='col-lg-6 order-lg-12'>
                        <FeaturedCard img={projects[6].img} title={projects[6].location} />
                    </div>
                    <div className='col-lg-6 mt-5'>
                        <h4 className='mb-3'>{projects[6].title}</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim pretium est, vel faucibus est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim pretium est, vel faucibus est.</p>
                        <div className='blah' onClick={executeScroll7}>
                            <img className='next-project' src={downarrow} alt='' />
                        </div>
                    </div>

                </div>
                <div className='row' ref={myRef7}>
                    <div className='col-lg-6 order-lg-12'>
                        <FeaturedCard img={projects[7].img} title={projects[7].location} />
                    </div>
                    <div className='col-lg-6 mt-5'>
                        <h4 className='mb-3'>{projects[7].title}</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim pretium est, vel faucibus est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim pretium est, vel faucibus est.</p>
                        {/* <div className='blah' onClick={executeScroll8}>
                            <img className='next-project' src={downarrow} alt='' />
                        </div> */}
                    </div>
                </div>
                {/* <div className='row' ref={myRef8}>
                    <div className='col-lg-6 order-lg-12'>
                        <FeaturedCard img={projects[8].img} title={projects[7].location} />
                    </div>
                    <div className='col-lg-6 mt-5'>
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