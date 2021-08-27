import React, {Fragment, useState} from 'react';
//import ev from '../../../images/residential/ev.jpeg';
import ev2 from '../../../images/residential/ev2.jpg';
import ev3 from '../../../images/residential/ev3.jpg';
import solar from '../../../images/residential/solar4.jpg';
import xeriscape from '../../../images/residential/xeriscape.jpg';
import rightarrow from '../../../images/residential/rightarrow.png';
import leftarrow from '../../../images/residential/leftarrow.png';

import './style.css';

const images = [ev2, ev3, solar, xeriscape];
const text = [
    {
        title: 'ELECTRIC VEHICLE CHARGERS',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pellentesque facilisis mi. Nunc pretium ex enim, sed rhoncus nisl porttitor.'
    },
    {
        title: 'SOLAR POWERED ROOFS',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pellentesque facilisis mi. Nunc pretium ex enim, sed rhoncus nisl porttitor.'
    },
    {
        title: 'GREEN ROOFS',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pellentesque facilisis mi. Nunc pretium ex enim, sed rhoncus nisl porttitor.'
    },
    {
        title: 'XERISCAPES',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pellentesque facilisis mi. Nunc pretium ex enim, sed rhoncus nisl porttitor.'
    }
]

function ServiceCard(props) {
    const [index, setIndex] = useState(0);

    const body = props.body

    function changeSlide(direction) {
        if(direction === 'increment') {
            index < text.length - 1 ? setIndex(index+1) : setIndex(0)
        }
        else {
            index > 0 ? setIndex(index-1) : setIndex(text.length-1)
        }
    }

    return(
        <Fragment>
            <div className='row service-bg mt-5 mx-0'>
            <div className='green-about pl-4 col-lg-4 col-sm-12 col-12 order-lg-12 order-sm-1'>
                <p className='mb-1'>WELCOME TO THE</p>
                <h2>FUTURE OF
                    GREEN ENERGY</h2>
                <p className='section-p'>{props.p1}</p>
                <p className='section-p'>{props.p2}</p>
                {/* <p className='section-p'>We are committed to the future beauty of our outdoors. For that reason we offer an array of projects that help minimize your carbon footprint.</p>
                <p className='mb-4 section-p'>We provide proffesional grade Electric vehicle charge installations and retrofitting. To conserve power useage we also provide solar paneling installations for roofing and shade structures. </p> */}
            </div>
            <div className='green-service-card service-wrapper col-lg-8 col-12 col-xs-12 order-lg-1 order-sm-12'>
                <img src={images[index]} alt='' />
                <div className='green-body'>
                    <p className='text-secondary mb-1 mt-2'>TRANSBLUE GREEN SERVICES</p>
                    <hr />
                    <h3>{text[index].title}</h3>
                    <p className='section-p'>
                        {/* {text[index].body} */}
                        {body[index]}
                    </p>
                    <a className='mr-1' href='https://tbev.herokuapp.com/'>LEARN MORE</a>
                    <button onClick={() => changeSlide('decrement')}><img src={leftarrow} alt='Prev Slide' /></button>
                    <button onClick={() => changeSlide('increment')}><img src={rightarrow} alt='Next Slide' /></button>
                </div>
            </div>
            </div>
        </Fragment>
    )
}

export default ServiceCard;