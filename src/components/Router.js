import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from './App'
import NotFound from './NotFound'

const Router = () => (
    // Idea: Have each path be delineated here
    // The main page needs to be taken care of
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)

export default Router