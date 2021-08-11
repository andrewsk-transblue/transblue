import React, {Fragment} from 'react';
import nepal from '../../../images/landing/nepal.png';
import nepal2 from '../../../images/landing/nepal2.png';

function Nepal() {
    return(
        <Fragment>
            <div className='container-fluid nepal'>
                    <div className='row'>
                        <div className='col-lg-5 col-md-12 col-sm-12 pr-5 nepal-text'>
                            <h4 className='section-header'>FOOD PACKAGES FOR NEPAL</h4>
                            <p className='section-p'>Through Transblue, Hope Unlimited was able to provide emergency food packages to 15 families at Emmanuel Church, Kathmandu, who were desperately impacted by deadly 2nd wave of corona virus in Nepal. And in another district called Lalitpur, 14 families were distributed relief packages including neighbor families. Our local leaders have shared hope among those people with humanitarian relief package.</p>
                            {/* <p className='section-p mb-4'>We are also currently responding to the 75 families hit by devastating floods</p> */}
                        </div>
                        <div className='col-lg-7 col-md-12 col-sm-12'>
                            <div className='row'>
                                <div className='col-lg-6 col-md-6 col-sm-12 mb-4 pr-0'>
                                    <img src={nepal} alt='Food packages for Nepal' />
                                </div>
                                <div className='col-lg-6 col-md-6 col-sm-12 mb-4'>
                                    <img src={nepal2} alt='Food packages for Nepal' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </Fragment>
    )
}

export default Nepal;