import React, { useEffect, useState } from "react";
import './navbar.css';
import logo from '../../images/logoCropped.png';
import { Box, Button, Grid, Menu, MenuItem } from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";

function Navbar({ page }) {
    const [theme, setTheme] = useState({
        bgcolor: 'transparent',
        topPadding: 'topPadding',
        rightPadding: 'rightPadding'
    });
    const [serviceAnchor, setServiceAnchor] = useState(null);
    const handleServiceClose = () => setServiceAnchor(null);
    const serviceOpen = Boolean(serviceAnchor);
    const [moreAnchor, setMoreAnchor] = useState(null);
    const handleMoreClose = () => setMoreAnchor(null);
    const moreOpen = Boolean(moreAnchor);

    useEffect(() => {
        document.addEventListener('scroll', () => {
            let bgcolor = window.scrollY > window.innerHeight / 3 ? 'black' : 'transparent';

            setTheme({
                ...theme,
                bgcolor: bgcolor
            })
        })
    }, [theme]);
    
    return (
        <Box sx={{width: '100%', zIndex: 8, bgcolor: theme.bgcolor, position: 'fixed', top: 0, left: 0}}>
            <Grid container>
                <Grid item md={5} my='auto'>
                    <Box sx={{width: '100%', display: 'flex', justifyContent: 'flex-end'}}>
                        <Button
                            sx={{color: page === '' ? '#ed6a22' : '#d3d3d3', fontFamily: 'Raleway'}}
                            onClick={(e) => setServiceAnchor(e.currentTarget)}
                            endIcon={<KeyboardArrowDown />}
                        >
                            services
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={serviceAnchor}
                            open={serviceOpen}
                            onClose={handleServiceClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem 
                                component='a'
                                href='/commercial'
                                //sx={{color: 'white', fontFamily: 'Raleway', bgcolor: theme.bgcolor}}
                            >
                                COMMERCIAL
                            </MenuItem>
                            <MenuItem 
                                component='a'
                                href='/government'
                            >
                                GOVERNMENT
                            </MenuItem>
                            <MenuItem 
                                component='a'
                                href='/multifamily'
                            >
                                MULTIFAMILY
                            </MenuItem>
                            <MenuItem 
                                component='a'
                                href='https://snow.transblue.com'
                            >
                                SNOW
                            </MenuItem>
                            <MenuItem 
                                component='a'
                                href='https://green.transblue.com'
                            >
                                GREEN
                            </MenuItem>
                            <MenuItem 
                                component='a'
                                href='/residential'
                            >
                                RESIDENTIAL
                            </MenuItem>
                        </Menu>
                       
                        <Button
                            component='a'
                            href='/commercial'
                            sx={{color: page === 'commercial' ? '#ed6a22' : '#d3d3d3', fontFamily: 'Raleway'}}
                        >
                            commercial
                        </Button>
                        <Button
                            component='a'
                            href='https://green.transblue.com'
                            sx={{color: page === '' ? '#ed6a22' : '#d3d3d3', fontFamily: 'Raleway'}}
                        >
                            green
                        </Button>
                        <Button
                            component='a'
                            href='https://snow.transblue.com'
                            sx={{color: page === 'snow' ? '#ed6a22' : '#d3d3d3', fontFamily: 'Raleway'}}
                        >
                            snow
                        </Button>
                    </Box>
                </Grid>
                <Grid item md={2} my='auto'>
                    <Box 
                        sx={{width: '100%', display: 'flex', justifyContent: 'center', py: 1}}
                        component='a'
                        href='/'
                    >
                        <img src={logo} alt='TB Logo' style={{width: '6vw', margin: '0 auto'}} />
                    </Box>
                </Grid>
                <Grid item md={5} my='auto'>
                    <Box sx={{width: '100%'}}>
                        <Button
                            component='a'
                            sx={{color: page === 'locations' ? '#ed6a22' : '#d3d3d3', fontFamily: 'Raleway'}}
                            href='/locations'
                        >
                            find a location
                        </Button>
                        <Button 
                            component='a'
                            href='/subcontractor'
                            sx={{color: page === 'subcontractor' ? '#ed6a22' : '#d3d3d3', fontFamily: 'Raleway'}}

                        >
                            SUBCONTRACTORS
                        </Button>

                        <Button
                            component='a'
                            sx={{color: page === 'givesback' ? '#ed6a22' : '#d3d3d3', fontFamily: 'Raleway'}}
                            href='/givesback'
                        >
                            giving back
                        </Button>
                        
                        <Button
                            sx={{color: '#d3d3d3', fontFamily: 'Raleway'}}
                            onClick={(e) => setMoreAnchor(e.currentTarget)}
                            endIcon={<KeyboardArrowDown />}
                        >
                            more
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={moreAnchor}
                            open={moreOpen}
                            onClose={handleMoreClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem 
                                component='a'
                                href='/subcontractor'
                            >
                                SUBCONTRACTORS
                            </MenuItem>
                            <MenuItem 
                                component='a'
                                href='/contact'
                            >
                                CONTACT
                            </MenuItem>
                            <MenuItem 
                                component='a'
                                href='/projects'
                            >
                                PROJECTS
                            </MenuItem>
                            <MenuItem
                                component='a'
                                href='/finance'
                            >
                                GET FINANCED
                            </MenuItem>
                            <MenuItem 
                                component='a'
                                href='/blog'
                            >
                                BLOG
                            </MenuItem>
                        </Menu>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Navbar;