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
        caseStudy: 'Best practices landscape rfps and water management'
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

            //creating an invisible element
            var element = document.createElement('a');
            element.setAttribute('href', `${process.env.PUBLIC_URL}/casestudies/${formValues.caseStudy}.pdf`);
            element.setAttribute('download', `${formValues.caseStudy}.pdf`);
        
            document.body.appendChild(element);
            
            //onClick property
            element.click();
        
            document.body.removeChild(element);
            
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
                                 id="Best practices landscape rfps and water management" 
                                 onChange={(e) => setFormValues({...formValues, caseStudy: 'Best practices landscape rfps and water management'})}
                                 checked={formValues.caseStudy === 'Best practices landscape rfps and water management'} />
                            <label className="form-check-label" for="flexRadioDefault1">
                                Best practices landscape rfps and water management
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="Reduce your facility spend by 2 Million Dollars annually" checked={formValues.caseStudy === 'Reduce your facility spend by 2 Million Dollars annually'} onChange={(e) => setFormValues({...formValues, caseStudy: 'Reduce your facility spend by 2 Million Dollars annually'})} />
                            <label className="form-check-label" for="flexRadioDefault2">
                                Reduce your facility spend by 2 Million Dollars annually
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="Snow Removal best practices - liability and risk management" checked={formValues.caseStudy === 'Snow Removal best practices - liability and risk management'} onChange={(e) => setFormValues({...formValues, caseStudy: 'Snow Removal best practices - liability and risk management'})} />
                            <label className="form-check-label" for="flexRadioDefault2">
                                Snow Removal best practices - liability and risk management
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