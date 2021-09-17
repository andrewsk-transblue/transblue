import React, {useState} from 'react';

import solidrock from '../../../images/multifamily/solidRock/1.png';
import solidrock2 from '../../../images/multifamily/solidRock/2.png';
import solidrock3 from '../../../images/multifamily/solidRock/3.png';

import './style.css';

function CampImages() {
    const images = [solidrock, solidrock2, solidrock3]
    const [index, setIndex] = useState(0);

    function changeImage(direction) {
        if(direction === 'decrement') setIndex(index - 1)
        else if(direction === 'increment') setIndex(index + 1)
    }

    return(
        <div className='camp-images'>
            <img src={images[index]} alt='Solid Rock Mission Camp' />
            <div className='buttons'>
                {index > 0 && <button className='prev' onClick={() => changeImage('decrement')}><i className='fas fa-chevron-left'></i></button>}
                {index + 1 <= images.length - 1 && <button className='next' onClick={() => changeImage('increment')}><i className='fas fa-chevron-right'></i></button>}
            </div>
        </div>
    )
}

export default CampImages;