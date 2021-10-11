import React, {Component, ref} from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { jsPDF } from "jspdf";
import Fade from 'react-reveal/Fade';
import Agreement from './agreement';
import './style.css';

import Html2Pdf from 'js-html2pdf';

import {Preview, print} from 'react-html2pdf';


const api_key = process.env.REACT_APP_MAILGUN_API;
const domain = 'sandboxcf6c7b2e02cc4d50947369ccf5924304.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

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
            filledForm: ''
        }
    }

    onChange = (e) => {
        this.setState({[e.target.id]: e.target.value})
    }

    updateRadio = (e, value) => {
        //console.log(typeof e.target.value)
        //console.log(this.state[e.target.id])
        this.setState({[e.target.id]: value}, () => console.log(this.state[e.target.id]))
    } 

    // buttonPress = (enabled) => {
    //     console.log(enabled)
    //     if(enabled) this.onSubmit()
    // }

    onSubmit = (e) => {
        e.preventDefault();
        console.log('submitted')
        this.setState({applicationSent: true})

        const email = this.props.location.email
        //console.log(email)

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy;
        console.log(today)

        const doc = new jsPDF({lineHeight: 1.5});
          
        var filledForm = 
            this.props.location.variableagreement
            .replaceAll('${name}', this.state.name)
            .replaceAll('${day}', dd)
            .replaceAll('${month}', mm)
            .replaceAll('${year}', yyyy)
            .replaceAll('${trimmedDataURL}', this.state.trimmedDataURL)
            .replaceAll('${title}', this.state.jobTitle)
            .replaceAll('${EIN}', this.state.EIN)
            .replaceAll('${licenseNo}', this.state.licenseNo)
            .replaceAll('${jobTitle}', this.state.jobTitle)
            // .replaceAll('${bondNumber}', this.state.)

        this.setState({filledForm: filledForm})

        var element = document.getElementById('pdf');
        console.log(element)

        var options = {
            filename: 'my-file.pdf'
          };

        var exporter = new Html2Pdf(element, options);
        
        //exporter.getPdf(options);

        //print('a', 'pdf')
        
        //var splitTitle = doc.splitTextToSize(filledForm, 270);

        //var pageHeight = doc.internal.pageSize.height;
        // doc.setFontSize(11);
        // var y = 7;

        // for (var i = 0; i < splitTitle.length; i++) {    
                       
        //     if (y > 270) {
        //         y = 10;
        //         doc.addPage();
        //     }
        //     doc.text(15, y, splitTitle[i]);
        //     y = y + 7;
        // }

        //doc.addImage(this.state.trimmedDataURL, 'JPEG', 15, y, 25, 25);
        //doc.text('X_____________________________', 15, y+32)
        //doc.save('my.pdf');

        //console.log(doc.output('arraybuffer'))

        //let arrayBuffer = doc.output('arraybuffer');

        // var bufferObject = new Buffer.alloc(arrayBuffer.byteLength)
        // for (var i = 0; i < arrayBuffer.length; i++) {
        //     bufferObject[i] = arrayBuffer[i];
        // }

        //console.log(typeof bufferObject)

        //var blob = doc.output('blob')

        //console.log(doc.output('blob'))

        var data = {
            from: 'test@test.com',
            to: this.state.email,
            subject: 'Subcontractor Application',
            text: ` Business Name: ${this.state.businessName}
                    Name: ${this.state.name}
                    Job Title: ${this.state.jobTitle}
                    Email: ${this.state.email}
                    Business Phone: ${this.state.businessPhone}
                    Cell Phone: ${this.state.cellPhone}
                    Address: ${this.state.address1}
                    Address Line 2: ${this.state.address2}
                    City: ${this.state.city}
                    State: ${this.state.state}
                    Zipcode: ${this.state.zipcode}
                    Tax ID: ${this.state.EIN}
                    Contractor License Number: ${this.state.licenseNo}
                    Comprehensive Liability Insurance: ${this.state.liability}
                    Certificate of Insurance: ${this.state.insurance}
                    Ability to access and report information remotely: ${this.state.remoteAccess}
                    Subcontractor Agreement: ${filledForm}`,
           // attachment: [bufferObject]
        };
        //console.log(data)
        // mailgun.messages().send(data, function(error, body) {
        //     console.log(body)
        // })
    }

    // selectFile = (e) => {
    //     var file = e.target.files
    //     console.log(file)
    // }

    clearSig = () => {
        this.sigPad.clear();
        //console.log('on click:', this.state.trimmedDataURL);
    }
        
    trim = () => {
        this.setState({ trimmedDataURL: this.sigPad.getTrimmedCanvas().toDataURL('image/png'), sigSaved: true })
        this.sigPad.clear();
    }
    
    render() {
        //console.log(this.props)

        // let enabled = this.state.businessName.length > 0 && this.state.name.length > 0 && this.state.email.length > 0 && this.state.jobTitle.length > 0 && this.state.address1.length > 0 && this.state.city.length > 0 && this.state.state.length > 0 && this.state.zipcode.length > 0 && this.state.businessPhone.length > 0 && this.state.cellPhone.length > 0 && this.state.EIN.length > 0 && this.state.licenseNo.length > 0 && this.state.acceptTerms

        //console.log(enabled)

        return(
            <form className='subform-wrapper' onSubmit={this.onSubmit}>
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
                    <h6>MASTER SUBCONTRACT AGREEMENT</h6>                            
                    <Agreement location={this.props.location} />                           
                </div>

                <div className='row'>
                    <span>
                    <input id='authority' type='radio' onChange={(e) => this.updateRadio(e, true)} required></input>
                    <label>I have authority to sign on subcontractor's behalf</label>
                    </span>
                    
                </div>
                {this.state.authority && 
                    <div className='row'>
                        <div className='col-12'>
                        {!this.state.sigSaved && <SignatureCanvas 
                            minDistance={0} 
                            ref={(ref) => { this.sigPad = ref }}
                            canvasProps={{border: 1}} />}
                        </div>
                        {!this.state.sigSaved && <div className='col-12'>
                            <button className='clear' onClick={this.clearSig}>CLEAR</button>
                            <button className='save' onClick={this.trim}>SAVE SIGNATURE</button>                           
                        </div>}
                        {this.state.trimmedDataURL.length > 0 && <img src={this.state.trimmedDataURL} alt='' />}
                    </div>
                }

                <div className='row'>
                    <span>
                    <input id='acceptTerms' type='radio' checked={this.state.acceptTerms} onChange={(e) => this.updateRadio(e, true)} required></input>
                    <label>I have read and accept all terms and conditions listed above</label>
                    </span>
                </div>

                <div className='row submit'>
                    <button type='submit' disabled={!this.state.acceptTerms} className='cta'>SUBMIT</button>
                </div>

                {/* <input type='file' onChange={this.selectFile}></input> */}

                {this.state.applicationSent && <div className='application-sent alert alert-success'>
                    Thank you! Your application has been submitted.
                </div>}

                
                <Preview>
                    <div id='pdf' dangerouslySetInnerHTML={{__html: this.state.filledForm}}>
                    </div>
                </Preview>
                {/* <button onClick={() => print('a', 'pdf')}>PRINT</button> */}
            </form>
        )
    }
}

export default Form;