import React, { Fragment, useState, useEffect } from 'react';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import './style.css';

function Finance(props) {
    //console.log(props.locations)
    const [locationList, setLocationList] = useState([])
    const [location, setLocation] = useState('')

    useEffect(() => {
        console.log(props.locations)
        if(props.locations !== undefined) setLocationList(props.locations)
        console.log(locationList)
    }, [props.locations])

    function changeLocation(location) {
        console.log(location)
        console.log(location.replace(/\s+/g, '-'))
        setLocation(location)
    }

    return(
        <Fragment>
            <Navbar />
            <div className='finance-wrapper'>
                <div className='dropdown-wrapper'>
                    <h5>SELECT A TRANSBLUE LOCATION TO APPLY FOR FINANCING</h5>
                    <div className="input-group">
                        <select className="custom-select" onChange={(e) => changeLocation(e.target.value)}>
                            <option>SELECT A LOCATION</option>
                            {locationList.length > 0 && locationList.map(franchise => {
                                //console.log(location)
                                return(
                                    //<option value={franchise.name}>{franchise.name.toUpperCase()}</option>
                                    <option value={franchise.name}>{franchise.name.toUpperCase()}</option>
                                )
                            })}
                        </select>
                        <div className="input-group-append">
                            <a 
                                href={`https://app.gethearth.com/partners/${location.replace(/\s+/g, '-')}`}
                                className="btn btn-outline-secondary" 
                                target='_blank'
                                rel='noreferrer'
                                >GET FINANCED
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}

export default Finance;