import React, {Component} from 'react';
//import { useEasybase } from 'easybase-react';
//import locationsDb from './db.js';
//import comingSoon from './comingSoon';
import './style.css';

//import locationsDb from './db.js';
const geolib = require('geolib');


class LocationList extends Component {
    state={
        isLoading: true,
        locationList: [],
        comingSoon: []
    }

    componentDidMount = () => {
        //console.log(this.props)

        this.getLocationList()
    }

    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
          this.getLocationList()
        }
      }

    getLocationList = () => {
        console.log('get location list')
        let locationList = [];
        let userLocation = {
            latitude: this.props.coords[0],
            longitude: this.props.coords[1]
        }

        //console.log(userLocation)
        for(let i=0; i < this.props.locations.length; i++) {
            let franchiseLocation = {
                latitude: this.props.locations[i].lat,
                longitude: this.props.locations[i].lon
            }
            //console.log(franchiseLocation)
            let distance = geolib.getDistance(userLocation, franchiseLocation) / 1600;
            //console.log(distance)
            if(distance < this.props.radius) {
                locationList.push(this.props.locations[i])
            }
        }
        //console.log(locationList)
        this.setState({locationList: locationList}, () => console.log(this.state.locationList))
    }

    render() {
        //console.log(this.props)        
        return(
            <div className='container-fluid location-list-container'>
                {this.state.locationList.length === 0 && <div className='no-locations'>
                    NO LOCATIONS AVAILABLE <br />
                    <small>Please try different search criteria</small>
                </div>}
                {this.state.locationList.length > 0 && this.state.locationList.map((location, index) => {
                    //console.log(location)
                    let telLink = location.phone.replace(/[^A-Z0-9]/ig, "");
                    return(
                        <div className='row location' >
                            <div className='col-lg-1 col-1 pl-0 pt-3 index'>{index + 1}</div>
                            <div className='col-lg-11 col-11 pl-1 py-3'>
                                <p>{location.name.toUpperCase()}</p>
                                <div className='location-body'>
                                    {location.address1}, {location.address2}<br />
                                    {location.city}, {location.state} {location.zipcode}<br />
                                    <div className='location-contact'>
                                        <a href={`tel:+${telLink}`}><i className="fas fa-phone"></i>{location.phone}<br /></a>
                                        <i className="fas fa-envelope"></i>{location.email}<br /> 
                                    </div>                               
                                    <span>
                                        <a href={`/locations/${location.state}/${location.urlcity}`} target='_blank' rel="noreferrer"><button>WEBSITE</button></a>
                                        <button onClick={() => this.props.zoomLocation(location.lat, location.lon)} id='view-location'>VIEW ON MAP</button>
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
}

export default LocationList;