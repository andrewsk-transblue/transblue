import React, {useEffect, useState} from 'react';
import './style.css';

function ListView(props) {
    
    const [state, setState] = useState('Washington');
    const [stateLocations, setStateLocations] = useState([])
    const [loading, setLoading] = useState(true)
    const [stateList, setStateList] = useState([])
    //const [region, setRegion] = useState('')
    const [locations, setLocations] = useState([])

    const getLocations = () => {
       
    }

    function setRegion(e) {
        if(e.target.value === 'all') setLocations(props.locations)

        else {
            let locationList = []
            for(let i=0; i<props.locations.length; i++) {
                if(props.locations[i].region === e.target.value) {
                    locationList.push(props.locations[i])
                }
            }
            setLocations(locationList)
        }
    }

    useEffect(() => {
        //console.log(prop)
        setLocations(props.locations)
    }, [])

    return(
        <div className='listview-wrapper container-fluid'>
            <div className='row'>
                <select className="browser-default custom-select" onChange={setRegion}>
                    <option className='first-option' value=''>FILTER BY REGION</option>
                    <option value='all'>ALL REGIONS</option>
                    <option value='northwest'>NORTHWEST</option>
                    <option value='northeast'>NORTHEAST</option>
                    <option value='west'>WEST</option>
                    <option value='southwest'>SOUTHWEST</option>
                    <option value='midwest'>MIDWEST</option>
                </select>
            </div>
            <div className='row'>
                {locations.length === 0 && loading === false && 
                    <div className='no-list-locations'>
                        <h6>NO LOCATIONS AVAILABLE IN {state.toUpperCase()} YET</h6>
                        <p>Please select another state or view locations on our map</p>
                    </div>
                }
                {locations.length > 0 && locations.map((location, index) => {
                    return(
                        <div className='col-12 col-md-6 col-lg-4 mb-5 text-center'>
                            <a href={`/locations/${location.state}/${location.urlcity}`} target="_blank" rel='noreferrer'>
                                <div className={`location-${index} location`}>
                                    {location.skyline && <img src={location.skyline} />}
                                    <h4>{`${location.name.toUpperCase().slice(10)}, ${location.state}`}</h4>
                                </div>
                            </a>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ListView;