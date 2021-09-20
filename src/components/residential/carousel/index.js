import React, {Component, Fragment} from 'react';
import fire from '../../../images/residential/carouselFire-min.jpg';
import kitchen from '../../../images/residential/carouselKitchen-min.jpg';
import patio from '../../../images/residential/carouselPatio-min.jpg';
import concrete from '../../../images/residential/carouselConcrete-min.jpg';
import pavers from '../../../images/residential/carouselPavers-min.jpg';
import pool from '../../../images/residential/carouselPool-min.jpg';
import deck from '../../../images/residential/carouselDeck-min.jpg';
import fence from '../../../images/residential/carouselFence-min.jpg';
import turf from '../../../images/residential/carouselTurf-min.jpg';
import court from '../../../images/residential/carouselCourt-min.jpg';
//import water from '../../../images/residential/water-min.jpg';
import retaining from '../../../images/residential/retaining.jpg';
import newWater from '../../../images/residential/carouselWater.jpg';
import forward from '../../../images/forward50.png';
import back from '../../../images/back50.png'
import './style.css';

let images = [concrete, fire, kitchen, patio, pool, pavers, deck, fence, turf, court, newWater, retaining];
let text = [
            {
                title: 'CONCRETE',
                body: 'Whether you need an elegant driveway or a sturdy concrete entertaining space we’ve got you covered. We offer remodeling and demolition as well as touch-ups and repair.'
            },{
                title: 'FIRE FEATURES',
                body: "Have a warm and cozy evening by the fire with your family with Transblue’s Fire features!"
            },{
                title: 'OUTDOOR KITCHENS',
                body: "Love the life you live. Transblue builds incredible outdoor kitchens. There's nothing better than firing the smoker or grill and getting ready for the entertainment."
            }, {
                title: 'COVERED PATIOS',
                body: 'Don’t let the weather keep you from going outdoors! From proposal to design to permit, our teams build outdoor living space structures that allow you to enjoy your outdoor space during any rainy event.'
            }, {
                title: 'POOLS & SPAS',
                body: 'Tired of the heat? Looking to relax and enjoy your homes full potential? Allow Transblue’s team of outdoor living space experts design and build the pool you have been dreaming of.'
            },{
                title: 'PAVERS',
                body: 'Whether you’re dreaming of an intimate patio, a practical driveway or a luxurious outdoor living space we do it all!'
            },{
                title: 'DECKS',
                body: 'At Transblue, we build and design custom decks and fences. Our carpenters have built hundreds of decks and fences. When we build decks and fences at Transblue we use premium products.'
            },{
                title: 'FENCES',
                body: 'At Transblue, we build and design custom decks and fences. Our carpenters have built hundreds of decks and fences. When we build decks and fences at Transblue we use premium products.'
            },{
                title: 'SYNTHETIC TURF',
                body: "Transblue offers the world's most realistic synthetic turf and synthetic putting greens available in the market today. We are pleased to provide you with an unmatched, professional quality putting green or synthetic lawn for your home."
            }, {
                title: 'ATHLETIC COURTS',
                body: 'Transblue installs top of the line Basketball, Hockey, Tennis, and Pickleball playable courts. Not to mention batting cages, putting greens and all types of courts used to play sports on.'
            }, {
                title: 'WATER FEATURES',
                body: 'Transblue installs waterfalls, ponds, water features, Koi ponds, and much, much more. At Transblue we will install multi-tiered waterfalls for your home, living space, or calm relaxing walk through your garden, water features enhance entertainment and enjoyment for your family and friends.'
            }, {
                title: 'RETAINING WALLS',
                body: 'Let Transblue’s team of installers and designers build your next retaining wall. We have the experience you can depend on. Our lead designers have created, designed and installed hundreds of retaining walls.'
            }
    ]

class Carousel extends Component {
    state={
        index: 0,
        cols: 3,
        lastSlide: 2
    }

    right = () => {
        if(this.state.index + 1 < text.length) {
        this.setState({index: this.state.index+1}, () => (console.log(this.state.index)))
        }
        else {
            this.setState({index: 0})
        }
    }

    left = () => {
        if(this.state.index > 0) {
            this.setState({index: this.state.index-1})
        }
        else {
            this.setState({index: text.length - 1})
        }       
    }

    updateDimensions = () => {
        this.setState({width: window.innerWidth, height: window.innerHeight})
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
        if(window.innerWidth > 992) {
            this.setState({cols: 4, lastSlide: 3})
        }
        //console.log(this.state.cols)
    }

    render() {
    return(
        <div className='container-fluid carousel px-0'>
            <h2>GET INSPIRED</h2>
            <p>TRANSBLUE RESIDENTIAL SERVICES</p>
            {/* <h2>RESIDENTIAL SERVICES</h2> */}
            <hr />
            <div className='row mx-0'>
                <div className='col-lg-1 col-sm-1 col-md-2 col-1 prev-slide px-0'>
                    {this.state.index > 0 && <Fragment><img src={images[this.state.index-1]} alt='' />
                        <div className='text'>
                            <h3 className='mt-4 mb-3'>{text[this.state.index-1].title}</h3>
                            <p className='section-p'>{text[this.state.index-1].body}</p>
                        </div>
                        <div className='carousel-overlay'></div>
                        <button onClick={this.left}><img src={back} className='arrow' alt='Prev Slide' /></button>
                        </Fragment>
                    }
                </div>
                <div className='col-lg-5 col-10 col-sm-10 col-md-8 px-0 showing-slide text-center'>
                    <img src={images[this.state.index]} alt='' />
                    {/* <div className='text'> */}
                    <h3 className='mt-4 mb-3 text-left'>{text[this.state.index].title}</h3>
                    <p className='section-p text-left'>{text[this.state.index].body}</p>
                    {/* </div> */}
                </div>
    
                {this.state.cols === 4 && <div className='col-lg-5 px-0 showing-slide'>
                    <img src={images[this.state.index+1]} alt='' />
                    <h3 className='mt-4 mb-3'>{text[this.state.index+1].title}</h3>
                    <p className='section-p'>{text[this.state.index+1].body}</p>
                </div>}

                <div className='col-lg-1 col-sm-1 col-md-2 col-1 px-0 next-slide'>
                    {this.state.index + this.state.cols - 2 < images.length && <Fragment>
                        <img src={this.state.cols === 4 ? images[this.state.index+2] : images[this.state.index + 1]} alt='' />
                        <div className='text'>
                            <h3 className='mt-4 mb-3'>{this.state.cols === 4 ? text[this.state.index+2].title : text[this.state.index+1].title}</h3>
                            <p className='section-p'>{this.state.cols === 4 ? text[this.state.index+2].body : text[this.state.index+1].body}</p>
                        </div>
                        <div className='carousel-overlay'></div>
                        <button onClick={this.right}><img src={forward} className='arrow' alt='Next Slide' /></button>
                        </Fragment>
                    }
                </div>
            </div>
        </div>
    )
    }
}

export default Carousel;