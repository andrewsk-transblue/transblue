import React, {Component, Fragment} from 'react';
import kitchen from '../../../images/residential/carouselKitchen-min.jpg';
import concrete from '../../../images/residential/concrete.jpg'
import pavers2 from '../../../images/residential/paver.jpg';
import pool from '../../../images/residential/carouselPool-min.jpg';
import interior from '../../../images/residential/interior.jpg';
import outdoor from '../../../images/residential/outdoor3.jpg';
import outdoorliving from '../../../images/residential/outdoorliving.jpg';
import enclosure from '../../../images/residential/enclosure.jpg';
import turf from '../../../images/residential/turf.png';
import retaining from '../../../images/residential/retaining.jpg';
import forward from '../../../images/forward50.png';
import back from '../../../images/back50.png';
import './style.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

let images = [outdoorliving, kitchen, interior, pool, concrete, pavers2, turf, retaining, enclosure, outdoor ];
let text = [
            {
                title: 'OUTDOOR LIVING SPACE',
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie."
            },
            {
                title: 'OUTDOOR KITCHENS',
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie."
            }, {
                title: 'INTERIOR REMODELING',
                body: ''
            },
            {
                title: 'POOLS & SPAS',
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie."
            },{
                title: 'CONCRETE',
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie."
            },{
                title: 'PAVERS',
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie."
            },{
                title: 'SYNTHETIC TURF',
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie."
            }, {
                title: 'RETAINING WALLS',
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie."
            },{
                title: 'PATIO ENCLOSURES',
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie."
            },{
                title: 'OUTDOOR FEATURES',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie.'
            }
            //  {
            //     title: 'ATHLETIC COURTS',
            //     body: 'Transblue installs top of the line Basketball, Hockey, Tennis, and Pickleball playable courts. Not to mention batting cages, putting greens and all types of courts used to play sports on.'
            // }, 
            // {
            //     title: 'LAWN INSTALLATION',
            //     body: 'At Transblue we pride ourselves in Lawn Installation! Over the last 20 years we have developed techniques that have proven themselves over and over again! We install a World Class Lawn, each time, every time! '
            // }
    ]

class Carousel extends Component {
    state={
        index: 0,
        cols: 3,
        lastSlide: 2
    }

    right = () => {
        if(this.state.index < 5) {
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
            this.setState({index: text.length - 1})
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

    render() {
    return(
        <div className='container-fluid carousel px-0'>
            <h2>GET INSPIRED</h2>
            <p>FEATURED RESIDENTIAL SERVICES</p>
            {/* <h2>RESIDENTIAL SERVICES</h2> */}
            <hr />
            <div className='row mx-0'>
                <div className='col-lg-1 col-sm-1 col-md-2 col-1 prev-slide px-0'>
                    {this.state.index > 0 && <Fragment><img src={images[this.state.index-1]} alt='' />
                        <div className='text'>
                            <h3 className='mt-4 mb-3'>{text[this.state.index-1].title}</h3>
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
                            <LazyLoadImage src={images[this.state.index]} alt='' />
                            {/* <div className='text'> */}
                            <h3 className='mt-4 mb-3 text-left'>{text[this.state.index].title}</h3>
                            {/* <p className='section-p text-left'>{text[this.state.index].body}</p> */}
                            {/* </div> */}
                        </div>
        
                        {this.state.cols === 5 && <div className='col-lg-4 px-0 showing-slide'>
                            <LazyLoadImage src={images[this.state.index+1]} alt='' />
                            <h3 className='mt-4 mb-3'>{text[this.state.index+1].title}</h3>
                            {/* <p className='section-p'>{text[this.state.index+1].body}</p> */}
                        </div>}

                        {this.state.cols === 5 && <div className='col-lg-4 px-0 showing-slide'>
                            <LazyLoadImage src={images[this.state.index+2]} alt='' />
                            <h3 className='mt-4 mb-3'>{text[this.state.index+2].title}</h3>
                            {/* <p className='section-p'>{text[this.state.index+2].body}</p> */}
                        </div>}
                    </div>
                </div>

                <div className='col-lg-1 col-sm-1 col-md-2 col-1 px-0 next-slide'>
                    {this.state.index + this.state.cols - 2 < images.length && <Fragment>
                        <LazyLoadImage src={this.state.cols === 5 ? images[this.state.index+3] : images[this.state.index + 1]} alt='' />
                        <div className='text'>
                            <h3 className='mt-4 mb-3'>{this.state.cols === 5 ? text[this.state.index+3].title : text[this.state.index+1].title}</h3>
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