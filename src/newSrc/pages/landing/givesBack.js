import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import dawsonplace from '../../images/dawsonplace2.png';
import deeshope from '../../images/deeshope2.jpg';
import hope from '../../images/hope2.jpg';

const Comp = (props) => {
    const { title, subtitle, body, image, href } = props;

    return (
        <Grid item xs={12} sm={6} lg={4} pr={1}>
            <img src={image} alt={title} style={{width: '100%'}} />
            <Typography variant='subtitle2' sx={{my: '10px'}}>{title}</Typography>
            <Typography variant='subtitle1' sx={{mb: '.5rem', lineHeight: '1.2'}}>{subtitle}</Typography>
            <Typography variant='body2'>{body}</Typography>

            <Button
                variant='outlined'
                sx={{color: '#0b56a4', border: '2px solid #0b56a4', mt: 2, fontSize: '12px'}}
                component='a'
                href={href}
            >
                learn more
            </Button>
        </Grid>
    )
}

function GivesBack() {

    return (
        <Box sx={{width: '95vw', maxWidth: '2000px', py: '10vh', m: '0 auto'}}>
            <Typography variant='h2' sx={{color: '#0b56a4', fontWeight: 500, textAlign: 'center', mb: 2}}>TRANSBLUE GIVES BACK</Typography>
            <Typography variant='body2' sx={{textAlign: 'center', width: '95vw', maxWidth: '800px', m: '0 auto', mb: 5}}>Not only do we build beautiful outdoor living spaces, we are dedicated to eliminating social problems and increasing wellness in people, society, and the planet. A portion of profit from every project is donated to helping those in need around the globe. We are here for each other.</Typography>
            <Grid container spacing={2} >

                <Comp 
                    title='DAWSON PLACE'
                    subtitle='HEALING FOR CHILDREN'
                    body="Dawson Place child advocacy center transforms hurt to hope for traumatized children. Transblue is consistently one of Dawson Place's primary community supporters."
                    image={dawsonplace}
                    href='/givesback/dawson'
                />

                <Comp
                    title="DEE'S HOPE FOR GIRLS FOUNDATION"
                    subtitle='FIGHTING FOR UNDERPRIVELEGED WOMEN'
                    body="Dee's Hope helps Ugandan women find a better way. By providing security, education, food, and shelter, Dee's Hope helps young girls escape to a life of freedom"
                    image={deeshope}
                    href='/givesback/dees'
                />

                <Comp
                    title='HOPE UNLIMITED'
                    subtitle='FIRE AND POLICE CHAPLAINCY'
                    body="Through Northwest Incident Support, Hope Unlimited partners with first responders during crisis situations, providing resources for families during loss or difficult circumstances"
                    image={hope}
                    href='/givesback/hope'
                />
            </Grid>
        </Box>
    )
}

export default GivesBack;