import React from 'react';
import './style.css';

function What() {
    return(
        <div className='what-wrapper'>
            <div className='row'>
                <div className='col-lg-6'>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/uJiu4petJXA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className='col-lg-6 my-auto left-text my-auto'>
                    <h2 className='mt-4'>BUILT ON DREAMS</h2>
                    {/* <p className='section-p'>We are in the business of making people happy. We do everything from building dream backyards, to providing no hassle capital projects, to changing people's lives through charity. Join our team today and become part of something bigger than yourself!</p> */}

                    <p className='section-p'>
                    The work we do is built on dreams.<br />
                    Dreams of the perfect backyard to spend with family. Dreams of capital projects executed quickly and without a hassle. Dreams of a business at its very best. Dreams of a better life. Join our team today to help make dreams come true!
                    </p>
                    <p className='section-p'>Watch our video to find out more about the services we provide.</p>
                    
                    {/* <p className='section-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus enim vel turpis porttitor pulvinar. Ut sodales metus augue, id rutrum metus tincidunt nec. Aliquam suscipit ullamcorper felis, a consequat nulla vehicula in. Cras egestas laoreet feugiat. Sed tempor tristique ipsum malesuada efficitur.</p> */}
                    {/* <p className='section-p'>Suspendisse gravida, nulla vitae gravida lacinia, dolor elit mollis arcu, ac tempor libero ante eget est. Vestibulum vestibulum tellus risus, nec accumsan dolor accumsan ut. Maecenas suscipit enim risus, vel sagittis urna elementum sed.</p> */}
                </div>
            </div>
        </div>
    )
}

export default What;