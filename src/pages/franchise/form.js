import React, {Component} from 'react';
import './contact2.css';

import{ init } from 'emailjs-com';
import * as emailjs from 'emailjs-com'
init("user_iLZ3jXyTzXi5zQFlgf5DG");

class Form extends Component {
    state={
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }, () => console.log(this.state))
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit()

        //EMAILJS
        let templateParams = {
            website: 'GC WEBSITE',
            from_name: `${this.state.firstName} ${this.state.lastName}`,
            to_email: 'carters@transblue.org', //CHANGE THIS TO this.props.location.email to send to LOCATIONLEADS@TRANSBLUE.ORG
            reply_to: this.state.email, //CALL BLUE CAN REPLY TO USER
            phone: this.state.phone,
            message: this.state.message
           }

        emailjs.send(
        'service_61uwfqo',
        'template_dqy1grk', //CONTACT TEMPLATE
            templateParams,
            process.env.REACT_APP_REACTJS_USER
        )
    }

    render() {
        return(
            <form className='form-wrapper' onSubmit={this.onSubmit}>
                <span>
                    <input onChange={this.onChange} className='left-input firstName' name={'firstName'} placeholder='First Name' />
                    <input onChange={this.onChange} className='right-input' name='lastName' placeholder='Last Name' />
                </span>
                <span>
                    <input onChange={this.onChange} className='left-input' name='email' placeholder='Email'></input>
                    <input onChange={this.onChange} className='right-input' name='phone' placeholder='Phone Number'></input>
                </span>
                <span>
                    <textarea onChange={this.onChange} name='message' placeholder='Tell us about your project'></textarea>
                </span>
                <button type='submit'>SEND MESSAGE</button>
            </form>
        )
    }
}

export default Form;