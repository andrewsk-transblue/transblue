import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import asphaltService from '../../images/asphaltService.jpg';
import snowService from '../../images/snowService.jpg';
import maintenance from '../../images/maintenance.jpg';
import wayfair from '../../images/wayfair.jpeg';
import './newServices.css';
import { Typography } from "@mui/material";
import landscaping from '../../images/landscaping.jpg';


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
                <img src={asphaltService} alt='Brand new asphalt and striping in parking lot' />
                <div className="bg" />
                <div className="centered">
                    <Typography variant='h1' >ASPHALT</Typography>
                    {/* <ButtonComp href='/asphalt' /> */}
                </div>            
            </div>
            <div className='service-slide'>
                <img src={snowService} alt='snow plow starbucks project' />
                <div className="bg" />
                <div className="centered">
                    <Typography variant='h1' >SNOW SERVICES</Typography>
                    {/* <ButtonComp /> */}
                </div>            
            </div>
            <div className='service-slide'>
                <img src={wayfair} alt='Capital Expenditure Wayfair Project' />
                <div className="bg" />
                <div className="centered">
                    <Typography variant='h1' >CAPITAL EXPENDITURE</Typography>
                    {/* <ButtonComp /> */}
                </div>            
            </div>
            <div className='service-slide'>
                <img src={maintenance} alt='On Demand Maintenance Services' />
                <div className="bg" />
                <div className="centered">
                    <Typography variant='h1' >ON DEMAND SERVICES</Typography>
                    {/* <ButtonComp /> */}
                </div>            
            </div>
            <div className='service-slide'>
                <img src={landscaping} alt='Commercial landscape maintenance services' />
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