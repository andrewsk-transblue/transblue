import React, { lazy, Suspense, useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Landing from './newSrc/pages/landing/landing';
import './App.css';
import HQSubcontractor from './pages/hqsubcontractor';
import axios from 'axios';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material';

const Residential = lazy(() => import ('./newSrc/pages/residential/residential'));
const Commercial = lazy(() => import ('./newSrc/pages/commercial/newCommercial'));
const Multifamily = lazy(() => import ('./newSrc/pages/multifamily/index'));
const Government = lazy(() => import ('./newSrc/pages/government/government'));
const Locations = lazy(() => import('./pages/locations/index'));
const Franchise = lazy(() => import('./pages/franchise/franchise'));
const Subcontractor = lazy(() => import('./pages/subcontractor/index'));
const Featured = lazy(() => import('./pages/featured'));
const Featured2 = lazy(() => import('./newSrc/pages/featured/featured2'));
const Featured3 = lazy(() => import('./newSrc/pages/featured/featured3'));

const Privacy = lazy(() => import('./pages/privacy/index'));
const GivesBack = lazy(() => import('./pages/givesBack'));
const Contact = lazy(() => import('./pages/contact'));
const Finance = lazy(() => import('./pages/finance'));
const Careers = lazy(() => import('./newSrc/pages/careers/careers'));
const Success = lazy(() => import('./pages/subcontractor/success'));
const Recurring = lazy(() => import('./newSrc/pages/recurring/recurring'));
const Asphalt = lazy(() => import('./newSrc/pages/asphalt/asphalt'));
const CapEx = lazy(() => import('./newSrc/pages/capitalProjects/capitalProjects'));
const RoofSnow = lazy(() => import('./newSrc/pages/roofSnow/roofSnow'));

function App() {
  const [easybaseData, seteasybaseData] = useState([]);

  const theme = createTheme({
    typography: {
      h1: {
        fontSize: '7vw',
        fontFamily: 'Raleway',
        letterSpacing: '.03em',
        '@media (min-width: 480px)': {
          fontSize: '6.3vw'
        },
        '@media (min-width: 650px)': {
          fontSize: '4vw'
        }
      },
      h2: {
        fontSize: '4.5vw',
        fontFamily: 'Raleway',
        letterSpacing: '.03em',        
        '@media (min-width: 480px)': {
          fontSize: '4.5vw'
        },
        '@media (min-width: 650px)': {
          fontSize: '5vw'
        },
        '@media (min-width: 900px)': {
          fontSize: '2.5vw'
        }
      },
      body2: {
        fontFamily: "Roboto",
        letterSpacing: '.04em',
        fontSize: '3.5vw',
        color: '#6c757d',
        lineHeight: '1.6em',
        fontWeight: 300,
        '@media (min-width: 650px)': {
          fontSize: '2.5vw'
        },
        '@media (min-width: 900px)': {
          fontSize: '1.3vw'
        }
      },
      subtitle2: {
        fontSize: '.85em',
        mb: '10px',
        color: '#6c757d',
        letterSpacing: '.05em',
        fontFamily: 'Raleway'
      },
      subtitle1: {
        fontWeight: '500',
        fontFamily: "Raleway",
        fontSize: '1.15rem',
        color: '#3b3b3b',
        letterSpacing: '.05em',
      },
      h6: {
        fontFamily: 'Raleway',
        '@media (min-width: 1400px)': {
          fontSize: '1.8vw'
        }
      }
    },
    components: {
      MuiButton: {
        styleOverrides: {
          outlined: {
            borderRadius: '0px',
            fontFamily: 'Raleway',
            letterSpacing: '.085em',
            height: '2.5em',
            paddingRight: '30px',
            paddingLeft: '30px',
            '@media (min-width: 1920px)': {
              fontSize: '.6vw'
            }
          }
        }
      },
      MuiMenuPaper: {
        styleOverrides: {
          root: {
            backgroundColor: 'black !important'
          }
        }
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            fontFamily: 'Raleway'
          }
        }
      },
      MuiTextField: {
        styleOverrides: {
          valueLabel: ({ ownerState, theme }) => ({
              ...(ownerState.id.indexOf('dark') > -1 && {
              backgroundColor: 'white'
            })
          })
        }
      }
    }
});

const mounted = async() => {
    axios.get('https://my-tb-cors.herokuapp.com/https://locations-fns.azurewebsites.net/api/getalllocations')
        .then(res => {
          seteasybaseData(res.data)
        })
}

  useEffect(() => {
    console.log('testing')
       mounted();
  }, [])

  return (
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <Router>
            <Suspense fallback={<div>Loading...</div>}>
              <Route exact path='/' component={Landing} />
              <Route exact path='/landing' component={Landing} />
              <Route exact path='/residential' component={Residential} />
              <Route exact path='/residential-services' component={Residential} />
              <Route exact path='/commercial' component={Commercial} />
              <Route exact path='/commercial-services' component={Commercial} />
              <Route exact path='/multifamily' component={Multifamily} />
              <Route exact path='/multifamily-construction' component={Multifamily} />
              <Route exact path='/government' component={Government} />
              <Route exact path='/government-services' component={Government} />
              <Route exact path='/subcontractor' component={Subcontractor} />
              {easybaseData.length > 0 && <Route path='/locations/:state/:urlCity' render={(props) => {
                  const state = props.match.params.state;
                  const urlCity = props.match.params.urlCity;
                  return <Franchise locations={easybaseData} state={state} urlCity={urlCity} />
              }} />}
              {easybaseData.length > 0 && <Route exact path='/locations'>
                <Locations locations={easybaseData} />
              </Route>}
              <Route exact path='/featured' component={Featured} />
              <Route exact path='/featured2' component={Featured2} />
              <Route exact path='/featured3' component={Featured3} />

              <Route exact path='/featured-projects' component={Featured} />
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
              <Route exact path='/subcontractor-application-hq' component={HQSubcontractor} />
              <Route exact path='/success' component={Success} />
              <Route exact path='/recurring' component={Recurring} />
              <Route exact path='/asphalt' component={Asphalt} />
              <Route exact path='/capex' component={CapEx} />
              <Route exact path='/roofs' component={RoofSnow} />
            </Suspense>
          </Router>
        </HelmetProvider>
      </ThemeProvider>
  );
}

export default App;