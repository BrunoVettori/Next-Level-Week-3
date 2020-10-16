import {BrowserRouter, Switch, Route} from 'react-router-dom'
import React from 'react'
import Landing from './pages/landing'
import OrphanageMap from './pages/orphanageMap'

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path = "/" component = {Landing} exact />
                <Route path = "/orphanageMap" component = {OrphanageMap} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes