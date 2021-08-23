import React, {useState, useEffect} from 'react';
import Form from './form';
import Slide from 'react-reveal/Slide';
import './style.css';

function ContactCta() {
    const [displayForm, setDisplayForm] = useState(false);
    const [displayCTA, setDisplayCTA] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 400) setDisplayCTA(true)
            else setDisplayCTA(false)
        })
    })
    return(
        displayCTA && <div className='contact-cta'>
            {!displayForm && <button id='cta' onClick={() => setDisplayForm(!displayForm)}>GET MORE INFO</button>}
            {displayForm && 
                <Slide right>
                    <div className='form'>
                        <Form onClick={() => setDisplayForm(false)} />
                    </div>
                </Slide>}
        </div>
    )
}

export default ContactCta;