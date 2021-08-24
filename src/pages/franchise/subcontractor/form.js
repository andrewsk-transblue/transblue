import React, {Component} from 'react';
import Agreement from './agreement';
import './style.css';

class Form extends Component {
    constructor() {
        super();
        this.state={
            businessName: '',
            name: '',
            email: '',
            jobTitle: '',
            address1: '',
            address2: '',
            city: '',
            state: '',
            zipcode: '',
            businessPhone: '',
            cellPhone: '',
            EIN: '',
            licenseNo: '',
            liability: false,
            insurance: false,
            remoteAccess: false,
            agreement: '',
            acceptTerms: false,
            applicationSent: false
        }
    }

    onChange = (e) => {
        this.setState({[e.target.id]: e.target.value})
    }

    updateRadio = (e, value) => {
        //console.log(typeof e.target.value)
        //console.log(this.state[e.target.id])
        this.setState({[e.target.id]: value})
    } 
    
    render() {
        //console.log(this.props)
        return(
            <form className='subform-wrapper'>
                <div className='row'>
                    <span>
                        <input className='left-input' placeholder='Business Name' id='businessName' onChange={this.onChange} required></input>
                        <input className='right-input' placeholder='Name' id='name' onChange={this.onChange} required></input>
                    </span>
                    <span>
                        <input className='left-input' placeholder='Email' id='email' onChange={this.onChange} required />
                        <input className='right-input' placeholder='Job Title' id='jobTitle' onChange={this.onChange} required />
                    </span>

                    <span>
                        <input className='left-input' placeholder='Street Address' id='address1' onChange={this.onChange} required />
                        <input className='right-input' placeholder='Address Line 2 (optional)' id='address2' onChange={this.onChange} required />
                    </span>
                    <span>
                        <input className='center-left-input' placeholder='City' id='city' onChange={this.onChange} required />
                        <input className='center-center-input' placeholder='State' id='state' onChange={this.onChange} required />
                        <input className='center-right-input' placeholder='Zipcode' id='zipcode' onChange={this.onChange} required />
                    </span>
                    <span>
                        <input className='left-input' placeholder='Business Phone' id='businessPhone' onChange={this.onChange} type='tel' required />
                        <input className='right-input' placeholder='Cell Phone' id='cellPhone' onChange={this.onChange} type='tel' required />
                    </span>
                    <span>
                        <input className='left-input' placeholder='Tax ID (EIN) Number' id='EIN' onChange={this.onChange} required />
                        <input className='right-input' placeholder='Contractor License Number' id='licenseNo' onChange={this.onChange} required />
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
                    <h6>SUBCONTRACTOR AGREEMENT</h6>                            
                    <Agreement location={this.props.location} />                           
                </div>

                <div className='row submit'>
                    <button type='submit' className='cta'>SUBMIT</button>
                </div>
            </form>
        )
    }
}

export default Form;