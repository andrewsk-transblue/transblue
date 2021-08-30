import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';
import snow from '../../images/commercial/snow.jpg';
import asphalt from '../../images/commercial/asphalt4.jpg';
import fence from '../../images/commercial/fence.jpg';
import solar from '../../images/commercial/solar.jpg';
import rightarrow from '../../images/residential/forward.png';
import leftarrow from '../../images/residential/back.png';
import line from '../../images/line.png';
import './style.css';

class Slideshow extends Component {
    state = {
        slideNo: 0,
        images: [],
        text: []
    }

    componentDidMount() {
        this.interval = setInterval(this.timer, 6000)
        this.setState({
            images: this.props.images,
            text: this.props.text
        })
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    timer = () => {
        if(this.state.slideNo < this.state.images.length - 1) {
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
        if(this.state.slideNo < this.state.images.length-1) this.setState({slideNo: this.state.slideNo + 1}, this.clearTimer);
        else {this.setState({slideNo: 0}, this.clearTimer)}
    }

    decrement = () => {
        if(this.state.slideNo > 0) this.setState({slideNo: this.state.slideNo -1}, this.clearTimer)
        else this.setState({slideNo: this.state.images.length-1})
    }

    render() {
        return(
            this.state.images.length > 0 && <div className='container-fluid slideshow'>
                <div className='row'>
                    <div className='col-lg-12 px-0 py-0'>
                        <div className='row'>
                            <Fade duration={1000}>{this.state.slideNo === 0 &&<img src={this.state.images[0]} className='slideshow-image' alt='starbucks snow' />}</Fade>
                            <Fade duration={1000}>{this.state.slideNo === 1 &&<img src={this.state.images[1]} className='slideshow-image' alt='starbucks snow' />}</Fade>
                            <Fade duration={1000}>{this.state.slideNo === 2 &&<img src={this.state.images[2]} className='slideshow-image' alt='starbucks snow' />}</Fade>
                            <Fade duration={1000}>{this.state.slideNo === 3 &&<img src={this.state.images[3]} className='slideshow-image' alt='starbucks snow' />}</Fade>                            
                            <div className='overlay'></div>
                            <div className='slideshow-text centered-text'>
                                <p>{this.state.text[this.state.slideNo].p1}</p>
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