import { Grid, Typography } from '@mui/material';
import React from 'react';
import './style.css';

function ThreeCols(props) {
    const { title, subtitle, card1, card2, card3 } = props;
    return(
        <>
            <Typography variant='h2' sx={{mb: 2, color: '#0b56a4', textAlign: 'center', fontWeight: 500}}>{title}</Typography>
            <Typography variant='body2' sx={{mb: 3, maxWidth: '800px', m: '0 auto', textAlign: 'center'}}>{subtitle}</Typography>
            <Grid container spacing={3} mt={6}>
                <Grid item xs={12} md={4}>
                    <img src={card1.img} alt='' style={{maxWidth: '100%', width: '100%'}} />
                    <Typography variant='subtitle1' sx={{my: 2}}>{card1.title}</Typography>
                    <Typography variant='body2'>{card1.body}</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <img src={card2.img} alt='' style={{maxWidth: '100%', width: '100%'}} />
                    <Typography variant='subtitle1' sx={{my: 2}}>{card2.title}</Typography>
                    <Typography variant='body2'>{card2.body}</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <img src={card3.img} alt='' style={{maxWidth: '100%', width: '100%'}} />
                    <Typography variant='subtitle1' sx={{my: 2}}>{card3.title}</Typography>
                    <Typography variant='body2'>{card3.body}</Typography>
                </Grid>
            </Grid>
        </>
    )
}

export default ThreeCols;