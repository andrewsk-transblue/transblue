import React, {useState, Fragment, useEffect, lazy } from 'react';
import Navbar from '../../components/navbar/index';
import Header from '../../components/header';
import Footer from '../../components/footer/index';
//import MapContainer from './mapcontainer';
//import ListView from './listView';

//import bounds from './bounds';
import './style.css';

import ReactGA from 'react-ga';
const TRACKING_ID = process.env.REACT_APP_GOOGLE_ANALYTICS_ID// YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

//const MapContainer = lazy(() => import('./mapcontainer'))
const ListView = lazy(() => import('./listView'))

function Locations(props) {

    useEffect(() => {
        ReactGA.event({
            category: 'User',
            action: 'Visited Locations Page'
          });
    }, [])

        const [viewMap, setViewMap] = useState(true);
   
        return(
            <Fragment>
            <Navbar page='LOCATIONS' />
            <Header title='FIND A LOCATION' subtitle='' name='locations' />
            <div className='map-view-toggle'>
                {/* <button onClick={() => setViewMap(false)} className={!viewMap ? 'active' : ''}>
                    <i className="fas fa-list-ul"></i>LIST VIEW</button> 
                <button onClick={() => setViewMap(true)} className={viewMap ? 'active' : ''}>
                    <i className="fas fa-map"></i>MAP VIEW
                </button> */}
            </div>
            <ListView locations={props.locations} zipcode={props.zipcode}  />
            <Footer locationPage={true} />
        </Fragment>
        )
}

export default Locations;