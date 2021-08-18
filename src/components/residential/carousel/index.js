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
import retaining from '../../../images/residential/retaining-min.jpg';
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
                body: 'Bring your cooking skills outside with outdoor kitchens. Cooking outside leads to fresh air, good smells and better tasting food.'
            }, {
                title: 'COVERED PATIOS',
                body: 'Don’t let the weather keep you from going outdoors! Shade structure for covered patios turn any outdoor living space into something you can enjoy all year round!'
            }, {
                title: 'POOLS & SPAS',
                body: 'A nice cool dip in the pool on a hot day sounds like a perfect way to spend the Summer.'
            },{
                title: 'PAVERS',
                body: 'Whether you’re dreaming of an intimate patio, a practical driveway or a luxurious outdoor living space we do it all!'
            },{
                title: 'DECKS',
                body: 'All decks and fences are framed with pressure treated materials.'
            },{
                title: 'FENCES',
                body: 'All decks and fences are framed with pressure treated materials.'
            },{
                title: 'SYNTHETIC TURF',
                body: 'At Transblue we are proud to offer the best synthetic turf innovation on the market. '
            }, {
                title: 'ATHLETIC COURTS',
                body: 'R&R doesn’t just have to be all rest and relxation... Shooting some hoops and practicing your putting technique can be just as relaxing! '
            }, {
                title: 'WATER FEATURES',
                body: 'Who doesn’t want to swim or gather around a refreshing pool on a hot summer day?'
            }, {
                title: 'RETAINING WALLS',
                body: 'Add some layers, stability and style to your slopes with retaining walls. No matter what style you need, Transblue’s retaining walls are designed to be both functional and beautiful.'
            }
    ]

class Carousel extends Component {
    state={
        index: 0,
        cols: 3,
        lastSlide: 2
    }

    right = () => {
        this.setState({index: this.state.index+1}, () => (console.log(this.state.index)))
    }

    left = () => {
        this.setState({index: this.state.index-1})
    }

    updateDimensions = () => {
        this.setState({width: window.innerWidth, height: window.innerHeight})
    }

    componentDidMount() {
        console.log(images.length)
        window.addEventListener('resize', this.updateDimensions);
        if(window.innerWidth > 992) {
            this.setState({cols: 4, lastSlide: 3})
        }
        console.log(this.state.cols)
    }

    render() {
    return(
        <div className='container-fluid carousel px-0'>
            <h2>RESIDENTIAL SERVICES</h2>
            <hr />
            <div className='row mx-0'>
                <div className='col-lg-1 col-sm-1 col-md-2 col-1 prev-slide px-0'>
                    {this.state.index >=0 && <Fragment><img src={images[this.state.index]} alt='' />
                        <div className='text'>
                            <h3 className='mt-4 mb-3'>{text[this.state.index].title}</h3>
                            <p className='section-p'>{text[this.state.index].body}</p>
                        </div>
                        <div className='carousel-overlay'></div>
                        <button onClick={this.left}><img src={back} className='arrow' alt='Prev Slide' /></button>
                        </Fragment>
                    }
                </div>
                <div className='col-lg-5 col-10 col-sm-10 col-md-8 px-0 showing-slide text-center'>
                    <img src={images[this.state.index+1]} alt='' />
                    {/* <div className='text'> */}
                        <h3 className='mt-4 mb-3 text-left'>{text[this.state.index+1].title}</h3>
                        <p className='section-p text-left'>{text[this.state.index+1].body}</p>
                    {/* </div> */}
                </div>
    
                {this.state.cols === 4 && <div className='col-lg-5 px-0 showing-slide'>
                    <img src={images[this.state.index+2]} alt='' />
                    <h3 className='mt-4 mb-3'>{text[this.state.index+2].title}</h3>
                    <p className='section-p'>{text[this.state.index+2].body}</p>
                </div>}

                <div className='col-lg-1 col-sm-1 col-md-2 col-1 px-0 next-slide'>
                    {this.state.index + this.state.cols - 1 < images.length && <Fragment>
                        <img src={this.state.cols === 4 ? images[this.state.index+3] : images[this.state.index + 2]} alt='' />
                        <div className='text'>
                            <h3 className='mt-4 mb-3'>{this.state.cols === 4 ? text[this.state.index+3].title : text[this.state.index+2].title}</h3>
                            <p className='section-p'>{this.state.cols === 4 ? text[this.state.index+3].body : text[this.state.index+2].body}</p>
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