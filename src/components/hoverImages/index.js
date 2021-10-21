import React from 'react';
import {LazyLoadImage} from 'react-lazy-load-image-component'
import './style.css';

function HoverImages(props) {
    return(
        <div className='row hover-image-container'>
            <div className='col-12 col-sm-6 col-lg-6'>
                <button type="button" data-toggle="modal" data-trigger="hover" data-target="#pic1">
                    <LazyLoadImage src={props.page[0].image} alt='' />
                </button>
                <div className="modal fade" id='pic1' tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{props.page[0].title}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <LazyLoadImage src={props.page[0].image} alt='' />
                        </div>
                        <div className="modal-footer section-p">
                            {props.page[0].caption}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-12 col-sm-6 col-lg-6'>
                <button type="button" data-toggle="modal" data-trigger="hover" data-target="#pic2">
                    <LazyLoadImage src={props.page[1].image} alt='' />
                </button>
                <div className="modal fade" id='pic2' tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{props.page[1].title}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <img src={props.page[1].image} alt='' />
                        </div>
                        <div className="modal-footer section-p">
                            {props.page[1].caption}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-12 col-sm-6 col-lg-6'>
                <button type="button" data-toggle="modal" data-trigger="hover" data-target="#pic3">
                    <LazyLoadImage src={props.page[2].image} alt='' />
                </button>
                <div className="modal fade" id='pic3' tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{props.page[2].title}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <img src={props.page[2].image} alt='' />
                        </div>
                        <div className="modal-footer section-p">
                            {props.page[2].caption}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-12 col-sm-6 col-lg-6'>
                <button type="button" data-toggle="modal" data-trigger="hover" data-target="#pic4" id='last-btn'>
                    <LazyLoadImage src={props.page[3].image} alt='' />
                </button>
                <div className="modal fade" id='pic4' tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{props.page[3].title}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <LazyLoadImage src={props.page[3].image} alt='' />
                        </div>
                        <div className="modal-footer section-p">
                            {props.page[3].caption}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HoverImages;