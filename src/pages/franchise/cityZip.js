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
        this.setState({cities: this.props.cities})
        this.setState({zipcodes: this.props.zipcodes})
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
                            <div>{city}</div>
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