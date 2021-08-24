import React, {useEffect, useState} from 'react';
import { useEasybase } from 'easybase-react';
import './style.css';

function Agreement(props) {
    const [easybaseData, seteasybaseData] = useState([]);
    const { db, e } = useEasybase();
    const mounted = async() => {
        const ebData = await db("LOCATIONS").where({urlcity: props.location.urlCity}).return().all();
        console.log(ebData)
        seteasybaseData(ebData);
    }

    useEffect(() => {
        
        mounted();
    }, [])

    return(
        easybaseData.length > 0 &&
            <p>{easybaseData[0].subagreement}</p>
    )
}

export default Agreement;