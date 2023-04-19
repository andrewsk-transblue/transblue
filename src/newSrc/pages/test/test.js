import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import handleViewport from "react-in-viewport";
import { Flip } from "react-reveal";
import {Parallax, ParallaxProvider} from 'react-scroll-parallax';

const Block = (props) => {
    const { forwardedRef } = props;

    return <div ref={forwardedRef}></div>
};

const ViewportBlock = handleViewport(Block);

function Test() {
    const [isAtBottom, setIsAtBottom] = useState(false);
    const [isScrollingEnabled, setIsScrollingEnabled] = useState(false);
    const [tab, setTab] = useState(0);
    const ref = useRef(null);

    const [animation, setAnimation] = useState(false);

    return (
        <ParallaxProvider>
            {/* <Box sx={{position: 'fixed', top: 0, left: 0, zIndex: 5, display: 'flex', p: 3}}>
                <Typography variant='h6' sx={{mr: 2, color: tab === 0 ? 'red' : 'white'}}>First</Typography>
                <Typography variant='h6' sx={{mr: 2, color: tab === 1 ? 'red' : 'white'}}>Second</Typography>
                <Typography variant='h6' sx={{mr: 2, color: tab === 2 ? 'red' : 'white'}}>Third</Typography>
            </Box> */}
            <Box sx={{width: '100%', height: '101vh', bgcolor: 'gray', position: 'relative'}}>
                <Box sx={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)'}}>
                    <Grid container spacing={10}>
                        <Grid item xs={6}>
                            <Parallax speed={-5} onEnter={() => setTab(0)}>
                                <Button variant='contained'>Button 1</Button>
                            </Parallax>
                        </Grid>
                        <Grid item xs={6}>
                            <Parallax speed={10}>
                                <Button variant='contained'>Button 2</Button>
                            </Parallax>
                        </Grid>
                    </Grid>
                </Box>
            </Box>

                <Box sx={{width: '100%', height: '200vh', bgcolor: 'whitesmoke', position: 'relative'}}>
                    <Box sx={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '90%'}}>
                        <Grid container spacing={10}>
                            <Grid item xs={6} my='auto'>
                                <Parallax 
                                    onEnter={() => setTab(1)}
                                    speed={-5}
                                >
                                    <Button variant='contained'>Button 1</Button>
                                </Parallax>
                            </Grid>
                            <Grid item xs={6} my='auto'>
                                <Parallax 
                                    speed={10}
                                >
                                    <Box sx={{height: '50vh', overflowY: 'scroll'}}>
                                        <Typography variant='body2'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris pharetra et ultrices neque ornare aenean euismod elementum nisi. Integer feugiat scelerisque varius morbi enim. Vel pretium lectus quam id leo in vitae turpis massa. Lacus vel facilisis volutpat est velit egestas dui id. Mauris a diam maecenas sed enim ut. A iaculis at erat pellentesque. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Amet porttitor eget dolor morbi non. Lectus nulla at volutpat diam ut venenatis tellus in metus. Lectus sit amet est placerat in egestas erat imperdiet sed. Aliquet lectus proin nibh nisl condimentum id. Non odio euismod lacinia at quis risus sed vulputate odio. Lectus urna duis convallis convallis tellus id interdum velit laoreet. Ac feugiat sed lectus vestibulum mattis. Odio ut enim blandit volutpat maecenas.
                                        </Typography>
                                        <Typography variant='body2'>
                                            Tortor at risus viverra adipiscing at in tellus integer feugiat. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Scelerisque viverra mauris in aliquam sem fringilla ut. Nulla aliquet enim tortor at auctor. Vel pretium lectus quam id leo in vitae. Dui sapien eget mi proin sed libero. Commodo nulla facilisi nullam vehicula ipsum a. Diam sollicitudin tempor id eu nisl nunc mi ipsum. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Sed enim ut sem viverra aliquet eget sit.
                                        </Typography>
                                        <Typography variant='body2'>
                                            Ac placerat vestibulum lectus mauris. Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus. Tortor consequat id porta nibh venenatis. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Adipiscing diam donec adipiscing tristique risus nec feugiat in. Diam in arcu cursus euismod. Tristique senectus et netus et. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Placerat in egestas erat imperdiet sed euismod nisi. Leo urna molestie at elementum eu facilisis sed odio. Neque ornare aenean euismod elementum nisi quis eleifend. Rhoncus aenean vel elit scelerisque mauris.
                                        </Typography>
                                        <Typography variant='body2'>
                                            Condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus. Urna condimentum mattis pellentesque id nibh tortor id. Mi quis hendrerit dolor magna eget. Justo donec enim diam vulputate ut pharetra sit. Libero nunc consequat interdum varius sit amet. Dui id ornare arcu odio ut sem nulla pharetra. Et molestie ac feugiat sed lectus vestibulum mattis. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Porttitor rhoncus dolor purus non enim praesent elementum facilisis leo. Mattis aliquam faucibus purus in massa.
                                        </Typography>
                                        <Typography variant='body2'>
                                            Faucibus turpis in eu mi bibendum neque. Integer quis auctor elit sed vulputate mi sit. Egestas maecenas pharetra convallis posuere morbi leo urna molestie at. Pulvinar mattis nunc sed blandit libero volutpat sed. Eget nunc scelerisque viverra mauris in aliquam. Tempor orci dapibus ultrices in iaculis nunc sed augue lacus. Ac tincidunt vitae semper quis lectus nulla at volutpat. Ut morbi tincidunt augue interdum velit euismod in pellentesque massa. Risus in hendrerit gravida rutrum quisque non tellus. Et malesuada fames ac turpis egestas sed tempus.
                                        </Typography>
                                    </Box>
                                </Parallax>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            {/* </Parallax> */}
            <Box sx={{width: '100%', height: '100vh', bgcolor: 'gray', position: 'relative'}}>
                <Box sx={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '100%'}}>
                    <Grid container spacing={10}>
                        <Grid item xs={6} my='auto'>

                        </Grid>
                        <Grid item xs={6} my='auto'>

                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Box sx={{width: '100%', height: '100vh', bgcolor: 'gray', position: 'relative'}}>
                <Box sx={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '100%'}}>
                    <Flip
                        cascade
                        when={animation}
                        top
                    >
                        <Typography variant='h1' sx={{color: 'white'}}></Typography>
                    </Flip>

                </Box>
            </Box>
            <ViewportBlock onEnterViewport={() => setAnimation(true)} />
        </ParallaxProvider>
    )
}

export default Test;