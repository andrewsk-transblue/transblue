import React, {Component} from 'react';
//var fs = require('browserify-fs')

class AddLocation extends Component {

    state={
        name: '',
        urlCity: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zipcode: '',
        lat: '',
        lon: '',
        location: '',
        region: 'northeast',
        image: 'northeast.jpeg',
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
        this.setState({region: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();
    }

    addLocation = () => {

        console.log(this.state)
    }

    render() {
        return(
            <form onSubmit={this.onSubmit}>
                <input id='name' placeholder='Franchise Name' onChange={this.onChange}></input><br />
                <input id='urlCity' placeholder='URL city' onChange={this.onChange}></input><br />
                <input id='address1' placeholder='Address' onChange={this.onChange}></input><br />
                <input id='address2' placeholder='Address Line 2 (optional)' onChange={this.onChange}></input><br />
                <input id='city' placeholder='City' onChange={this.onChange}></input><br />
                <input id='state' placeholder='State' onChange={this.onChange}></input><br />
                <input id='zipcode' placeholder='Zipcode' onChange={this.onChange}></input><br />
                <input id='phone' placeholder='Phone' onChange={this.onChange}></input><br />
                <input id='email' placeholder='Email' onChange={this.onChange}></input><br />
                <input id='lat' placeholder='Latitude' onChange={this.onChange}></input><br />
                <input id='lon' placeholder='Longitude' onChange={this.onChange}></input><br />
                <input id='location' placeholder='State (full spelling)' onChange={this.onChange}></input><br />
                {/* <input id='region' placeholder='Region' onChange={this.onChange}></input><br /> */}
                Region:
                <select id='region' onChange={this.selectRegion} value={this.state.region}>
                    <option value='northwest'>Northwest</option>
                    <option value='northeast'>Northeast</option>
                    <option value='west'>West</option>
                    <option value='southwest'>Southwest</option>
                    <option value='midwest'>Midwest</option>
                </select><br />
                <button onClick={this.addLocation}>Add Location</button>
            </form>
        )
    }
}

export default AddLocation;