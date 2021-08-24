import React, {Component, Fragment } from 'react';
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

class Locations extends Component {
   
    render() {
        return(
            <Fragment>
            <Navbar page='LOCATIONS' />
            <Header img={locationsHeader} title='FIND A LOCATION' subtitle='' />
            <div className='map-view-toggle'>
                <i className="fas fa-list-ul"></i>LIST VIEW <i className="fas fa-map"></i>MAP VIEW<br />
            </div>
            <MapContainer locations={this.props.locations} />
            <Footer locationPage={true} />
        </Fragment>
        )
    }

}

export default Locations;