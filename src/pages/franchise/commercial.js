import React from 'react';
import Section from '../../components/section';
import commercial from '../../images/franchise/commercial.jpeg';
import './commercial.css';

function Commercial(props) {
    return(
        <Section 
            img={commercial}
            title='UPGRADE YOUR BUSINESS'
            p1={`At ${props.location.name}, our teams are focused on making your life simple and reducing the burden that comes with the capital projects required to keep your business looking its best.`}
            p2='We understand that cost and quality are keys to the success of your initiative. Our promise is to deliver a truly World Class Experience.'
            imageSide='left'
            contact={{
                phone: props.location.phone,
                email: props.location.email
            }}
        />
    )
}

export default Commercial;