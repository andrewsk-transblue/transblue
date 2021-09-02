import React, {Component} from 'react';
import './contact.css';

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
            [e.target.className]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state)
    }

    render() {
        return(
            <form className='form-wrapper' onSubmit={this.onSubmit}>
                <span>
                    <input onChange={this.onChange} className='left-input firstName' placeholder='First Name' />
                    <input onChange={this.onChange} className='right-input lastName' placeholder='Last Name' />
                </span>
                <span>
                    <input onChange={this.onChange} className='left-input email' placeholder='Email'></input>
                    <input onChange={this.onChange} className='right-input phone' placeholder='Phone Number'></input>
                </span>
                <span>
                    <textarea onChange={this.onChange} className='message' placeholder='Tell us about your project'></textarea>
                </span>
                <button type='submit'>SEND MESSAGE</button>
            </form>
        )
    }
}

export default Form;