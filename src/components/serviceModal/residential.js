import React, {Fragment} from 'react';
import './style.css';

function ResServiceModal() {
    return(
        <button className='cta' data-bs-toggle="modal" data-bs-target={`#resServiceModal`}>
            ALL RESIDENTIAL SERVICES
        </button>
    )
}

export default ResServiceModal;