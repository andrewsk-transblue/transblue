import React, {useState, useEffect} from 'react';
//import { useEasybase } from 'easybase-react';
//import locationsDb from './db.js';
import comingSoon from './comingSoon';
import './style.css';

import locationsDb from './db.js';
const geolib = require('geolib');


function LocationList(props) {
    const [isLoading, setIsLoading] = useState(true);

    const locations = props.locations;
    const locationList = [];

    console.log(locations);

    useEffect(() => {
        getLocations()
    }, [props.radius, props.coords])

    function getLocations() {
        let userLocation = {
            latitude: props.coords[0],
            longitude: props.coords[1]
        }
        for(let i=0; i < locations.length; i++) {
            let franchiseLocation = {
                latitude: locations[i].lat,
                longitude: locations[i].lon
            }
            let distance = geolib.getDistance(userLocation, franchiseLocation) / 1600;
            if(distance < props.radius) {
                locationList.push(locations[i])
            }
        }
        console.log(locationList)
    }

    return(
        <div className='container-fluid location-list-container'>
            <div className='no-locations'>
                NO LOCATIONS AVAILABLE <br />
                <small>Please try different search criteria</small>
            </div>
             {locationList.map((location, index) => {
                return(
                    <div className='row location' >
                        <div className='col-lg-1 col-1 pl-0 pt-3 index'>{index + 1}</div>
                        <div className='col-lg-11 col-11 pl-1 py-3'>
                            <p>{location.name.toUpperCase()}</p>
                            <div className='location-body'>
                                {location.address1}, {location.address2}<br />
                                {location.city}, {location.state} {location.zipcode}<br />
                                <div className='location-contact'>
                                    <i className="fas fa-phone"></i>{location.phone}<br />
                                    <i className="fas fa-envelope"></i>{location.email}<br /> 
                                </div>                               
                                <span>
                                    <a href={`/locations/${location.state}/${location.urlCity}`} target='_blank' rel="noreferrer"><button>Website</button></a>
                                    <button onClick={() => props.selectLocation(location.lat, location.lon)} id='view-location'>View On Map</button>
                                </span><br />
                            </div>
                        </div>
                    </div>
                )
            })}
            {/* render list of all locations coming soon in the state searched */}
            {/* {comingSoon.map(location => {
                if(props.state === location.state) {
                    return(
                        <div className='row location'>
                            <div className='col-lg-12'>
                                <b>Transblue {location.city}</b>
                                <br />
                                <div className='coming-soon'>Coming Soon!</div>
                            </div>
                        </div>
                    )}
                else return null;
            })} */}
        </div>
    )
}

export default LocationList;