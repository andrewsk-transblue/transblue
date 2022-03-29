import React from "react";

function Clients() {

    return(
        <div className="about-wrapper container-fluid">
            <div className="row">
                <div className="col-12 text-center mb-4">
                    <h4 className="section-header">
                        INDUSTRIES SERVICED
                    </h4>
                    <p className="section-p">
                        Transblue works with many different well-known clients nationwide. Our company provides services to:
                    </p>
                </div>
                <div className="col-12 col-md-6 pl-lg-5">
                    <ul>
                        <li>Property Management Companies</li>
                        <li>Retail Stores</li>
                        <li>Restaurants and franchises</li>
                        <li>Service Stations and Convenience Stores</li>
                        <li>Malls</li>
                        <li>Big Box Locations</li>
                        <li>Airports</li>
                        <li>Medical Facilities</li>
                    </ul>
                </div>
                <div className="col-12 col-md-6">
                    <ul>
                        <li>Federal, State and Local Government Agencies</li>
                        <li>Apartment Complexes</li>
                        <li>Retirement Communities</li>
                        <li>Private Equity Firms</li>
                        <li>REITS</li>
                        <li>Indian Tribes</li>
                        <li>Hotels</li>
                        <li>Banks</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Clients;