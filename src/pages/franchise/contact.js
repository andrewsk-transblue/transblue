import React, {Component} from 'react';
import axios from 'axios';
import Captcha from '../../components/captcha/captcha';

import './style.css';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state={
            contactPhone: '',
            contactName: '',
            contactEmail: '',
            contactMessage: '',
        }
    }

    onChange = (e) => {
        this.setState({[e.target.id]: e.target.value})
    }

    submit = (e) => {
        e.preventDefault()
        let contact = {
            contactPhone: this.state.contactPhone,
            contactName: this.state.contactName,
            contactEmail: this.state.contactEmail,
            contactMessage: this.state.contactMessage
        }
        axios.post('/api/send/contact', contact)
    }

    render() {
        console.log(this.props.location)
        return(
            // <div className='col-lg-12 contact'>
            //     <h1>Send us a message!</h1>
            //     <form onSubmit={this.submit}>
            //         <div className='row'>
            //             <div className='col-lg-6'>
            //                 <label htmlFor='contactName'>Name:</label>
            //                 <input id='contactName' onChange={this.onChange}></input>
            //             </div>
            //             <div className='col-lg-6'>
            //                 <label htmlFor='contactPhone'>Phone:</label>
            //                 <input id='contactPhone' onChange={this.onChange}></input>
            //             </div>
            //         </div>
            //         <div className='row'>
            //             <label htmlFor='contactEmail'>Email:</label>
            //             <input id='contactEmail' onChange={this.onChange}></input><br />
            //         </div>
            //         <label htmlFor='contactMessage'>Message</label>
            //         <textarea id='contactMessage' onChange={this.onChange}></textarea><br />
            //         <input type='submit' value='SUBMIT' className='submit'></input>
            //     </form>
            // </div>

            <div className='col-lg-12 contact p-3'>
                <h1  className='text-center w-responsive pt-2 pb-0'>Contact Us</h1>
                <p className='text-center w-responsive pb-3 mb-3'>Do you have any questions? Please do not hesitate to contact us directly.</p>
                
                <div className='row'>
                    <div className='col-lg-9'>
                        <div className='row'>
                            <div className='col mb-0'>
                                <label htmlFor='contactName'>Name:</label>
                                <input id='contactName' onChange={this.onChange}></input>
                            </div>
                            <div className='col mb-0'>
                                <label htmlFor='contactPhone' className='ml-3'>Phone Number:</label>
                                <input id='contactPhone' onChange={this.onChange}></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-12 mb-0'>
                                <label htmlFor='contactEmail'>Email:</label>
                                <input id='contactEmail' onChange={this.onChange}></input><br />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <label htmlFor='contactMessage'>Message:</label>
                                <textarea id='contactMessage' onChange={this.onChange}></textarea><br />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-4'>
                            <input type='submit' value='SUBMIT' className='submit mt-4'></input>
                            </div>
                            <div className='col-lg-8'>
                                <Captcha />
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-3 contact-sidebar'>
                        <div className='row'>
                            <div className='row'><i className="fas fa-map-marker-alt fa-2x  mx-auto mb-1"></i></div>
                            <p className='mx-auto'>{this.props.location}</p>
                        </div>
                        <div className='row'>
                            <div className='row'>
                                <i className="fas fa-phone fa-2x mx-auto mb-1 mt-2"></i>
                            </div>
                            <p className='mx-auto'>{this.props.phone}</p>
                        </div>
                        <div className='row'>
                            <div className='row'>
                            <i className="fas fa-envelope fa-2x mx-auto mb-1 mt-2"></i>
                            </div>
                            {/* <p className='mx-auto'>{this.props.email}</p> */}
                            <p className='mx-auto'>{this.props.name.replace(/\s+/g, '').trim()}<br />
                            @transblue.org</p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Contact;