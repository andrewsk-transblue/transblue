import React, { Component, Fragment } from 'react';
import states from './statesDb';
import './subcontractor.css';

class SubForm extends Component {

    constructor() {
        super();
        this.state = {
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

    onChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
        
    }

    updateRadio = (e, value) => {
        this.setState({
            [e.target.id]: value
        }, () => console.log(this.state.acceptTerms))
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // axios.post('/api/send/subcontractor', this.state)
        //     .then(res => {
        //         this.setState({
        //             applicationSent: true
        //         })
        //     })
    }

    render() {
        console.log(this.props)
        return(
            <Fragment>
                <div className='row'><h2>TRANSBLUE {this.props.props.urlCity.toUpperCase()}</h2></div>
                    <div className='row'><h4>Subcontractor Application</h4></div>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <label>Business Name:<br />
                                <input id='businessName' onChange={this.onChange} type='text' className='form-control' required ></input>
                            </label>
                        </div>
                        <div className='col-lg-6'>
                            <label>Name:<br />
                                <input id='name' onChange={this.onChange} type='text' className='form-control' required ></input>
                            </label>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-lg-6 input-group has-validation'>
                            <label>Email:<br />
                                <input id='email' onChange={this.onChange} type='email' className='form-control' required ></input>
                            </label>
                            {/* <div className="invalid-feedback">
                                Please choose a username.
                            </div> */}
                        </div>
                        <div className='col-lg-6 input-group has-validation'>
                            <label>Job Title:<br />
                                <input id='jobTitle' onChange={this.onChange} type='text' className='form-control' required ></input>
                            </label>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-lg-12 input-group has-validation'>
                            <label>Street Address:<br />
                                <input id='address1' onChange={this.onChange} type='text' className='form-control' required ></input>
                            </label>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-lg-12 input-group has-validation'>
                            <label>Address Line 2: <div>(optional)</div><br />
                                <input id='address2' onChange={this.onChange} type='text' className='form-control'></input>
                            </label>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-5 input-group has-validation'>
                            <label>City:<br />
                                <input id='city' onChange={this.onChange} type='text' className='form-control' required></input>
                            </label>
                        </div>
                        <div className='col-lg-2 input-group has-validation'>
                            <label>State<br />
                                <select id='state' onChange={this.onChange} value={this.state.state} >
                                    {states.map(state => {
                                        return(<option value={state} key={states.indexOf(state)}>{state}</option>)
                                    })}
                                </select>
                            </label>
                        </div>
                        <div className='col-lg-5 input-group has-validation'>
                            <label>Zipcode:<br />
                                <input id='zipcode' onChange={this.onChange} type="text" pattern="[0-9]{5}" title='5 Digit Zipcode' className='form-control' required></input>
                            </label>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-lg-6 input-group has-validation'>
                            <label>Business Phone: <div>(No Spaces or Dashes)</div><br />
                                <input id='businessPhone' onChange={this.onChange} type='tel' pattern='[0-9]{10}' title='10 Digits, no spaces or dashes' className='form-control' required></input>
                            </label>
                        </div>
                        <div className='col-lg-6 input-group has-validation'>
                            <label>Cell Phone: <div>(No Spaces or Dashes)</div><br />
                                <input id='cellPhone' onChange={this.onChange} type='tel' pattern='[0-9]{10}' title='10 Digits, no spaces or dashes' className='form-control' ></input>
                            </label>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-lg-6 input-group has-validation'>
                            <label>Tax ID (EIN) Number:<br />
                                <input id='EIN' onChange={this.onChange} type='text' pattern='[0-9]*' title='Digits only' className='form-control' required></input>
                            </label>
                        </div>
                        <div className='col-lg-6 input-group has-validation'>
                            <label>Contractor License Number:<br />
                                <input id='licenseNo' onChange={this.onChange} type='text' pattern='[0-9]*' title='Digits only' className='form-control' required></input>
                            </label>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <p className='mb-2'>Do you have Comprehensive Liability insurance?</p>
                            <div className='form-check'>
                                <input className="form-check-input" type="radio" id="liability" onChange={(e) => this.updateRadio(e, false)} checked={!this.state.liability} />
                                <label htmlFor="liability">
                                    No
                                </label>
                            </div>
                            <div className='form-check'>
                                <input className="form-check-input" type="radio"  id="liability"  onChange={(e) => this.updateRadio(e, true)} checked={this.state.liability} />
                                <label htmlFor="liability">
                                    Yes
                                </label>
                            </div>
                        </div>

                        <div className='col-lg-4'>
                            <p className='mb-2'>Can you provide a Certificate of Insurance?</p>
                            <div className='form-check'>
                                <input className="form-check-input" type="radio" id="insurance" onChange={(e) => this.updateRadio(e, false)} checked={!this.state.insurance}/>
                                <label htmlFor="insurance">
                                    No
                                </label>
                            </div>
                            <div className='form-check'>
                                <input className="form-check-input" type="radio" id="insurance" onChange={(e) => this.updateRadio(e, true)} checked={this.state.insurance} />
                                <label htmlFor="insurance">
                                    Yes
                                </label>
                            </div>
                        </div>

                        <div className='col-lg-4'>
                            <p className='mb-2'>Do your employees have the ability to access and report information to Transblue remotely from a job site (Laptop, Tablet, Smart Phone, etc.)?</p>
                            <div className='form-check'>
                                <input className="form-check-input" type="radio" id="remoteAccess" onChange={(e) => this.updateRadio(e, false)} checked={!this.state.remoteAccess} />
                                <label htmlFor="remoteAccess">
                                    No
                                </label>
                            </div>
                            <div className='form-check'>
                                <input className="form-check-input" type="radio" id="remoteAccess" onChange={(e) => this.updateRadio(e, true)} checked={this.state.remoteAccess} />
                                <label htmlFor="remoteAccess">
                                    Yes
                                </label>
                            </div>
                        </div>
                    </div>
                </Fragment>
        )
    }
}

export default SubForm;