import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import Slide from 'react-reveal/Slide';
import Form from "./form";

function CTA({ email, location }) {
    const [displayCta, setDisplayCta] = useState(false);
    const [displayForm, setDisplayForm] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 400
                ? setDisplayCta(true)
                : setDisplayCta(false);
        })
    }, []);

    useEffect(() => {
        console.log(displayForm)
    }, [displayForm])

    return (
        displayCta && 
        <Box
            sx={{
                position: 'fixed',
                top: '25vh',
                zIndex: 401,
                width: '100%'
            }}
        >
            <Button
                onClick={() => setDisplayForm(true)}
                sx={{
                    height: '35px',
                    right: '-63px',
                    width: '160px',
                    top: '25vh',
                    position: 'fixed',
                    bgcolor: '#ed6a22',
                    color: 'white',
                    fontFamily: 'Raleway',
                    borderRadius: '0px 0px 4px 4px',
                    transform: 'rotate(90deg)',
                    letterSpacing: '.03em',
                }}
                variant='contained'
            >
                contact us
            </Button>

            <Slide right when={displayForm} exit={true} collapse>
                <Box
                    sx={{
                        width: '350px',
                        paddingBottom: '16px',
                        paddingTop: '16px',
                        backgroundColor: 'rgba(0,0,0,.65)',
                        backdropFilter: 'blur(5px)',
                        position: 'absolute',
                        right: '0px',
                        top: '-80px',
                        borderRadius: '4px 0px 0px 4px',
                        zIndex: 1000,
                        overflowY: 'auto',
                        maxWidth: '100vw',
                        overflowY: 'auto',
                        maxHeight: '80vh'
                    }}
                >
                    <Form 
                        email={email} 
                        location={location} 
                        setDisplayForm={setDisplayForm} 
                    />
                </Box>
            </Slide>
        </Box>
    )
}

export default CTA