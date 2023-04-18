import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useRef } from "react";

function Test() {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const [currentY, setCurrentY] = useState(0);
    
    function scrollDown() {
        ref2.current.scrollIntoView({ behavior: 'smooth'});
    }

    useEffect(() => {

    }, []);

    return (
        <>
            <Box sx={{width: '100%', height: '100vh', bgcolor: 'gray'}} ref={ref1}>
                <Button onClick={scrollDown}>scroll</Button>
            </Box>
            <Box sx={{width: '100%', height: '100vh', bgcolor: 'whitesmoke'}} ref={ref2}
                onScroll={(e) => console.log(e)}
            >

            </Box>
        </>
    )

}

export default Test;