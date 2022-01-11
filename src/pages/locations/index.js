import React, {Fragment, useEffect, lazy } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/navbar/index';
import Header from '../../components/header';
import Footer from '../../components/footer/index';
import './style.css';

import ReactGA from 'react-ga';
const TRACKING_ID = process.env.REACT_APP_GOOGLE_ANALYTICS_ID// YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

const ListView = lazy(() => import('./listView'))

function Locations(props) {
    console.log(props)
    useEffect(() => {
        ReactGA.event({
            category: 'User',
            action: 'Visited Locations Page'
          });
    }, [])
       
        return(
            <Fragment>
                <Helmet>
                    <title>Transblue Locations</title>
                    <meta name="description" content="Find a Transblue location near you!" />
                </Helmet>
                <Navbar page='LOCATIONS' />
                <Header title='FIND A LOCATION' subtitle='' name='locations' />
                <ListView locations={props.locations} zipcode={props.zipcode}  />
                <Footer locationPage={true} />
            </Fragment>
        )
}

export default Locations;