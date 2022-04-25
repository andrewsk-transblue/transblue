import React from 'react';
import './caseStudy.css';

function CaseStudy() {

    return(
        <div className='case-study'>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#caseStudyModal">
                Download a Case Study
            </button>
        </div>
    )
}

export default CaseStudy;