import React, { Component } from 'react';
import Navbar from '../../components/navbar/index';
//import contractImage from '../../images/franchise/contract.jpeg';
import './subcontractor.css';
import Background from './bg/bg';
import SubForm from './subform';
//import axios from 'axios';
import Agreement from './agreement';

class Subcontractor extends Component {

    render() {
        console.log(this.props.match.params)
        return(
            <div className='contract-wrapper'>
                <Navbar />
                <Background />
                <div className='contract-bg-overlay'></div>
                
                <form className='form needs-validation' onSubmit={this.handleSubmit} >
                    <div className='container contract'>
                        
                        <SubForm props={this.props.match.params} />

                        <div className='row agreement'>
                            <h6>SUBCONTRACTOR AGREEMENT</h6>                            
                            <Agreement location={this.props.match.params} />                           
                        </div>

                        <div className='row agreement-radio'>
                            <div className="form-check">
                                <p>I have read and accept all terms and conditions listed above:</p>
                                <input className="form-check-input" type="radio" id='acceptTerms' onChange={(e) => this.updateRadio(e, true)} required />
                                <label className="form-check-label" htmlFor="acceptTerms">
                                    Yes
                                </label>
                            </div>
                        </div>

                        <button type='submit' value='SUBMIT' className='cta' onclick={this.onSubmit}>SUBMIT</button>
                        <div className='application-sent alert alert-success'>
                            Thank you! Your application has been submitted.
                        </div>
                        {/* <button onClick={this.handleSubmit}>Test Button</button> */}
                    </div>
                </form>
                
            </div>
        )
    }
}

export default Subcontractor;