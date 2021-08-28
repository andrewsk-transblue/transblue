import React from 'react';
import './professional.css';

function Professional() {
    return(
        <div className='professional-wrapper'>
            <div className='container-fluid'>
                <div className='row'>

                    <div className='col-12 col-lg-4'>
                        <h5>
                            <i className="fas fa-seedling"></i> OUTSTANDING SERVICE                 
                            {/* <svg viewBox="0 0 100 100" width="25">
                                <path d="M25,2 L2,2 L2,25" fill="none" stroke="black" stroke-width="3" />
                                <path d="M75,98 L98,98 L98,75" fill="none" stroke="black" stroke-width="3" />
                            </svg> */}
                        </h5>
                        <p className='section-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue cursus sagittis. Nam vel enim.</p>
                    </div>
                    <div className='col-12 col-lg-4'>
                        {/* <svg viewBox="0 0 100 100" width="50">
                            <text x="50%" y="50%">
                                <i className="fas fa-seedling fa-2x"></i>
                            </text>
                            <path d="M25,2 L2,2 L2,25" fill="none" stroke="black" stroke-width="3" />
                            <path d="M75,98 L98,98 L98,75" fill="none" stroke="black" stroke-width="3" />
                        </svg> */}
                        <h5><i className="fas fa-seedling"></i> PROFESSIONAL WORK</h5>
                        <p className='section-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue cursus sagittis. Nam vel enim.</p>
                    </div>
                    <div className='col-12 col-lg-4'>
                        {/* <svg viewBox="0 0 100 100"  width="50">
                            GREAT COMMUNICATION
                            <path d="M25,2 L2,2 L2,25" fill="none" stroke="black" stroke-width="3" />
                            <path d="M75,98 L98,98 L98,75" fill="none" stroke="black" stroke-width="3" />
                        </svg> */}
                        <h5><i className="fas fa-seedling"></i> GREAT COMMUNICATION</h5>
                        <p className='section-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue cursus sagittis. Nam vel enim.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Professional;