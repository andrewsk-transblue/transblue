import React, {useState, Fragment, useEffect } from 'react';
import Navbar from '../../components/navbar/index';
import Header from '../../components/header';
import Footer from '../../components/footer/index';
import MapContainer from './mapcontainer';
import ListView from './listView';
import axios from 'axios';
import zipcodes from 'zipcodes';

//import bounds from './bounds';
import './style.css';

import ReactGA from 'react-ga';
const TRACKING_ID = process.env.REACT_APP_GOOGLE_ANALYTICS_ID// YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function Locations(props) {

    useEffect(() => {
        ReactGA.event({
            category: 'User',
            action: 'Visited Locations Page'
          });
    }, [])
        //console.log(typeof JSON.parse(props.locations[0].zipcodelist.toString()))
        //let zipcodes = JSON.parse(props.locations[12].zipcodelist);
        let zipcodeArray = [
            83854,
            99001,
            99003,
            99005,
            99011,
            99016,
            99019,
            99021,
            99022,
            99025,
            99027,
            99037,
            99201,
            99202,
            99203,
            99204,
            99205,
            99206,
            99207,
            99208,
            99212,
            99216,
            99217,
            99218,
            99223,
            99224,
            83877,
            99209,
            99210,
            99211,
            99213,
            99214,
            99215,
            99219,
            99220,
            99228,
            99252,
            99256
            ]
        let str = zipcodeArray.toString()
        //console.log(str)

        const options = {
            method: 'GET',
            url: 'https://vanitysoft-boundaries-io-v1.p.rapidapi.com/rest/v1/public/boundary/zipcode',
            params: {zipcode: str},
            headers: {
              'x-rapidapi-host': 'vanitysoft-boundaries-io-v1.p.rapidapi.com',
              'x-rapidapi-key': '7f512eae08mshf45fffd34cc33e2p11d7b8jsn9d08016938ec'
            }
          };
          
        //   axios.request(options).then(function (response) {
        //       console.log(JSON.stringify(response.data))
        //     })
        
        const [viewMap, setViewMap] = useState(true);
   
        return(
            <Fragment>
            <Navbar page='LOCATIONS' />
            <Header title='FIND A LOCATION' subtitle='' name='locations' />
            <div className='map-view-toggle'>
                <button onClick={() => setViewMap(false)} className={!viewMap ? 'active' : ''}>
                    <i className="fas fa-list-ul"></i>LIST VIEW</button> 
                <button onClick={() => setViewMap(true)} className={viewMap ? 'active' : ''}>
                    <i className="fas fa-map"></i>MAP VIEW
                </button>
            </div>
            {!viewMap && <ListView locations={props.locations} zipcode={props.zipcode}  />}
            {viewMap > 0 && <MapContainer locations={props.locations} 
            zipcode={props.zipcode} 
            //bounds={props.locations[1].bounds}
            // geojson={props.locations[13].geojson}
            //coordinates={filteredArr}  
             />}
            <Footer locationPage={true} />
        </Fragment>
        )
}

export default Locations;