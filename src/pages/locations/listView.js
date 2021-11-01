import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
//import locations from './db';
import locationIcon from '../../images/location.png';
import mailIcon from '../../images/mail.png';
// import states from './statesDb';
//import axios from 'axios';
import './style.css';

const reverse = require('reverse-geocode')

function ListView(props) {
    
    const [state, setState] = useState('Washington');
    const [stateLocations, setStateLocations] = useState([])
    const [loading, setLoading] = useState(true)
    const [stateList, setStateList] = useState([])
    
    
    const getStates = () => {
        //dynamically create list of states with Transblue locations from database
        for(let i=0; i<props.locations.length; i++) {
            if(stateList.indexOf(props.locations[i].location) === -1) stateList.push(props.locations[i].location)
        }
        setStateList(stateList)
    }

    useEffect(() => {
        if('getCurrentPosition' in navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                let userState = reverse.lookup(position.coords.latitude, position.coords.longitude, 'us').state;
                if(stateList.indexOf(userState)  !== -1) {
                    setState(userState)
                    setStateLocations(props.locations.filter(location => location.location === userState))
                    setLoading(false)
                }
                else {
                    setLoading(false)
                    setStateLocations(props.locations.filter(location => location.location === state))
                }
            }, err => {
                console.log(err)
                setLoading(false)
                setStateLocations(props.locations.filter(location => location.location === state))
            }, {timeout: 5000})
        }
        else {
            setLoading(false)
            setStateLocations(props.locations.filter(location => location.location === state))
            //console.log(props.locations.filter(location => location.location === state))       
        }

        getStates()
    }, [])

    function changeState(e) {
        setState(e.target.value)
        //console.log(e.target.value)
        setStateLocations(props.locations.filter(location => location.location === e.target.value))
    }

    return(
        <div className='listview-wrapper container-fluid'>
            <div className='row'>
                <select className="browser-default custom-select" onChange={changeState}>
                    <option className='first-option' value={state}>{state.toUpperCase()}</option>
                    {stateList.map(state => {
                        console.log(stateList)
                        return(
                            <option value={state}>{state.toUpperCase()}</option>
                        )
                    })}
                </select>
            </div>
            <div className='row'>
                {stateLocations.length === 0 && loading === false && 
                    <div className='no-list-locations'>
                        <h6>NO LOCATIONS AVAILABLE IN {state.toUpperCase()} YET</h6>
                        <p>Please select another state or view locations on our map</p>
                    </div>
                }
                {stateLocations.length > 0 && stateLocations.map(location => {
                    //console.log(stateLocations)
                    // console.log(location)
                    let phone;
                    if(props.callblue) phone = location.callbluephone;
                    else phone = location.officephone;

                    console.log(location.zipcode.toString().length)

                    let zipcode = location.zipcode;

                    if(location.zipcode.toString().length === 4) {
                        zipcode = `0${location.zipcode}`
                    }

                    let telLink = phone.replace(/[^A-Z0-9]/ig, "");
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
                                            {location.city} {location.state}, {zipcode}
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
                                            <a href={`tel:+${telLink}`}>{phone}</a>
                                        </p>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-12'>
                                        <Link className='web-link' to={`/locations/${location.state}/${location.urlcity}`} target='_blank' rel='noreferrer'>WEBSITE</Link>
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