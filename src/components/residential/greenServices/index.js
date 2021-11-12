import React, { Component } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component'
import ev from '../../../images/residential/ev.jpeg';
//import solar from '../../../images/residential/solar.jpg';
import roof from '../../../images/residential/roof.jpg';
import './style.css';

//import ServiceCard from './serviceCard';

const services = [
    {title: 'EV CHARGERS', img: ev},
    // {title: 'SOLAR PANELS', img: solar},
    {title: 'GREEN ROOFS', img: roof},
    {title: 'LOW WATER GARDENS'}
]

class GreenServices extends Component {
    state={
        slideNo: 0
    }

    prevSlide = () => {
        this.setState({slideNo: this.state.slideNo - 1})
    }

    nextSlide = () => {
        this.setState({slideNo: this.state.slideNo + 1})
    }

    render() {
        return(
            <div className='container-fluid green-services'>
                <div className='row'>
                    <div className='col-lg-6 images px-0'>
                        <LazyLoadImage src={services[this.state.slideNo].img} alt='Residential Electric Vehicle' />
                        <h6>
                            {this.state.slideNo > 0 && <button onClick={this.prevSlide}><i className='fas fa-chevron-left mr-3'></i></button>}
                            {services[this.state.slideNo].title}
                            {this.state.slideNo < services.length - 1 && <button onClick={this.nextSlide}><i className='fas fa-chevron-right ml-3'></i></button>}
                        </h6>
                        <div className='overlay'></div>
                    </div>
                    <div className='col-lg-6 pl-4'>
                        <h4 className='mb-3'>RESIDENTIAL GREEN SERVICES</h4>
                        <hr />
                        <p className='section-p'>We are committed to the future beauty of our outdoors. For that reason we offer an array of projects that help minimize your carbon footprint.</p>
                        <p className='section-p mb-4'>We provide proffesional grade Electric vehicle charge installations and retrofitting. To conserve power useage we also provide solar paneling installations for roofing and shade structures. </p>
                        <a href='https://green.transblue.com'>LEARN MORE</a>
                    </div>
                    
                </div>

                {/* <div className='row service-bg mt-5'>
                    <ServiceCard />
                </div> */}
            </div>
        )
    }
}

export default GreenServices;