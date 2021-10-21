import React, {useState, useEffect} from 'react';
import Fade from 'react-reveal/Fade';
import { LazyLoadImage } from 'react-lazy-load-image-component';
//import design from '../../../images/residential/design.jpg';
import forward from '../../../images/residential/forward.png';
import back from '../../../images/residential/back.png';
import line from '../../../images/line.png';
import './style.css';

function Design() {
    //console.log(window.innerHeight)
    const slides = [
        {
            title: 'DESIGN',
            body: 'Schedule a free consultation where together, we will design the perfect landscape to fit your needs'
        },
        {
            title: 'BUILD',
            body: 'Sit back and relax while our professionals turn your dream landscape into a reality'
        },
        {
            title: 'ENJOY',
            body: 'Begin making unforgettable memories in your new outdoor living space'
        }
    ]
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            index < 2 ? setIndex(index + 1) : setIndex(0)
        }, 20000);
        return () => clearInterval(interval)
    }, [index])

    return(
        <div className='design-wrapper' data-index={index}>
            {/* <img src={slides[index].imgSmall} alt='' srcSet={`${slides[index].imgSmall} 500w, ${slides[index].img} 1400w`} sizes='(max-width: 500px) 500px, 1400px' /> */}
            <div className='overlay'></div>
            <div className='text container-fluid'>
                <div className='row mx-0'>
                    <div className='col-lg-1 col-1 my-auto px-0'>
                        <button disabled={index > 0 ? false : true} onClick={() => setIndex(index-1)}>
                            <LazyLoadImage className={index > 0 ? 'back' : 'back disabled'} src={back} alt='' />
                        </button>
                    </div>
                    <div className='col-lg-6 col-10 my-auto pl-4'>
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
                    </div>
                    <div className='col-lg-4 d-none d-lg-block'></div>
                    <div className='col-lg-1 col-1 my-auto px-0'>
                        <button disabled={index < 2 ? false : true} onClick={() => setIndex(index+1)}>
                            <LazyLoadImage className={index < 2 ? 'forward' : 'forward disabled'} src={forward} alt='' />
                        </button>
                    </div>
                </div>
            </div>
            <div className='slide-indicator'>
                <span>
                    <img className={index === 0 ? 'active' : ''} src={line} alt='Design' />
                    <img className={index === 1 ? 'active' : ''} src={line} alt='Build' />
                    <img className={index === 2 ? 'active' : ''} src={line} alt='Enjoy' />
                </span>
            </div>
        </div>
    )
}

export default Design;