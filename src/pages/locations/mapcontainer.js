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
            center: [],
            noLocations: false,
            isLoading: true,
            displayMiles: false,
            radius: 50,
            locations: [],
            disabled: true,
            loading: false
        }
    }

    
    componentDidMount() {
        setTimeout(() => {
            this.setState({isLoading: false})
        }, 2000)
        //console.log('getCurrentPosition' in navigator.geolocation)

        if(this.props.zipcode !== undefined) {
            //console.log('searched zipcode')
            this.searchLocation(this.props.zipcode)
        }

        else if ('getCurrentPosition' in navigator.geolocation) {
            console.log('geolocation on')
            navigator.geolocation.getCurrentPosition((position) => {
                console.log(position)
                this.setState({center: [position.coords.latitude, position.coords.longitude]})
              });
        }

        else {
            console.log('using seattle as default')
            this.setState({
                center: [47.6062, -122.3321] //default center to seattle if there's no criteria and geolocation is off
            })
        }
    }

    zoomLocation = (lat, lon) => {
        this.setState({
            center: [lat, lon],
            radius: 10
        })
    }

    selectRadius = (e) => {
        this.setState({
            radius: e.target.value,
            displayMiles: !this.state.displayMiles
        })
    }

    selectLocation = (location_id) => {
        this.setState({
            disabled: false,
            location_id: location_id
        })
    }

    searchLocation = (location_id) => {
        this.setState({loading: true})
        //console.log(location_id)
        //this.setState({radius: 50}) //reset radius to 50mi when user searches a new city
        axios.get(`https://my-tb-cors.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?place_id=${location_id}&key=AIzaSyAC_A-wjPLaf2_VKJQqetSY08bxsvLsUk4`) //get lat and lon of city or address, filter locationList to locations within radius
            .then(res => {
                this.setState({
                    radius: 50,
                    center: [res.data.result.geometry.location.lat, res.data.result.geometry.location.lng],
                    showLocations: true,
                    loading: false
                })
            })
        }

    render() {
        //console.log(this.props)
        console.log('map container')
        return(
            <div className='map-container'>
                    {this.state.isLoading && <div className='map-placeholder'><img src={map} alt='map' /></div>}
                    {!this.state.isLoading && this.state.center.length > 0 && <MapComp 
                    zoomLocation={(lat, lon) => this.zoomLocation(lat,lon)}
                    center={this.state.center} radius={this.state.radius}
                    // geojson={this.props.geojson} 
                    />}
                    <div className='search-container new-search'>
                        <span className='span-search'>
                            <AutoComplete
                                placeholder='Enter city or address'
                                apiKey={process.env.REACT_APP_GOOGLE_API}
                                onPlaceSelected={(location) =>
                                    this.selectLocation(location.place_id) 
                                    // this.searchLocation(location.place_id)
                                }
                                options={{
                                    types: ['geocode'],
                                    componentRestrictions: { country: "us" }
                                }}
                            />
                            <select onChange={this.selectRadius} value={this.state.radius} className='ml-2 mr-1' name='radius' id='radius'>
                                <option value={25}>25mi</option>
                                <option value={50}>50mi</option>
                                <option value={75}>75mi</option>
                                <option value={100}>100mi</option>
                                <option value={200}>200mi</option>
                            </select>
                            <button disabled={this.state.disabled} id='location-search' className={this.state.disabled ? 'disabled' : ''} onClick={() => this.searchLocation(this.state.location_id)}>GO</button>
                        </span>
                        <div className="d-flex align-items-center">
                            <h5><i className="fas fa-map-marker-alt"></i>LOCATIONS</h5>
                            {this.state.loading && <div className="spinner-border ml-auto text-primary" role="status" aria-hidden="true"></div>}
                        </div>
                            
                        <div className='search-results mt-2 pl-3'>
                            <div className='col-lg-12 location-list'>
                                {this.state.center.length > 0 && <LocationList locations={this.props.locations} coords={this.state.center} radius={this.state.radius} zoomLocation={(lat, lon) => this.zoomLocation(lat, lon)} />}
                            </div>
                        </div>
                    </div>
                </div>

                //need to get userLocation into listview somehow
        )
    }
}

export default MapContainer;