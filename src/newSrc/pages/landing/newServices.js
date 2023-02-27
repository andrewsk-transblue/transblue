import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import asphaltService from '../../images/asphaltService-min.jpg';
import snowService from '../../images/snowService-min.jpg';
import maintenance from '../../images/maintenance-min.jpg';
import wayfair from '../../images/wayfair-min.jpeg';
import './newServices.css';
import { Typography } from "@mui/material";
import landscaping from '../../images/landscaping.jpg';

import asphaltServicePreview from '../../images/previews/asphaltServicePreview.jpg';
import snowServicePreview from '../../images/previews/snowServicePreview.jpg';
import maintenancePreview from '../../images/previews/maintenancePreview.jpg';
import wayfairPreview from '../../images/previews/wayfairPreview.jpg';
import landscapingPreview from '../../images/previews/landscapingPreview.jpg';


// const ButtonComp = ( { href }) => {
//     return (
//         <Button
//             sx={{
//                 color: 'white',
//                 border: '2px solid white'
//             }}
//             variant='outlined'
//             component='a'
//             href={href}
//         >
//             learn more
//         </Button>
//     )
// }

function Services() {
    const [screenWidth, setScreenWidth] = useState('small');
    
    useEffect(() => {
        if(window.innerWidth > 500) {
            setScreenWidth('large')
        }
    }, [])

    return (
        <Carousel 
            showArrows={true} 
            infiniteLoop 
            dynamicHeight 
            autoPlay
            interval={3000}
            // autoFocus
            showThumbs={false}
            // onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}
        >
            <div className='service-slide'>
                <img src={
                    screenWidth === 'large'
                        ? asphaltService
                        : asphaltServicePreview
                } alt='Brand new asphalt and striping in parking lot' />
                <div className="bg" />
                <div className="centered">
                    <Typography variant='h1' >ASPHALT</Typography>
                    {/* <ButtonComp href='/asphalt' /> */}
                </div>            
            </div>
            <div className='service-slide'>
                <img src={
                    screenWidth === 'large'
                        ? snowService
                        : snowServicePreview
                } alt='snow plow starbucks project' />
                <div className="bg" />
                <div className="centered">
                    <Typography variant='h1' >SNOW SERVICES</Typography>
                    {/* <ButtonComp /> */}
                </div>            
            </div>
            <div className='service-slide'>
                <img src={
                    screenWidth === 'large'
                        ? wayfair
                        : wayfairPreview
                } alt='Capital Expenditure Wayfair Project' />
                <div className="bg" />
                <div className="centered">
                    <Typography variant='h1' >CAPITAL EXPENDITURE</Typography>
                    {/* <ButtonComp /> */}
                </div>            
            </div>
            <div className='service-slide'>
                <img src={
                    screenWidth === 'large'
                        ? maintenance
                        : maintenancePreview
                } alt='On Demand Maintenance Services' />
                <div className="bg" />
                <div className="centered">
                    <Typography variant='h1' >ON DEMAND SERVICES</Typography>
                    {/* <ButtonComp /> */}
                </div>            
            </div>
            <div className='service-slide'>
                <img src={
                    screenWidth === 'large'
                        ? landscaping
                        : landscapingPreview
                } alt='Commercial landscape maintenance services' />
                <div className="bg" />
                <div className="centered">
                    <Typography variant='h1' >MAINTENANCE</Typography>
                    {/* <ButtonComp /> */}
                </div>            
            </div>
        </Carousel>
    )
}

export default Services;