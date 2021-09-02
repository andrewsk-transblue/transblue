import React, {useState, Fragment } from 'react';
import Navbar from '../../components/navbar/index';
import Header from '../../components/header';
import Footer from '../../components/footer/index';
import MapContainer from './mapcontainer';
import ListView from './listView';

import axios from 'axios';

//import bounds from './bounds';
import locationsHeader from '../../images/location.jpeg';
//import locationsDb from './db';
//import locationsHeader from '../../images/locationsHeader.jpeg';
import './style.css';

//import locations from './db';

function Locations(props) {

        console.log(props)

        //console.log(typeof JSON.parse(props.locations[0].zipcodelist.toString()))
        let zipcodes = JSON.parse(props.locations[1].zipcodelist);

        let str = zipcodes.toString()

        console.log(str)

        // const options = {
        //     method: 'GET',
        //     url: 'https://vanitysoft-boundaries-io-v1.p.rapidapi.com/rest/v1/public/boundary/zipcode',
        //     params: {zipcode: str},
        //     headers: {
        //       'x-rapidapi-host': 'vanitysoft-boundaries-io-v1.p.rapidapi.com',
        //       'x-rapidapi-key': '7f512eae08mshf45fffd34cc33e2p11d7b8jsn9d08016938ec'
        //     }
        //   };

        // let bounds = [];
        // let filteredArr = []
          
        //   axios.request(options).then(function (response) {
        //       console.log(response.data.features);
        //       //console.log(coordinates)

        //     //   for(let i=0; i<response.data.features.length; i++) {
        //     //     //bounds = bounds.concat(response.data.features[i].geometry.coordinates[0])
        //     //     // if(response.data.features[i].geometry.coordinates[0][0].length > 2) {
        //     //     //     bounds = bounds.concat(response.data.features[i].geometry.coordinates[0][0])
        //     //     // }
        //     //     // else bounds = bounds.concat(response.data.features[i].geometry.coordinates[0])

        //     //     //multipolygon and regular polygon?

        //     //     if(response.data.features[i].geometry.type === 'Polygon') {
        //     //         bounds = bounds.concat(response.data.features[i].geometry.coordinates[0])
        //     //     }

        //     //     else if(response.data.features[i].geometry.type === 'MultiPolygon') {
        //     //         for(let j = 0; j<response.data.features[i].geometry.coordinates.length; j++) {
        //     //             bounds = bounds.concat(response.data.features[i].geometry.coordinates[j][0])
        //     //         }
        //     //     }

        //       })



        
        // let coords = [];

        // for(let i = 0; i<arr.length; i++) {
        //     for(let j=0; j<arr[i].geometry.coordinates.length; j++) {
        //         coords = coords.concat(arr[i].geometry.coordinates[j])
        //     }
        // }

        // console.log(coords)

        // for(let k=0; k<coords.length; k++) {
        //     let a = coords[k][0]
        //     coords[k][0] = coords[k][1]
        //     coords[k][1] = a 
        // }

        // console.log(coords)

        //       console.log(bounds)

              
        //       for(let i = 0; i<bounds.length; i++) {
        //           if(filteredArr.indexOf(bounds[i]) === -1) {
        //               filteredArr.push(bounds[i])
        //           }
        //       }

        //       console.log(filteredArr)
              
        //   }).catch(function (error) {
        //       console.error(error);
        //   });
        
        const [viewMap, setViewMap] = useState(true);

   
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
            {!viewMap && <ListView locations={props.locations} zipcode={props.zipcode} />}
            {viewMap > 0 && <MapContainer locations={props.locations} 
            zipcode={props.zipcode} 
            bounds={props.locations[1].bounds}
            //coordinates={filteredArr}  
             />}
            <Footer locationPage={true} />
        </Fragment>
        )

}

export default Locations;