import { Box } from "@mui/material";
import React from "react";

import dispatch from '../../images/dispatch.jpg';


function Recurring() {

    return(
        <>  
            <Box sx={{height: '500px', mt: 5, ml: 5, overflowY: 'auto'}}>
                <img src={dispatch} style={{width: '100%'}} />
            </Box>
        </>
    )
}

export default Recurring;