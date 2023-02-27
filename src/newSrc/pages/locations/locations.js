import axios from "axios";
import React, { useEffect, useState } from "react";

function Locations() {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        axios.get(`https://my-tb-cors.herokuapp.com/https://`)
            .then(res => {
                setLocations(res.data);
            })
    }, [])

    return(
        <>
        
        </>
    )
}

export default Locations;