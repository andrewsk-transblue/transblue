import React, { lazy, Suspense, useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import NewLanding from './pages/landing/newLanding';
import './App.css';
import { useEasybase } from 'easybase-react';

const Residential = lazy(() => import ('./pages/residential/index'));
const Commercial = lazy(() => import ('./pages/commercial/index'));
const Multifamily = lazy(() => import ('./pages/multifamily/index'));
const Government = lazy(() => import ('./pages/government/index'));
const Locations = lazy(() => import('./pages/locations/index'));
const Franchise = lazy(() => import('./pages/franchise/franchise'));
const Subcontractor = lazy(() => import('./pages/subcontractor/index'));
const Featured = lazy(() => import('./pages/featured'));
const Form = lazy(() => import('./pages/addLocation/form'));
const Privacy = lazy(() => import('./pages/privacy/index'));
const GivesBack = lazy(() => import('./pages/givesBack'));
const Contact = lazy(() => import('./pages/contact'));
const Finance = lazy(() => import('./pages/finance'));

function App() {
  //console.log('rendering App.js')
  const [easybaseData, seteasybaseData] = useState([]);
  const { db } = useEasybase();
  const mounted = async() => {
    const ebData = await db("LOCATIONS").return().all();
    seteasybaseData(ebData);
}

  useEffect(() => {
       mounted();
  }, [])

  return (
      <HelmetProvider>
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Route exact path='/' component={NewLanding} />
            <Route exact path='/landing' component={NewLanding} />
            <Route exact path='/residential' component={Residential} />
            <Route exact path='/commercial' component={Commercial} />
            <Route exact path='/multifamily' component={Multifamily} />
            <Route exact path='/government' component={Government} />
            {/* <Route exact path='/featured' component={Projects} /> */}
            {/* <Route exact path='/franchise/:name' component={Franchise} /> */}
            <Route exact path='/locations/:state/:urlCity' component={Franchise} />
            <Route exact path='/subcontractor' component={Subcontractor} />
            <Route exact path='/locations/:zipcode' render={(props) => {
                const zipcode = props.match.params.zipcode;
                return <Locations locations={easybaseData} zipcode={zipcode} />
            }} />
            {easybaseData.length > 0 && <Route exact path='/locations'>
              <Locations locations={easybaseData} />
            </Route>}
            <Route exact path='/featured' component={Featured} />
            <Route exact path='/add' component={Form} />
            <Route exact path='/privacy' component={Privacy} />
            <Route exact path='/givesback/:charity' component={GivesBack} />
            <Route exact path='/givesback' component={GivesBack} />
            <Route exact path='/contact' component={Contact} />
            {easybaseData.length > 0 &&  <Route exact path='/finance' >
              <Finance locations={easybaseData} />
            </Route>}
          </Suspense>
        </Router>
      </HelmetProvider>
  );
}

export default App;