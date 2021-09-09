import React, {useState, useEffect} from 'react';
import Fade from 'react-reveal/Fade';
import residential from '../../images/franchise/residential.jpeg';
import residential2 from '../../images/franchise/residential2.jpg';
import residential3 from '../../images/franchise/residential3.jpg';
import residential4 from '../../images/franchise/residential4.jpg';
import design from '../../images/residential/design.jpg';
import designSmall from '../../images/residential/designSmall.jpg';
import build from '../../images/residential/build.jpg';
import buildSmall from '../../images/residential/buildSmall.jpg';
import enjoy from '../../images/residential/enjoy2.jpeg';
import enjoySmall from '../../images/residential/enjoy2Small.jpg';
import forward from '../../images/residential/forward.png';
import back from '../../images/residential/back.png';
import line from '../../images/line.png';
import './style.css';

function NewSlideshow(props) {
    const slides = [
        {
            img: residential,
            imgSmall: designSmall,
            title: 'LOVE THE LIFE YOU LIVE',
            body: 'Create the perfect outdoor living space for your friends and family to gather and make new memories',
            // body: 'Schedule a free consultation where together, we will design the perfect landscape to fit your needs'
        },
        {
            img: residential2,
            imgSmall: buildSmall,
            title: 'LOVE THE LIFE YOU LIVE',
            body: 'Create the perfect outdoor living space for your friends and family to gather and make new memories',
            //body: 'Sit back and relax while our professionals turn your dream landscape into a reality'
        },
        {
            img: residential3,
            imgSmall: enjoySmall,
            title: 'LOVE THE LIFE YOU LIVE',
            body: 'Create the perfect outdoor living space for your friends and family to gather and make new memories',
            //body: 'Begin making unforgettable memories in your new outdoor living space'
        },
        {
            img: residential4,
            imgSmall: enjoySmall,
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