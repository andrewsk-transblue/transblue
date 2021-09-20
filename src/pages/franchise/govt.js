import React from 'react';
import Section from '../../components/section';
import govtFence from '../../images/government/govtfence.jpeg'

function Govt(props) {
    return(
        <Section
            img={govtFence}
            title='GOVERNMENT SERVICES'
            p1={`${props.location.name} provides a full range of construction services to Government Facilities, whether it be Federal Government, Military, Municipality, School Districts, Parks and Recreation, etc. Transblue is positioned to deliver on the projects you’re planning to improve your properties. With a track record of success, we understand the scope from paperwork to prevailing wage and construction to completion.`}
            p2=''
            p3=''
            contact={props.location}
            imageSide='left'
        >
        </Section>
    )
}

export default Govt;