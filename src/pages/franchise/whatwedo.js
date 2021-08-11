import React, {Component} from 'react';
import residential from '../../images/franchise/residential.jpg';
import multifamily from '../../images/franchise/multifamily.jpg';
import './style.css';

const slides = [
    {
        p1: 'Create the Perfect',
        p2: 'Outdoor Living Space',
        p3: '',
        img: residential
    },
    {
        p1: 'Beautify your',
        p2: 'Multifamily Residence',
        p3: '',
        img: multifamily
    }
]

class Whatwedo extends Component {
    state={
        activeSlide: 0
    }

    nextSlide = () => {
        if(this.state.activeSlide < slides.length-1) this.setState({activeSlide: this.state.activeSlide+1})
    }

    prevSlide = () => {
        if(this.state.activeSlide >0) this.setState({activeSlide: this.state.activeSlide-1})
    }

    render() {
        return(
            <div className='what-we-do'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6'>
                             <div className='row'>
                                <img src={slides[this.state.activeSlide].img} alt='Service' className='w-100 pr-4' />
                             </div>
                        </div>
                        <div className='col-lg-6 pl-4'>
                            <p>{slides[this.state.activeSlide].p1}</p>
                            <p>{slides[this.state.activeSlide].p2}</p>
                            <p className='section-p'>Donec faucibus tellus ut velit convallis molestie. Aliquam a vehicula orci, ac suscipit tellus. Vivamus auctor neque et nibh ornare rhoncus ac sed purus. Integer eu tincidunt diam. Maecenas ac urna libero. Etiam sit amet purus eros. Donec mollis suscipit mauris, eu euismod sapien venenatis in. Vivamus facilisis commodo dapibus.</p>
                            <span>
                                <button onClick={this.prevSlide}><span>&#10229;</span>   Prev</button>
                                <button onClick={this.nextSlide}>Next   <span>&#10230;</span></button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Whatwedo;