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
    }, [])

    return (
        displayCta && 
        <Box
            sx={{
                position: 'fixed',
                top: '25vh',
                zIndex: 401
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
                    zIndex: 10
                }}
                variant='contained'
            >
                contact us
            </Button>

            <Slide right when={displayForm} exit={true} collapse>
                <div className='form'>
                    <Form 
                        email={email} 
                        location={location} 
                        setDisplayForm={setDisplayForm} 
                    />
                </div>
            </Slide>
        </Box>
    )
}

export default CTA