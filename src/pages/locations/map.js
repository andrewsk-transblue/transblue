import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';

import locationsDb from './db';
import comingSoon from './comingSoon';

import './style.css';

// function SetViewOnClick({ coords }) {
//     const map = useMap();
//     map.fitBounds(coords)
    
//     return null;
// }

function SetCenter({center, radius}) {
    const map = useMap();
    var rad = radius * 1609;

    var zipcodeCenter = L.latLng(center);
    var bounds = zipcodeCenter.toBounds(rad); //get bounds of circle w/specified radius
    map.fitBounds(bounds) //fit map to bounds
    return null;
}

function MapComp(props) {
    return (
        <MapContainer center={props.center} zoom={5} scrollWheelZoom={true} id='mapid'>
            <TileLayer
                attribution='Transblue'
                url='https://api.mapbox.com/styles/v1/sarahmariecarter/ckq2imn0v1a7x17o3s84v62bj/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic2FyYWhtYXJpZWNhcnRlciIsImEiOiJja3EyaXBub2UwcDVnMm9xYjY1M282MWtsIn0.M45SX1Os1C-H17ssCoAL8g'
            />
            {/* marker for mount vernon in everett, for everett citizens to find easier */}
            <Marker position={[47.9790, -122.2021]}>
                <Popup>
                    <b>Transblue Mount Vernon</b><br /><br />
                    4152 Meridian Street, STE 105 #31<br />
                    Bellingham, WA 98226<br />
                    <i className="fas fa-phone">(360) 935-0808</i>
                    <i className="fas fa-envelope"></i>TransblueMountVernon@transblue.org<br />
                    <a className='site-link' href={`/locations/WA/mount-vernon`} target='_blank' rel="noreferrer">WEBSITE</a>
                </Popup>
            </Marker>
            <Marker position={[48.4201, -122.3375]}>
                <Popup>
                    <b>Transblue Mount Vernon</b><br /><br />
                    4152 Meridian Street, STE 105 #31<br />
                    Bellingham, WA 98226<br />
                    <i className="fas fa-phone">(360) 935-0808</i>
                    <i className="fas fa-envelope"></i>TransblueMountVernon@transblue.org<br />
                    <a className='site-link' href={`/locations/WA/mount-vernon`} target='_blank' rel="noreferrer">WEBSITE</a>
                </Popup>
            </Marker>
            {/* <Circle center={[39.8283, -98.5795]} radius={10000} fillColor="blue" /> */}
            {locationsDb.map(location => {
                return(
                    <Marker position={[`${location.lat}`, `${location.lon}`]}
                        eventHandlers={{
                            click: () => props.zoomLocation(`${location.lat}`, `${location.lon}`)
                            }
                        }>
                        <Popup>
                            <b>{location.name.toUpperCase()}</b> <br /><br />
                            {location.address1} {location.address2}<br />
                            {location.city}, {location.state} {location.zipcode}<br />
                            <i className="fas fa-phone"></i> {location.phone}<br />
                            <i className="fas fa-envelope"></i>{location.email}<br />
                            <a className='site-link' href={`/locations/${location.state}/${location.urlCity}`} target='_blank' rel="noreferrer">WEBSITE</a>
                        </Popup>
                    </Marker>
                )
            })}
            {comingSoon.map(location => {
                return(
                    <Marker position={[`${location.lat}`, `${location.lon}`]}
                        eventHandlers={{
                            click: () => props.zoomLocation(`${location.lat}`, `${location.lon}`)
                            }
                        }>
                        <Popup>
                            <b>Coming Soon!</b><br /><br />
                            {location.city}, {location.state}
                        </Popup>
                    </Marker>
                )
            })}

            {/* <GeoJSON
                style={{fillColor: 'purple'}}
                pathOptions={{color: 'purple'}}
                data={JSON.parse(props.geojson)}
            /> */}
            
            {props.center.length > 0 && <SetCenter center={props.center} radius={props.radius} />}
        </MapContainer>
    );
  }

  export default MapComp;