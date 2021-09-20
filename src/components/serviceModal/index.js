import React, {Fragment} from 'react';
import './style.css';

function ServiceModal() {
    return(
        <Fragment>
            <button className='cta' data-toggle="modal" data-target="#serviceModal">
                VIEW ALL SERVICES
            </button>
            
            <div className='service-modal-wrapper'>
            <div className="modal fade" id="serviceModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div className='container-fluid section-p'>
                            <div className='row'>
                                <div className='col-12 col-md-6'>
                                    <h6>GENERAL CONTRACTING</h6>
                                    <div className='row'>
                                        <div className='col-12 col-sm-6'>
                                            Concrete<br />
                                            Patios<br />
                                            Patio Covers <br />
                                            Flagstone<br />
                                            Retaining Walls<br />
                                            Sustainable Roofs<br />
                                            Slope Creep<br />
                                            Structural Support<br />
                                            Synthetic Turf<br />
                                            Landscape Design<br />
                                            Fences<br />
                                            Gates<br />                                            
                                        </div>
                                        <div className='col-12 col-sm-6'>
                                            Irrigation<br />
                                            Lawn Installation<br/>
                                            Water Features<br />
                                            Outdoor Lighting<br />
                                            Drainage Systems<br />
                                            Painting<br />
                                            Siding<br />
                                            Asphalt Paving<br />
                                            Striping<br />
                                            Crack Seal<br />
                                            Outdoor Kitchens<br />
                                            Firepits<br />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 col-sm-6 col-md-3'>
                                    <h6>GREEN SERVICES</h6>
                                    Relamp Projects<br />
                                    Green Roofs<br />
                                    Permeable Pavement<br />
                                    Bioswales<br />
                                    HVAC<br />
                                    Water Reclamation<br />
                                    Solar Panels<br />
                                    EV Chargers<br />
                                    Xeriscapes<br />
                                </div>
                                <div className='col-12 col-sm-6 col-md-3'>
                                    <h6>SNOW SERVICES</h6>
                                    Snow Plowing<br />
                                    Snow Hauling<br />
                                    De-icing<br />
                                    Sidewalk Shoveling<br />
                                    Snow Melting<br />
                                    Rooftop Clearing<br />
                                    Icicle Melting<br />
                                    Truck Brush Services<br />
                                </div>
                            </div>
                        </div>
                    </div>      
                </div>
            </div>
        </div>
    </Fragment>    
    )
}

export default ServiceModal;