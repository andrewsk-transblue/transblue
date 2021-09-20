import React from 'react';
import Section from '../../components/section';
import evCropped from '../../images/government/evCropped.jpg';

function Green(props) {
    return(
        <Section
            title='GREEN SOLUTIONS'
            imageSide='right'
            img={evCropped}
            p1={`Electric vehicles are on the forefront of all government facilities. ${props.location.name} offers world class installation of Electric Vehicle Charges for all of your government facilities. From super-fast DC charges to Level 2 charges Transblue is the right contractor for you. Transblue compliments EV charging with a full range of solar services. Proving renewable energy construction is a core of our business.`}
            p2=''
            contact={props.location}
        />
    )
}

export default Green;