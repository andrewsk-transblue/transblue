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
    let tel = props.phone.replace(/[^A-Z0-9]/ig, "");
    console.log(tel)
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
                    <div className='row contact'>
                        <div className='franchise-email'><a href='mailto:incomingleads@transblue.org'><i className="fas fa-envelope"></i> {props.email}</a></div>
                        <div className='franchise-phone'><a href={`tel:+${tel}`}><i className="fas fa-phone"></i>  {props.phone}</a></div>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <p className='section-p'>
                    Transblue’s franchise system is the backbone of its success and unmatched growth. With offices from coast to coast managed by independent business owners, you know that the Transblue teams installing your work in each region are dedicated to a level that far exceed the dedication of an area manager. At {props.name}, we are committed to delivering a World Class installation. We take pride and ownership for every installation..
                    </p>
                    {/* <p className='section-p'>Donec non neque imperdiet, pretium ex ut, tristique mi. Suspendisse sed tellus a ipsum viverra pharetra pharetra nec quam. Duis quis consequat justo, vel vulputate nulla. Vivamus sit amet viverra risus. Pellentesque maximus ac mi in efficitur. Sed vitae congue ex. Ut in ultricies elit. Phasellus et tincidunt lacus, aliquam lacinia ex. Nunc accumsan aliquam blandit.</p> */}
                </div>
            </div>
        </div>
    )
}

export default About;