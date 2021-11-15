import React, { useEffect } from 'react';
import './style.css';

function Apply(props) {

    // useEffect(() => {
    //     console.log(props.locations)
    // }, [])

    return(
        <div className='apply-bg'>
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
                        <h6>SELECT A LOCATION</h6>
                        <select className='custom-select'>
                            <option value=''>SELECT LOCATION</option>
                            {props.locations.map(location => {
                                return(
                                    <option>{location.name}</option>
                                )
                            })}
                        </select>
                        <h6>UPLOAD YOUR RESUME</h6>
                        <input placeholder='Find your resume'></input>
                        <br />
                        <button>SUBMIT</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Apply;