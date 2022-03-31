import React, {Fragment, Component} from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import roof from './services/roof.jpg';
import asphalt from '../../images/commercial/asphalt2.jpg';
import paint from './services/paint.png';
import athleisure from './services/athleisure.png';
import pool from './services/pool.png';
import metal from './services/metal.png';
import retaining from './services/retaining.jpg';
import interior from './services/interior.png';
import deck from './services/deck.png';
import ti from './services/ti.jpg';
import capex from './services/capex.jpg';
import landscape from './services/landscape.png';

import forward from '../../images/forward50.png';
import back from '../../images/back50.png';

import './carousel.css';

const slides = [
    // capital projects
    {
        title: 'CAPITAL PROJECTS',
        img: capex
    },
    // asphalt
    {
        title: 'ASPHALT',
        img: asphalt
    },
    // roofing
    {
        title: 'ROOFING',
        img: roof
    },
    // tenant improvements
    {
        title: 'TENANT IMPROVEMENTS',
        img: ti
    },
    // pools
    {
        title: 'POOLS',
        img: pool
    },
    // interior remodels
    {
        title: 'INTERIOR REMODELS',
        img: interior
    },
    // landscape construction 
    {
        title: 'LANDSCAPE CONSTRUCTION',
        img: landscape
    },  
    // metal work
    {
        title: 'METAL WORK',
        img: metal
    },
    // retaining walls
    {
        title: 'RETAINING WALLS',
        img: retaining
    },
    // athleisure
    {
        title: 'ALTHLEISURE',
        img: athleisure
    },
    // painting
    {
        title: 'PAINTING',
        img: paint
    },
    // decks and fences
    {
        title: 'DECKING',
        img: deck
    }
]

class Carousel extends Component {
    state={
        index: 0,
        cols: 3,
        lastSlide: 2
    }

    right = () => {
        if(this.state.index < 8) {
            if(this.state.cols === 5) {
                this.setState({index: this.state.index+3})
            }
            else this.setState({index: this.state.index+1})
        }
        else {
            this.setState({index: 0})
        }
        clearInterval(this.timer)
        this.timer = setInterval(() => {
            this.right()
        }, 45000)
    }

    left = () => {
        if(this.state.index > 0) {
            if(this.state.cols === 5) this.setState({index: this.state.index-3})
            else this.setState({index: this.state.index-1})
        }
        else {
            this.setState({index: slides.length - 1})
        }     
        clearInterval(this.timer)
        this.timer = setInterval(() => {
            this.right()
        }, 45000)  
    }

    updateDimensions = () => {
        this.setState({width: window.innerWidth, height: window.innerHeight})
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
        if(window.innerWidth > 992) {
            this.setState({cols: 5, lastSlide: 3})
        }

        this.timer = setInterval(() => {
            this.right()
        }, 45000)
        //console.log(this.state.cols)
    }

    componentWillUnmount = () => {
        clearInterval(this.timer)
    }

    render() {
        return(
            <div className='container-fluid carousel px-0'>
                <h2>COMMERCIAL SERVICES</h2>
                <p className='section-p'>No matter the project, you can count on Transblue. We're your one-stop shop for all of your commercial construction projects.</p>
                <div className='row mx-0'>
                    <div style={{width: '100%', textAlign: 'center'}}>
                        <button className='cta' data-bs-toggle="modal" data-bs-target="#commercialModal">ALL SERVICES</button>
                    </div>
                </div>
                {/* <h2>RESIDENTIAL SERVICES</h2> */}
                <hr />
                <div className='row mx-0'>
                    <div className='col-lg-1 col-sm-1 col-md-2 col-1 prev-slide px-0'>
                        {this.state.index > 0 && <Fragment><img src={slides[this.state.index-1].img} alt='' />
                            <div className='text'>
                                <h3 className='mt-4 mb-3'>{slides[this.state.index-1].title}</h3>
                                {/* <p className='section-p'>{text[this.state.index-1].body}</p> */}
                            </div>
                            <div className='carousel-overlay'></div>
                            <button onClick={this.left}><LazyLoadImage src={back} className='arrow' alt='Prev Slide' /></button>
                            </Fragment>
                        }
                    </div>
                    <div className='col-lg-10 col-md-8 col-10'>
                        <div className='row'>
                            <div className='col-lg-4 col-12 px-0 showing-slide text-center'>
                                <LazyLoadImage src={slides[this.state.index].img} alt='' />
                                {/* <div className='text'> */}
                                <h3 className='mt-4 mb-3 text-left'>{slides[this.state.index].title}</h3>
                                {/* <p className='section-p text-left'>{text[this.state.index].body}</p> */}
                                {/* </div> */}
                            </div>
            
                            {this.state.cols === 5 && <div className='col-lg-4 px-0 showing-slide'>
                                <LazyLoadImage src={slides[this.state.index+1].img} alt='' />
                                <h3 className='mt-4 mb-3'>{slides[this.state.index+1].title}</h3>
                                {/* <p className='section-p'>{text[this.state.index+1].body}</p> */}
                            </div>}

                            {this.state.cols === 5 && <div className='col-lg-4 px-0 showing-slide'>
                                <LazyLoadImage src={slides[this.state.index+2].img} alt='' />
                                <h3 className='mt-4 mb-3'>{slides[this.state.index+2].title}</h3>
                                {/* <p className='section-p'>{text[this.state.index+2].body}</p> */}
                            </div>}
                        </div>
                    </div>

                    <div className='col-lg-1 col-sm-1 col-md-2 col-1 px-0 next-slide'>
                        {this.state.index + this.state.cols - 2 < slides.length && <Fragment>
                            <LazyLoadImage src={this.state.cols === 5 ? slides[this.state.index+3].img : slides[this.state.index + 1].img} alt='' />
                            <div className='text'>
                                <h3 className='mt-4 mb-3'>{this.state.cols === 5 ? slides[this.state.index+3].title : slides[this.state.index+1].title}</h3>
                                {/* <p className='section-p'>{this.state.cols === 5 ? text[this.state.index+3].body : text[this.state.index+1].body}</p> */}
                            </div>
                            <div className='carousel-overlay'></div>
                            <button onClick={this.right}><LazyLoadImage src={forward} className='arrow' alt='Next Slide' /></button>
                            </Fragment>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Carousel;