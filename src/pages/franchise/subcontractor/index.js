import React, {Fragment, useState, useEffect} from 'react';
import { useEasybase } from 'easybase-react';
import Fade from 'react-reveal/Fade';
import Navbar from '../../../components/navbar';
import FranchiseNav from '../../../components/franchiseNav';
import Form from './form';
import Footer from '../../../components/footer';
import './style.css';

function Subcontractor(props) {
    const [displayAlert, setDisplayAlert] = useState(false);

    const [easybaseData, seteasybaseData] = useState([]);
    const { db } = useEasybase();
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

    // function displayError() {
    //     setDisplayAlert(true)
    // }

    return(
        <Fragment>
            <Navbar theme='dark' />
            <FranchiseNav />
            <div className='bg'>
                <div className='subcontractor-wrapper'>
                    <h2>TRANSBLUE {props.match.params.urlCity.toUpperCase().replace('-', ' ')}</h2>
                    <h5>SUBCONTRACTOR APPLICATION</h5>
                    <hr />
                    {easybaseData.length > 0 && <Form location={easybaseData[0]} />}
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
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}

export default Subcontractor;