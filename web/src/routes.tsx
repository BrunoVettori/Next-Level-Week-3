import {BrowserRouter, Switch, Route} from 'react-router-dom'
import React from 'react'
import Landing from './pages/landing'
import OrphanageMap from './pages/OrphanageMap'
import Orphanage from './pages/Orphanage'
import CreateOrphanage from './pages/CreateOrphanage'

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path = "/" component = {Landing} exact />
                <Route path = "/app" component = {OrphanageMap} />
                <Route path = "/orphanages/create" component = {CreateOrphanage} />
                <Route path = "/orphanages/:id" component = {Orphanage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes