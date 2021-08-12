import React, {useState, useEffect} from 'react';
import comingSoon from './comingSoon';
import './style.css';

function LocationList(props) {
    return(
        <div className='container-fluid location-list-container'>
            {props.noLocations &&  <div className='no-locations'>
                NO LOCATIONS AVAILABLE <br />
                <small>Please try different search criteria</small>
            </div>}
            {!props.noLocations && props.locationList.map((location, index) => {
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
            {!props.noLocations && comingSoon.map(location => {
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
            })}
        </div>
    )
}

export default LocationList;