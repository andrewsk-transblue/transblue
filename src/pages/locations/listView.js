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

    return(
        <div className='listview-wrapper container-fluid'>
            <div className='row'>
                <select className="browser-default custom-select">
                    <option className='first-option' value=''>SELECT REGION</option>
                    <option value='northwest'>NORTHWEST</option>
                    <option value='northeast'>NORTHEAST</option>
                    <option value='west'>WEST</option>
                    <option value='southwest'>SOUTHWEST</option>
                    <option value='midwest'>MIDWEST</option>
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