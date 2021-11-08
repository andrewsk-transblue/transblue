import React, {Fragment, useState, useEffect} from 'react';
import Franchise from '../../../pages/franchise/franchise';
import FranchiseNav from '../../franchiseNav';

function Header() {
    const [text, setText] = useState('LUXURY EXTERIOR DESIGN');
    //const [index, setIndex] = useState(0)

    let index = 0;
    const textArray = [
        'LUXURY EXTERIOR DESIGN',
        'A GREENER WORLD',
        'LUXURY EXTERIOR DESIGN',
        'QUALITY ASPHALT INSTALLATION',
        'LUXURY EXTERIOR DESIGN',
        'BEAUTIFUL COMMUNITY LIVING',
        'LUXURY EXTERIOR DESIGN',
        'RELIABLE SNOW REMOVAL',

    ]

    useEffect(() => {
        let interval;
        setTimeout(() => {
            index += 1
            setText(textArray[index])
            console.log(index)
            interval = setInterval(() => {
                if(index < textArray.length - 1) index += 1
                else index=0
                console.log(index)  
                setText(textArray[index])          
            }, 13000)
        }, 6000)

        return () => window.clearInterval(interval)
    }, [])

    return(
        <Fragment>
            <FranchiseNav />
            <div className='header'>
            <div id='header_slide'>
                <div className='landing-header'>{text}</div>
                <div className='overlay'></div>
            </div>
        </div>
        </Fragment>
    )
}

export default Header;