import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";

function onChange() {
    console.log('submitted captcha')
}

function Captcha() {
    return(
        <ReCAPTCHA
            sitekey="6Le5pz0bAAAAAGUh97rIum2usNBvVsyrg2JtYu4y"
            onChange={onChange}
        />
    )
}

export default Captcha;