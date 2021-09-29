import React, {useEffect, useState} from 'react';
//import locations from './db';
import locationIcon from '../../images/location.png';
import mailIcon from '../../images/mail.png';
import states from './statesDb';
import './style.css';

function ListView(props) {
    const [state, setState] = useState('Washington');
    const [stateLocations, setStateLocations] = useState([])

    if('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(position => {
            console.log(position)
        })
    }

    useEffect(() => {
        setStateLocations(props.locations.filter(location => location.location === state))
    }, [])

    function changeState(e) {
        setState(e.target.value)
        setStateLocations(props.locations.filter(location => location.location === e.target.value))
    }

    return(
        <div className='listview-wrapper container-fluid'>
            <div className='row'>
                <select className="browser-default custom-select" onChange={changeState}>
                    <option className='first-option' value={state}>{state.toUpperCase()}</option>
                    {states.map(state => {
                        return(
                            <option value={state}>{state.toUpperCase()}</option>
                        )
                    })}
                </select>
            </div>
            <div className='row'>
                {stateLocations.length === 0 && 
                    <div className='no-list-locations'>
                        <h6>NO LOCATIONS AVAILABLE IN {state.toUpperCase()} YET</h6>
                        <p>Please select another state or view locations on our map</p>
                    </div>
                    }
                {stateLocations.length > 0 && stateLocations.map(location => {
                    //console.log(location)
                    let telLink = location.phone.replace(/[^A-Z0-9]/ig, "");
                    return(
                        <div className='col-12 col-md-6 col-lg-4'>
                            <div className='listview-location'>
                                <div className='row'>
                                    <h5>{location.name.toUpperCase()}</h5>
                                </div>
                                <div className='row'>
                                    <div className='col-1 pr-0'>
                                        <img className='location-icon' src={locationIcon} alt='' />
                                    </div>
                                    <div className='col-10 pr-0'>
                                        <p className='section-p'>
                                            {location.address1}{location.address2.length > 0 && `, ${location.address2}`}<br />
                                            {location.city} {location.state}, {location.zipcode}
                                        </p>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-1 pr-0'>
                                        <img src={mailIcon} alt='' />
                                    </div>
                                    <div className='col-10 pr-0'>
                                        <p className='section-p'>
                                            {location.email}<br />
                                            <a href={`tel:+${telLink}`}>{location.phone}</a>
                                        </p>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-12'>
                                        <a className='web-link' href={`/locations/${location.state}/${location.urlcity}`} target='_blank' rel='noreferrer'>WEBSITE</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ListView;