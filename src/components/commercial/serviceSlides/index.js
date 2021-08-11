import React, {Component} from 'react';
import service from '../../../images/commercial/services/service.jpg';
import concrete from '../../../images/commercial/services/concrete.jpeg';
import fence from '../../../images/commercial/services/fence.jpeg';
import landscaping from '../../../images/commercial/services/landscaping.jpeg';
import solarpanels from '../../../images/commercial/services/solarpanels.jpeg';
import snow from '../../../images/commercial/services/snow.png';
import ev from '../../../images/commercial/services/ev.jpeg';
import './style.css';

const services = ['Snow & Ice', 'Asphalt', 'EV', 'Concrete', 'Fences', 'Landscaping', 'Solar Panels' ];
const images = [snow, service, ev, concrete, fence, landscaping, solarpanels];

class ServiceSlides extends Component {
    state={
        slideNo: 0
    }

    increment = () => {
        if(this.state.slideNo + 4 < services.length-1) this.setState({slideNo: this.state.slideNo + 1});
    }

    decrement = () => {
        if(this.state.slideNo > 0) this.setState({slideNo: this.state.slideNo -1})
    }

    render() {
        return(
            <div className='container-fluid commercial-services'>
                <div className='row'>
                    <div className='col-lg-1'></div>
                    <div className='col-lg-11'>
                        <h4 className='section-header pl-0'>TRANSBLUE OFFERS A VARIETY OF SERVICES TO FIT YOUR NEEDS:</h4>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-1 col-md-1 my-auto text-center'>
                        <button onClick={this.decrement}><i className='fas fa-chevron-left'></i></button>
                    </div>
                    <div className='col-lg-2 col-md-3'>
                        <div className='service-card'>
                            <img src={images[this.state.slideNo]} data-attribute='3' alt='service' />
                            <h5>{services[this.state.slideNo]}</h5>
                        </div>
                    </div>
                    <div className='col-lg-2 col-md-3'>
                        <div className='service-card'>
                            <img src={images[this.state.slideNo +1]} alt='service' />
                            <h5>{services[this.state.slideNo + 1]}</h5>
                        </div>
                    </div>
                    <div className='col-lg-2 col-md-3'>
                        <div className='service-card'>
                            <img src={images[this.state.slideNo + 2]} alt='service' />
                            <h5>{services[this.state.slideNo + 2]}</h5>
                        </div>
                    </div>
                    <div className='col-lg-2 col-md-3'>
                        <div className='service-card'>
                            <img src={images[this.state.slideNo + 3]} alt='service' />
                            <h5>{services[this.state.slideNo + 3]}</h5>
                        </div>
                    </div>
                    <div className='col-lg-2 col-md-3'>
                        <div className='service-card'>
                            <img src={images[this.state.slideNo + 4]} alt='service' />
                            <h5>{services[this.state.slideNo + 4]}</h5>
                        </div>
                    </div>
                    <div className='col-lg-1 col-md-1 my-auto text-center'>
                        <button onClick={this.increment}><i className='fas fa-chevron-right'></i></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ServiceSlides;