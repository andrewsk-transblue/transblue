import React from 'react';
import './style.css';

// function About(props) {
//     return(
//         <fieldset>
//             <legend>A landscaping company you can trust</legend> 
//             <p className='text-secondary'>Donec non neque imperdiet, pretium ex ut, tristique mi. Suspendisse sed tellus a ipsum viverra pharetra pharetra nec quam. Duis quis consequat justo, vel vulputate nulla. Vivamus sit amet viverra risus. Pellentesque maximus ac mi in efficitur. Sed vitae congue ex. Ut in ultricies elit. Phasellus et tincidunt lacus, aliquam lacinia ex. Nunc accumsan aliquam blandit.</p>
//             <span>
//                 <div className='franchise-phone'><i className="fas fa-phone"></i>  {props.phone}</div>
//                 <div className='franchise-email'><i className="fas fa-envelope"></i> {props.email}</div>
//             </span>
        
//         </fieldset>
//     )
// }

function About(props) {
    return (
        <div className='container-fluid about-container'>
            <div className='row'>
                <div className='col-lg-12'>
                    <p className='text-secondary'>{props.name.toUpperCase()}</p>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-6'>
                    <h1>A LANDSCAPING COMPANY<br /> YOU CAN TRUST</h1>
                    <div className='franchise-email ml-0'><i className="fas fa-envelope"></i> {props.email}</div>
                    <div className='franchise-phone'><i className="fas fa-phone"></i>  {props.phone}</div>
                </div>
                <div className='col-lg-6'>
                    <p className='text-secondary'>Donec non neque imperdiet, pretium ex ut, tristique mi. Suspendisse sed tellus a ipsum viverra pharetra pharetra nec quam. Duis quis consequat justo, vel vulputate nulla. Vivamus sit amet viverra risus. Pellentesque maximus ac mi in efficitur. Sed vitae congue ex. Ut in ultricies elit. Phasellus et tincidunt lacus, aliquam lacinia ex. Nunc accumsan aliquam blandit.</p>
                </div>
            </div>
        </div>
    )
}

export default About;