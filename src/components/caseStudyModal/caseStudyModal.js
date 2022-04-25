import React, { useEffect, useState } from "react";

import{ init } from 'emailjs-com';
import * as emailjs from 'emailjs-com'
init("user_iLZ3jXyTzXi5zQFlgf5DG");

function CaseStudyModal() {
    const [formValues, setFormValues] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        caseStudy: 'casestudy1'
    })

    const [submitted, setSubmitted] = useState(false);

    function submit(e) {

        setSubmitted(true);

        if(formValues.name.length > 0 && formValues.email.length > 0 && formValues.phone.length > 0) {
            // send form values via email        
            emailjs.send(
                'service_gekurtf',
                'template_y21szg9', //CONTACT TEMPLATE
                    formValues,
                    process.env.REACT_APP_REACTJS_USER
                )
            
            // close modal
            window.$('#caseStudyModal').modal('hide');

            // reset form values
            setFormValues({
                name: '',
                company: '',
                email: '',
                phone: '',
                caseStudy: ''
            })
        }
        
        else {

        }
    }


    return(
        <div className="modal fade" id="caseStudyModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Download A Case Study</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Select which case study you'd like to download: *

                        <div className="form-check mt-2">
                            <input 
                                className="form-check-input" 
                                type="radio"
                                 name="flexRadioDefault" 
                                 id="casestudy1" 
                                 onChange={(e) => setFormValues({...formValues, caseStudy: 'casestudy1'})}
                                 checked={formValues.caseStudy === 'casestudy1'} />
                            <label className="form-check-label" for="flexRadioDefault1">
                                Case Study 1
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="casestudy2" checked={formValues.caseStudy === 'casestudy2'} onChange={(e) => setFormValues({...formValues, caseStudy: 'casestudy2'})} />
                            <label className="form-check-label" for="flexRadioDefault2">
                                Case Study 2
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="casestudy3" checked={formValues.caseStudy === 'casestudy3'} onChange={(e) => setFormValues({...formValues, caseStudy: 'casestudy3'})} />
                            <label className="form-check-label" for="flexRadioDefault2">
                                Case Study 3
                            </label>
                        </div>
                    </div>
                    <div className="modal-body">
                        <form className="needs-validation" noValidate>
                            <label htmlFor="caseStudyCompany" className="form-label">Company:</label>
                            <input className="w-100 mb-2 form-control" value={formValues.company} id='caseStudyCompany' onChange={(e) => setFormValues({...formValues, company: e.target.value})} />

                            <label htmlFor="caseStudyName" className="form-label">Name: *</label>
                            <input className={formValues.name.length === 0 && submitted ? "w-100 mb-2 form-control is-invalid" : "w-100 mb-2 form-control"} value={formValues.name} id='caseStudyName' onChange={(e) => setFormValues({...formValues, name: e.target.value})} required />

                            <label htmlFor="caseStudyPhone" className="form-label">Phone: *</label>
                            <input className="w-100 mb-2 form-control" value={formValues.phone} id="caseStudyPhone" onChange={(e) => setFormValues({...formValues, phone: e.target.value})} required className={formValues.phone.length === 0 && submitted ? "w-100 mb-2 form-control is-invalid" : "w-100 mb-2 form-control"}  />

                            <label htmlFor="caseStudyEmail" className="form-label">Email: *</label>
                            <input className="w-100 mb-2 form-control" type='email' value={formValues.email}id="caseStudyEmail" onChange={(e) => setFormValues({...formValues, email: e.target.value})} required className={formValues.email.length === 0 && submitted ? "w-100 mb-2 form-control is-invalid" : "w-100 mb-2 form-control"}  />
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button onClick={submit} type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CaseStudyModal;