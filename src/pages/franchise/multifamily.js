import React from 'react';
import Section from '../../components/section';
import multifamily from '../../images/franchise/multifamily.jpeg';
//import './multifamily.css';

function Multifamily(props) {
    return(
        <Section
            img={multifamily}
            title='BEAUTIFY YOUR MULTIFAMILY RESIDENCE'
            p1={`At ${props.location.name}, we understand that as a property manager, you are extremely busy. Our professionals make your life easier by turning proposals around quickly.`}
            p2='Our teams attend board meetings and describe projects and services to ensure the delivery to your communities is exactly what it should be, World Class. Transblue is an expert in the Capital Projects that your community budgets for each year.'
            p3=''
            contact={{
                phone: props.location.phone,
                email: props.location.email
            }}
            imageSide='right'
        />
    )
}

export default Multifamily;