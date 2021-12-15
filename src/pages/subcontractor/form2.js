import React from 'react';
import Agreement from './agreement';
import './style.css';

import{ init } from 'emailjs-com';
import * as emailjs from 'emailjs-com'
init("user_iLZ3jXyTzXi5zQFlgf5DG");

function Form(props) {

    function submit(e) {
        e.preventDefault();
    }

    return(
        <form className='subform-wrapper' onSubmit={submit}>
                <div className='row'>
                    <span>
                        <input className='left-input' placeholder='Business Name' id='businessName' name='businessName' required></input>
                        <input className='right-input' placeholder='Name' id='name' name='to_name' required></input>
                    </span>
                    <span>
                        <input className='left-input' placeholder='Email' id='email' name='reply_to' required />
                        <input className='right-input' placeholder='Job Title' id='jobTitle' name='jobTitle' required />
                    </span>

                    <span>
                        <input className='left-input' placeholder='Street Address' id='address1' name='address1' required />
                        <input className='right-input' placeholder='Address Line 2 (optional)' id='address2' name='address2' />
                    </span>
                    <span>
                        <input className='center-left-input' placeholder='City' id='city' name='city' required />
                        <input className='center-center-input' placeholder='State' id='state' name='state' required />
                        <input className='center-right-input' placeholder='Zipcode' id='zipcode' name='zipcode' required />
                    </span>
                    <span>
                        <input className='left-input' placeholder='Business Phone' id='businessPhone' name='businessPhone' type='tel' required />
                        <input className='right-input' placeholder='Cell Phone' id='cellPhone' type='tel' name='cellPhone' />
                    </span>
                    <span>
                        <input className='left-input' placeholder='Tax ID (EIN) Number' name='EIN' id='EIN' required />
                        <input className='right-input' placeholder='Contractor License Number' id='licenseNo' name='licenseNo' required />
                    </span>
                    <span>
                        <p>Do you have Comprehensive Liability Insurance?</p>
                        <input id='liability' type='radio' value={true} checked={this.state.liability} onChange={(e) => this.updateRadio(e, true)}></input>
                        <label>Yes</label>
                        <input id='liability' type='radio' value={false} checked={!this.state.liability} onChange={(e) => this.updateRadio(e, false)}></input>
                        <label>No</label>
                    </span>
                    <span>
                        <p>Can you provide a Certificate of Insurance?</p>
                        <input id='insurance' type='radio' checked={this.state.insurance} onChange={(e) => this.updateRadio(e, true)}></input>
                        <label>Yes</label>
                        <input id='insurance' type='radio' checked={!this.state.insurance} onChange={(e) => this.updateRadio(e, false)}></input>
                        <label>No</label>
                    </span>
                    <span>
                        <p>Do your employees have the ability to access and report information to Transblue remotely from a job site (Laptop, Tablet, Smart Phone, etc.)?</p>
                        <input id='remoteAccess' type='radio' value={true} checked={this.state.remoteAccess} onChange={(e) => this.updateRadio(e, true)}></input>
                        <label>Yes</label>
                        <input id='remoteAccess' type='radio' value={false} checked={!this.state.remoteAccess} onChange={(e) => this.updateRadio(e, false)}></input>
                        <label>No</label>
                    </span>
                </div>

                <div className='row agreement'>
                    <h6>MASTER SUBCONTRACT AGREEMENT</h6>                            
                    <Agreement location={this.props.location} />                           
                </div>

                <div className='row'>
                    <span>
                    {/* <input id='authority' type='radio' onChange={(e) => this.updateRadio(e, true)} required></input>
                    <label>I have authority to sign on subcontractor's behalf</label><br /> */}
                    Please retype your name:<br />
                    <input placeholder='Your name' onChange={this.checkName} id='retypeName'></input>
                        {!this.state.nameMatch && 
                            <div><i className='fas fa-times' style={{color: 'red'}}></i> Does not match name above</div>
                        }<br />
                        {this.state.nameMatch && 
                            <span><i className='fas fa-check' style={{color: 'green'}}></i> Name matches</span>
                        }<br />
                    </span>
                </div>

                <div className='row'>
                    <span>
                    <input id='acceptTerms' type='radio' checked={this.state.acceptTerms} onChange={(e) => this.updateRadio(e, true)} required></input>
                    <label>I have read and accept all terms and conditions listed above</label>
                    </span>
                </div>

                <div className='row submit'>
                    <button type='submit' disabled={!this.state.acceptTerms} className='cta'>SUBMIT</button>
                </div>

                {this.state.applicationSent && <div className='application-sent alert alert-success'>
                    Thank you! Your application has been submitted.
                </div>}
            </form>
    )
}

export default Form;