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
            locationList: [],
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
                center: [47.6062, -122.3321]
            })
        }
    }

    selectRadius = (e) => {
        this.setState({
            radius: e.target.value,
            displayMiles: !this.state.displayMiles
        })
    }

    centerLocation = (lat, lon) => {
        this.setState({
            center: [lat, lon],
            bounds: [],
            radius: 50
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
                    // selectState: res.data.result.address_components[2].long_name,
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
                    coords={this.state.bounds} center={this.state.center} radius={this.state.radius} selectLocation={(lat, lon) => this.centerLocation(lat,lon)} />}
                    <div className='search-container new-search'>
                        <span className='span-search'>
                            <AutoComplete
                                // placeholder={this.state.placeholder}
                                apiKey={process.env.REACT_APP_GOOGLE_API}
                                onPlaceSelected={(location) => this.searchLocation(location.place_id)}
                                options={{
                                    types: ['(regions)'],
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
                                {this.state.center.length > 0 && <LocationList locations={this.props.locations} coords={this.state.center} radius={this.state.radius} locationList={this.state.locationList} selectLocation={(lat, lon) => this.selectLocation(lat, lon)} state={this.state.selectState} />}
                                {/* {this.state.locationList.length > 0 && <LocationList noLocations={this.state.noLocations} locationList={this.state.locationList} selectLocation={(lat, lon) => this.selectLocation(lat, lon)} state={this.state.selectState} />} */}
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default MapContainer;