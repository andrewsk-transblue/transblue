import React from 'react';
import { MapContainer, TileLayer, Marker, GeoJSON} from 'react-leaflet';
import './style.css';

function Map(props) {
    const position = [props.lat, props.lon];

    return(
        <MapContainer center={position} zoom={9} scrollWheelZoom={true} id='mapid'>
            <TileLayer
                attribution='Transblue'
                url='https://api.mapbox.com/styles/v1/sarahmariecarter/ckt259o46010e18njaz84sofg/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic2FyYWhtYXJpZWNhcnRlciIsImEiOiJja3EyaXBub2UwcDVnMm9xYjY1M282MWtsIn0.M45SX1Os1C-H17ssCoAL8g'
                // url='https://api.mapbox.com/styles/v1/sarahmariecarter/ckt259o46010e18njaz84sofg.html?fresh=true&title=view&access_token=pk.eyJ1Ijoic2FyYWhtYXJpZWNhcnRlciIsImEiOiJja3A4dGE2eGUwYmhhMm9ueHQxYm81aG1jIn0.IL6ap7-sSL2WXIipenrzUQ'
                />
                
            <Marker position={[props.lat, props.lon]} />
            <GeoJSON data={props.geojson}
                style={{fillColor: '#ed6a22'}}
                pathOptions={{color: '#ed6a22'}}
            />
        </MapContainer>
    )
}

export default Map;