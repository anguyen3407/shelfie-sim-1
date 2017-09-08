import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home'
// import Users from './components/Users/Users'


export default (
    <Switch>
        <Route exact path='/' component={Home} />
        {/* <Route path='/users' component={Users} /> */}
    </Switch>
)