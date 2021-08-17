import React, {useState} from 'react';
import Form from './form';
import Slide from 'react-reveal/Slide';
import './style.css';

function ContactCta() {
    const [displayForm, setDisplayForm] = useState(false);
    return(
        <div className='contact-cta'>
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