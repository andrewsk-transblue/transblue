import React from 'react';
import dees from '../../images/residential/dees.jpg';
import './style.css';

function HoverImages() {
    return(
        <div className='row dees-image-container'>
            <div className='col-12 col-lg-6'>
                <button type="button" data-toggle="modal" data-trigger="hover" data-target="#dees">
                    <img src={dees} alt='' />
                </button>
                <div className="modal fade" id='dees' tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">DEE'S HOPE</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <img src={dees} alt='' />
                        </div>
                        <div className="modal-footer section-p">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultricies.
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-12 col-lg-6'>
                <button type="button" data-toggle="modal" data-trigger="hover" data-target="#dees1">
                    <img src={dees} alt='' />
                </button>
                <div className="modal fade" id='dees1' tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                        <img src={dees} alt='' />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">Save changes</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>   
            <div className='col-12 col-lg-6'>
                <button type="button" data-toggle="modal" data-trigger="hover" data-target="#dees2">
                    <img src={dees} alt='' />
                </button>
                <div className="modal fade" id='dees2' tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <img src={dees} alt='' />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">Save changes</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-12 col-lg-6'>
                <button type="button" data-toggle="modal" data-trigger="hover" data-target="#dees3">
                    <img src={dees} alt='' />
                </button>
                <div className="modal fade" id='dees3' tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Modal body text goes here.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">Save changes</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HoverImages;