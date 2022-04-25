import React from 'react';
import './caseStudy.css';

function CaseStudy() {

    return(
        <div className='case-study'>
            <div className='case-study-content'>
                <h3 className=''>TRANSBLUE CASE STUDIES</h3>
                <p>arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus</p>
                <button type="button"data-bs-toggle="modal" data-bs-target="#caseStudyModal">
                    DOWNLOAD A CASE STUDY
                </button>
            </div>
        </div>
    )
}

export default CaseStudy;