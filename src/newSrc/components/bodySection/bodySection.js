import React from "react";
import { Box } from "@mui/material";

function BodySection({ children }) {

    return (
        <Box sx={{width: '95%', maxWidth: '1200px', height: '100vh', m: '0 auto'}}>
            { children }
        </Box>
    )
}

export default BodySection;