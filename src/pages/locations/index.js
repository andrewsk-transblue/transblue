import React, {useState, Fragment } from 'react';
import Navbar from '../../components/navbar/index';
import Header from '../../components/header';
import Footer from '../../components/footer/index';
import MapContainer from './mapcontainer';
import ListView from './listView';

//import bounds from './bounds';
import './style.css';

//import locations from './db';

function Locations(props) {
        //console.log(typeof JSON.parse(props.locations[0].zipcodelist.toString()))
        //let zipcodes = JSON.parse(props.locations[12].zipcodelist);
        let zipcodes = [98001,
            98002,
            98092,
            98071,
98003,
            98023,
            98063,
            98093,
98010,
98022,
98030,
            98031,
            98032,
            98042,
            98035,
            98064,
            98089,
98038,
98047,
98051,
98198,
98321,
98323,
98332,
            98335,
98338,
98354,
98360,
98371,
            98372,
            98373,
            98374,
            98375,
98385,
98387,
98388,
98390,
            98352,
98402,
            98403,
            98404,
            98405,
            98406,
            98407,
            98408,
            98409,
            98413,
            98416,
            98418,
            98421,
            98422,
            98424,
            98443,
            98444,
            98445,
            98446,
            98447,
            98465,
            98466,
            98401,
            98411,
            98412,
            98415,
            98417,
            98419,
            98448,
            98464,
            98471,
            98481,
            98490,
            98493,
98438,
98439,
            98498,
            98499,
            98496,
            98497,
98467,
98025,
98344,
98395,
98396]
        let str = zipcodes.toString()
        console.log(str)

        const options = {
            method: 'GET',
            url: 'https://vanitysoft-boundaries-io-v1.p.rapidapi.com/rest/v1/public/boundary/zipcode',
            params: {zipcode: str},
            headers: {
              'x-rapidapi-host': 'vanitysoft-boundaries-io-v1.p.rapidapi.com',
              'x-rapidapi-key': '7f512eae08mshf45fffd34cc33e2p11d7b8jsn9d08016938ec'
            }
          };
          
        //   axios.request(options).then(function (response) {
        //       console.log(JSON.stringify(response.data))
        //     })
        
        const [viewMap, setViewMap] = useState(true);
   
        return(
            <Fragment>
            <Navbar page='LOCATIONS' />
            <Header title='FIND A LOCATION' subtitle='' name='locations' />
            <div className='map-view-toggle'>
                <button onClick={() => setViewMap(false)} className={!viewMap ? 'active' : ''}>
                    <i className="fas fa-list-ul"></i>LIST VIEW</button> 
                <button onClick={() => setViewMap(true)} className={viewMap ? 'active' : ''}>
                    <i className="fas fa-map"></i>MAP VIEW
                </button>
            </div>
            {!viewMap && <ListView locations={props.locations} zipcode={props.zipcode} />}
            {viewMap > 0 && <MapContainer locations={props.locations} 
            zipcode={props.zipcode} 
            //bounds={props.locations[1].bounds}
            // geojson={props.locations[13].geojson}
            //coordinates={filteredArr}  
             />}
            <Footer locationPage={true} />
        </Fragment>
        )
}

export default Locations;