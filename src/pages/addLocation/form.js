import React, {Component, Fragment} from 'react';
import axios from 'axios';
import AddLocation from './addLocation';
import states from './states.js';
import images from './images.js';
import './style.css';

class Form extends Component {
    state={
        test: {
            blah: '123'
        },
        name: '',
        urlCity: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zipcode: '',
        lat: 'Latitude',
        lon: 'Longitude',
        location: '',
        region: 'east',
        image: 'east.jpeg',
        phone: '',
        email: ''
        /////need to add locations
    }

    onChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    selectRegion = (e) => {
        console.log(images[e.target.value])
        this.setState({
            region: e.target.value,
            image: images[e.target.value]
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
    }

    selectState = (e) => {
        this.setState({
            state: states[e.target.value],
            location: e.target.value
        })
    }

    geocode = () => {
        let city = this.state.city.replace(' ', '+');
        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${city},+${this.state.state}&key=AIzaSyAC_A-wjPLaf2_VKJQqetSY08bxsvLsUk4`)
            .then(res => {
                console.log(res)
                this.setState({
                    lat: res.data.results[0].geometry.location.lat,
                    lon: res.data.results[0].geometry.location.lng
                })
            })
    }

    render() {
        return(
            <Fragment>
                {/* <div className={`password ${this.state.showPass}`}>
                    Enter Password: <br />
                    <input onChange={this.onChange} />
                </div> */}
                <form id='add-location' onSubmit={this.onSubmit}>
                    <h3>ADD A FRANCHISE LOCATION</h3>
                    <p className='text-secondary'>Make sure all fields are filled out.</p>
                    <p className='text-secondary mb-5'>Once you've entered city and state, press the GET LAT &amp; LONG button to calculate latitude and longitude</p>
                    <input id='name' placeholder='Franchise Name' onChange={this.onChange} required></input>
                    <input id='urlCity' placeholder='URL city' onChange={this.onChange} required></input><br />
                    <input id='address1' placeholder='Address' onChange={this.onChange} required></input>
                    <input id='address2' placeholder='Address Line 2 (optional)' onChange={this.onChange}></input><br />
                    <input id='city' placeholder='City' onChange={this.onChange} required></input>

                    {/* <input id='state' placeholder='State' onChange={this.onChange}></input><br /> */}

                    <select id='state' onChange={this.selectState} defaultValue={'State'} required>
                        <option value='State' disabled>State</option>
                        {Object.keys(states).map(state => {
                            return(
                                <option value={state}>{state}</option>
                            )
                        })}
                    </select><br />


                    <input id='zipcode' placeholder='Zipcode' onChange={this.onChange} required></input>

                    <select id='region' onChange={this.selectRegion} defaultValue={'Region'} required>
                        <option value='Region' disabled>Region</option>
                        <option value='northwest'>Northwest</option>
                        <option value='east'>East</option>
                        <option value='west'>West</option>
                        <option value='southwest'>Southwest</option>
                        <option value='midwest'>Midwest</option>
                    </select><br />

                    <input id='email' placeholder='Email' onChange={this.onChange} required></input>
                    <input id='phone' placeholder='Phone' onChange={this.onChange} required></input><br />
                    <input id='lat' placeholder={this.state.lat} onChange={this.onChange} disabled={true} required></input>
                    <input id='lon' placeholder={this.state.lon} onChange={this.onChange} disabled={true} required></input><br />

                    {/* maybe add a review button before submit? then when review looks good, display AddLocation component so AddLocation is not rerendering every time user presses key */}
                    <div className='add-buttons'>
                        <button className='lat-lon' onClick={this.geocode} disabled={(this.state.city !== '' && this.state.state !== '') ? false : true}>GET LAT &amp; LONG</button>
                        <AddLocation props={this.state} />
                    </div>
                </form>
            </Fragment>
        )
    }
}

export default Form;