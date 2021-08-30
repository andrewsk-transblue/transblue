import React, {useState, useEffect} from 'react';
import Form from './form';
import Slide from 'react-reveal/Slide';
import './style.css';

function ContactCta(props) {
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
            <button id='cta' onClick={() => setDisplayForm(true)}>GET MORE INFO</button>
            {/* {displayForm &&  */}
                <Slide right when={displayForm} exit={true} collapse>
                    <div className='form'>
                        <Form email={props.email} onClick={() => setDisplayForm(false)} />
                    </div>
                </Slide>
        </div>
    )
}

export default ContactCta;