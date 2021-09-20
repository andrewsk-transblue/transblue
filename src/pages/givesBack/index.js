import React, {Fragment, useState} from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Header from '../../components/header';
import givesback from '../../images/givesback.jpg';
import './style.css';

const charities = [
    {
        name: 'ABOUT MBRIDGE',
        description: ''
    },
    {
        name: "DEE'S HOPE",
        description: ''
    },
    {
        name: 'DAWSON PLACE',
        description: ''
    },
    {
        name: 'SOLID ROCK MISSION',
        description: ''
    },
    {
        name: 'HOPE UNLIMITED',
        description: ''
    },
    {
        name: 'NORTHWEST INCIDENT SUPPORT',
        description: ''
    },
    {
        name: 'GRACE & FAVOR',
        description: ''
    },
    {
        name: 'HEED',
        description: []
    }
]

function GivesBack(props) {

    const [activeButton, setActiveButton] = useState(0)

    return(
        <Fragment>
            <Navbar />
            <Header name='givesback' img={givesback} title='TRANSBLUE GIVES BACK' />
            <div className='container givesback-wrapper'>
                <div className='row'>
                    <div className='col-lg-3'>
                        {charities.map((charity, index) => {
                            return(
                                <Fragment>
                                    <button className={activeButton === index ? 'active' : ''} onClick={() => setActiveButton(index)}>{charity.name}</button><br />
                                </Fragment>
                            )
                        })}
                    </div>
                    <div className='col-lg-9'>
                        
                        <div className='body'>
                            <h3 className='section-header'>{charities[activeButton].name}</h3>
                            <p className='section-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut posuere sagittis magna, sit amet scelerisque risus facilisis eu. Pellentesque mattis lacus risus, nec tincidunt risus facilisis a. Nulla hendrerit dui eu sapien imperdiet finibus. Morbi a tincidunt ligula. Nam eget elementum metus, gravida molestie ante. Aliquam pulvinar leo vulputate tincidunt tempor. In aliquet condimentum nisl, non imperdiet turpis hendrerit et. Donec justo neque, consequat vitae placerat quis, condimentum vel diam. Integer elementum hendrerit risus, ut maximus tellus eleifend vitae. In elementum laoreet lacus, vel sagittis nisi. Ut facilisis urna nisl, quis placerat ligula eleifend ac. Donec euismod faucibus sem eget accumsan.</p>
                            <p className='section-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut posuere sagittis magna, sit amet scelerisque risus facilisis eu. Pellentesque mattis lacus risus, nec tincidunt risus facilisis a. Nulla hendrerit dui eu sapien imperdiet finibus. Morbi a tincidunt ligula. Nam eget elementum metus, gravida molestie ante. Aliquam pulvinar leo vulputate tincidunt tempor. In aliquet condimentum nisl, non imperdiet turpis hendrerit et. Donec justo neque, consequat vitae placerat quis, condimentum vel diam. Integer elementum hendrerit risus, ut maximus tellus eleifend vitae. In elementum laoreet lacus, vel sagittis nisi. Ut facilisis urna nisl, quis placerat ligula eleifend ac. Donec euismod faucibus sem eget accumsan.</p>
                            <p className='section-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut posuere sagittis magna, sit amet scelerisque risus facilisis eu. Pellentesque mattis lacus risus, nec tincidunt risus facilisis a. Nulla hendrerit dui eu sapien imperdiet finibus. Morbi a tincidunt ligula. Nam eget elementum metus, gravida molestie ante. Aliquam pulvinar leo vulputate tincidunt tempor. In aliquet condimentum nisl, non imperdiet turpis hendrerit et. Donec justo neque, consequat vitae placerat quis, condimentum vel diam. Integer elementum hendrerit risus, ut maximus tellus eleifend vitae. In elementum laoreet lacus, vel sagittis nisi. Ut facilisis urna nisl, quis placerat ligula eleifend ac. Donec euismod faucibus sem eget accumsan.</p>
                            <p className='section-p'></p>
                            <p className='section-p'></p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}

export default GivesBack;