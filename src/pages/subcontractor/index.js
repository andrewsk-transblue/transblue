import React, {Fragment, useState, useEffect, useRef} from 'react';
import { useEasybase } from 'easybase-react';
import Fade from 'react-reveal/Fade';
import Navbar from '../../components/navbar';
import FranchiseNav from '../../components/franchiseNav';
import Form from './form';
import Promise from './promise';
import Footer from '../../components/footer';
import Respect from './respect';
import vip from '../../images/subcontractor/vip.jpeg';
import './style.css';
import Growing from './growing';
import Tools from './tools';

function Subcontractor(props) {
    const applicationRef = useRef(null)
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

        applicationRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    return(
        <Fragment>
            <Navbar theme='dark' />
            <FranchiseNav />
            <div className='bg'>
                <h2>TRANSBLUE SUBCONTRACTORS</h2>
                <h5 className='title'>JOIN OUR GROWING NETWORK OF CONSTRUCTION PROFESSIONALS</h5>

                <div className='vip'>
                    <div className='row'>
                        <div className='col-lg-6 my-auto'>
                            <img className='vip' src={vip} alt='' />
                        </div>
                        <div className='col-lg-6 right-text my-auto'>
                            <p className='section-p'>At Transblue we believe that our service partners are the back-bone of our business, without our partners we don’t exist. We will treat our partners better than any other competitor in the business!</p>
                            <p className='section-p'>We live by our VIP PROMISE. It is a promise to every current and future service partner. VIP stands for “Very Important Partner” and our Transblue promise to you.</p>
                        </div>
                    </div>
                </div>
                <Respect />
                <Growing />
                <Tools />
                {/* <Promise /> */}
                {/* <h6>SELECT A LOCATION FOR SUBCONTRACTOR APPLICATION</h6> */}
                <div className='apply-wrapper'>
                    <h2>IT'S EASY TO APPLY!</h2>
                    <h5>Just select from our list of locations, fill out our form below, and submit!</h5>
                    <select className='browser-default custom-select' onChange={selectLocation}>
                        <option value=''>SELECT A LOCATION</option>
                        {easybaseData.length > 0 && easybaseData.map(location => {
                            return(
                                <option value={location.name}>{location.name}</option>
                            )
                        })}
                    </select>
                </div>
                <div ref={applicationRef}></div>
                {displayForm && 
                <div className='promise-bg'>
                    <div className='subcontractor-wrapper'>
                        <h2>{location.name.toUpperCase()}</h2>
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
                    </div>
                </div>}
            </div>
            <Footer />
        </Fragment>
    )
}

export default Subcontractor;