import React, {Component} from 'react';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import snow from '../../images/commercial/snow.jpg';
import asphalt from '../../images/commercial/asphalt4.jpg';
import fence from '../../images/commercial/fence.jpg';
import solar from '../../images/commercial/solar.jpg';
import rightarrow from '../../images/residential/forward.png';
import leftarrow from '../../images/residential/back.png';
import line from '../../images/line.png';

let images = [snow, asphalt, fence, solar];
let text = [
    {
        p1: "KEEP YOUR BUSINESS DOORS OPEN",
        // p1: 'We’ll help you keep your lots plowed and treated for ice during snowstorms to let you focus on what you’re best at: running your business.',
        p2: ''
    },
    {
        p1: 'REFRESH YOUR ASPHALT AND CONCRETE',
        p2: ''
    },
    {
        p1: 'INCREASE SECURITY AND PRIVACY',
        p2: ''
    },
    {
        p1: 'LOWER YOUR ENERGY BILL',
        p2: ''
    }
]

class Slideshow extends Component {
    state = {
        slideNo: 0
    }

    componentDidMount() {
        this.interval = setInterval(this.timer, 6000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    timer = () => {
        if(this.state.slideNo < images.length - 1) {
            this.setState({slideNo: this.state.slideNo + 1})
        } else {
            this.setState({slideNo: 0})
        }
    }

    clearTimer = () => {
        clearInterval(this.interval);
        this.interval = setInterval(this.timer, 6000)
    }

    increment = () => {
        if(this.state.slideNo < images.length-1) this.setState({slideNo: this.state.slideNo + 1}, this.clearTimer);
        else {this.setState({slideNo: 0}, this.clearTimer)}
    }

    decrement = () => {
        if(this.state.slideNo > 0) this.setState({slideNo: this.state.slideNo -1}, this.clearTimer)
        else this.setState({slideNo: images.length-1})
    }

    render() {
        return(
            <div className='container-fluid slideshow'>
                <div className='row'>
                    <div className='col-lg-12 px-0 py-0'>
                        <div className='row'>
                            <Fade duration={1000}>{this.state.slideNo === 0 &&<img src={images[0]} className='slideshow-image' alt='starbucks snow' />}</Fade>
                            <Fade duration={1000}>{this.state.slideNo === 1 &&<img src={images[1]} className='slideshow-image' alt='starbucks snow' />}</Fade>
                            <Fade duration={1000}>{this.state.slideNo === 2 &&<img src={images[2]} className='slideshow-image' alt='starbucks snow' />}</Fade>
                            <Fade duration={1000}>{this.state.slideNo === 3 &&<img src={images[3]} className='slideshow-image' alt='starbucks snow' />}</Fade>                            <div className='slideshow-overlay'></div>
                            <div className='slideshow-text'>
                                <p>{text[this.state.slideNo].p1}</p>
                            </div>
                            <button onClick={this.decrement}><img src={leftarrow} className='prev-slide' alt='Prev Slide' /></button>
                            <button onClick={this.increment}><img src={rightarrow} className='next-slide' alt='Next Slide' /></button>
                        </div>
                        <div className='row'>
                            <span>
                                <img className={this.state.slideNo === 0 ? 'active' : ''} src={line} alt='First Slide' />
                                <img className={this.state.slideNo === 1 ? 'active' : ''} src={line} alt='Second Slide' />
                                <img className={this.state.slideNo === 2 ? 'active' : ''} src={line} alt='Third Slide' />
                                <img className={this.state.slideNo === 3 ? 'active' : ''} src={line} alt='Fourth Slide' />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Slideshow;