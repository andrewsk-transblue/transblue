import React, { useState } from "react";

function CaseStudyModal() {

    const [caseStudy, setCaseStudy] = useState('');

    const [formValues, setFormValues] = useState({
        name: '',
        company: '',
        email: '',
        phone: ''
    })


    return(
        <div className="modal fade" id="caseStudyModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Download A Case Study</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Select which case study you'd like to download.

                        <div className="form-check mt-2">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="casestudy1" onChange={(e) => setCaseStudy(e.target.id)} checked={caseStudy === 'casestudy1'} />
                            <label className="form-check-label" for="flexRadioDefault1">
                                Case Study 1
                            </label>
                            </div>
                            <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="casestudy2" checked={caseStudy === 'casestudy2'} onChange={(e) => setCaseStudy(e.target.id)} checked={caseStudy === 'casestudy2'} />
                            <label className="form-check-label" for="flexRadioDefault2">
                                Case Study 2
                            </label>
                        </div>
                    </div>
                    <div className="modal-body">
                        <form>
                            <label htmlFor="caseStudyName" className="form-label">Name:</label>
                            <input className="w-100 mb-2 form-control" value={formValues.name} id='caseStudyName' onChange={(e) => setFormValues({...formValues, name: e.target.value})} />
                            <label htmlFor="caseStudyCompany" className="form-label">Company:</label>
                            <input className="w-100 mb-2 form-control" value={formValues.company} id='caseStudyCompany' onChange={(e) => setFormValues({...formValues, company: e.target.value})}  />

                            <label htmlFor="caseStudyPhone" className="form-label">Phone:</label>
                            <input className="w-100 mb-2 form-control" value={formValues.phone} id="caseStudyPhone" onChange={(e) => setFormValues({...formValues, phone: e.target.value})}  />

                            <label htmlFor="caseStudyEmail" className="form-label">Email:</label>
                            <input className="w-100 mb-2 form-control" type='email' value={formValues.email} id="caseStudyEmail" onChange={(e) => setFormValues({...formValues, email: e.target.value})}  />
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button onClick={() => console.log(caseStudy)} type="button" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CaseStudyModal;