import React, {Component} from 'react';
import './style.css';

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
            [e.target.id]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
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
                            <input id='firstName' onChange={this.onChange} placeholder='First Name' value={this.state.firstName}></input>
                        </div>
                        <div className='col-6 px-0'>
                            <input id='lastName' onChange={this.onChange} placeholder='Last Name' value={this.state.lastName}></input>
                        </div>
                    </div>
                    <div className='row mt-2'>
                        <div className='col-12'>
                            <input id='phone' onChange={this.onChange} placeholder='Phone' value={this.state.phone}></input>
                        </div>
                    </div>
                    <div className='row mt-2'>
                        <div className='col-12'>
                            <input id='email' onChange={this.onChange} placeholder='Email' value={this.state.email}></input>
                        </div>
                    </div>
                    <div className='row mt-2'>
                        <div className='col-12'>
                            <textarea id='message' onChange={this.onChange} placeholder='Tell us about your project' value={this.state.message} />
                        </div>
                    </div>
                    <div className='row mt-2'>
                        <div className='col-12'>
                            <button type='submit' id='send'>SUBMIT</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form;