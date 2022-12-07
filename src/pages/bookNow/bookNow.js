import axios from 'axios';
import React, { useEffect, useState } from 'react';

function BookNow() {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        axios.get(``).then(res => {
            setLocations(res.data)
        })
    }, [])

    return(
        <>
        </>
    )

}

export default BookNow;