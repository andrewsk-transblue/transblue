import React, {useState, Component} from 'react';
import {useHistory} from 'react-router-dom';
import Slide from 'react-reveal/Slide';
import Zipcode from './zipcode';
import AutoComplete from "react-google-autocomplete";
import './style.css';

class LocationsCta extends Component {
    state={
        displayZipcode: false,
        displayCta: 'hide'
    }

    componentDidMount() {
        document.addEventListener('scroll', () => {
            let displayCta = window.scrollY > 500 ? 'show' : 'hide';
            this.setState({
                displayCta: displayCta
            })
        })
    }

    setDisplayZipcode = (boolean) => {
        this.setState({
            displayZipcode: boolean
        })
    }

    setLocation = (id) => {
        this.setState({
            location: id
        })
    }

    render() {
        return(
            <div className={`location-cta ${this.state.displayCta}`}>
                {this.state.displayZipcode && 
                    <Slide right>
                        <div className='location-search'>
                            <div className='inline'><button className='hide-zipcode' onClick={() => this.setDisplayZipcode(false)}>x</button></div>
                            <div className='inline pl-2'>
                            <label htmlFor='zipcode'>FIND A LOCATION</label><br />
                                <AutoComplete
                                    apiKey={process.env.REACT_APP_GOOGLE_API}
                                    onPlaceSelected={(location) => this.setLocation(location.place_id)}
                                />
                                <a href={`/locations/${this.state.location}`}><button id='search'><i className="fas fa-search"></i></button></a>
                            </div>
                        </div>
                    </Slide>}
                {!this.state.displayZipcode && <button className='display-zipcode' onClick={() => this.setDisplayZipcode(true)}>FIND A LOCATION</button>}
            </div>
        )
    }
}

export default LocationsCta;