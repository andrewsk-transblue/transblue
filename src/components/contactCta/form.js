import React, {Component} from 'react';
import Captcha from '../captcha/captcha';
import './style.css';

const api_key = process.env.REACT_APP_MAILGUN_API;
const domain = 'sandboxcf6c7b2e02cc4d50947369ccf5924304.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

class Form extends Component {
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
    }

    enableSubmit = () => {
        this.setState({disabled: false})
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log('testing disabled')
        var data = {
            from: 'test@test.com',
            to: 'carters@transblue.org',
            subject: 'GC Contact Message',
            text: `Name: ${this.state.firstName} ${this.state.lastName}
                    Email: ${this.state.email}
                    Phone: ${this.state.phone}
                    Message: ${this.state.message}`
        };
        mailgun.messages().send(data, function(error, body) {
            console.log(body)
        })
        console.log(this.state)
        this.setState({isSubmitted: true})
    }

    render() {
        return(
            <div className='container'>
                {/* <div className='form-header'> */}
                    <button onClick={this.props.onClick} type="button" className="btn-close" aria-label="Close">x</button>
                    <h6>SEND US A MESSAGE</h6>
                {/* </div> */}
                <form onSubmit={this.onSubmit}>
                    <div className='row mx-0'>
                        <div className='col-6 pl-0 pr-2'>
                            <input id='firstName' onChange={this.onChange} placeholder='First Name' value={this.state.firstName} required></input>
                        </div>
                        <div className='col-6 px-0'>
                            <input id='lastName' onChange={this.onChange} placeholder='Last Name' value={this.state.lastName} required></input>
                        </div>
                    </div>
                    <div className='row mt-2'>
                        <div className='col-12'>
                            <input id='phone' onChange={this.onChange} placeholder='Phone' value={this.state.phone} required></input>
                        </div>
                    </div>
                    <div className='row mt-2'>
                        <div className='col-12'>
                            <input id='email' onChange={this.onChange} placeholder='Email' value={this.state.email} required></input>
                        </div>
                    </div>
                    <div className='row mt-2'>
                        <div className='col-12'>
                            <textarea id='message' onChange={this.onChange} placeholder='Tell us about your project' value={this.state.message} required />
                        </div>
                    </div>
                    <div className='row mt-2'>
                        <div className='col-12'>
                            <button className={this.state.disabled ? 'disabled' : ''} disabled={this.state.disabled} type='submit' id='send'>SUBMIT</button>
                            {!this.state.isSubmitted && <Captcha onChange={this.enableSubmit} />}
                        </div>
                    </div>
                    {this.state.isSubmitted && <div className='row submitted'>
                        <div className='col-12'>
                        Thank you! We will contact you shortly
                        </div>
                    </div>}
                </form>
            </div>
        )
    }
}

export default Form;