import React from 'react';
import Slider from "react-slick";
import forward from '../../images/forward50.png';
import back from '../../images/back50.png';
import snow from '../../images/commercial/services/snow.jpg';
import asphalt from '../../images/commercial/services/asphalt.jpg';
import ev from '../../images/commercial/services/ev.jpg';
import asphaltCropped from '../../images/government/govtasphaltCropped.jpg';
import concreteCropped from '../../images/government/govtconcreteCropped.jpeg';
import concrete from '../../images/commercial/services/concrete2.jpg';
import './style.css';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <img 
        className={`${className} arrow left`}
        src={forward}
        onClick={onClick}
        />
    );
  }

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <img 
        className={`${className} arrow`}
        src={back}
        onClick={onClick}
        />
    );
  }

function Carousel() {
    const settings = {
        dots: true,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        className: 'govt-slider',
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

      return(
        <div className='slider-container container-fluid'>
            <h4 className='section-header mb-4'>WE OFFER A VARIETY OF SERVICES TO FIT YOUR NEEDS</h4>
            <Slider {...settings}>
                <div>
                    <img src={snow} alt='Government Asphalt' />
                    <p>SNOW &amp; ICE</p>
                    <p className='section-p'>Nullam commodo tristique enim, a congue leo fermentum eu.</p>
                </div>
                <div>
                    <img src={asphalt} alt='Government Asphalt' />
                    <p>ASPHALT</p>
                    <p className='section-p'>Nullam commodo tristique enim, a congue leo fermentum eu.</p>
                </div>
                <div>
                    <img src={ev} alt='Government Paint' />
                    <p>GREEN SERVICES</p>
                    <p className='section-p'>Nullam commodo tristique enim, a congue leo fermentum eu.</p>
                </div>
                <div>
                    <img src={concrete} alt='Government Roof' />
                    <p>CONCRETE</p>
                    <p className='section-p'>Nullam commodo tristique enim, a congue leo fermentum eu.</p>
                </div>
                <div>
                    <img src={concreteCropped} alt='Government Siding' />
                    <p>ALL NEW SIDING</p>
                    <p className='section-p'>Nullam commodo tristique enim, a congue leo fermentum eu.</p>
                </div>
                <div>
                    <img src={asphaltCropped} alt='Government Siding' />
                    <p>SLOPE CREEP</p>
                    <p className='section-p'>Nullam commodo tristique enim, a congue leo fermentum eu.</p>
                </div>
            </Slider>
        </div>
      )

}

export default Carousel;