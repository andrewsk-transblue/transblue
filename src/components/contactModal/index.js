import React, {Fragment, Component} from 'react';
import Captcha from '../captcha/captcha';
import './style.css';
const api_key = process.env.REACT_APP_MAILGUN_API;
const domain = 'sandboxcf6c7b2e02cc4d50947369ccf5924304.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

class ContactModal extends Component {
    state={
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        isSubmitted: false,
        disabled: true
    }

    onChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
        console.log(this.state.firstName)
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        var data = {
            from: 'test@test.com',
            to: 'carters@transblue.org',
            subject: 'GC Contact Message',
            text: `Name: ${this.state.firstName} ${this.state.lastName}
                    Email: ${this.state.email}
                    Phone: ${this.state.phone}
                    Message: ${this.state.message}`
        };
        console.log(this.state)
        this.setState({isSubmitted: true})
        // mailgun.messages().send(data, function(error, body) {
        //     console.log(body)
        // })

        //need to have users safelist domain
    }

    enableSubmit = () => {
        this.setState({disabled: false})
    }

    render() {
        const formCompleted = this.state.firstName.length > 0 && this.state.lastName.length > 0 && this.state.phone.length > 0 && this.state.message.length > 0 && !this.state.disabled;
        return(
            <Fragment>
                <button className='cta' data-toggle="modal" data-target="#exampleModalCenter">
                    {this.props.text !== undefined ? this.props.text : 'CONTACT US'}
                </button>
                
                <div className='contact-modal-wrapper'>
                <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <form className='contact-form container-fluid' onSubmit={this.onSubmit}>
                                <div className='row'>
                                    <h3>{this.props.location !== undefined ? `${this.props.location.name.toUpperCase()}` : 'TRANSBLUE GENERAL CONTRACTING'}</h3>
                                    <p className='section-p'>Transblue is a leading provider of construction management services specializing in Multifamily, Residential and Commercial Properties. Expect unmatched efficiency and expertise for all property installations</p>
                                    <p className='section-p'>Transblue will help your property meet the requirements for an eco-friendly tomorrow.</p>
                                </div>
                                <div className='row'>
                                    <div className='col-sm-6 my-1 input-left'>
                                        <input placeholder='First Name' id='firstName' onChange={this.onChange}></input>
                                    </div>
                                    <div className='col-sm-6 my-1 input-right'>
                                        <input placeholder='Last Name' id='lastName' onChange={this.onChange}></input>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-sm-6 my-2 input-left'>
                                        <input placeholder='Email' id='email' onChange={this.onChange}></input>
                                    </div>
                                    <div className='col-sm-6 my-2 input-right'>
                                        <input placeholder='Phone Number' id='phone' onChange={this.onChange}></input>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-sm-12 px-0 mt-2'>
                                        <textarea placeholder='What can we help you with?' id='message' onChange={this.onChange}></textarea>
                                    </div>
                                </div>
                                <div className='row'>
                                    <button className={!formCompleted ? 'cta disabled' : 'cta'} disabled={!formCompleted} data-dismiss="modal" id='submit' type='submit'>SUBMIT</button>
                                </div>
                                <div className='row'>
                                    {!this.state.isSubmitted && <Captcha onChange={this.enableSubmit} />}
                                </div>
                            </form>
                        </div>      
                    </div>
                </div>
                </div>
        </Fragment>    
    )}
}

export default ContactModal;