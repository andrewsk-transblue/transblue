import React from 'react';
import Section from '../../components/section';
import govtFence from '../../images/government/govtfence.jpeg'

function Govt(props) {
    return(
        <Section
            img={govtFence}
            title='GOVERNMENT SERVICES'
            p1={`At ${props.location.name},`}
            p2=''
            p3=''
            contact={props.location}
            imageSide='left'
        >
        </Section>
    )
}

export default Govt;