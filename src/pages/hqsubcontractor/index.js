import React, {useEffect, useState} from 'react';
import Captcha from '../../components/captcha/captcha';
import msaPage1 from './msaPage1';
import msa from './msa';
import './style.css';

import{ init } from 'emailjs-com';
import * as emailjs from 'emailjs-com'
init("user_iLZ3jXyTzXi5zQFlgf5DG");

function HQSubcontractor() {
    const [displayMSA1, setDisplayMSA1] = useState(false);
    const [displayMSA, setDisplayMSA] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [submitted, setIsSubmitted] = useState(false);

    function displayMsa() {
        setDisplayMSA(true);
        setDisplayMSA1(false)
    }

    function submit(e) {
        
        e.preventDefault();
        emailjs.sendForm('service_gekurtf', 'template_vjdl3op', e.target, 'user_iLZ3jXyTzXi5zQFlgf5DG')
            .then(res => console.log(res))

        setIsSubmitted(true);
    }
    
    return(
        <div className='hq-bg'>
            <form className={(!displayMSA && !displayMSA1) ? 'form-wrapper' : 'form-wrapper hide'} onSubmit={submit}>
                <h3>SUBCONTRACTOR APPLICATION - HQ</h3>
                <hr />
                <div className='contact-info'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <label htmlFor='businessName'>Business Name: *</label><br />
                            <input name='businessName' required></input>
                        </div>
                        <div className='col-lg-6'>
                            <label htmlFor='name'>Full Name: *</label> <br />
                            <input name='name' required></input>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <label>Email: *</label><br />
                            <input name='email' required></input>
                        </div>
                        <div className='col-lg-6'>
                            <label>Job Title: *</label><br />
                            <input name='jobTitle' required></input>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <label>Street Address: *</label><br />
                            <input name='address1' required></input>
                        </div>
                        <div className='col-lg-6'>
                            <label>Address Line 2:</label><br />
                            <input name='address2'></input>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <label>City: *</label><br />
                            <input name='city' required></input>
                        </div>
                        <div className='col-lg-4'>
                            <label>State: *</label><br />
                            <input name='state' required></input>
                        </div>
                        <div className='col-lg-4'>
                            <label>Zipcode: *</label><br />
                            <input name='zipcode' required></input>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <label>Business Phone: *</label><br />
                            <input name='businessPhone' required></input>
                        </div>
                        <div className='col-lg-6'>
                            <label>Cell Phone:</label><br />
                            <input name='cellPhone'></input>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <label>Contractor License Number: *</label>
                            <input name='licenseNo' required></input>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <label>Do you have Comprehensive Liability Insurance coverage? *</label>
                            <label className="radio-inline"><input type="radio" className='radio' name="liability" value={true} />Yes</label>
                            <label className="radio-inline"><input type="radio" className='radio' name="liability" value={false} />No</label>
                        </div>
                        <div className='col-lg-4'>
                            <label>Do your employees have the ability to access and report information to Transblue remotely from a job site (Laptop, Tablet, Smart Phone, etc.)? *</label>
                            <label className="radio-inline"><input type="radio" className='radio' name="remoteAccess" value={true} />Yes</label>
                            <label className="radio-inline"><input type="radio" className='radio' name="remoteAccess" value={false} />No</label>
                        </div>
                        <div className='col-lg-4'>
                            <label>Can you provide a Certificate of Insurance? *</label>
                            <label className="radio-inline"><input type="radio" className='radio' name="certificate" value={true} />Yes</label>
                            <label className="radio-inline"><input type="radio" className='radio' name="certificate" value={false} />No</label>
                        </div>
                    </div>
                    <button type='button' onClick={() => setDisplayMSA1(true)}>NEXT</button>
                </div>
                
                {displayMSA1 &&
                    <div className='msa'>
                        <div className='msa1' dangerouslySetInnerHTML={{__html: msaPage1.replace(/\\n/g, "<br />")}}></div>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <label>Consent: *</label><br />
                                <label><input name='msa1' className='checkbox' type='checkbox' value={true}></input> <b>I have read Page one of the MSA</b></label>
                            </div>
                            <div className='col-lg-6'>
                                <label>Initial: *</label><br />
                                <input className='initials' name='initials1' required></input><br />
                                <small>By initialing you agree you have read Page one of the MSA</small>
                            </div>
                        </div>
                        <button type='button' onClick={() => setDisplayMSA(true)}>NEXT</button>
                    </div>
               }

                {displayMSA &&
                    <div className='msa'>
                        <div className='msa1' name='html' value={msa} dangerouslySetInnerHTML={{__html: msa.replace(/\\n/g, "<br />")}}></div>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <label>Consent: *</label><br />
                                <label><input name='msa' className='checkbox' type='checkbox' value={true}></input><b> I have read the MSA and agree to all of its terms.</b></label>
                            </div>
                            <div className='col-lg-6'>
                                <label>Initial: *</label><br />
                                <input className='initials' name='initials2' required></input><br />
                                <small>By initialing you agree you have read the MSA</small>
                            </div>
                        </div>
                        <Captcha onChange={() => setDisabled(false)} />
                        <button type='submit' className={disabled ? 'disabled' : ''} disabled={disabled}>SUBMIT</button>
                        {submitted && <div className='submitted alert-success p-2 text-center'>
                            <b>Thank you!</b> Your subcontractor application for Transblue has been submitted
                        </div>}
                    </div>
                }
            </form>
        </div>
    )
}

export default HQSubcontractor;