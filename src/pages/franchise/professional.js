import React from 'react';
import ContactModal from '../../components/contactModal';
import './professional.css';

function Professional() {
    return(
        <div className='professional-wrapper'>
            <div className='container-fluid'>
                <h3>OUR PROMISE TO YOU</h3>
                <p className='section-p'>We are 100% dedicated to customer satisfaction</p>
                <div className='row'>
                    <div className='col-12 col-lg-4 text-center'>
                        <i className="fas fa-seedling fa-2x"></i>
                        <h5>
                             OUTSTANDING SERVICE              
                            {/* <svg viewBox="0 0 100 100" width="25">
                                <path d="M25,2 L2,2 L2,25" fill="none" stroke="black" stroke-width="3" />
                                <path d="M75,98 L98,98 L98,75" fill="none" stroke="black" stroke-width="3" />
                            </svg> */}
                        </h5>
                        <p className='section-p body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue cursus sagittis. Nam vel enim.</p>
                    </div>
                    <div className='col-12 col-lg-4 text-center'>
                        <i className="fas fa-seedling fa-2x"></i>
                        <h5> PROFESSIONAL WORK</h5>
                        <p className='section-p body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue cursus sagittis. Nam vel enim.</p>
                    </div>
                    <div className='col-12 col-lg-4 text-center'>
                        {/* <svg viewBox="0 0 100 100"  width="50">
                            GREAT COMMUNICATION
                            <path d="M25,2 L2,2 L2,25" fill="none" stroke="black" stroke-width="3" />
                            <path d="M75,98 L98,98 L98,75" fill="none" stroke="black" stroke-width="3" />
                        </svg> */}
                        <i className="fas fa-seedling fa-2x"></i> 
                        <h5>GREAT COMMUNICATION</h5>
                        <p className='section-p body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue cursus sagittis. Nam vel enim.</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-12 text-center'>
                        <ContactModal text='SEND US A MESSAGE' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Professional;