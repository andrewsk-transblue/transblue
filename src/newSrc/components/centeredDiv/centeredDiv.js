import { Box } from "@mui/system";
import React from "react";

function CenteredDiv({ children }) {

    return (
        <Box sx={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
            {children}
        </Box>
    )
}

export default CenteredDiv;