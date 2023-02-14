import { Box, Button, ImageList, ImageListItem, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import multifamily from '../../images/commercial.jpg';
import commercial from '../../images/commercial.jpeg';
import government from '../../images/government.jpg';
import snow from '../../images/snowSmall.jpg';
import ev from '../../images/evSmall.jpg';
import './landing.css';

const ImageComp = (props) => {
    const { title, description, href } = props;
    return (
        <>
            <div className="client-overlay"/>
            <div className="service-description">
                <Typography sx={{color: '#0b56a4', pt: '40px', pb: 2}} variant='h2'>{title}</Typography>
                <Typography sx={{color: 'white', px: '40px', pb: 2}} variant='body2'>{description}</Typography>
                <Button
                    variant='outlined'
                    sx={{border: '2px solid #0b56a4', color: '#0b56a4'}}
                    component='a'
                    href={href}
                >
                    learn more
                </Button>
            </div>
            <Typography variant='h2' sx={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white'}}>{title}</Typography>
        </>
    )
}

function Clients() {
    const matches = useMediaQuery('(min-width: 1500px)');

    return (
        <>
            <Box>
                <ImageList sx={{width: '100%', maxWidth: '2000px', m: '0 auto'}} cols={3}>
                    <ImageListItem sx={{bgcolor: '#f3f3f3'}}>
                        <Box sx={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
                            <Typography variant='h1' sx={{ color: '#0b56a4', fontWeight: 500}}>
                                OUR 
                            </Typography>
                            <Typography variant='h1' sx={{ color: '#0b56a4', fontWeight: 500}}>
                                CLIENTS
                            </Typography>
                        </Box>
                    </ImageListItem>
                    <ImageListItem>
                        <img src={commercial} sx={{position: 'relative', height: '100%'}} alt='Commercial Paver Asphalt Installation' />
                        <ImageComp 
                            title='COMMERCIAL'
                            matches={matches}
                            description='Our teams are focused on making your life simple and reducing the burden that comes with the capital projects required to keep your business looking its best. Our experts offer a full range of services from roofing, siding, asphalt, concrete, decking, fencing, to EV chargers and Solar installs, to Snow & Ice management and everything in between.'
                            href='/commercial'
                        />
                    </ImageListItem>

                    <ImageListItem>
                        <img src={multifamily} sx={{position: 'relative', height: '100%'}} alt='Multifamily new parking lot striping project' />
                        <ImageComp
                            title='MULTIFAMILY'
                            matches={matches}
                            description='As a property manager, you are extremely busy. Our focus is being your resource. Our expert teams turn proposals around quickly to make your life easier! Our teams attend board meetings and describe projects and services to ensure the delivery to your communities is exactly what it should be, World Class.'
                            href='/multifamily'
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img src={government} sx={{position: 'relative', height: '100%'}} alt='Government clients' />
                        <ImageComp 
                            title='GOVERNMENT'
                            matches={matches}
                            description='Transblue provides a full range of construction services to Government Facilities, including Federal Government, Military, Municipality, School Districts, etc. With a track record of success, we understand the scope from paperwork to prevailing wage and construction to completion.'
                            href='/government'
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img src={snow} sx={{position: 'relative', height: '100%'}} alt='Snow removal services' />
                        <ImageComp 
                            title='SNOW'
                            matches={matches}
                            description="Transblue, a leader in snow and ice management, understands what your property needs. It's simple, consistent, on time service with a focus on quality. The World Class Experience we deliver at Transblue will ensure that your clients, employees, and stakeholders don’t lose faith in your brand."
                            href='https://snow.transblue.com'
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img src={ev} sx={{position: 'relative', height: '100%'}} alt='EV charger installation' />
                        <ImageComp 
                            title='GREEN'
                            matches={matches}
                            description='At Transblue, we focus on making our world a better place with our World Class ESG (environmental, social, and governance) Program. Our experience in the industry has set Transblue apart as an environmental leader. For a best in class consultation and install, call Transblue Today.'
                            href='https://green.transblue.com'
                        />
                    </ImageListItem>
                </ImageList>
            </Box>
        </>
    )
}

export default Clients;