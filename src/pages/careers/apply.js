import React, { forwardRef, useEffect, useState } from 'react';
import './style.css';

import{ init } from 'emailjs-com';
import * as emailjs from 'emailjs-com'
init("user_iLZ3jXyTzXi5zQFlgf5DG");

const Apply = forwardRef((props) => {
    const [email, setEmail] = useState('')

    console.log(props)

    function selectLocation(e) {
        console.log(e.target.value)
        setEmail(e.target.value)
    }

    function submit(e) {
        e.preventDefault();
        let messageParams = {
            to_email: 'carters@transblue.org', //need to change to franchise specific email
        }

        emailjs.sendForm('service_61uwfqo', 'template_cjk37bd', e.target, 'user_iLZ3jXyTzXi5zQFlgf5DG')
            .then(res => console.log(res))
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
                    <div className='col-lg-6 my-auto pl-5'>
                        <form onSubmit={submit}>
                            <h5>SELECT A LOCATION</h5>
                            <select className='custom-select' onChange={selectLocation}>
                                <option value=''>SELECT LOCATION</option>
                                {props.locations.map(location => {
                                    return(
                                        <option value={location.email}>{location.name}</option>
                                    )
                                })}
                            </select>
                            <h5>UPLOAD YOUR RESUME</h5>
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