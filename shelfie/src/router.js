import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home'
import BinList from './components/BinList/BinList'


export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/shelf/:id' component={BinList} />
    </Switch>
)