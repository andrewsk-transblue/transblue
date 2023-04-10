import React, {Fragment, useEffect, lazy } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/header';
import Footer from '../../components/footer/index';
import './style.css';
import ReactGA from 'react-ga';
import NavWrapper from '../../newSrc/components/navbar/navWrapper';

const ListView = lazy(() => import('./listView'))

function Locations(props) {
       
        return(
            <Fragment>
                <Helmet>
                    <title>Transblue Locations</title>
                    <meta name="description" content="In need of landscaping, patio, decking, pools, or pavers? You can find a Transblue location near you!" />
                </Helmet>
                <NavWrapper page='locations' />
                <Header title='FIND A LOCATION' subtitle='' name='locations' />
                <ListView locations={props.locations} zipcode={props.zipcode}  />
                <Footer locationPage={true} />
            </Fragment>
        )
}

export default Locations;