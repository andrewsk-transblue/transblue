import React, { Component } from 'react';
import './style.css';

class CityZip extends Component {
    constructor(props) {
        super(props);
        this.state={
            locations: this.props.locations,
            activeCity: '',
            cities: [],
            zipcodes: []
        }
    }

    componentDidMount() {
        let cities = Object.keys(this.state.locations)
        let firstCity = cities[0];
        this.setState({
            cities: cities,
            zipcodes: this.state.locations[firstCity],
            activeCity: firstCity
        })
    }

    setActiveCity = (e) => {
        this.setState({
            activeCity: e.target.value,
            zipcodes: this.state.locations[e.target.value]
        }, () => console.log(this.state.zipcodes))
        
    }

    render() {
        //console.log(this.state.cities)
        return(
            <div className='row'>
                <div className='col-lg-5 pr-5'>
                    <h6>CITIES:</h6>
                    <div className='city-buttons city-list'>
                    {this.state.cities.length > 0 && this.state.cities.map(city => {
                        return(
                            <div>
                                <button className={this.state.activeCity === city ? 'active-city' : ''} onClick={this.setActiveCity} value={city}>{city}</button>
                            </div>
                        )
                    })}
                    </div>
                </div>
                <div className='col-lg-1'></div>
                <div className='col-lg-5 pr-5'>
                    <h6>ZIPCODES:</h6>
                    <div className='zipcode-list'>
                        {this.state.zipcodes.map(zipcode => {
                            return(
                                <div>{zipcode}</div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default CityZip;