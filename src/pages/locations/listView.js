import React from 'react';
import locations from './db';
import './style.css';

function ListView(props) {
    return(
        <div className='listview-wrapper container-fluid'>
            <div className='row'>
                {props.locations.map(location => {
                    return(
                        <div className='col-4 mb-4'>
                            <h5>{location.name.toUpperCase()}</h5>
                            <p className='section-p'>{location.address1}, {location.address2}<br />
                            {location.city} {location.state}, {location.zipcode}<br />
                            {location.email}<br />
                            {location.phone}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ListView;