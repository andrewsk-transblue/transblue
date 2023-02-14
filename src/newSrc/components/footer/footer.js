import React, { useEffect, useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { Email, ExpandLess, Facebook, Instagram, LinkedIn, PhoneEnabled, Pinterest, Twitter, YouTube } from "@mui/icons-material";

function Footer() {
    const [screenSize, setScreenSize] = useState('large');

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    function handleResize() {
        if(window.innerWidth < 750) {
            setScreenSize('small');
        }
    }

    useEffect(() => {
        window.addEventListener('resize', () => {
            handleResize();
        })
    }, [])

    return(
        <Box
            sx={{
                width: '100%', 
                bgcolor: 'rgb(39,39,39)',
                py: '30px',
                textAlign: 'center', 
                mt: 5
            }}
        >
            <Button
                onClick={scrollToTop}
            >
                <ExpandLess
                    sx={{opacity: .6, color: 'white', fontSize: '50px'}}
                />
            </Button>
            <Stack spacing={3} direction='row' justifyContent='center' my={2}>
                <Typography variant='subtitle2' sx={{color: 'rgb(192, 192, 192)'}}>
                    <PhoneEnabled sx={{verticalAlign: 'middle'}} /> +1 (844) 482-2583
                </Typography>
                <Typography variant='subtitle2' sx={{color: 'rgb(192,192,192)'}}>
                    <Email sx={{verticalAlign: 'middle'}} /> inquiries@transblue.com
                </Typography>
            </Stack>

            <Stack spacing={3} direction={{xs: 'column', md: 'row'}} justifyContent='center' mb={2}>
                <Typography 
                    variant='subtitle1' 
                    sx={{color: 'rgb(0, 110, 255)', textDecoration: 'none'}}
                    component='a'
                    href='/'
                >
                    HOME
                </Typography>
                <Typography 
                    variant='subtitle1'
                    sx={{color: 'rgb(0, 110, 255)', textDecoration: 'none'}}
                    component='a'
                    href='https://snow.transblue.com'
                >
                    SNOW SERVICES
                </Typography>
                <Typography 
                    variant='subtitle1' 
                    sx={{color: 'rgb(0, 110, 255)', textDecoration: 'none'}}
                    component='a'
                    href='https://green.transblue.com'
                >
                    GREEN SERVICES
                </Typography>
                <Typography 
                    variant='subtitle1' 
                    sx={{color: 'rgb(0, 110, 255)', textDecoration: 'none'}}
                    component='a'
                    href='/blog'
                >
                    BLOG
                </Typography>
                <Typography 
                    variant='subtitle1' 
                    sx={{color: 'rgb(0, 110, 255)', textDecoration: 'none'}}
                    component='a'
                    href='/locations'
                >
                    LOCATIONS
                </Typography>
            </Stack>

            <Stack spacing={3} direction='row' justifyContent='center'>

                <Typography 
                    variant='subtitle1' 
                    sx={{color: 'white', textDecoration: 'none'}}
                    component='a'
                    href='https://www.linkedin.com/company/transblue-general-contractor'
                >
                    <LinkedIn />
                </Typography>
                <Typography 
                    variant='subtitle1' 
                    sx={{color: 'white', textDecoration: 'none'}}
                    component='a'
                    href='https://twitter.com/transblue_?lang=en'
                >
                    <Twitter />
                </Typography>
                <Typography 
                    variant='subtitle1' 
                    sx={{color: 'white', textDecoration: 'none'}}
                    component='a'
                    href='https://www.facebook.com/TransblueGC/'
                >
                    <Facebook />
                </Typography>
                <Typography 
                    variant='subtitle1' 
                    sx={{color: 'white', textDecoration: 'none'}}
                    component='a'
                    href='https://www.youtube.com/channel/UC72_rqlaYYyqydfycR588hw'
                >
                    <YouTube />
                </Typography>
                <Typography 
                    variant='subtitle1' 
                    sx={{color: 'white', textDecoration: 'none'}}
                    component='a'
                    href='https://www.pinterest.com/transbluegc/'
                >
                    <Pinterest />
                </Typography>
                <Typography 
                    variant='subtitle1' 
                    sx={{color: 'white', textDecoration: 'none'}}
                    component='a'
                    href='https://www.instagram.com/transblue_/?hl=en'
                >
                    <Instagram />
                </Typography>
            </Stack>

            <Typography 
                variant='subtitle2' 
                sx={{color: 'rgb(192, 192, 192)', textDecoration: 'none'}}
                component='a'
                href='/privacy'
            >
                privacy policy
            </Typography>
        </Box>
    )
}

export default Footer;