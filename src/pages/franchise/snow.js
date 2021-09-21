import React from 'react';
import Section from '../../components/section';

function Snow(props) {
    return(
        <Section
            title='SNOW &amp; ICE SERVICES'
            p1={`${props.location.name} supplies 24/7 service for our snow plowing and ice control clients. We service industrial parks, business parks, government lots, retail stores, medical facilities, banks, gas stations, warehouses, airports, HOAs, COAs, and apartment complexes. We understand the importance of documentation and each plow report comes with before and after pictures and a climatic condition report, ensuring minimum liability.`}
            p2=''
            contact={props.location}
            imageSide='left'
        />
    )
}

export default Snow;