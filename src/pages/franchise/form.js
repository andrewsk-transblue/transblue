import React, {Component} from 'react';
import './contact2.css';

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
        console.log(this.state)
        this.props.onSubmit()

        //ADD MAILGUN HERE
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