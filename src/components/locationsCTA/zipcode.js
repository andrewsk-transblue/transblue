import React, {Component, Fragment} from 'react';
import './style.css';

class Zipcode extends Component {
    state={zipcode: ''}

    onChange = (e) => {
        this.setState({
            zipcode: e.target.value
        })
        console.log(this.state.zipcode)
    }

    render() {
        return(
            <Fragment>
                <label htmlFor='zipcode'>FIND A LOCATION</label><br />
                <span>
                    <input onChange={this.onChange} id='zipcode' placeholder='Your Location'></input>
                    <a href={`/locations/${this.state.zipcode}`}><button id='search'><i className="fas fa-search"></i></button></a>
                </span>
            </Fragment>
        )
    }
}

export default Zipcode;