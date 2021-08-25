import React from 'react';
//import locations from './db';
import locationIcon from '../../images/location.png';
import mailIcon from '../../images/mail.png';
import './style.css';

function ListView(props) {
    return(
        <div className='listview-wrapper container-fluid'>
            <div className='row'>
                {props.locations.map(location => {
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