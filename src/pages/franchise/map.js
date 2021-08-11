import React, {useState} from 'react';
import { MapContainer, TileLayer, Marker} from 'react-leaflet';
import './style.css';

function Map(props) {
    const position = [props.lat, props.lon];

    return(
        <MapContainer center={position} zoom={11} scrollWheelZoom={true} id='mapid'>
            <TileLayer
                attribution='Transblue'
                url='https://api.mapbox.com/styles/v1/sarahmariecarter/ckq2imn0v1a7x17o3s84v62bj/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic2FyYWhtYXJpZWNhcnRlciIsImEiOiJja3EyaXBub2UwcDVnMm9xYjY1M282MWtsIn0.M45SX1Os1C-H17ssCoAL8g'
                />
            <Marker position={[props.lat, props.lon]} />
        </MapContainer>
    )
}

export default Map;