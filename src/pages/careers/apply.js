import React, { forwardRef, useEffect, useState } from 'react';
import './style.css';

import{ init } from 'emailjs-com';
import * as emailjs from 'emailjs-com'
init("user_iLZ3jXyTzXi5zQFlgf5DG");

let positionsList = [
    'Project Manager',
    'Sales Manager',
    'General Manager',
    'Office Admin'
]

const Apply = forwardRef((props) => {
    const [email, setEmail] = useState('');
    const [position, setPosition] = useState('');

    function selectLocation(e) {
        setEmail(e.target.value)
    }

    function submit(e) {
        e.preventDefault();

        //console.log(email)
        emailjs.sendForm('service_gekurtf', 'template_cjk37bd', e.target, 'user_iLZ3jXyTzXi5zQFlgf5DG')
            .then(res => {
                props.redirect();
            })
    }

    return(
        <div className='apply-bg' ref={props.innerRef}>
            <div className='apply-wrapper'>
                <div className='row'>
                    <div className='col-lg-6 pr-5'>
                        <h2>APPLYING IS EASY!</h2>
                        <p className='section-p'>
                            At Transblue, we don't believe in wasting your time. We won't make you go through the hoops of creating an account and filling out a bunch of information about yourself, only to upload your resume with exactly the same information.                            
                        </p>
                        <p className='section-p'>Just select which location you would like to apply to, upload your resume, and submit! Simple as that.</p>
                    </div>
                    {/* <div className='col-lg-1'></div> */}
                    <div className='col-lg-6 my-auto pl-lg-5'>
                        <form onSubmit={submit}>
                            <h5>SELECT A LOCATION</h5>
                            <select className='custom-select' onChange={selectLocation}>
                                <option value=''>SELECT LOCATION</option>
                                {props.locations.map(location => {
                                    return(
                                        <option value={location.officeemail}>{location.name}</option>
                                    )
                                })}
                            </select>

                            <h5>WHICH POSITION ARE YOU APPLYING FOR?</h5>
                            <select className='custom-select' onChange={(e) => setPosition(e.target.value)}>
                                <option value=''>SELECT A POSITION</option>
                                {positionsList.map(position => {
                                    return(
                                        <option value={position}>{position}</option>
                                    )
                                })}
                            </select>

                            <h5>UPLOAD YOUR RESUME</h5>
                            <input name='position' style={{display: 'none'}} value={position}></input>
                            <input name='email' style={{display: 'none'}} value={email}></input>
                            <input name='resume' type='file' placeholder='Find your resume' required></input>
                            <br />
                            <button type='submit'>SUBMIT</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default Apply;