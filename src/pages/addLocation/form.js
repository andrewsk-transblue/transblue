import React, {Component} from 'react';
import AddLocation from './addLocation';
import states from './states.js';
import images from './images.js';
import './style.css';

class Form extends Component {
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
        email: '',
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

    render() {
        return(
            <form id='add-location' onSubmit={this.onSubmit}>
                <input id='name' placeholder='Franchise Name' onChange={this.onChange}></input>
                <input id='urlCity' placeholder='URL city' onChange={this.onChange}></input><br />
                <input id='address1' placeholder='Address' onChange={this.onChange}></input>
                <input id='address2' placeholder='Address Line 2 (optional)' onChange={this.onChange}></input><br />
                <input id='city' placeholder='City' onChange={this.onChange}></input>

                {/* <input id='state' placeholder='State' onChange={this.onChange}></input><br /> */}

                <select id='state' onChange={this.selectState}>
                    <option value='' disabled selected>State</option>
                    {Object.keys(states).map(state => {
                        return(
                            <option value={state}>{state}</option>
                        )
                    })}
                </select><br />


                <input id='zipcode' placeholder='Zipcode' onChange={this.onChange}></input>

                <select id='region' onChange={this.selectRegion} >
                    <option value='' disabled selected>Region</option>
                    <option value='northwest'>Northwest</option>
                    <option value='northeast'>Northeast</option>
                    <option value='west'>West</option>
                    <option value='southwest'>Southwest</option>
                    <option value='midwest'>Midwest</option>
                </select><br />

                <input id='email' placeholder='Email' onChange={this.onChange}></input>
                <input id='phone' placeholder='Phone' onChange={this.onChange}></input><br />
                <input id='lat' placeholder='Latitude' onChange={this.onChange}></input>
                <input id='lon' placeholder='Longitude' onChange={this.onChange}></input><br />
                {/* <input id='location' placeholder='State (full spelling)' onChange={this.onChange}></input><br /> */}
                {/* <input id='region' placeholder='Region' onChange={this.onChange}></input><br /> */}


                {/* <button onClick={this.addLocation}>Add Location</button> */}
                {/* maybe add a review button before submit? then when review looks good, display AddLocation component so AddLocation is not rerendering every time user presses key */}
                <div className='add-btn'>
                <AddLocation props={this.state} />
                </div>
            </form>
        )
    }
}

export default Form;