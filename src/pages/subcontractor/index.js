import React, {Fragment, useState, useEffect, useRef} from 'react';
import { useEasybase } from 'easybase-react';
import Fade from 'react-reveal/Fade';
import Navbar from '../../components/navbar';
import FranchiseNav from '../../components/franchiseNav';
import Form from './form';
import Promise from './promise';
import Footer from '../../components/footer';
import Respect from './respect';
import Growing from './growing';
import Tools from './tools';
import Header from '../../components/header';
import header from '../../images/subcontractor/header.jpg';
import './style.css';


function Subcontractor(props) {
    const applicationRef = useRef(null);
    const applyRef = useRef(null);
    const [displayAlert, setDisplayAlert] = useState(false);
    const [displayForm, setDisplayForm] = useState(false);
    const [location, setLocation] = useState({})

    const [easybaseData, seteasybaseData] = useState([]);
    const { db } = useEasybase();
    const mounted = async() => {
        //const ebData = await db("LOCATIONS").where({urlcity: props.match.params.urlCity}).return().all();
        //console.log(ebData)

        const ebData = await db('LOCATIONS').return().all()
        seteasybaseData(ebData);
    }

    useEffect(() => {
        mounted();
    }, [])

    function selectLocation(e) {
        //console.log(e.target.value)
        //console.log(easybaseData)
        for(let i=0; i<easybaseData.length; i++) {
            if(easybaseData[i].name === e.target.value) {
                setLocation(easybaseData[i])
                setDisplayForm(true)
            }
        }

        applicationRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    function scrollToApply() {
        applyRef.current.scrollIntoView({behavior: 'smooth'})
    }

    return(
        <Fragment>
            <Navbar />
            <Header 
                title='SUBCONTRACTORS' 
                name='subcontractor'
             />
            <div className='bg'>
                <div className='vip'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <h2>JOIN OUR GROWING NETWORK OF CONSTRUCTION PROFESSIONALS</h2>
                            <button onClick={scrollToApply} className='cta ml-0'>APPLY NOW</button>
                        </div>
                        <div className='col-lg-6 left-text my-auto'>
                        {/* <h4 className='section-header'></h4> */}
                            <p className='section-p'>At Transblue we believe that our service partners are the back-bone of our business, without our partners we don’t exist. We will treat our partners better than any other competitor in the business!</p>
                            <p className='section-p'>We live by our VIP PROMISE. It is a promise to every current and future service partner. VIP stands for “Very Important Partner” and our Transblue promise to you.</p>
                        </div>
                    </div>
                </div>
                <Growing scrollToApply={scrollToApply} />
                <Respect scrollToApply={scrollToApply} />
                <Tools />
                {/* <Promise /> */}
                <div ref={applyRef}></div>
                <div className='apply-wrapper'>
                    <h2>IT'S EASY TO APPLY!</h2>
                    <h5>Just select from our list of locations, fill out our form below, and submit!</h5>
                    <select className='browser-default custom-select' onChange={selectLocation}>
                        <option value=''>SELECT A LOCATION</option>
                        {easybaseData.length > 0 && easybaseData.map(location => {
                            return(
                                <option value={location.name}>{location.name}</option>
                            )
                        })}
                    </select>
                </div>
                <div ref={applicationRef}></div>
                {displayForm && 
                <div className='promise-bg'>
                    <div className='subcontractor-wrapper'>
                        <h2>{location.name.toUpperCase()}</h2>
                        <h5>SUBCONTRACTOR APPLICATION</h5>
                        <hr />
                        {easybaseData.length > 0 && <Form location={location} />}
                        {/* {displayAlert && <div className='alert-wrapper'>
                            <Fade>
                                <div className='message-alert'>
                                    <div className='close'>
                                        <button onClick={() => setDisplayAlert(false)}>X</button>
                                    </div>
                                    PLEASE COMPLETE FORM BEFORE SUBMITTING
                                </div>
                            </Fade>
                        </div>} */}
                    </div>
                </div>}
            </div>
            <Footer />
        </Fragment>
    )
}

export default Subcontractor;