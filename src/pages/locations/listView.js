import React from 'react';
import locations from './db';
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
                                <h5>{location.name.toUpperCase()}</h5>
                                <p className='section-p'>{location.address1}{location.address2.length > 0 && `, ${location.address2}`}<br />
                                {location.city} {location.state}, {location.zipcode}</p>
                                <p className='section-p'>
                                    {location.email}<br />
                                    <a href={`tel:+${telLink}`}>{location.phone}</a>
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ListView;