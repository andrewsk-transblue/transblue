import React, {Component, Fragment } from 'react';
import axios from 'axios';
import zipcodes from 'zipcodes';
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

class LocationsNew extends Component {
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
            radius: 25,
            zipcode: ''
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({isLoading: false})
        }, 2000)

        if(this.props.match.params.zipcode !== undefined) {
            this.setLocationID(this.props.match.params.zipcode)
        }
        else if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                // console.log(position)
                this.setState({center: [position.coords.latitude, position.coords.longitude]})
              });
        }
    }
    
    showStates = () => {
        this.setState({
            showStates: !this.state.showStates
        })
    }

    selectRadius = (e) => {
        this.setState({
            radius: e.target.value,
            displayMiles: !this.state.displayMiles
        })
    }

    // selectState = (event) => {
    //     this.showStates();
    //     let locationList = [];

    //     for(let i=0; i<locationsDb.length; i++) {
    //         if(locationsDb[i].location === event.target.id) {
    //             locationList.push(locationsDb[i])
    //         }
    //     }

    //     this.setState({
    //         showLocations: true,
    //         locationList: locationList,
    //         selectState: event.target.id,
    //         bounds: bounds[event.target.id],
    //         center: [],
    //         noLocations: false
    //     })
    // }

    setLocationID = (id) => {
        axios.get(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?place_id=${id}&key=AIzaSyAC_A-wjPLaf2_VKJQqetSY08bxsvLsUk4`)
            .then(res => {
                console.log(res)
                this.setState({
                    center: [res.data.result.geometry.location.lat, res.data.result.geometry.location.lng],
                    selectState: res.data.result.address_components[2].long_name,
                    showLocations: true,
                    locationList: locationsDb.filter(loc => loc.state === res.data.result.address_components[2].long_name)
                })
            })
    }

    selectLocation = (lat, lon) => {
        this.setState({
            center: [lat, lon],
            bounds: []
        })
    }

    searchZipcode = () => {
        // e.preventDefault();

        if(isNaN(parseInt(this.state.zipcode)) && this.state.zipcode !== '') {
            let city = this.state.zipcode.split(',')[0].trim();
            let state = this.state.zipcode.split(',')[1].trim();
            let zip = zipcodes.lookupByName(`${city}`, `${state}`)[0].zip;
            var location = zipcodes.lookup(zip);
        }

        else {
            location = zipcodes.lookup(this.state.zipcode);
            console.log(location)
        }

        location !== undefined ? 
            this.setState({
                center: [location.latitude, location.longitude],
                radius: this.state.radius,
                bounds: [],
                selectState: location.state,
                showLocations: true,
                locationList: locationsDb.filter(loc => loc.state === location.state) //filter db to show locaitons in that state
            }) : this.setState({noLocations: true})
    }
    
    render() {
        return(
            <Fragment>
                <Navbar page='locations' />
                <Header img={locationsHeader} title='Find A Location' subtitle='' />

                <div className='locations-bg'>
                    <div className='map-container'>
                        <div className='map-bg'>
                            {this.state.isLoading && <div className='map-placeholder'><img src={map} alt='map' /></div>}
                            {!this.state.isLoading && <MapComp coords={this.state.bounds} center={this.state.center} radius={this.state.radius} selectLocation={(lat, lon) => this.selectLocation(lat,lon)} />}
                        </div>
                        <div className='search-container'>
                            <div className='new-search'>
                                <span className='span-search'>
                                    <AutoComplete
                                        apiKey='AIzaSyAC_A-wjPLaf2_VKJQqetSY08bxsvLsUk4'
                                        onPlaceSelected={(place) => this.setLocationID(place.place_id)}
                                    />
                                    {/* <input className='mr-2' onChange={this.onChange} id='zipcode' placeholder={this.state.zipcode !== '' ? this.state.zipcode : 'City, State or Zipcode'}></input> */}
                                    <select onChange={this.selectRadius} className='ml-2 mr-1' name='radius' id='radius'>
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
                                        {this.state.locationList.length > 0 && <LocationList noLocations={this.state.noLocations} locationList={this.state.locationList} selectLocation={(lat, lon) => this.selectLocation(lat, lon)} state={this.state.selectState} />}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer locationPage={true} />
            </Fragment>
        )
    }
}

export default LocationsNew;