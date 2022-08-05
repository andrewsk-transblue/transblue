import React, {Fragment, useState, useEffect, useRef} from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/navbar';
import Form from './form';
import Footer from '../../components/footer';
import Respect from './respect';
import Growing from './growing';
import Tools from './tools';
import Header from '../../components/header';
import axios from 'axios';
import './style.css';

import{ init } from 'emailjs-com';
import * as emailjs from 'emailjs-com'
init("user_iLZ3jXyTzXi5zQFlgf5DG");


function Subcontractor() {
    const applyRef = useRef(null);

    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        phone: '',
        location: '',
        locationName: ''
    })

    const [locations, setLocations] = useState([]);
    const [disabled, setDisabled] = useState(true);
    const [submitted, setSubmitted] = useState(false);

    const mounted = () => {
        axios.get('https://my-tb-cors.herokuapp.com/https://locations-fns.azurewebsites.net/api/getalllocations')
            .then(res => {
                setLocations(res.data);
            })
    }

    useEffect(() => {
        mounted();
    }, [])

    function selectLocation(e) {
        let location = locations.filter(location => location.name === e.target.value)[0];

        setFormValues({
            ...formValues,
            location: location.officeemail,
            locationName: location.name
        })
    }

    function scrollToApply() {
        applyRef.current.scrollIntoView({behavior: 'smooth'})
    }

    function submit() {
         // send form values via email        
         emailjs.send(
            'service_gekurtf',
            'template_y115xsd', //CONTACT TEMPLATE
                formValues,
                process.env.REACT_APP_REACTJS_USER
            )

        setFormValues({
            name: '',
            email: '',
            phone: '',
            location: '',
            locationName: ''
        })

        setDisabled(true);
        setSubmitted(true);
    }

    function handleChange(e) {
        setFormValues({
            ...formValues,
            [e.target.id]: e.target.value
        })
    }

    useEffect(() => {
        let { name, email, location, phone } = formValues;
        if(name.length > 0 && email.length > 0 && location.length > 0 && phone.length > 0) {
            setDisabled(false)
        }

    }, [formValues])

    return(
        <Fragment>
            <Helmet>
                <title>Transblue Subcontractor</title>
                <meta name="description" content="Transblue is the perfect partner for your next project. We have been successfully working with the most prestigious companies in the United States, Canada, and Mexico to provide them with the most cost-effective and efficient ways to improve the quality of their construction projects." />
            </Helmet>
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
                    <h5>Fill out our contact form below to request an application today!</h5>
                    <select className='browser-default custom-select' onChange={selectLocation}>
                        <option value=''>SELECT A LOCATION</option>
                        {locations.length > 0 && locations.map(location => {
                            return(
                                <option key={location.id} value={location.name}>{location.name}</option>
                            )
                        })}
                    </select>
                    <input 
                        value={formValues.name}
                        id='name'
                        onChange={handleChange}
                        placeholder='FULL NAME'
                    />
                    <input 
                        value={formValues.phone}
                        id='phone'
                        onChange={handleChange}
                        placeholder='PHONE NUMBER'
                    />
                    <input 
                        value={formValues.email}
                        id='email'
                        onChange={handleChange}
                        placeholder='EMAIL'
                    />
                    {!submitted && 
                        <button 
                            className={disabled ? 'sub-submit disabled' : 'sub-submit'} 
                            onClick={submit}
                            disabled={disabled}
                        >
                            SUBMIT
                        </button>
                    }

                    {submitted &&
                        <h5 style={{marginBottom: '0px', marginTop: '20px'}} className='submitted'>Thank you!! Someone from our team will be in touch with you shortly</h5>
                    }
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}

export default Subcontractor;