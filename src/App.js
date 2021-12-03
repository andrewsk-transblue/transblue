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
const Privacy = lazy(() => import('./pages/privacy/index'));
const GivesBack = lazy(() => import('./pages/givesBack'));
const Contact = lazy(() => import('./pages/contact'));
const Finance = lazy(() => import('./pages/finance'));
const Careers = lazy(() => import('./pages/careers'));

function App() {
  const [easybaseData, seteasybaseData] = useState([]);
  const { db } = useEasybase();
  
  const mounted = async() => {
    
    const ebData = await db("LOCATIONS").return().all();
    console.log(ebData)
    seteasybaseData(ebData);
  }

  useEffect(() => {
    console.log('testing')
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
            <Route exact path='/subcontractor' component={Subcontractor} />
            {easybaseData.length > 0 && <Route exact path='/locations/:state/:urlCity' render={(props) => {
                const state = props.match.params.state;
                const urlCity = props.match.params.urlCity;
                return <Franchise locations={easybaseData} state={state} urlCity={urlCity} />
            }} />}
            {easybaseData.length > 0 && <Route exact path='/locations'>
              <Locations locations={easybaseData} />
            </Route>}
            <Route exact path='/featured' component={Featured} />
            <Route exact path='/privacy' component={Privacy} />
            <Route exact path='/givesback/:charity' component={GivesBack} />
            <Route exact path='/givesback' component={GivesBack} />
            <Route exact path='/contact' component={Contact} />
            {easybaseData.length > 0 &&  <Route exact path='/finance' >
              <Finance locations={easybaseData} />
            </Route>}
            {easybaseData.length > 0 && <Route exact path='/careers'>
              <Careers locations={easybaseData} />
              </Route>}
          </Suspense>
        </Router>
      </HelmetProvider>
  );
}

export default App;