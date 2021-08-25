import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";

function Captcha(props) {
    return(
        <ReCAPTCHA
            sitekey="6Le5pz0bAAAAAGUh97rIum2usNBvVsyrg2JtYu4y"
            onChange={props.onChange}
        />
    )
}

export default Captcha;