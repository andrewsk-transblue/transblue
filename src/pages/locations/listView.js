import React from 'react';
import locations from './db';
import './style.css';

function ListView(props) {
    return(
        <div className='listview-wrapper container-fluid'>
            <div className='row'>
                {props.locations.map(location => {
                    console.log(location)
                    return(
                        <div className='col-4'>
                            <div className='listview-location'>
                                <h5>{location.name.toUpperCase()}</h5>
                                <p className='section-p'>{location.address1}{location.address2.length > 0 && `, ${location.address2}`}<br />
                                {location.city} {location.state}, {location.zipcode}</p>
                                <p className='section-p'>
                                    {location.email}<br />
                                    {location.phone}
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