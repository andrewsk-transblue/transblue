import React, {Component, Fragment } from 'react';
import axios from 'axios';
import Navbar from '../../components/navbar/index';
import Header from '../../components/header';
import Footer from '../../components/footer/index';
import MapComp from './map';
import LocationList from './locationList';
//import bounds from './bounds';
import locationsHeader from '../../images/location.jpeg';
import locationsDb from './db';
import map from '../../images/map.png';
//import locationsHeader from '../../images/locationsHeader.jpeg';
import './style.css';

import AutoComplete from "react-google-autocomplete";
import locations from './db';

//var fs = require('browserify-fs');
//const path = require('path');

const geolib = require('geolib');

class Locations extends Component {
    constructor() {
        super();
        this.state={
            showStates: false,
            states:  ['California', 'Colorado', 'Louisiana', 'Massachusetts', 'Oregon', 'Texas', 'Virginia', 'Washington'],
            selectState: 'Select State',
            bounds: [],
            showLocations: false,
            locationList: [],
            center: [47.6062, -122.3321],
            noLocations: false,
            isLoading: true,
            displayMiles: false,
            radius: 50
            // placeholder: 'Enter a location'
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({isLoading: false})
        }, 2000)
        //check params - if no params, check geolocation
        if(this.props.match.params.zipcode !== undefined) {
            this.searchLocation(this.props.match.params.zipcode)
        }
        else if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.setState({center: [position.coords.latitude, position.coords.longitude]})
                this.setLocationList(position.coords.latitude, position.coords.longitude)
              });
        }
    }

    selectRadius = (e) => {
        //console.log(e.target.value)
        this.setState({
            radius: e.target.value,
            displayMiles: !this.state.displayMiles
        }, () => this.setLocationList(this.state.center[0], this.state.center[1])) 
    }

    centerLocation = (lat, lon) => {
        this.setState({
            center: [lat, lon],
            bounds: [],
            radius: 50
        })
    }

    setLocationList = (lat, lon) => {
        let locationList = [];
        let userLocation = {
            latitude: lat,
            longitude: lon
        }
        for(let i=0; i<locationsDb.length-1; i++) {
            let franchiseLocation = {
                latitude: locationsDb[i].lat,
                longitude: locationsDb[i].lon
            }
            let distance = geolib.getDistance(userLocation, franchiseLocation) / 1600;
            if(distance < this.state.radius) {
                locationList.push(locationsDb[i])
            }
        }
        locationList.length > 0 ? this.setState({locationList: locationList, noLocations: false}, () => this.setState({isLoading: false}))
        :
        this.setState({noLocations: true}, () => this.setState({isLoading: false}))
    }

    searchLocation = (location_id) => {
        this.setState({radius: 50})
        axios.get(`https://my-tb-cors.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?place_id=${location_id}&key=AIzaSyAC_A-wjPLaf2_VKJQqetSY08bxsvLsUk4`)
            .then(res => {
                console.log(res)
                this.setState({
                    center: [res.data.result.geometry.location.lat, res.data.result.geometry.location.lng],
                    selectState: res.data.result.address_components[2].long_name,
                    showLocations: true,
                    locationList: locationsDb.filter(loc => loc.state === res.data.result.address_components[2].short_name),
                    radius: 50
                    // placeholder: res.data.result.address_components.formatted_address
                })
                this.setLocationList(res.data.result.geometry.location.lat, res.data.result.geometry.location.lng)
            })
    }

    render() {
        return(
            <Fragment>
            <Navbar page='locations' />
            <Header img={locationsHeader} title='Find A Location' subtitle='' />

                <div className='map-container'>
                    {this.state.isLoading && <div className='map-placeholder'><img src={map} alt='map' /></div>}
                    {!this.state.isLoading && <MapComp coords={this.state.bounds} center={this.state.center} radius={this.state.radius} selectLocation={(lat, lon) => this.centerLocation(lat,lon)} />}
                    <div className='search-container new-search'>
                        <span className='span-search'>
                            <AutoComplete
                                // placeholder={this.state.placeholder}
                                apiKey='AIzaSyAC_A-wjPLaf2_VKJQqetSY08bxsvLsUk4'
                                onPlaceSelected={(location) => this.searchLocation(location.place_id)}
                            />
                            <select onChange={this.selectRadius} value={this.state.radius} className='ml-2 mr-1' name='radius' id='radius'>
                                <option value={50}>50mi</option>
                                <option value={75}>75mi</option>
                                <option value={100}>100mi</option>
                                <option value={200}>200mi</option>
                            </select>
                            <button id='location-search' onClick={this.searchZipcode}>GO</button>
                        </span>
                        <h5><i className="fas fa-map-marker-alt"></i>LOCATIONS</h5>
                        <div className='search-results mt-2 pl-3'>
                            <div className='col-lg-12 location-list'>
                                {!this.state.isLoading && <LocationList noLocations={this.state.noLocations} locationList={this.state.locationList} selectLocation={(lat, lon) => this.selectLocation(lat, lon)} state={this.state.selectState} />}
                                {/* {this.state.locationList.length > 0 && <LocationList noLocations={this.state.noLocations} locationList={this.state.locationList} selectLocation={(lat, lon) => this.selectLocation(lat, lon)} state={this.state.selectState} />} */}
                            </div>
                        </div>
                    </div>
                </div>
            <Footer locationPage={true} />
        </Fragment>
        )
    }

}

export default Locations;