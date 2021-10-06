import React from 'react';
import Section from '../../components/section';
import evCropped from '../../images/government/evCropped.jpg';
import regional from './regional';

function Green(props) {
    return(
        <Section
        page='GREEN'
        name={props.location.name}

            title='GREEN SOLUTIONS'
            imageSide='right'
            img={regional[props.location.region][2]}
            p1={`Electric vehicles are on the forefront of all government facilities. ${props.location.name} offers world class installation of Electric Vehicle Charges for all of your government facilities. From super-fast DC charges to Level 2 charges Transblue is the right contractor for you. Transblue compliments EV charging with a full range of solar services. Proving renewable energy construction is a core of our business.`}
            p2=''
            contact={props.location}
            services={[
                'EV Chargers',
                'Green Roofs',
                'Solar Power'
            ]}
            services2={[
                'Xeriscapes',
                'Permeable Pavement',
                'Bioswales'
            ]}
        />
    )
}

export default Green;