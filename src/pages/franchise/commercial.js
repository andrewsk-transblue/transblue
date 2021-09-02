import React from 'react';
import Section from '../../components/section';
import commercial from '../../images/franchise/commercial.jpeg';
import './commercial.css';

function Commercial(props) {

    let tel = props.location.phone.replace(/[^A-Z0-9]/ig, "")
    return(
        <Section 
            img={commercial}
            title='UPGRADE YOUR BUSINESS'
            p1={`At ${props.location.name}, our teams are focused on making your life simple and reducing the burden that comes with the capital projects required to keep your business looking its best.`}
            p2='We understand that cost and quality are the keys to success of your initiative. Our promise is to deliver a truly World Class Experience.'
            p3={`Contact us today and experience what construction should be like!<br />
            <b><a href={tel:+${tel}}>${props.location.phone}</a><br />
            ${props.location.email}</b>`}
            imageSide='left'
        />
    )
}

export default Commercial;