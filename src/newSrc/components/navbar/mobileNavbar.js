import MenuIcon from '@mui/icons-material/Menu';
import React, { useEffect, useState } from 'react';
import logo from '../../images/logoCropped.png';
import './navbar.css';

import { IconButton, Toolbar } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const services = [
    {
        name: 'Asphalt',
        href: '/asphalt'
    },
    {
        name: 'Cap Ex',
        href: '/capex'
    },
    {
        name: 'Maintenance',
        href: '/recurring'
    },
    {
        name: 'Snow Removal',
        href: 'https://snow.transblue.com'
    },
    {
        name: 'Green',
        href: 'https://green.transblue.com'
    }
];

const clients = [
    {
        name: 'Commercial',
        href: '/commercial'
    },
    {
        name: 'Multifamily',
        href: '/multifamily'
    },
    {
        name: 'Government',
        href: '/government'
    }
];

const other = [
    {
        name: 'Find a Location',
        href: '/locations'
    },
    {
        name: 'Partners',
        href: '/subcontractor'
    },
    {
        name: 'Giving Back',
        href: '/givesback'
    },
    {
        name: 'Projects',
        href: '/featured'
    },
    {
        name: 'Contact',
        href: '/contact'
    },
    {
        name: 'Get Financed',
        href: '/finance'
    },
    {
        name: 'Blog',
        href: '/blog'
    }
]

function MobileNavbar() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    const handleClose = () => setAnchorEl(null);
    const handleOpen = () => setOpen(true);

    const [theme, setTheme] = useState({
        style: {
            bgcolor: 'transparent'
        },
        topPadding: '30px',
        rightPadding: 'rightPadding',
        elevation: 0
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
                    };

            // add elevation to app bar when user scrolls past 1/3 of the page, when the appbar becomes dark
            let elevation = window.scrollY > window.innerHeight / 3 ? 1 : 0

            setTheme({
                ...theme,
                style: style,
                topPadding: topPadding,
                elevation: elevation
            })
        });
    }, []);

    return (
        <Box sx={{...theme.style, flexGrow: 1, width: '100%', zIndex: 8, position: 'fixed', left: 0, top: theme.topPadding }}>
            <AppBar position='static' sx={{...theme.style}} elevation={theme.elevation}>
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

                    <Drawer
                        anchor='right'
                        open={open}
                        onClose={() => setOpen(false)}
                    >
                        <Box
                            sx={{ width: 250, color: 'white' }}
                            role="presentation"
                            // onClick={toggleDrawer(anchor, false)}
                            // onKeyDown={toggleDrawer(anchor, false)}
                        >
                            <List sx={{bgcolor: 'rgba(0,0,0,.75)'}}>
                                <ListItem disablePadding>
                                    <ListItemButton
                                        component='a'
                                        href='/'
                                    >
                                        <ListItemText disableTypography sx={{fontFamily: 'Raleway'}} primary='HOME' />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                            <Divider />
                            <List sx={{bgcolor: 'rgba(0,0,0,.75)'}}>
                                {services.map((service, index) => (
                                <ListItem key={service.name} disablePadding>
                                    <ListItemButton
                                        component='a'
                                        href={service.href}
                                    >
                                        <ListItemText disableTypography sx={{fontFamily: 'Raleway'}} primary={service.name.toUpperCase()} />
                                    </ListItemButton>
                                </ListItem>
                                ))}
                            </List>
                            <Divider />
                            <List sx={{bgcolor: 'rgba(0,0,0,.75)'}}>
                                {clients.map((client, index) => (
                                    <ListItem key={client.name} disablePadding>
                                        <ListItemButton
                                            component='a'
                                            href={client.href}
                                        >
                                            <ListItemText disableTypography sx={{fontFamily: 'Raleway'}} primary={client.name.toUpperCase()} />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                            <Divider />
                            <List sx={{bgcolor: 'rgba(0,0,0,.75)'}}>
                                {other.map((page, index) => (
                                <ListItem key={page.name} disablePadding>
                                    <ListItemButton
                                        component='a'
                                        href={page.href}
                                    >
                                        <ListItemText disableTypography sx={{fontFamily: 'Raleway'}} primary={page.name.toUpperCase()} />
                                    </ListItemButton>
                                </ListItem>
                                ))}
                            </List>
                        </Box>
                    </Drawer>

                    {/* <Menu
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
                    </Menu> */}
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default MobileNavbar;