import React, {useState, Fragment } from 'react';
import Navbar from '../../components/navbar/index';
import Header from '../../components/header';
import Footer from '../../components/footer/index';
import MapContainer from './mapcontainer';

//import bounds from './bounds';
import locationsHeader from '../../images/location.jpeg';
//import locationsDb from './db';
//import locationsHeader from '../../images/locationsHeader.jpeg';
import './style.css';

//import locations from './db';

function Locations(props) {
        const [viewMap, setViewMap] = useState(false);
   
        return(
            <Fragment>
            <Navbar page='LOCATIONS' />
            <Header img={locationsHeader} title='FIND A LOCATION' subtitle='' />
            <div className='map-view-toggle'>
                <button onClick={() => setViewMap(false)} className={!viewMap ? 'active' : ''}>
                    <i className="fas fa-list-ul"></i>LIST VIEW</button> 
                <button onClick={() => setViewMap(true)} className={viewMap ? 'active' : ''}>
                    <i className="fas fa-map"></i>MAP VIEW
                </button>
            </div>
            {viewMap && <MapContainer locations={props.locations} />}
            <Footer locationPage={true} />
        </Fragment>
        )

}

export default Locations;