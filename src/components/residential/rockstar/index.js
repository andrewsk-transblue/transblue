import React, {useState} from 'react';
import drop from '../../../images/residential/drop.png';
import monohan6 from '../../../images/residential/monohan6.jpg';
import monohan6small from '../../../images/residential/monohan6small.jpg';
import forward from '../../../images/residential/forward.png';
import retainingdrops from '../../../images/residential/retainingdrops.jpg';
import monohan4 from '../../../images/residential/monohan4.jpg';
import monohan3 from '../../../images/residential/monohan3.jpg';
import monohan from '../../../images/residential/monohan.jpg';
import './style.css';

const images = [monohan6, retainingdrops, monohan4, monohan3, monohan]

function Rockstar() {
    const [index, setIndex] = useState(0);

    function nextSlide() {
        if(index < images.length-1) {
            setIndex(index+1)
        }
        else {
            setIndex(0)
        }
    }
    return(
        <div className='rockstar-wrapper container-fluid px-0'>
            {/* <img src={images[index]} alt='' /> */}
            <img src={monohan6small} alt='' />
            <div className='text row mx-0 px-0'>
                <div className='text-center col-2 col-sm-1'><img id='drop' src={drop} alt='' /></div>
                    <div className='col-8 col-sm-9 my-auto'>
                    <h3>DROPS OF JUPITER</h3>
                    <p>The Pat Monahan Project</p>
                </div>
                <div className='col-lg-2 col-2 my-auto text-center'>
                    <button onClick={nextSlide}><img id='forward' src={forward} alt='Next Slide' /></button>
                </div>
            </div>
        </div>
    )
}

export default Rockstar;