import React from "react";

function ServiceModal() {

    return(
        <div className="modal fade" tabindex="-1" id='commercialModal'>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header" style={{border: '0px'}}>
                        <h5 className="modal-title section-header ml-3 mb-0">COMMERCIAL SERVICES</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">X</button>
                    </div>
                    <div className="modal-body pt-0">
                        <ul>
                            <li>Snow Removal</li>
                            <li>Asphalt paving, sealing, and striping</li>
                            <li>Concrete</li>
                            <li>Electric Vehicle Charging Stations</li>
                            <li>Roofing and Siding</li>
                            <li>Fencing and Decking</li>
                            <li>Remodels, refreshes, TI Improvements, and roll outs</li>
                            <li>Painting</li>
                            <li>Landscape Construction</li>
                            <li>Water remediation</li>
                            <li>HVAC</li>
                            <li>Swimming Pools</li>
                        </ul>
                    </div>
                {/* <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                </div> */}
                </div>
            </div>
        </div>
    )
}

export default ServiceModal;