import React, {Fragment, useState, useEffect} from 'react';
import { useEasybase } from 'easybase-react';
import Fade from 'react-reveal/Fade';
import Navbar from '../../components/navbar';
import FranchiseNav from '../../components/franchiseNav';
import Form from './form';
import Footer from '../../components/footer';
import './style.css';

function Subcontractor(props) {
    const [displayAlert, setDisplayAlert] = useState(false);
    const [displayForm, setDisplayForm] = useState(false);
    const [location, setLocation] = useState({})

    const [easybaseData, seteasybaseData] = useState([]);
    const { db } = useEasybase();
    const mounted = async() => {
        //const ebData = await db("LOCATIONS").where({urlcity: props.match.params.urlCity}).return().all();
        //console.log(ebData)

        const ebData = await db('LOCATIONS').return().all()
        seteasybaseData(ebData);
    }

    useEffect(() => {
        console.log('rendering')
        mounted();
    }, [])

    function selectLocation(e) {
        console.log(e.target.value)
        console.log(easybaseData)
        for(let i=0; i<easybaseData.length; i++) {
            if(easybaseData[i].name === e.target.value) {
                setLocation(easybaseData[i])
                setDisplayForm(true)
            }
        }
    }

    return(
        <Fragment>
            <Navbar theme='dark' />
            <div className='bg'>
                <select className='browser-default custom-select' onChange={selectLocation}>
                    {easybaseData.length > 0 && easybaseData.map(location => {
                        return(
                            <option value={location.name}>{location.name}</option>
                        )
                    })}
                </select>
                {displayForm && <div className='subcontractor-wrapper'>
                    <h2>TRANSBLUE {location.name.toUpperCase()}</h2>
                    <h5>SUBCONTRACTOR APPLICATION</h5>
                    <hr />
                    {easybaseData.length > 0 && <Form location={location} />}
                    {/* {displayAlert && <div className='alert-wrapper'>
                        <Fade>
                            <div className='message-alert'>
                                <div className='close'>
                                    <button onClick={() => setDisplayAlert(false)}>X</button>
                                </div>
                                PLEASE COMPLETE FORM BEFORE SUBMITTING
                            </div>
                        </Fade>
                    </div>} */}
                </div>}
            </div>
            <Footer />
        </Fragment>
    )
}

export default Subcontractor;