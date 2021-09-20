import React from 'react';
import './style.css';

function Section(props) {
    let tel;
    props.contact ? tel = props.contact.phone.replace(/[^A-Z0-9]/ig, "") : tel = ''
    return(
        <div className='section-wrapper container-fluid'>
            <div className='row'>
                <div className={props.imageSide === 'left' ? 'col-lg-6 col-12' : 'col-lg-6 col-12 order-lg-12'}>
                    <img src={props.img} alt='' />
                </div>
                <div className={props.imageSide === 'left' ? 'col-12 col-lg-6 left-text' : 'col-12 col-lg-6 right-text'}>
                    <h4 className='section-header'>{props.title}</h4>
                    <p className='section-p'>{props.p1}</p>
                    <p className='section-p'>{props.p2}</p>
                    {props.contact && <div className='row contact'>
                        <div className='col-12'>
                            GET STARTED TODAY!<br />
                            Give us a call at <a href={`tel:+${tel}`}>{props.contact.phone}</a>, <br />
                            Or <a href={`mailto:${props.contact.email}`}>send us a message</a> and we will get back to you as soon as possible
                        </div>
                    </div>}
                    {/* <p className='section-p' dangerouslySetInnerHTML={{__html: props.p3}}></p> */}
                </div>
            </div>
        </div>
    )
}

export default Section;