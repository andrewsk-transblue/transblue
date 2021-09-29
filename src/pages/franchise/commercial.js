import React from 'react';
import Section from '../../components/section';
import commercial from '../../images/franchise/commercial.jpg';
import regional from './regional';
import './commercial.css';

function Commercial(props) {
    console.log(props)
    console.log(regional[props.location.region])
    return(
        <Section 
        location={props.location}
            page='COMMERCIAL'
            name={props.location.name}
            img={regional[props.location.region][0]}
            title='UPGRADE YOUR BUSINESS'
            p1={`At ${props.location.name}, our teams are focused on making your life simple and reducing the burden that comes with the capital projects required to keep your business looking its best.`}
            p2='We understand that cost and quality are keys to the success of your initiative. Our promise is to deliver a truly World Class Experience.'
            imageSide='left'
            contact={{
                phone: props.location.phone,
                email: props.location.email
            }}
            services={[
                'Snow and Ice Management',
                'Pool Construction',
                'Pool Resurfacing' ,
                'Asphalt Paving',
                'Large Landscape Installs',
                'Roofing',
               ' Siding',
               'ESG Service Offerings'
            ]}
            services2={[
                'Painting',
                'Remodels and refreshes',
               ' Concrete work',
               ' Drainage Systems',
                'Decking, fencing and railing systems',
                'EV Charging Systems',
                'Solar Power'
            ]}
        />
    )
}

export default Commercial;