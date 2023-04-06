import { AppBar, Box, IconButton, Menu, MenuItem, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useEffect, useState } from 'react';
import logo from '../../images/smallLogo.png';
import './navbar.css';

function MobileNavbar() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClose = () => setAnchorEl(null);
    const handleOpen = (e) => setAnchorEl(e.currentTarget);

    const [theme, setTheme] = useState({
        style: {
            bgcolor: 'transparent'
        },
        topPadding: '30px',
        rightPadding: 'rightPadding'
    });

    useEffect(() => {
        document.addEventListener('scroll', () => {
            let topPadding = window.scrollY > 30 ? '0px' : '30px';
            let style = window.scrollY > window.innerHeight / 3 
            ?   {
                    bgcolor: 'rgba(24, 24, 24, 0.9) !important',
                    backdropFilter: 'blur(2px)'
                }
            :   {
                    bgcolor: 'transparent'
                }

            setTheme({
                ...theme,
                style: style,
                topPadding: topPadding
            })
            
        })
    }, []);

    return (
        <Box sx={{...theme.style, flexGrow: 1, width: '100%', zIndex: 8, position: 'fixed', top: theme.topPadding, left: 0 }}>
            <AppBar position='static' sx={{...theme.style}}>
                <Toolbar>
                    <Box
                        sx={{ flexGrow: 1, my: 'auto'}}
                        component='a'
                        href='/'
                    >
                        <img src={logo} style={{width: '8vw', verticalAlign: 'middle'}} />
                    </Box>
                    
                    <IconButton
                        size="large"
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={handleOpen}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Menu
                        open={open}
                        onClose={handleClose}
                        anchorEl={anchorEl}
                    >
                        <MenuItem
                            component='a'
                            href='/commercial'
                        >
                            COMMERCIAL
                        </MenuItem>
                        <MenuItem
                            component='a'
                            href='/multifamily'
                        >
                            MULTIFAMILY
                        </MenuItem>
                        <MenuItem
                            component='a'
                            href='/government'
                        >
                            GOVERNMENT
                        </MenuItem>
                        <MenuItem
                            component='a'
                            href='/residential'
                        >
                            RESIDENTIAL
                        </MenuItem>
                        <MenuItem
                            component='a'
                            href='https://snow.transblue.com'
                        >
                            SNOW SERVICES
                        </MenuItem>
                        <MenuItem
                            component='a'
                            href='/https://green.transblue.com'
                        >
                            GREEN
                        </MenuItem>
                        <MenuItem
                            component='a'
                            href='/locations'
                        >
                            LOCATIONS
                        </MenuItem>
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
                            href='/featured'
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
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default MobileNavbar;