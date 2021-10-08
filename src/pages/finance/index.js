import React, { Fragment, useState, useEffect } from 'react';
import Navbar from '../../components/navbar';
import FranchiseNav from '../../components/franchiseNav';
import Footer from '../../components/footer';
import './style.css';

import ReactGA from 'react-ga';
const TRACKING_ID = process.env.REACT_GOOGLE_ANALYTICS_ID; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function Finance(props) {
    //console.log(props.locations)
    const [locationList, setLocationList] = useState([])
    const [location, setLocation] = useState('')

    useEffect(() => {
        ReactGA.event({
            category: 'User',
            action: `Visited Finance Page`
        });
        //console.log(props.locations)
        if(props.locations !== undefined) setLocationList(props.locations)
        console.log(locationList)
    }, [props.locations])

    function changeLocation(location) {
        console.log(location)
        console.log(location.replace(/\s+/g, '-'))
        setLocation(location)
    }

    return(
        <Fragment>
            <Navbar />
            <FranchiseNav />
            <div className='finance-wrapper'>
                <div className='overlay'></div>
                <div className='dropdown-wrapper'>
                    <h5>SELECT A TRANSBLUE LOCATION TO APPLY FOR FINANCING</h5>
                    <div className="input-group">
                        <select className="custom-select" onChange={(e) => changeLocation(e.target.value)} defaultValue='SELECT A LOCATION' >
                            <option disabled >SELECT A LOCATION</option>
                            {locationList.length > 0 && locationList.map(franchise => {
                                //console.log(location)
                                return(
                                    <option value={franchise.name}>{franchise.name.toUpperCase()}</option>
                                )
                            })}
                        </select>
                        <div className="input-group-append">
                            <a 
                                href={`https://app.gethearth.com/partners/${location.replace(/\s+/g, '-')}`}
                                className="btn btn-outline-secondary" 
                                target='_blank'
                                rel='noreferrer'
                                >GET FINANCED
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}

export default Finance;