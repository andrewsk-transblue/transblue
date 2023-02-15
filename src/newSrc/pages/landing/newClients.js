import { Box, Button, Grid, ImageList, ImageListItem, Typography } from "@mui/material";
import React from "react";
import multifamily from '../../images/multifamily.jpg';
import government from '../../images/government.jpg';
import snow from '../../images/snowSmall.jpg';
import grainger from '../../images/grainger2.jpg';
import residential from '../../images/residential.jpeg';
import './landing.css';
import { useState } from "react";
import { useEffect } from "react";

const ImageComp = (props) => {
    const { title, description, href, src, alt } = props;
    return (
        <Box sx={{width: '100%', height: '100%'}}>
            {/* <img src={src} alt={alt} syle={{position: 'absolute', top: 0, left: 0, width: '100%'}} /> */}
            <div className="client-overlay"/>
            <div className="service-description">
                <Typography sx={{color: '#0b56a4', pt: '40px', pb: 2}} variant='h2'>{title}</Typography>
                {/* <Typography sx={{color: 'white', px: '40px', pb: 2}} variant='body2'>{description}</Typography> */}
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
        </Box>
    )
}

function NewClients() {
    const [cols, setCols] = useState(1);

    useEffect(() => {
        if(window.innerWidth > 1536) {
            setCols(4)
        }
        else if(window.innerWidth < 1536 && window.innerWidth > 600) {
            setCols(2)
        }

        else if(window.innerWidth < 600) {
            setCols(1)
        }
    }, []);

    useEffect(() => {
        window.addEventListener('resize', () => {
            if(window.innerWidth > 1536) {
                setCols(4)
            }
            else if(window.innerWidth < 1536 && window.innerWidth > 600) {
                setCols(2)
            }

            else if(window.innerWidth < 600) {
                setCols(1)
            }
        })
    }, [])

    return(
        <Grid container>
            <Grid item xs={12} md={4} my='auto' px={5}>
                <Typography variant='h1' sx={{color: '#0b56a4', textAlign: 'center', fontWeight: 500, textAlign: {
                    xs: 'center',
                    md: 'left'
                }, mb: {
                    xs: 5,
                    md: 0
                }}}>
                    {cols === 1 ? 'OUR CLIENTS' : 'OUR'}
                </Typography>
                {cols > 1 &&
                    <Typography variant='h1' sx={{color: '#0b56a4', textAlign: 'center', fontWeight: 500, textAlign: {
                        xs: 'center',
                        md: 'left'
                    }}}>
                        CLIENTS
                    </Typography>
                }
            </Grid>
            <Grid item xs={12} md={8}>
                <ImageList cols={cols}>
                    <ImageListItem>
                        <img
                            src={`${grainger}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${grainger}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt='Commercial Clients'
                            loading="lazy"
                        />
                        
                        <ImageComp 
                            title='COMMERCIAL'
                            description='Our teams are focused on making your life simple and reducing the burden that comes with the capital projects required to keep your business looking its best. Our experts offer a full range of services from roofing, siding, asphalt, concrete, decking, fencing, to EV chargers and Solar installs, to Snow & Ice management and everything in between.'
                            href='/commercial'
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src={`${multifamily}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${multifamily}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt='Multifamily new parking lot striping project'
                            loading="lazy"
                        />
                        <ImageComp                            
                            title='MULTIFAMILY'
                            description='As a property manager, you are extremely busy. Our focus is being your resource. Our expert teams turn proposals around quickly to make your life easier! Our teams attend board meetings and describe projects and services to ensure the delivery to your communities is exactly what it should be, World Class.'
                            href='/multifamily'
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src={`${government}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${government}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt='Government clients'
                            loading="lazy"
                        />
                        <ImageComp 
                            src={government}
                            title='GOVERNMENT'
                            description='Transblue provides a full range of construction services to Government Facilities, including Federal Government, Military, Municipality, School Districts, etc. With a track record of success, we understand the scope from paperwork to prevailing wage and construction to completion.'
                            href='/government'
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src={`${residential}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${residential}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt='Residential Clients'
                            loading="lazy"
                        />
                        
                        <ImageComp 
                            title='RESIDENTIAL'
                            description='Our teams are focused on making your life simple and reducing the burden that comes with the capital projects required to keep your business looking its best. Our experts offer a full range of services from roofing, siding, asphalt, concrete, decking, fencing, to EV chargers and Solar installs, to Snow & Ice management and everything in between.'
                            href='/commercial'
                        />
                    </ImageListItem>
                </ImageList>
            </Grid>
        </Grid>
    )
}

export default NewClients;