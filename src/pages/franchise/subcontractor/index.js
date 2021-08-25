import React, {Fragment, useState, useEffect} from 'react';
import { useEasybase } from 'easybase-react';
import Navbar from '../../../components/navbar';
import Form from './form';
import './style.css';

function Subcontractor(props) {

    const [easybaseData, seteasybaseData] = useState([]);
    const { db, e } = useEasybase();
    const mounted = async() => {
        const ebData = await db("LOCATIONS").where({urlcity: props.match.params.urlCity}).return().all();
        console.log(ebData)
        seteasybaseData(ebData);
    }

    useEffect(() => {
        console.log('rendering')
        mounted();
    }, [])

    //console.log(props)

    return(
        <Fragment>
            <Navbar theme='dark' />
            <div className='subcontractor-wrapper'>
                <h2>TRANSBLUE {props.match.params.urlCity.toUpperCase()}</h2>
                <h5>SUBCONTRACTOR APPLICATION</h5>
                <hr />
                {easybaseData.length > 0 && <Form location={easybaseData[0]} />}
            </div>
        </Fragment>
    )
}

export default Subcontractor;