import React, {Fragment} from 'react';
import './style.css';

function ResServiceModal() {
    return(
        <button className='cta' data-toggle="modal" data-target={`#resServiceModal`}>
            ALL RESIDENTIAL SERVICES
        </button>
    )
}

export default ResServiceModal;