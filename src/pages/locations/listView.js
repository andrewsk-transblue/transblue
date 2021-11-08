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
                    return(
                        <div className='col-12 col-md-6 col-lg-4'>
                            <div className='listview-location'>
                                <div className='row'>
                                    <h5>{`${location.name.toUpperCase().slice(10)}, ${location.state}`}</h5>
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