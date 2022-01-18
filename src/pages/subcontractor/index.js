import React, {Fragment, useState, useEffect, useRef} from 'react';
import Navbar from '../../components/navbar';
import Form from './form';
import Footer from '../../components/footer';
import Respect from './respect';
import Growing from './growing';
import Tools from './tools';
import Header from '../../components/header';
import axios from 'axios';
import './style.css';


function Subcontractor() {
    const applicationRef = useRef(null);
    const applyRef = useRef(null);
    const [displayForm, setDisplayForm] = useState(false);
    const [location, setLocation] = useState({})

    const [easybaseData, seteasybaseData] = useState([]);
    const mounted = async() => {

        axios.get('https://my-tb-cors.herokuapp.com/https://locations-fns.azurewebsites.net/api/getalllocations')
            .then(res => {
                console.log(res)
                seteasybaseData(res.data)
            })
    }

    useEffect(() => {
        mounted();
    }, [])

    function selectLocation(e) {
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
                            <button onClick={scrollToApply} className='cta ml-0 mb-4 mb-md-0'>APPLY NOW</button>
                        </div>
                        <div className='col-lg-6 left-text my-auto'>
                            <p className='section-p'>At Transblue we believe that our service partners are the back-bone of our business, without our partners we don’t exist. We will treat our partners better than any other competitor in the business!</p>
                            <p className='section-p'>We live by our VIP PROMISE. It is a promise to every current and future service partner. VIP stands for “Very Important Partner” and our Transblue promise to you.</p>
                        </div>
                    </div>
                </div>
                <Growing scrollToApply={scrollToApply} />
                <Respect scrollToApply={scrollToApply} />
                <Tools />
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
                    </div>
                </div>}
            </div>
            <Footer />
        </Fragment>
    )
}

export default Subcontractor;