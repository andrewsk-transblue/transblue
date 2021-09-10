import React, {useState} from 'react';
import Fade from 'react-reveal/Fade';
import forward from '../../images/residential/forward.png';
import back from '../../images/residential/back.png';
import line from '../../images/line.png';
import './style.css';

import east from '../../images/franchise/residential/east.jpeg';
import east2 from '../../images/franchise/residential/east2.jpg';
import east3 from '../../images/franchise/residential/east3.jpg';
import east4 from '../../images/franchise/residential/east4.jpg';
import west from '../../images/franchise/residential/west.jpg';
import west2 from '../../images/franchise/residential/west2.jpg';
import west3 from '../../images/franchise/residential/west3.jpg';
import west4 from '../../images/franchise/residential/west4.jpg';
import northwest from '../../images/franchise/residential/northwest.jpg';
import northwest2 from '../../images/franchise/residential/northwest2.jpg';
import northwest3 from '../../images/franchise/residential/northwest3.jpg';
import northwest4 from '../../images/franchise/residential/northwest4.jpg';
import southwest from '../../images/franchise/residential/southwest.jpg';
import southwest2 from '../../images/franchise/residential/southwest2.jpg';
import southwest3 from '../../images/franchise/residential/southwest3.jpg';
import southwest4 from '../../images/franchise/residential/southwest4.jpg';
import midwest from '../../images/franchise/residential/midwest.jpeg';
import midwest2 from '../../images/franchise/residential/midwest2.jpeg';
import midwest3 from '../../images/franchise/residential/midwest3.jpeg';
import midwest4 from '../../images/franchise/residential/midwest4.jpeg';

let residentialImages = {
    'west': [west, west2, west3, west4],
    'northwest': [northwest, northwest2, northwest3, northwest4],
    'southwest': [southwest, southwest2, southwest3, southwest4],
    'northeast': [east, east2, east3, east4],
    'midwest': [midwest, midwest2, midwest3, midwest4]
};

function NewSlideshow(props) {
    //if(props.location === 'southwest') 
    //console.log(props.location.region)
    let images = residentialImages[props.location.region];
    console.log(images)
    const slides = [
        {
            img: images[0],
            imgSmall: images[0],
            title: 'LOVE THE LIFE YOU LIVE',
            body: 'Create the perfect outdoor living space for your friends and family to gather and make new memories',
            // body: 'Schedule a free consultation where together, we will design the perfect landscape to fit your needs'
        },
        {
            img: images[1],
            imgSmall: images[1],
            title: 'LOVE THE LIFE YOU LIVE',
            body: 'Create the perfect outdoor living space for your friends and family to gather and make new memories',
            //body: 'Sit back and relax while our professionals turn your dream landscape into a reality'
        },
        {
            img: images[2],
            imgSmall: images[2],
            title: 'LOVE THE LIFE YOU LIVE',
            body: 'Create the perfect outdoor living space for your friends and family to gather and make new memories',
            //body: 'Begin making unforgettable memories in your new outdoor living space'
        },
        {
            img: images[3],
            imgSmall: images[3],
            title: 'LOVE THE LIFE YOU LIVE',
            body: 'Create the perfect outdoor living space for your friends and family to gather and make new memories',
            //body: 'Begin making unforgettable memories in your new outdoor living space'
        }
    ]
    const [index, setIndex] = useState(0);

    return(
        <div className='slideshow-wrapper'>
            <img src={slides[index].imgSmall} alt='' srcSet={`${slides[index].imgSmall} 576w, ${slides[index].img} 720w`} />
            {/* <img src={slides[index].imgSmall} alt='' className='lg-screen-hide' /> */}
            <div className='overlay'></div>
            <div className='text container-fluid'>
                <div className='row mx-0'>
                    <div className='col-lg-1 col-1 my-auto px-0'>
                        <button disabled={index > 0 ? false : true} onClick={() => setIndex(index-1)}>
                            <img className={index > 0 ? 'back' : 'back disabled'} src={back} alt='' />
                        </button>
                    </div>
                    <div className='col-lg-10 col-10 my-auto'>
                        {index === 0 && <Fade duration={1500}>
                            <h3>{slides[0].title}</h3>
                            <p>{slides[0].body}</p>
                        </Fade>}
                        {index === 1 && <Fade duration={1500}>
                            <h3>{slides[1].title}</h3>
                            <p>{slides[1].body}</p>
                        </Fade>}
                        {index === 2 && <Fade duration={1500}>
                            <h3>{slides[2].title}</h3>
                            <p>{slides[2].body}</p>
                        </Fade>}
                        {index === 3 && <Fade duration={1500}>
                            <h3>{slides[3].title}</h3>
                            <p>{slides[3].body}</p>
                        </Fade>}
                    </div>
                    <div className='col-lg-1 col-1 my-auto px-0'>
                        <button disabled={index < slides.length-1 ? false : true} onClick={() => setIndex(index+1)}>
                            <img className={index < slides.length-1  ? 'forward' : 'forward disabled'} src={forward} alt=''></img>
                        </button>
                    </div>
                </div>
            </div>
            <div className='slide-indicator'>
                <span>
                    <img className={index === 0 ? 'active' : ''} src={line} alt='Design' />
                    <img className={index === 1 ? 'active' : ''} src={line} alt='Build' />
                    <img className={index === 2 ? 'active' : ''} src={line} alt='Enjoy' />
                    <img className={index === 3 ? 'active' : ''} src={line} alt='Enjoy' />

                </span>
            </div>
        </div>
    )
}

export default NewSlideshow;