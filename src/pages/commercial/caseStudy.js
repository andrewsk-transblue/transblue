import React from 'react';
import './caseStudy.css';

function CaseStudy() {

    return(
        <div className='case-study'>
            <div className='case-study-content'>
                <h3 className=''>TRANSBLUE CASE STUDIES</h3>
                <p>Case studies and best practices are a powerful way to see how we at Transblue Perform. If you would like to learn about our services and how we have overcome challenges presented to us by our clients, please download one of our World Class Case Studies Today.</p>
                <button type="button"data-bs-toggle="modal" data-bs-target="#caseStudyModal">
                    DOWNLOAD A CASE STUDY
                </button>
            </div>
        </div>
    )
}

export default CaseStudy;