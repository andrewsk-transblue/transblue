import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import Captcha from '../../components/captcha/captcha';
// /import SignatureCanvas from 'react-signature-canvas';
import Agreement from './agreement';
import './style.css';

import{ init } from 'emailjs-com';
import * as emailjs from 'emailjs-com'
init("user_iLZ3jXyTzXi5zQFlgf5DG");

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
            acceptTerms: false,
            applicationSent: false,
            trimmedDataURL: '',
            sigSaved: false,
            filledForm: '',
            imgSrc: '',
            nameMatch: false,
            retypeName: '',
            applicantSuccess: false,
            franchiseSuccess: false
        }
    }

    componentDidMount() {
        console.log(this.props.location.msafile)
    }

    onChange = (e) => {
        this.setState({[e.target.id]: e.target.value})
    }

    updateRadio = (e, value) => {
        this.setState({[e.target.id]: value}, () => console.log(this.state[e.target.id]))
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log('submitted');

        //console.log(this.props.location.officeemail)

        let templateParams = {
            subject: 'Subcontractor Application',
            from_name: this.props.location.name,
            to_email: 'no-reply@transblue.org', //CHANGE THIS TO this.props.location.officeemail
            //to_email: this.props.location.officeemail,
            to_name: this.state.name,
            //reply_to: 'carters@transblue.org',
            reply_to: this.state.email, //CHANGE THIS TO this.state.email
            //message_html: `${this.props.location.htmlagreement} <br /> SIGNATURE: <img src='cid:signature' />`,
            businessName: this.state.businessName,
            email: this.state.email,
            jobTitle: this.state.jobTitle,
            address: `${this.state.address1}, ${this.state.address2} ${this.state.city}, ${this.state.state} ${this.state.zipcode}`,
            businessPhone: this.state.businessPhone,
            cellPhone: this.state.cellPhone,
            EIN: this.state.EIN,
            licenseNo: this.state.licenseNo,
            liability: this.state.liability,
            insurance: this.state.insurance,
            remoteAccess: this.state.remoteAccess,
            acceptTerms: this.state.acceptTerms,
            msafile: `<a href=${this.props.location.msafile}>MSA LINK</a>`
        }

        // SEND EMAIL TO SUBCONTRACTOR APPLICANT
        emailjs.send(
        'service_gekurtf',
        'template_zlj2blu', //SUBCONTRACTOR TEMPLATE
            templateParams,
            process.env.REACT_APP_REACTJS_USER
        ).then(res => {
            if(res.status === 200) {
                this.setState({applicantSuccess: true})
                //SEND APPLICATION TO FRANCHISEE
                emailjs.send(
                    'service_gekurtf',
                    'template_2p9vcql',
                    templateParams,
                    process.env.REACT_APP_REACTJS_USER
                ).then(res => {
                    if(res.status === 200) this.setState({franchiseSuccess: true})
                })
            }
        })
    }

    checkName = (e) => {
        // this.onChange();
        e.target.value.toLowerCase().trim() == this.state.name.toLowerCase().trim() ? this.setState({nameMatch: true}) : this.setState({nameMatch: false})
    }

    clearSig = () => {
        this.sigPad.clear();
    }
        
    trim = () => {
        this.setState({ trimmedDataURL: this.sigPad.getTrimmedCanvas().toDataURL('image/png'), sigSaved: true })
        this.sigPad.clear();
    }
    
    render() {
        return(
            this.state.franchiseSuccess ? <Redirect to='/subcontractor/success' /> :
            <form className='subform-wrapper' onSubmit={this.onSubmit}>
                <div className='row'>
                    <span>
                        <input className='left-input' placeholder='Business Name' id='businessName' onChange={this.onChange} required value={this.state.businessName}></input>
                        <input className='right-input' placeholder='Name' id='name' onChange={this.onChange} required value={this.state.name}></input>
                    </span>
                    <span>
                        <input className='left-input' placeholder='Email' id='email' onChange={this.onChange} required value={this.state.email} />
                        <input className='right-input' placeholder='Job Title' id='jobTitle' onChange={this.onChange} required value={this.state.jobTitle} />
                    </span>

                    <span>
                        <input className='left-input' placeholder='Street Address' id='address1' onChange={this.onChange} required value={this.state.address1} />
                        <input className='right-input' placeholder='Address Line 2 (optional)' id='address2' onChange={this.onChange} value={this.state.address2} />
                    </span>
                    <span>
                        <input className='center-left-input' placeholder='City' id='city' onChange={this.onChange} required value={this.state.city} />
                        <input className='center-center-input' placeholder='State' id='state' onChange={this.onChange} required value={this.state.state} />
                        <input className='center-right-input' placeholder='Zipcode' id='zipcode' onChange={this.onChange} required value={this.state.zipcode} />
                    </span>
                    <span>
                        <input className='left-input' placeholder='Business Phone' id='businessPhone' onChange={this.onChange} type='tel' required value={this.state.businessPhone} />
                        <input className='right-input' placeholder='Cell Phone' id='cellPhone' onChange={this.onChange} type='tel' value={this.state.cellPhone} />
                    </span>
                    <span>
                        <input className='left-input' placeholder='Tax ID (EIN) Number' id='EIN' onChange={this.onChange} required value={this.state.EIN} />
                        <input className='right-input' placeholder='Contractor License Number' id='licenseNo' onChange={this.onChange} required value={this.state.licenseNo} />
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
}

export default Form;