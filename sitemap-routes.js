import React from 'react';
import {Route} from 'react-router-dom';

export default (
    <Route>
        <Route path='/' />
        <Route path='/residential' />
        <Route path='/commercial' />
        <Route path='/multifamily' />
        <Route path='/government' />
        <Route path='/locations' />
        <Route path='locations/:state/:urlcity' />
        <Route path='/featured' />
        <Route path='/privacy' />
        <Route path='/givesback' />
        <Route path='/contact' />
        <Route path='/finance' />
        <Route path='/careers' />
        <Route path='/subcontractor' />
    </Route>
)