import React, {Component} from 'react';
import axios from 'axios';
import MapComp from './map';
import LocationList from './locationList';
import map from '../../images/map.png';
import AutoComplete from "react-google-autocomplete";



import './style.css';

class MapContainer extends Component {
    constructor() {
        super();
        this.state={
            showStates: false,
            bounds: [],
            center: [],
            noLocations: false,
            isLoading: true,
            displayMiles: false,
            radius: 50,
            locations: []
        }
    }

    
    componentDidMount() {
        //console.log(this.props)
        //console.log(this.props.coordinates)
        setTimeout(() => {
            this.setState({isLoading: false})
        }, 2000)

        if(this.props.zipcode !== undefined) {
            this.searchLocation(this.props.zipcode)
        }

        else if ('getCurrentPosition' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.setState({center: [position.coords.latitude, position.coords.longitude]})
              });
        }

        else {
            this.setState({
                center: [47.6062, -122.3321] //default center to seattle if there's no criteria and geolocation is off
            })
        }
    }

    zoomLocation = (lat, lon) => {
        //console.log(lat, lon)
        this.setState({
            center: [lat, lon],
            bounds: [],
            radius: 10
        })
    }

    selectRadius = (e) => {
        this.setState({
            radius: e.target.value,
            displayMiles: !this.state.displayMiles
        })
    }

    searchLocation = (location_id) => {
        //console.log(location_id)
        //this.setState({radius: 50}) //reset radius to 50mi when user searches a new city
        axios.get(`https://my-tb-cors.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?place_id=${location_id}&key=AIzaSyAC_A-wjPLaf2_VKJQqetSY08bxsvLsUk4`) //get lat and lon of city, filter locationList to locations within radius
            .then(res => {
                this.setState({
                    radius: 50,
                    center: [res.data.result.geometry.location.lat, res.data.result.geometry.location.lng],
                    showLocations: true
                })
            })
        }

    render() {
        //console.log(this.props)
        return(
            <div className='map-container'>
                    {this.state.isLoading && <div className='map-placeholder'><img src={map} alt='map' /></div>}
                    {!this.state.isLoading && <MapComp 
                    // bounds={this.props.coordinates} 
                    zoomLocation={(lat, lon) => this.zoomLocation(lat,lon)}
                    coords={this.state.bounds} center={this.state.center} radius={this.state.radius}/>}
                    <div className='search-container new-search'>
                        <span className='span-search'>
                            <AutoComplete
                                placeholder='Enter city or address'
                                apiKey={process.env.REACT_APP_GOOGLE_API}
                                onPlaceSelected={(location) => this.searchLocation(location.place_id)}
                                options={{
                                    types: ['geocode'],
                                    componentRestrictions: { country: "us" }
                                }}
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
                                {this.state.center.length > 0 && <LocationList locations={this.props.locations} coords={this.state.center} radius={this.state.radius} zoomLocation={(lat, lon) => this.zoomLocation(lat, lon)} state={this.state.selectState} />}
                                {/* {this.state.locationList.length > 0 && <LocationList noLocations={this.state.noLocations} locationList={this.state.locationList} selectLocation={(lat, lon) => this.selectLocation(lat, lon)} state={this.state.selectState} />} */}
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default MapContainer;